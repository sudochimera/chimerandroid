"use strict";
var global = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.chimeraproject.io/api/',
    trustedDaemonsAddresses: [
        'https://explorer.chimeraproject.io:8197/'
    ],
    phpRelay: typeof window !== 'undefined' ? true : false,
    mainnetExplorerUrl: "https://explorer.chimeraproject.io/",
    mainnetExplorerUrlHash: "https://explorer.chimeraproject.io/?hash={ID}#blockchain_transaction",
    mainnetExplorerUrlBlock: "https://explorer.chimeraproject.io/?hash={ID}#blockchain_block",
    testnetExplorerUrl: "http://testnet.msrchain.net/",
    testnetExplorerUrlHash: "http://testnet.msrchain.net/tx/{ID}",
    testnetExplorerUrlBlock: "http://testnet.msrchain.net/block/{ID}",
    testnet: false,
    coinUnitPlaces: 2,
    txMinConfirms: 10,
    txCoinbaseMinConfirms: 20,
    addressPrefix: 4141013,
    integratedAddressPrefix: 4141013,
    addressPrefixTestnet: 33,
    integratedAddressPrefixTestnet: 34,
    subAddressPrefix: 4141013,
    subAddressPrefixTestnet: 73,
    feePerKB: new JSBigInt('400000000'),
    dustThreshold: new JSBigInt('1000000000'),
    defaultMixin: 1,
    idleTimeout: 30,
    idleWarningDuration: 20,
    coinSymbol: 'CMRA',
    openAliasPrefix: "cmra",
    coinName: 'Chimera',
    coinUriPrefix: 'chimera:',
    avgBlockTime: 60,
    maxBlockNumber: 500000000,
    donationAddresses: [
      'cmracYag8GeAjELvfQZafXewWnPe5zUVPQCEVj444uBPJimCSVfT43Q4rCme6TVuxDPpuyUKs8q5PcJWf1w568HtcHUYyc75Gmh',
  		'cmracVJ2XfqQjS2jmx8eYXJ9QJ2AHPsWf2SWDypr1FNyUA7fH8aNiLqCVUqPW49RMxYCAUC1mv3qw9jWMr99oyVbbhn6muisxdk'
  	]
};
