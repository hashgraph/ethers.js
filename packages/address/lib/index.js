"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAccount = exports.getAccountFromAddress = exports.getAddressFromAccount = exports.getCreate2Address = exports.getContractAddress = exports.getIcapAddress = exports.isAddress = exports.getAddress = void 0;
var bytes_1 = require("@ethersproject/bytes");
var bignumber_1 = require("@ethersproject/bignumber");
var keccak256_1 = require("@ethersproject/keccak256");
var rlp_1 = require("@ethersproject/rlp");
var logger_1 = require("@ethersproject/logger");
var _version_1 = require("./_version");
var logger = new logger_1.Logger(_version_1.version);
// Shims for environments that are missing some required constants and functions
var MAX_SAFE_INTEGER = 0x1fffffffffffff;
function log10(x) {
    if (Math.log10) {
        return Math.log10(x);
    }
    return Math.log(x) / Math.LN10;
}
// See: https://en.wikipedia.org/wiki/International_Bank_Account_Number
// Create lookup table
var ibanLookup = {};
for (var i = 0; i < 10; i++) {
    ibanLookup[String(i)] = String(i);
}
for (var i = 0; i < 26; i++) {
    ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
}
// How many decimal digits can we process? (for 64-bit float, this is 15)
var safeDigits = Math.floor(log10(MAX_SAFE_INTEGER));
function ibanChecksum(address) {
    address = address.toUpperCase();
    address = address.substring(4) + address.substring(0, 2) + "00";
    var expanded = address.split("").map(function (c) {
        return ibanLookup[c];
    }).join("");
    // Javascript can handle integers safely up to 15 (decimal) digits
    while (expanded.length >= safeDigits) {
        var block = expanded.substring(0, safeDigits);
        expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
    }
    var checksum = String(98 - (parseInt(expanded, 10) % 97));
    while (checksum.length < 2) {
        checksum = "0" + checksum;
    }
    return checksum;
}
function getAddress(address) {
    if (typeof (address) !== "string" || !address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        logger.throwArgumentError("invalid address", "address", address);
    }
    // Missing the 0x prefix
    if (address.substring(0, 2) !== "0x") {
        address = "0x" + address;
    }
    if (!(0, bytes_1.isHexString)(address, 20)) {
        logger.throwArgumentError("invalid address", "address", address);
    }
    return address.toLowerCase();
}
exports.getAddress = getAddress;
function isAddress(address) {
    try {
        getAddress(address);
        return true;
    }
    catch (error) {
    }
    return false;
}
exports.isAddress = isAddress;
function getIcapAddress(address) {
    var base36 = (0, bignumber_1._base16To36)(getAddress(address).substring(2)).toUpperCase();
    while (base36.length < 30) {
        base36 = "0" + base36;
    }
    return "XE" + ibanChecksum("XE00" + base36) + base36;
}
exports.getIcapAddress = getIcapAddress;
// http://ethereum.stackexchange.com/questions/760/how-is-the-address-of-an-ethereum-contract-computed
function getContractAddress(transaction) {
    var from = null;
    try {
        from = getAddress(transaction.from);
    }
    catch (error) {
        logger.throwArgumentError("missing from address", "transaction", transaction);
    }
    var nonce = (0, bytes_1.stripZeros)((0, bytes_1.arrayify)(bignumber_1.BigNumber.from(transaction.nonce).toHexString()));
    return getAddress((0, bytes_1.hexDataSlice)((0, keccak256_1.keccak256)((0, rlp_1.encode)([from, nonce])), 12));
}
exports.getContractAddress = getContractAddress;
function getCreate2Address(from, salt, initCodeHash) {
    if ((0, bytes_1.hexDataLength)(salt) !== 32) {
        logger.throwArgumentError("salt must be 32 bytes", "salt", salt);
    }
    if ((0, bytes_1.hexDataLength)(initCodeHash) !== 32) {
        logger.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", initCodeHash);
    }
    return getAddress((0, bytes_1.hexDataSlice)((0, keccak256_1.keccak256)((0, bytes_1.concat)(["0xff", getAddress(from), salt, initCodeHash])), 12));
}
exports.getCreate2Address = getCreate2Address;
function getAddressFromAccount(accountLike) {
    var parsedAccount = typeof (accountLike) === "string" ? parseAccount(accountLike) : accountLike;
    var buffer = new Uint8Array(20);
    var view = new DataView(buffer.buffer, 0, 20);
    view.setInt32(0, Number(parsedAccount.shard));
    view.setBigInt64(4, parsedAccount.realm);
    view.setBigInt64(12, parsedAccount.num);
    return (0, bytes_1.hexlify)(buffer);
}
exports.getAddressFromAccount = getAddressFromAccount;
function getAccountFromAddress(address) {
    var buffer = (0, bytes_1.arrayify)(getAddress(address));
    var view = new DataView(buffer.buffer, 0, 20);
    return {
        shard: BigInt(view.getInt32(0)),
        realm: BigInt(view.getBigInt64(4)),
        num: BigInt(view.getBigInt64(12))
    };
}
exports.getAccountFromAddress = getAccountFromAddress;
function parseAccount(account) {
    var result = null;
    if (typeof (account) !== "string") {
        logger.throwArgumentError("invalid account", "account", account);
    }
    if (account.match(/^[0-9]+.[0-9]+.[0-9]+$/)) {
        var parsedAccount = account.split(',');
        result = {
            shard: BigInt(parsedAccount[0]),
            realm: BigInt(parsedAccount[1]),
            num: BigInt(parsedAccount[2])
        };
    }
    else {
        logger.throwArgumentError("invalid account", "account", account);
    }
    return result;
}
exports.parseAccount = parseAccount;
//# sourceMappingURL=index.js.map