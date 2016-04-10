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
    _joinTimer: Object,
    _joinTicks: Number,
    _controller: Object,        // raw module
    _ticks: Number,
    _defaultJoinTime: Number,
    _fb: Object,                // @registered to fb framework

    _net: {
        name: String,
        enabled: Boolean,       // @start
        protocol: Object,
        startTime: Number,
        traffic: {
            in: { hits, bytes },
            out: { hits, bytes }
        },
    },

    _drivers: {
        net: {  // functions
            start, stop, reset, permitJoin, remove, ban, unban, ping
        },
        dev: {  // functions
            read, write, identify
        },
        gad: {  // functions
            read, write, exec, setReportCfg, getReportCfg, report
        }
    },

    // User Override
    cookRawDev: Function,
    cookRawGad: Function,
    unifyRawDevAttrs: Function,
    unifyRawGadAttrs: Function,

    // Public
    extra: Any,

    getBlacklist: Function,
    clearBlacklist: Function,
    isBlacklisted: Function,
    _block: Function,
    _unblock: Function
}
```

<a name="CbMethods"></a>
## Callbacks developers should implement 

* cookRawDev(dev, rawDev, callback)
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

* cookRawGad(gad, rawGad, callback)
* unifyRawDevAttrs(attrs) [TODO]
* unifyRawGadAttrs(attrs) [TODO]

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

* getBlacklist()
    - get blacklist
    - return a cloned Array of permanent addresses

* clearBlacklist()
    - clear blacklist
    - return this

* isBlacklisted(permAddr)
    - check if device is blocked
    - return Boolean

* _block(permAddr)
    - block a device
    - return this

* _unblock(permAddr)
    - unblock a device
    - return this

* _fbEmit
    - emit message by freebird. No emission if not registered
    - retrun Boolean, emitted or not
------------------------------------------
* getName()
    - get netcore name
    - return String

* isRegistered()
    - check if registered to freebird
    - return Boolean

* isJoinable()
    - check if netcore is now joinable
    - return Boolean

* isEnabled()
    - check if netcore is enabled
    - return Boolean

* enable()
    - enable netcore, emit '_nc:enabled', { netcore }
    - return this;

* disable()
    - disable netcore, emit '_nc:disabled', { netcore }
    - return this;

* dump()
    - dump data for db store
    - return Object, { name, enabled, protocol, startTime, traffic }

<a name="UserCalledMethods"></a>
## User Called Methods  

* commitDevIncoming(permAddr, rawDev)
    - commit the raw device object of an incoming device
    - return Boolean, commit successfully 

* commitDevLeaving(permAddr)
    - commit a device leaving
    - return Boolean, commit successfully

* commitGadIncoming(permAddr, auxId, rawGad)
    - commit the raw gadget object of an incoming gadget
    - return Boolean, commit successfully 

* commitDevReporting(permAddr, attrs)
    - commit the attributes reporting from a device
    - return Boolean, commit successfully 

* commitGadReporting()
    - commit the attributes reporting from a gadget
    - return Boolean, commit successfully 

* incTxBytes(num)
    - accumeulate transmitting data bytes
    - num: Number. bytes
    - return Number, accumulated bytes

* incRxBytes(num)
    - accumeulate received data bytes
    - num: Number. bytes
    - return Number, accumulated bytes

* resetTxTraffic()
    - rest tx traffic
    - return this

* resetRxTraffic()
    - rest rx traffic
    - return this

* registerNetDrivers(drvs)
    - register network drivers
    - return this | throw error if mandatory driver not given

* registerDevDrivers(drvs)
    - register device drivers
    - return this | throw error if mandatory driver not given

* registerGadDrivers(drvs)
    - register gadget drivers
    - return this | throw error if mandatory driver not given

* .permitJoin(duration)
* .maintain()
* .reset()
* .removeDev(permAddr)
* .banDev(permAddr)
* .unbanDev(permAddr) 
* .start()

<a name="Events"></a>
## Events to Freebird (fb.emit) 

* _nc:started, { netcore: nc }
* _nc:stopped, { netcore: nc }
* _nc:resetting, { netcore: nc }
* _nc:permitJoin, { netcore: nc }

* _nc:enabled, { netcore: nc }
* _nc:disabled, { netcore: nc }
* _nc:error, { netcore: nc, error: err }

* _nc:devIncoming, { netcore: nc, permAddr: addr, data: rawDev }                        - find diff     -> _dev:netChanged, _dev:attrsChanged
* _nc:bannedDevIncoming, { netcore: nc, permAddr: addr, data: rawDev }                  - find existence
* _nc:devLeaving, { netcore: nc, permAddr: addr }                                       - find existence
* _nc:gadIncoming, { netcore: nc, permAddr: addr, auxId: auxId, data: rawGad }          - find diff     -> _gad:panelChanged, _gad:attrsChanged
* _nc:bannedGadIncoming, { netcore: nc, permAddr: addr, auxId: auxId, data: rawGad }    - find existence
* _nc:devReporting, { netcore: nc, permAddr: addr, data: attrs }                        - find diff     -> _dev:attrsChanged
* _nc:bannedDevReporting, { netcore: nc, permAddr: addr, data: attrs }                  - find existence
* _nc:gadReporting, { netcore: nc, permAddr: addr, auxId: auxId, data: attrs }          - find diff     -> _dev:attrsChanged
* _nc:bannedGadReporting, { netcore: nc, permAddr: addr, auxId: auxId, data: attrs }    - find existence


// dev and gad, emit { dev, data } and  { gad, data }
* _dev:netChanged, { netcore: nc, id: id, permAddr: addr, data: info }                  - changed
* _dev:propsChanged, { netcore: nc, id: id, permAddr: addr, data: info }                - changed
* _dev:attrsChanged, { netcore: nc, id: id, permAddr: addr, data: info }                - changed

* _gad:panelChanged, { netcore: nc, permAddr: addr, id: id, auxId: auxId, data: info }  - changed
* _gad:propsChanged, { netcore: nc, permAddr: addr, id: id, auxId: auxId, data: info }  - changed
* _gad:attrsChanged, { netcore: nc, permAddr: addr, id: id, auxId: auxId, data: info }  - changed

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


