Web Utilities
=============

This sub-module is part of the [hethers project](https://github.com/hashgraph/hethers.js). It is a fork of the original [ethers project](https://github.com/ethers-io/ethers.js) sub-module.

It contains functions to abstract safely and responsibly connecting to the web,
including exponential back-off.

For more information, see the [documentation](https://docs.ethers.io/v5/api/utils/web/). TODO Docs

Importing
---------

Most users will prefer to use the [umbrella package](https://www.npmjs.com/package/@hashgraph/hethers),
but for those with more specific needs, individual components can be imported.

```javascript
const {

    fetchJson,

    poll,

    // Types
    ConnectionInfo,
    FetchJsonResponse,

    PollOptions,
    OncePollable,
    OnceBlockable

} = require("@hethers/web");
```


License
-------

MIT License
