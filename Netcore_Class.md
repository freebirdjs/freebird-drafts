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

Netcore(name, controller, protocol[, opt])

```js
protocol: {         // required
    phy: String,    // required, physical layer
    dll: String,    // optional, data link layer
    nwk: String,    // required, network layer
    tl: String,     // optional, transportation layer
    sl: String,     // optional, session layer
    pl: String,     // optional, presentation layer
    apl: String,    // optional, application layer
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
    _fb: Object,                // @registered to fb framework
    _joinTimer: Object,
    _joinTicks: Number,

    _controller: Object,        // raw module
    _net: {
        name: String,
        enabled: Boolean,       // @start
        protocol: Object,
        startTime: Number,
        defaultJoinTime: 180,
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

    // Public
    extra: Any,

    // Methods User Override
    cookRawDev: Function,
    cookRawGad: Function,

    // Privileged Methods
    getBlacklist: Function,
    clearBlacklist: Function,
    isBlacklisted: Function,
    _block: Function,
    _unblock: Function
}
```

<a name="CbMethods"></a>
## Methods developers should implement 

* cookRawDev(dev, rawDev, callback)
    - `dev` is the instance of Device class  
    - `rawDev` is an object coming from the low-level controller. This object is passed by developer himself(herself).  
    - Developer is responsible for filling up the fields of `dev` instance  
    - Use dev.setNetInfo() and dev.setAttrs() to accomplish the cooking job.  

    - Step1: setNetInfo(info)

    ```js
        dev.setNetInfo({
            role: 'router',
            parent: '02:1e:39:ff:ea:7c',
            maySleep: true,
            sleepPeriod: 30,
            address: {
                permanent: '72:ae:8f:e1:d0:32', // required
                dynamic: '192.168.1.164'
            }
        });
    ```


    - Step2: setAttrs(attrs)

    ```js
        dev.setAttrs({
            manufacturer: 'xxx',
            model: 'xxx',
            serial: 'xxx',
            version: {
                hw: 'xxx',
                sw: 'xxx',
                fw: 'xxx',
            },
            power: {
                type: 'xxx',
                voltage: 'xxx'
            }
        });
    ```

* cookRawGad(gad, rawGad, callback)
    - `gad` is the instance of Gadget class  
    - `rawGad` is an object coming from the low-level controller. This object is passed by developer himself(herself).  
    - Developer is responsible for filling up the fields of `gad` instance  
    - Use gad.setPanelInfo() and gad.setAttrs() to accomplish the cooking job.  

    - Step1: setPanelInfo(info)

    ```js
        gad.setPanelInfo({
            profile: 'xxx',
            class: 'xxx'    // required
        });
    ```


    - Step2: setAttrs(attrs)

    ```js
        gad.setAttrs({
            // kvps
        });
    ```

<a name="ProtectedMethods"></a>
## Protected Methods  
* _block(permAddr)
    - block a device
    - return this

* _unblock(permAddr)
    - unblock a device
    - return this

* _fbEmit(evt, data)
    - emit message by freebird. No emission if not registered
    - retrun Boolean, emitted or not

* _findDriver(type, name)
    - find driver according to type (net, dev, gad) and driver name
    - retrun Function | undefined  

* _incTxBytes(num) - ok
    - Accumulate transmitted bytes
    - return Number, accumulated bytes

* _incRxBytes(num) - ok
    - Accumulate received bytes
    - return Number, accumulated bytes

* _startJoinTimer(duration) - ok
    - start permit join timer
    - return none, emit '_nc:permitJoin', { timeLeft: self._joinTicks } every second

* _clearJoinTimer() - ok
    - clear permit join timer
    - return none

* _findDriver(type, name) - ok
    - find driver by type (net, dev, gad) and driver name
    - return Function | undefined, driver

* _checkBadDrivers() - ok
    - check if all mandatory drivers of (net, dev, gad) are ready
    - return Array of driver names that are not implemented

<a name="Methods"></a>
## Methods  

* getBlacklist() - ok
    - get blacklist
    - return a cloned Array of permanent addresses

* clearBlacklist() - ok
    - clear blacklist
    - return this

* isBlacklisted(permAddr) - ok
    - check if a device is blocked
    - return Boolean

* isRegistered() - ok
    - check if registered to freebird
    - return Boolean

* isJoinable() - ok
    - check if netcore is now joinable
    - return Boolean

* isEnabled() - ok
    - check if netcore is enabled
    - return Boolean

* enable() - ok
    - enable netcore, emit '_nc:enabled', { netcore }
    - return this;

* disable() - ok
    - disable netcore, emit '_nc:disabled', { netcore }
    - return this;

* dump() - ok
    - dump data for db store
    - return Object, { name, enabled, protocol, startTime, defaultJoinTime, traffic }

* getName() - ok
    - get netcore name
    - return String

* getTraffic() - ok
    - get netcore traffic record
    - return Object, { in: { hits, bytes }, out: { hits, bytes } }

* resetTxTraffic() - ok
    - Reset accumulated tx hits and bytes
    - return this

* registerNetDrivers(drvs)
    - register network drivers
    - return this

* registerDevDrivers(drvs)
    - register device drivers
    - return this

* registerGadDrivers(drvs)
    - register gadget drivers
    - return this

<a name="UserCalledMethods"></a>
## User Called Methods  

* commitReady()
    - commit to tell the netcore is ready (reset, reboot...)
    - return Boolean, commit successfully 

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

<a name="Drivers"></a>
## Network, Device, and Gadget Drivers

* start(callback)
    - start netcore and its controller, emit '_nc:started', { netcore } is started
    - callback(err, result)
    - return none 

* stop(callback)
    - stop netcore and its controller, emit '_nc:stopped', { netcore } is stopped
    - callback(err, result)
    - return none 

* reset(mode, callback)
    - reset netcore and controller, if mode === 1, blacklist will be cleared.
    - emit '_nc:disabled', '_nc:enabled', and '_nc:started'
    - callback(err, result)
    - return none 

* .permitJoin(duration, callback)
    - allow devices to join the network
    - emit '_nc:permitJoin', { netcore, timeLeft } every second
    - callback(err, result) get called after set
    - return none 

* remove(permAddr, callback)
    - remove a device from network
    - emit '_nc:devLeaving', { netcore, permAddr }
    - callback(err, result) get called after removed
    - return none 

* ban(permAddr, callback)
    - ban a device from network
    - emit '_nc:netBan', { netcore, permAddr }
    - callback(err, result) get called after banned
    - return none 

* unban(permAddr, callback) 
    - unban a device from network
    - emit '_nc:netUnban', { netcore, permAddr }
    - callback(err, result) get called after unbanned
    - return none 

* ping(permAddr, callback)
    - ping a device in network
    - emit '_nc:netPing', { netcore, permAddr, data }
    - callback(err, result) get called after ping
    - return none 

* devRead(permAddr, attrName, callback)
    - read attribute from a device
    - emit '_nc:devRead', { netcore, permAddr, data }
    - callback(err, result) get called after read
    - return none 

* devWrite(permAddr, attrName, val, callback)
    - write attribute of a device
    - emit '_nc:devWrite', { netcore, permAddr, data }
    - callback(err, result) get called after written
    - return none 

* identify(permAddr, callback)
    - identify a device in the network
    - emit '_nc:devIdentify', { netcore, permAddr }
    - callback(err, result) get called after identified
    - return none 

* gadRead(permAddr, auxId, attrName, callback)
    - read attribute from a gadget
    - emit '_nc:gadRead', { netcore, permAddr, auxId, data }
    - callback(err, result) get called after read
    - return none 

* gadWrite(permAddr, auxId, attrName, val, callback)
    - write attribute of a gadget
    - emit '_nc:gadWrite', { netcore, permAddr, auxId, data }
    - callback(err, result) get called after written
    - return none 

* gadExec(permAddr, auxId, attrName, args, callback)
    - execuate a procedure on a gadget
    - emit '_nc:gadExec', { netcore, permAddr, auxId, data }
    - callback(err, result) get called after executed
    - return none 

* setReportCfg(permAddr, auxId, attrName, cfg, callback)
    - set the report settings of an attribute on a gadget
    - emit '_nc:gadSetReportCfg', { netcore, permAddr, auxId, data }
    - callback(err, result) get called after set
    - return none 

* getReportCfg(permAddr, auxId, attrName, callback)
    - get the report settings of an attribute on a gadget
    - emit '_nc:gadGetReportCfg', { netcore, permAddr, auxId, data }
    - callback(err, result) get called after got
    - return none 


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
* _nc:bannedDevReporting, { netcore: nc, permAddr: addr }                  - find existence
* _nc:gadReporting, { netcore: nc, permAddr: addr, auxId: auxId, data: attrs }          - find diff     -> _dev:attrsChanged
* _nc:bannedGadReporting, { netcore: nc, permAddr: addr, auxId: auxId  }    - find existence

* _nc:netPing, { netcore: nc, permAddr: addr, data: time }
* _nc:netBan
* _nc:netUnban

* _nc:devRead, { netcore: nc, permAddr: addr, data: x }
* _nc:devWrite
* _nc:devIdentify

* _nc:gadRead, { netcore: nc, permAddr: addr, data: x }
* _nc:gadWrite
* _nc:gadExec
* _nc:gadSetReportCfg
* _nc:gadGetReportCfg

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
nc.cookRawDev = function (dev, raw, cb) {
    // fill up dev
};

nc.cookRawGad = function (gad, raw, cb) {
    // fill up gad
};

// register drivers
nc.registerNetDrivers({
    start: function () {},
    stop: function () {},
    reset: function () {},
    permitJoin: function (duration) {},
    enable: function () {},
    disable: function () {},
    remove: function () {},
    ban: function () {},
    unban: function () {},
    ping: function (dev) {}
});

nc.registerDevDrivers({
    read: function (dev) {},
    write: function (dev) {},
    identify: function (dev) {},
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
