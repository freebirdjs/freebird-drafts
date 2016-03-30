Netcore Class
===============

Netcore class for freebird. This class is exported by **freebird-base** module.  

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods)  
* [Arch](#Arch)  

<br />

<a name="Constructor"></a>
## Constructor  

Netcore(cntlr, ncInfo)

<br />

<a name="Properties"></a>
## Properties  

**Examples:**  
  
```js
{
    // private
    __blacklist: Array,

    // protected
    _enabled: Boolean,      // @start
    _registered: Boolean,   // @registered to fb framework
    _freebird: Object,      // @registered to fb framework

    _startTime: Number,
    _traffic: {
        in: Number,
        out: Number
    },

    _controller: Object,    // raw module
    _drivers: {
        net: {},
        dev: {},
        gad: {}
    },

    // Public
    name: String,
    protocol: Object,

}
```

<a name="CbMethods"></a>
## Callbacks  

* .cookRawDev(raw)
* .cookRawGad(raw)

<!-- * .drivers.permitJoin(raw)
* .drivers.start(raw)
* .drivers.stop(raw)
* .drivers.reset(raw)
* .drivers.removeDev(raw)
* .drivers.identify(raw)
* .drivers.maintain(raw)
* .drivers.ping(raw)
* .drivers.findParent(raw)
* .drivers.readAttr(raw)
* .drivers.writeAttr(raw)
* .drivers.execAttr(raw)
* .drivers.setReportCfg(raw)
* .drivers.getReportCfg(raw) -->

<a name="Methods"></a>
## Methods  

* ._getDriver(nspace, drvname)

* .txBytes()
* .rxBytes()
* .getBlacklist()
* .dump()

* .registerNetDrivers(drvs)
* .registerDevDrivers(drvs)
* .registerGadDrivers(drvs)

* .registerDeivce(raw)
* .registerGadget(dev, auxId)

* .permitJoin(duration)
* .maintain()
* .reset()
* .enable()
* .disable()
* .removeDev(permAddr)
* .banDev(permAddr)
* .unbanDev(permAddr) 
* .start()


<a name="Arch"></a>
## Arch  

**New Netcore:**  

```js
var fbbs = require('freebird-base'),
    rawMod = require('some-controller');

var netInfo = {
    name: 'myNet',
    protocol: {
        // fill with what?
    }
};

// create a new netcore
// _controller, name, protocol
var nc = fbbs.Netcore(rawMod, netInfo);

// override
nc.cookRawDev = function (raw, dev) {
    // fill up dev
};

nc.cookRawGad = function (raw, gad) {
    // fill up gad
};

// register drivers
nc.registerNetDrivers({
    start: function () {},
    stop: function () {},
    reset: function () {},
    permitJoin: function (duration) {},
    maintain: function () {},
    enable: function () {},
    disable: function () {},
    remove: function () {},
    ban: function () {},
    unban: function () {}
});

nc.registerDevDrivers({
    read: function (dev) {},
    write: function (dev) {},
    identify: function (dev) {},
    ping: function (dev) {}
});

nc.registerGadDrivers({
    read: function (gad) {},
    write: function (gad) {},
    exec: function (gad) {},
    setReportCfg: function (gad) {},
    getReportCfg: function (gad) {}
});

// if we are done, export the netcore
module.exports = nc;
```