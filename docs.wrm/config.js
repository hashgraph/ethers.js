"use strict";

const { resolve } = require("path");
const fs = require("fs");

const ts = require("typescript");

function getDefinitions(source) {
    const sourceFile = ts.createSourceFile("filename.ts", source);

    const defs = [ ];

    function add(type, name, pos) {
        const lineNo = sourceFile.getLineAndCharacterOfPosition(pos).line + 1;
        name = type + "." + name
        defs.push({ type, name, lineNo });
    }

    let lastClass = null, lastEnum = null;
    function visit(node, depth) {
        if (ts.isConstructorDeclaration(node)) {
            add("constructor", lastClass, node.body.pos);
        } else if (ts.isFunctionDeclaration(node)) {
            add("function", node.name.text, node.name.end);
        } else if (ts.isConstructorDeclaration(node)) {
            add("constructor", lastClass, node.pos);
        } else if (ts.isClassDeclaration(node)) {
            lastClass = node.name.escapedText;
            add("class", lastClass, node.name.end);
        } else if (ts.isMethodDeclaration(node)) {
            if (lastClass == null) { throw new Error("missing class"); }
            if (ts.hasStaticModifier(node)) {
                add("staticmethod", (lastClass + "." + node.name.text), node.name.end);
            } else {
                add("method", (lastClass + "." + node.name.text), node.name.end);
            }
        } else if (ts.isEnumDeclaration(node)) {
            lastEnum = node.name.escapedText;
            add("enum", lastEnum, node.name.end);
        } else if (ts.isEnumMember(node)) {
            add("enum", (lastEnum + "." + node.name.escapedText), node.name.end);
        } else if (ts.isVariableDeclaration(node)) {
            if (depth === 3) {
                add("var", node.name.escapedText, node.name.end);
            }
        }
        ts.forEachChild(node, (node) => { return visit(node, depth + 1); });
    }

    visit(sourceFile, 0);

    return defs;
}

const getSourceUrl = (function(path, include, exclude) {
    console.log("Scanning TypeScript Sources...");
    const Link = "https://github.com/ethers-io/ethers.js/blob/ethers-v5-beta/packages$FILENAME#L$LINE";
    const Root = resolve(__dirname, path);

    const readdir = function(path) {
        if (path.match(exclude)) { return [ ]; }

        const stat = fs.statSync(path);
        if (stat.isDirectory()) {
            return fs.readdirSync(path).reduce((result, filename) => {
                readdir(resolve(path, filename)).forEach((file) => {
                    result.push(file);
                });
                return result;
            }, [ ]);
        }

        if (path.match(include)) {
            const source = fs.readFileSync(path).toString();
            return [ { filename: path.substring(Root.length), defs: getDefinitions(source) } ]
        }

        return [ ];
    }

    const defs = readdir(Root);

    return function getSourceUrl(key) {
        const comps = key.split(":");
        if (comps.length !== 2) { throw new Error("unsupported key"); }

        const pathCheck = new RegExp("(^|[^a-zA-Z0-9_])" + comps[0].split("/").join("/(.*/)*") + "($|[^a-zA-Z0-9_])");

        let match = comps[1];
        if (match.indexOf("(" /* fix: )*/)) {
            match = new RegExp("(^|\\.)" + match.split("(" /* fix: ) */)[0] + "$");
        } else if (match[0] === "=") {
            match = new RegExp("^" + match.substring(1) + "$");
        } else {
            match = new RegExp("(^|\\.)" + match + "$");
        }

        const result = [ ];
        defs.forEach((def) => {
            if (!def.filename.match(pathCheck)) { return; }
            def.defs.forEach((d) => {
                if (!d.name.match(match)) { return; }
                result.push({ filename: def.filename, lineNo: d.lineNo });
            });
        });

        if (result.length > 1) {
            throw new Error(`Amibguous TypeScript link: ${ key } in [ ${ result.map((r) => JSON.stringify(r.filename + ":" + r.lineNo)).join(", ") }]`);
        } else if (result.length === 0) {
            throw new Error(`No matching TypeScript link: ${ key }`);
        }

        return Link
            .replace("$LINE", String(result[0].lineNo))
            .replace("$FILENAME", result[0].filename);
    }
})("../packages/", new RegExp("packages/.*/src.ts/.*\.ts$"), new RegExp("/node_modules/|src.ts/.*browser.*"));

module.exports = {
  title: "ethers",
  subtitle: "v5.0-beta",
  logo: "logo.svg",

  link: "https://docs-beta.ethers.io",

  markdown: {
      "banner": "-----\n\nDocumentation: [html](https://docs-beta.ethers.io/)\n\n-----\n\n"
  },

  getSourceUrl: getSourceUrl,

  externalLinks: {
      "link-alchemy": "https:/\/alchemyapi.io",
      "link-cloudflare": "https:/\/developers.cloudflare.com/distributed-web/ethereum-gateway/",
      "link-ethereum": "https:/\/ethereumorg",
      "link-etherscan": "https:/\/etherscan.io",
      "link-etherscan-api": "https:/\/etherscan.io/apis",
      "link-flatworm": "https:/\/github.com/ricmoo/flatworm",
      "link-geth": "https:/\/geth.ethereum.org",
      "link-infura": "https:/\/infura.io",
      "link-ledger": "https:/\/www.ledger.com",
      "link-metamask": "https:/\/metamask.io/",
      "link-parity": "https:/\/www.parity.io",
      "link-rtd": "https:/\/github.com/readthedocs/sphinx_rtd_theme",
      "link-sphinx": "https:/\/www.sphinx-doc.org/",

      "link-legacy-docs3": "https:/\/docs.ethers.io/ethers.js/v3.0/html/",
      "link-legacy-docs4": "https:/\/docs.ethers.io/ethers.js",

      "link-web3": "https:/\/github.com/ethereum/web3.js",
      "link-web3-http": "https:/\/github.com/ethereum/web3.js/tree/1.x/packages/web3-providers-http",
      "link-web3-ipc": "https:/\/github.com/ethereum/web3.js/tree/1.x/packages/web3-providers-ipc",
      "link-web3-ws": "https:/\/github.com/ethereum/web3.js/tree/1.x/packages/web3-providers-ws",

      "link-solc-output": "https:/\/solidity.readthedocs.io/en/v0.6.0/using-the-compiler.html#output-description",

      "link-icap": "https:/\/github.com/ethereum/wiki/wiki/Inter-exchange-Client-Address-Protocol-%28ICAP%29",
      "link-jsonrpc": "https:/\/github.com/ethereum/wiki/wiki/JSON-RPC",
      "link-mit": "https:/\/en.m.wikipedia.org/wiki/MIT_License",
      "link-namehash": "https:/\/docs.ens.domains/contract-api-reference/name-processing#hashing-names",
      "link-rlp": { name: "Recursive Length Prefix", url: "https:/\/github.com/ethereum/wiki/wiki/RLP" },

      "link-ethersio": "https:/\/ethers.io/",
      "link-ethers-docs": "https:/\/docs.ethers.io/",
      "link-ethers-js": "https:/\/cdn.ethers.io/lib/ethers-5.0.esm.min.js",
      "link-ethers-npm": "https:/\/www.npmjs.com/search?q=%40ethersproject%2F",
      "link-ethers-asm-grammar": "https:/\/github.com/ethers-io/ethers.js/blob/ethers-v5-beta/packages/asm/grammar.jison",

      "link-eip-155": { name: "EIP-155", url: "https:/\/eips.ethereum.org/EIPS/eip-155" },
      "link-eip-609": "https:/\/eips.ethereum.org/EIPS/eip-609",
      "link-eip-1014": "https:/\/eips.ethereum.org/EIPS/eip-1014",
      "link-eip-2098": "https:/\/eips.ethereum.org/EIPS/eip-2098",
      "link-bip-39": "https://en.bitcoin.it/wiki/BIP_0039",
      "link-bip-32": "https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",

      "link-npm-elliptic": { name: "elliptic", url: "https:/\/www.npmjs.com/package/elliptic" },
      "link-npm-bnjs": { name: "BN.js", url: "https:/\/www.npmjs.com/package/bn.js" },
      "link-npm-query-bignumber": "https:/\/www.npmjs.com/search?q=bignumber",

      "link-js-array": "https:/\/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      "link-js-bigint": "https:/\/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
      "link-js-maxsafe": "https:/\/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER#Description",
      "link-js-typedarray": "https:/\/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray",

      "link-ricmoo-humanreadableabi": "https:/\/blog.ricmoo.com/human-readable-contract-abis-in-ethers-js-141902f4d917",

      "link-wiki-basicauth": { name: "Basic Authentication", url: "https:/\/en.wikipedia.org/wiki/Basic_access_authentication" },
      "link-wiki-backoff": { name: "Exponential Backoff", url: "https:/\/en.wikipedia.org/wiki/Exponential_backoff" },
      "link-wiki-bloomfilter": "https:/\/en.wikipedia.org/wiki/Bloom_filter",
      "link-wiki-cryptographichash": "https:/\/en.wikipedia.org/wiki/Cryptographic_hash_function",
      "link-wiki-homoglyph": "https:/\/en.wikipedia.org/wiki/IDN_homograph_attack",
      "link-wiki-hmac": "https:/\/en.wikipedia.org/wiki/HMAC",
      "link-wiki-iban": "https:/\/en.wikipedia.org/wiki/International_Bank_Account_Number",
      "link-wiki-ieee754": "https:/\/en.wikipedia.org/wiki/Double-precision_floating-point_format",
      "link-wiki-ripemd": "https:/\/en.m.wikipedia.org/wiki/RIPEMD",
      "link-wiki-sha2": "https:/\/en.wikipedia.org/wiki/SHA-2",
      "link-wiki-twoscomplement": "https:/\/en.wikipedia.org/wiki/Two%27s_complement",
      "link-wiki-unicode-equivalence": "https:/\/en.wikipedia.org/wiki/Unicode_equivalence",
      "link-wiki-utf8-overlong": "https:/\/en.wikipedia.org/wiki/UTF-8#Overlong_encodings",
      "link-wiki-utf8-replacement": "https:/\/en.wikipedia.org/wiki/Specials_%28Unicode_block%29#Replacement_character",
      "link-wiki-scrypt": "https:/\/en.wikipedia.org/wiki/Scrypt",
      "link-wiki-sha3": "https:/\/en.wikipedia.org/wiki/SHA-3",
      "link-wiki-overflow": { name: "overflow", url: "https:/\/en.wikipedia.org/wiki/Integer_overflow" },
      "link-wiki-underflow": { name: "arithmetic underflow", url: "https:/\/en.wikipedia.org/wiki/Arithmetic_underflow" },
  }
};