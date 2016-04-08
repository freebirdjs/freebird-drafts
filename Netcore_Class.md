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

Netcore(name, cfg)

```js
{   // cfg
    controller: Object, // required
    protocol: {         // required
        phy: String,    // required, physical layer
        dll: String,    // optional, data link layer
        nwk: String,    // required, network layer
        tl: String,     // optional, transportation layer
        sl: String,     // optional, session layer
        pl: String,     // optional, presentation layer
        apl: String,    // optional, application layer
    },
    xxx: ,              // other settings
}
```
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
## Callbacks developers should implement 

* .cookRawDev(dev, raw)
    - `dev` is the instance of Device class
    - `raw` is an object coming from the low-level controller. This object is passed by developer himself(herself).  
    - Developer is responsible for filling up the fields of `dev`

```js
    // fields of the dev object to be filled up
    {
        role: 'end-dev',                // optional, String
        parent: '0x123456789',          // optional, String
        maySleep: true,                 // optional, Boolean
        address: {                      // required, Object
            permanent: '0x9876543210',      // required, String
            dynamic: '192.168.7.26'         // optional, String
        },
        extra: mySpecialData,           // optional, Any
        attrs: {                        // optional, Object
            name: 'unknown',                // String
            description: 'hello world',     // String
            location: 'unknown',            // String
            manufacturer: 'freebird',       // String
            model: 'dragon_ball_1',         // String
            serial: 'mqtt-2016-03-31-01',   // String
            version: {
                hw: 'v0.0.1',               // String
                sw: 'v0.2.0',               // String
                fmw: 'v1.0.0'               // String
            },
            power: {
                type: 'battery',            // String
                voltage: '5V'               // String
            }
        }
    }
```

```js
    dev.attrs.manufacturer = raw.manuf;

    dev.set('attrs.myAttr1', 'test');
    // dev.attrs.myAttr1 = 'test';
```

* .cookRawGad(gad, meta)
* .unifyRawDevAttrs(attrs)
* .unifyRawGadAttrs(attrs)

<a name="Drivers"></a>
## Drivers developers should implement 

* Network drivers



* Device drivers

| Driver Name | Mandatory | Driver Signature                         | Callback Signature    | Description                           |
|-------------|-----------|------------------------------------------|-----------------------|---------------------------------------|
| read        | required  | function(dev, attrName, callback)        | callback(err, result) | Read a device attribute               |
| write       | required  | function(dev, attrName, value, callback) | callback(err, result) | Write a value to the device attribute |
| identify    | optional  | function(dev, callback)                  | callback(err, result) | Identify a device                     |

* Gadget drivers

| Driver Name  | Mandatory | Driver Signature                         | Callback Signature    | Description                           |
|--------------|-----------|------------------------------------------|-----------------------|---------------------------------------|
| read         | required  | function(gad, attrName, callback)        | callback(err, result) | Read a gadget attribute               |
| write        | required  | function(gad, attrName, value, callback) | callback(err, result) | Write a value to the gadget attribute |
| exec         | optional  | function(gad, attrName, args, callback)  | callback(err, result) | Execute                               |
| setReportCfg | optional  | function(gad, attrName, cfg, callback)   | callback(err, result) |                                       |
| getReportCfg | optional  | function(gad, attrName, callback)        | callback(err, result) |                                       |


## Device Drivers Example

```js
var controller = require('some-controller');

var devDriverRead = function (dev, attrName, callback) {
    var permAddr = dev.address.permanent,
        qnode = controller.find(permAddr);

    if (qnode)
        qnode.read(attrName, function (err, rsp) {

        });
    else
        callback(new Error('Machine not found'));
};

var devDriverWrite = function (dev, attrName, callback) {
    var permAddr = dev.address.permanent,
        qnode = controller.find(permAddr);

    if (qnode)
        qnode.read(attrName, function (err, rsp) {

        });
    else
        callback(new Error('Machine not found'));
};

var devDriverIdentify = function (dev, attrName, callback) {
    var permAddr = dev.address.permanent,
        qnode = controller.find(permAddr);

    if (qnode)
        qnode.read(attrName, function (err, rsp) {

        });
    else
        callback(new Error('Machine not found'));
};

nc.registerDevDrivers({
    read: devDriverRead,
    write: devDriverWrite,
    identify: devDriverIdentify
});

```

<a name="Methods"></a>
## Methods  

* getBlacklist - ok
* clearBlacklist - ok
* _block - ok
* _unblock - ok
* isBlacklisted -ok
* _fbEmit - ok
------------------------------------------

* isRegistered() - ok
* isJoinable() - ok
* isEnabled() - ok
* enable() - ok
* disable() - ok
* dump() - ok

* commitDevIncoming() - ok
* commitDevLeaving() - ok
* commitGadIncoming() - ok
* commitDevReporting() - ok
* commitGadReporting() - ok

* incTxBytes() - ok
* incRxBytes() - ok
* resetTxTraffic() - ok
* resetRxTraffic() - ok

* ._getDriver(nspace, drvname)

* .registerNetDrivers(drvs)
* .registerDevDrivers(drvs)
* .registerGadDrivers(drvs)

* .registerDeivce(raw)
* .registerGadget(dev, auxId)

* .permitJoin(duration)
* .maintain()
* .reset()
* .removeDev(permAddr)
* .banDev(permAddr)
* .unbanDev(permAddr) 
* .start()

<a name="Events"></a>
## Events  

* _nc:enabled, { netcore: nc }
* _nc:disabled, { netcore: nc }
* _nc:error, { netcore: nc, error: err }
* _nc:devIncoming, { netcore: nc, permAddr: addr, data: rawDev }
* _nc:bannedDevIncoming, { netcore: nc, permAddr: addr, data: rawDev }
* _nc:devLeaving, { netcore: nc, permAddr: addr }
* _nc:gadIncoming, { netcore: nc, permAddr: addr, auxId: auxId, data: rawGad }
* _nc:bannedGadIncoming, { netcore: nc, permAddr: addr, auxId: auxId, data: rawGad }
* _nc:devReporting, { netcore: nc, permAddr: addr, data: attrs }
* _nc:bannedDevReporting, { netcore: nc, permAddr: addr, data: attrs }
* _nc:gadReporting, { netcore: nc, permAddr: addr, auxId: auxId, data: attrs }
* _nc:bannedGadReporting, { netcore: nc, permAddr: addr, auxId: auxId, data: attrs }

* _dev:netChanged, { netcore: nc, id: id, permAddr: addr, data: info }
* _dev:propsChanged, { netcore: nc, id: id, permAddr: addr, data: info }
* _dev:attrsChanged, { netcore: nc, id: id, permAddr: addr, data: info }

* _gad:panelChanged, { netcore: nc, permAddr: addr, id: id, auxId: auxId, data: info }
* _gad:propsChanged, { netcore: nc, permAddr: addr, id: id, auxId: auxId, data: info }
* _gad:attrsChanged, { netcore: nc, permAddr: addr, id: id, auxId: auxId, data: info }


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



/***********************************************************************/
/*** Events emit up                                                  ***/
/***   1. devIncoming + device                                       ***/
/***   2. devLeaving + device                                        ***/
/***   3. gadIncoming + gadget                                       ***/
/***   4. permitJoin + timeLeft                                      ***/
/***   5. devAttrsChanged + device, attrsObj                         ***/
/***   6. gadAttrsChanged + gadget, attrsObj                         ***/
/***   7. attrReport + gadget, attrsObj                              ***/
/***   8. netChanged + device, netInfoObj                            ***/
/***   9. statusChanged + device, status                             ***/
/***********************************************************************/
/***********************************************************************/
/*** Developer should call                                           ***/
/***   1. nc.devIncoming(raw)                                        ***/
/***   2. nc.devLeaving(permAddr)                                    ***/
/***   3. nc.gadIncoming(permAddr, auxId, meta)                      ***/
/***   4. >> permitJoin + timeLeft                                   ***/
/***   5. nc.reportDevAttrs(permAddr, attrs)                         ***/
/***   6. nc.reportGadAttr(permAddr, auxId, attrs)                   ***/
/***********************************************************************/
/***********************************************************************/
/*** Developer Implements                                            ***/
/***   1. nc.cookRawDev()                                            ***/
/***   2. nc.cookRawGad()                                            ***/
/***   3. nc.cookRawDevAttrsReport()                                 ***/
/***   4. nc.cookRawGadAttrsReport()                                 ***/
/***   5. nc.drivers = { net, dev, gad }                             ***/
/***          nc.registerNetDrivers({})                              ***/
/***          nc.registerDevDrivers({})                              ***/
/***          nc.registerGadDrivers({})                              ***/
/***********************************************************************/

APIs
devIncoming
devLeaving
gadIncoming
reportDevAttrs
reportGadAttrs
dump
txBytesUp
rxBytesUp

registerNetDrivers
registerDevDrivers
registerGadDrivers

this._drivers = {
    net: {
        start: null,        // function(callback) {}
        stop: null,         // function(callback) {}
        reset: null,        // function(callback) {}
        permitJoin: null,   // function(duration, callback) {}
        maintain: null,     // function([permAddr][, callback]) {}
        // enable: null,
        // disable: null,
        remove: null,       // function(permAddr, callback) {}
        ban: null,          // function(permAddr, callback) {}
        unban: null,        // function(permAddr, callback) {}
        ping: null          // function(permAddr, callback) {}
    },
    dev: {
        read: null,         // function(permAddr, attr, callback) {}
        write: null,        // function(permAddr, attr, val, callback) {}
        identify: null,     // function(permAddr, callback) {}
    },
    gad: {
        read: null,         // function(permAddr, auxId, attr, callback) {}
        write: null,        // function(permAddr, auxId, attr, val, callback) {}
        exec: null,         // function(permAddr, auxId, attr, args, callback) {}
        setReportCfg: null, // function(permAddr, auxId, cfg, callback) {}
        getReportCfg: null  // function(permAddr, auxId, callback) {}
    }
};


