var zb = require('zigbee');

var fbbs = require('freebird-base.js'),
    Netcore = fbbs.Netcore;

var nc = new Netcore();

// overrides
nc.cookDevice = function (raw, dev) {
    // fill up some fields
};

nc.cookGadget = function (dev, gad) {
    // fill up some fields
    // classify this gadget
};

nc.drivers.net = {

};

nc.drivers.dev = {
    
};

nc.drivers.gad = {
    
};

//  (1) nc.devIncomingHandler()
//  (2) nc.devLeavingHandler()
//  (3) nc.attrReportHandler()

zb.on('evt1', function (x) {
    // xxxx
    nc.registerDevice(dev);     // if fb there
});

zb.on('evt2', function (x) {
    // xxxx
});

// ...

module.exports = nc;