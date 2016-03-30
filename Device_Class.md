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
    _maySleep: Boolean,     // developer decides
    _joinTime: Number,      // @registered
    _registered: Boolean,   // @registered
    _gads: Object[],        // assigned when adding a gadget to a device

    // public
    role: String,           // developer gives
    parent: ??,             //
    address: {              // developer gives
        permanent: String,
        dynamic: String
    },
    extra: Any,             // developer gives, free to use
    traffic: {              // netcore should tackle this at TRX
        in: Number,
        out: Number
    },
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

* read(attr)
    - (remotely) read an attribue of device -> nc.driver
    - attr (_String_): attribute name
* write(attr, value)    // update db
    - write a value to an attribue of device, only accept name, description, and location
    - attr (_String_): attribute name
    - value (_String_): write a value to device attribute
* identify()
    - identify a device in the network -> nc.driver
* ping()
    - ping this device in the network
* dump()
    - dump device information
* enable()
    - enable device
* disable()
    - disable device

* set()
* get()





