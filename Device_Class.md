Device Class
===============

Device class for freebird. This class is exported by **freebird-base** module.  

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods)  

<br />

<a name="Constructor"></a>
## Constructor  

Device(netcore, rawDev)

**Arguments:**  

1. `nc` (_Object_): The netcore  
2. `rawDev` (_Object_): Raw device data(object) from low-level controller..

**Returns:**  

* (_Object_) device (instance of Device class)

<br />

<a name="Properties"></a>
## Properties  

**Examples:**  
  
```js
{
    _netcore: Object,
    _raw: Object,               // raw device object from low-level module
    _id: Number,                // @fb device registered
    _gads: Object[],            // @fb gadget registered { gadId, auxId } assigned when adding a gadget to a device

    _net: {
        enabled: Boolean,       // @fb device registered
        joinTime: Number,       // @fb device registered
        timestamp: Number,      // @activity
        traffic: {              // netcore should tackle this at TRX
            in: { hits: 0, bytes: 0 },  // how many messages received, how many bytes received in
            out: { hits: 0, bytes: 0 }, // how many messages transmitted, how many bytes transmitted out
        },
        role: String,           // [opt] developer gives
        parent: String,         // [opt] developer gives, permanent address, '0' for netcore
        maySleep: Boolean,      // [opt] developer gives
        sleepPeriod: Number,    // [opt] seconds
        status: String,         // [fb] 'online', 'offline', 'sleep'
        address: {              // developer gives
            permanent: String,
            dynamic: String
        },
    },

    _props: {
        name: String,           // allow user to set
        description: String,    // allow user to set
        location: String,       // allow user to set
    },

    _attrs: {
        manufacturer: String,   // client-node gives
        model: String,          // client-node gives
        serial: String,         // client-node gives
        version: {
            hw: String,         // client-node gives
            sw: String,         // client-node gives
            fmw: String         // client-node gives
        },
        power: {
            type: Number,       // client-node gives
            voltage: Number     // client-node gives
        }
    },

    extra: Any,                 // developer gives, free to use
}
```

<br />

<a name="Methods"></a>
## Methods  

* isRegistered() - ok
    - check if this device is registered to freebird
    - return Boolean

* isEnabled() - ok
    - check if this device is enabled
    - return Boolean

* enable() - ok
    - enable this device to let it send/receive messages
    - return this

* disable() - ok
    - disable this device to avoid it from sending/receiving messages
    - return this

* refresh()

* resetTxTraffic() - ok
    - rest tx traffice
    - return Object { hits, bytes }

* resetRxTraffic() - ok
    - rest rx traffice
    - return Object { hits, bytes }

* dump() - ok
    - dump device data. Entries in dumped data are all cloned.
    - return Object

* _incTxBytes(num) - ok
    - accumeulate receiving data bytes
    - num: Number. bytes
    - return Number, accumulated bytes

* _poke() - ok
    - timestamp to mark activity of this device
    - return this

* getAttr(path) - ok
    - generic getter, only public properties can be exported
    - return value. Value is a cloned one if it is an object

* setAttr(path) - ok
    - generic setter, only public properties can be set. But not attrs. If path does not start with attrs, it will be set to attrs? WTF?!
    - return value. Value is a cloned one if it is an object

* getNetcore() - ok
    - get netcore of this device
    - return Object, netcore instance

* getRaw() - ok
    - get raw of this device
    - return Object, raw device

* getId() - ok
    - device id
    - return Number

* getJoinTime() - ok
    - join time
    - return Number, POSIX secs

* getGadTable() - ok
    - a list of gadget records
    - return Array. This is a cloned list

### Drivers

* read(attrName, callback)
    - read an attribute  
    - callback(err, result)

* write(attrName, val, callback)
    - write a value to an attribute  
    - callback(err, result)

* identify(callback)
    - Identify a device in the network  
    - callback(err, result)

* ping(callback)
    - Ping a device in the network  
    - callback(err, result)

* ping(callback)
    - Ping a device in the network  
    - callback(err, result)





















