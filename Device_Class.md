Device Class
===============

Device class for freebird. This class is exported by **freebird-base** module. Using netcore.registerDevice() creates a new device instance of this class.  

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods)  

<br />

<a name="Constructor"></a>
## Constructor  

Device(nc, raw)

**Arguments:**  

1. `nc` (_Object_): The netcore  
2. `raw` (_Object_): Raw device from low-level controller..

**Returns:**  

* (_Object_) device (instance of Device class)

<br />

<a name="Properties"></a>
## Properties  

**Examples:**  
  
```js
{
    // protected
    _netcore: Object,
    _raw: Object,           // raw device from low-level module
    _id: Number,            // get from fb storage
    _enabled: Boolean,      // @registered
    _joinTime: Number,      // @registered
    _lastTime: Number,
    _gads: Object[],        // { gadId, auxId } assigned when adding a gadget to a device
    _traffic: {              // netcore should tackle this at TRX
        in: Number,
        out: Number
    },

    // public
    role: String,           // developer gives
    parent: String,         // permanent address
    maySleep: Boolean,      // developer decides
    address: {              // developer gives
        permanent: String,
        dynamic: String
    },
    extra: Any,             // developer gives, free to use

    attrs: {
        name: String,           // allow user to set
        description: String,    // allow user to set
        location: String,       // allow user to set
        manufacturer: String,   // client developer gives
        model: String,          // client developer gives
        serial: String,         // client developer gives
        version: {
            hw: String,         // client developer gives
            sw: String,         // client developer gives
            fmw: String         // client developer gives
        },
        power: {
            type: Number,       // client developer gives
            voltage: Number     // client developer gives
        }
    }
}
```

<br />

<a name="Methods"></a>
## Methods  

* _incTxBytes(num) - ok
    - accumeulate transmitting data bytes
    - num: Number. bytes
    - return Number, accumulated bytes

* _incTxBytes(num) - ok
    - accumeulate receiving data bytes
    - num: Number. bytes
    - return Number, accumulated bytes

* _isWorking()
    - is this device working? check if netcore, id, enabled are all ok
    - return Boolean

* linkGad(gadId, auxId)
    - link a record of gadget to device
    - gadId: Number
    - auxId: Number or String
    - return Object. record: { gadId, auxId }. null if not linked

* unlinkGad(gadId, auxId)
    - unlink a record of gadget from device
    - gadId: Number
    - auxId: Number or String
    - return Object. unlinked record: { gadId, auxId }. null if unlink fails

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

* get(path)
    - generic getter, only public properties can be exported
    - return value. Value is a cloned one if it is an object

* set(path)
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

* getGadRecords() - ok
    - a list of gadget records
    - return Array. This is a cloned list

* dump() - ok
    - dump device data. Entries in dumped data are all cloned.
    - return Object

```js
{
    netcore: String,
    id: Number,
    enabled: Boolean,
    status: String,
    joinTime: Number,
    lastTime: Number,
    gads: Object[],
    traffic: {
        in: Number,
        out: Number
    },
    role: String | Number,
    parent: String,
    maySleep: Boolean,
    address: {
        permanent: String,
        dynamic: String
    },
    attrs: {
        name: String,
        description: String,
        location: String,
        manufacturer: String,
        model: String
        serial: String,
        version: {
            hw: String,
            sw: String,
            fmw: String
        },
        power: {
            type: String,
            voltage: String
        }
    }
};
```

* recover(data)
    - recover device information from data object. status of a recovered device will always be 'offline'. extra will be null, _raw will be null. 
    - return Object. device itself

* resetTxBytes() - ok
    - reset accumulated TX Bytes to 0 
    - return Number, 0

* resetRxBytes() - ok
    - reset accumulated RX Bytes to 0 
    - return Number, 0


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


### Private functions

* _isProtectedKey(key) - ok
    - Check if key is a protected one  
    - return Boolean

* _isPublicKey(key) - ok
    - Check if key is a public one  
    - return Boolean





















