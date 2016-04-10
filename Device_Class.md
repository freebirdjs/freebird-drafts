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
2. `rawDev` (_Object_, optional): Raw device data(object) from low-level controller..

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
            fw: String         // client-node gives
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

* enable() - ok2
    - enable this device to let it send/receive messages
    - return this, emit '_dev:netChanged', { enabled: true }

* disable() - ok2
    - disable this device to avoid it from sending/receiving messages
    - return this, emit '_dev:netChanged', { enabled: false }

* getNetcore() - ok2
    - get netcore of this device
    - return Object, netcore instance

* getRawDev() - ok2
    - get raw of this device
    - return Object, raw device

* getId() - ok2
    - device id
    - return Number

* getGadTable() - ok2
    - a list of gadget records
    - return Array. This is a cloned list

* isRegistered() - ok2
    - check if this device is registered to freebird
    - return Boolean

* isEnabled() - ok2
    - check if this device is enabled
    - return Boolean

* getAddr() - ok2
    - get device address
    - return Object, { permanent, dynamic }

* getPermAddr() - ok2
    - get device permanent address
    - return String

* getStatus() - ok2
    - get device status
    - return String, 'online', 'offline', 'sleep', 'unknown'

* getTraffic() - ok2
    - get device traffice
    - return Object, { in: { hits, bytes }, out: { hits, bytes } }

* getNetInfo(keys) - ok2
    - get device network information
    - return Object
    - if keys = [ 'x', 'y', 'z' ], returns { x: xx, y: yy, z: zz }

* getProps(keys) - ok2
    - get device properties
    - return Object

* getAttrs(keys) - ok2
    - get device remote attributes
    - return Object

* setNetInfo(info) - ok2
    - set device network information
    - info is an object
    - return this, emit '_dev:netChanged', { data }, ignore traffic and timestamp

* setProps(props) - ok2
    - set device properties
    - return this, emit '_dev:propsChanged', { data }

* setAttrs(attrs) - ok2
    - set remote attributes
    - return this, emit '_dev:attrsChanged', { data }

* resetTxTraffic() - ok2
    - rest tx traffic
    - emit '_dev:netChanged', { data }, do include traffic
    - return this

* resetRxTraffic() - ok2
    - rest rx traffic
    - emit '_dev:netChanged', { data }, do include traffic
    - return this

* dump() - ok2
    - dump device data. Entries in dumped data are all cloned.
    - return Object { netcore, id, gads, net, props, attrs }

* refresh(callback) - ok2
    - refresh device remote attrs
    - return this

### Protected Method

* _get(type, keys) - ok2
    - get _net, _props, or _attrs
    - return cloned object | {}

* _fbEmit(evt, data) - ok2
    - emit freebird event
    - return Boolean, emitted or not

* _poke() - ok2
    - timestamp to mark activity of this device
    - return this

* _incTxBytes(num) - ok2
    - accumeulate transmitting data bytes
    - num: Number. bytes
    - return Number, accumulated bytes

* _incRxBytes(num) - ok2
    - accumeulate receiving data bytes
    - num: Number. bytes
    - return Number, accumulated bytes

* _findGadRecordByAuxId(auxId) - ok2
    - find the gadget record from gad table by auxId
    - return Object | undefined, record { gadId, auxId }

* _linkGadWithAuxId(auxId) - ok2
    - push gadget recored to gad table with auxId
    - return Object | undefined, record { gadId, auxId }

* _callDriver(drvName, args) - ok2
    - call driver to do remote operation upon the device
    - drvName (String): driver name
    - args (Array-like arguments): arguments
    - return (Inoked Driver)

### Drivers

* read(attrName, callback) - ok2
    - read an attribute from remote device  
    - callback(err, result)

* write(attrName, val, callback) - ok2
    - write a value to an attribute  
    - callback(err, result)

* identify(callback) - ok2
    - Identify a device in the network  
    - callback(err, result)

* ping(callback) - ok2
    - Ping a device in the network  
    - callback(err, result)




















