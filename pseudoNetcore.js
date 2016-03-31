var zb = require('zigbee');

var fbbs = require('freebird-base.js'),
    Netcore = fbbs.Netcore;

var nc = new Netcore('zigbee', {
    PHY: 'ieee802.15.4',
    DLL: 'ieee802.15.4',
    NWK: 'zigbee2007',
    // TL: null,
    // SL: null,
    // PL: null,
    APL: 'zcl'
}, zb);

// overrides
nc.cookDevice = function (raw, dev, callback) {
    // fill up some fields
    dev.role = raw.devType;
    // dev.parent = 

    if (raw.devType === 'router' || raw.devType === 'coord')
        dev.maySleep = false;

    dev.address.permanent = raw.ieeeAddr;
    dev.address.dynamic = raw.nwkAddr;

    dev.extra = raw.info;

    dev.attrs.manufacturer = raw.info.manufacturerId;
    // dev.attrs.model = ;


    callback(dev);
};


nc.cookGadget = function (dev, gad, callback) {
    // fill up some fields
    // classify this gadget

    callback(gad);
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