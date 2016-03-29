Netcore Class
===============

Netcore class for freebird. This class is exported by **freebird-base** module.  

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods)  

<br />

<a name="Constructor"></a>
## Constructor  

new Netcore(info)

<br />

<a name="Properties"></a>
## Properties  

* drivers = {};

<a name="CbMethods"></a>
## Callbacks  

* .cookDevice(raw)
* .cookGadget(raw)
* .drivers.permitJoin(raw)
* .drivers.removeDevice(raw)
* .drivers.identify(raw)
* .drivers.reset(raw)
* .drivers.maintain(raw)
* .drivers.ping(raw)
* .drivers.findParent(raw)
* .drivers.readAttr(raw)
* .drivers.writeAttr(raw)
* .drivers.execAttr(raw)
* .drivers.setReportCfg(raw)
* .drivers.getReportCfg(raw)

<a name="Methods"></a>
## Methods  

* .registerDriver('permitJoin', function (duration) { })
* .registerDeivce(raw)
* .registerGadget(dev, auxId)
* .permitJoin(duration)
* .maintain()
* .reset()
* .enable()
* .disable()


fb.registerNetcore(nc);

//----------------------------------
nc.newDevice = function (raw) {
    var dev = new Device(this, raw);
    dev._netcore = this;
    dev._raw = raw;

    dev = this.cookDevice(dev);
    nc.registerDevice(dev);
};

nc.newGadget = function (dev) {
    
    gad = this.cookGadget();
    dev.registerGadget(gad);
};

// developer tells nc how to transform a raw device into a ripe one
nc.deviceRawToRipe = function (raw, ripe) {
    // raw instance
    // ripe is Device class
    ripe._maySleep
    ripe.role
    ripe.parent             // permanent address
    ripe.address = {
        permanent: null,
        dynamic: null
    };
    ripe.extra
};

nc.registerDevice = function (dev) {
    // dev id
};


// before cookDevice
* _netcore      -> getNetcore()
* _raw (X)

// @ cookDevice
* maySleep
* role
* parent
* address
    * address.permanent
    * address.dynamic
* extra (RW)
* attributes
    * name (RW)
    * description (RW)
    * location (RW)
    * manufacturer (R)
    * model (R)
    * serial (R)
    * version (R)
        * version.hw
        * version.sw
        * version.fmw
    * power (R)
        * power.type
        * power.voltage

// after cookDevice
//  registerDevice()
* _id (R)       -> getId()
* _enabled (R)  -> isEnabled()
* _joinTime     -> getJoinTime()
* _registered   -> isRegistered()
* status

//--------------------------------------
// device.registerGadget()
* _gads (R)     -> gadgetList()



