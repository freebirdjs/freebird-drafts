Gadget Class
===============

Gadget class for freebird. This class is exported by **freebird-base** module. Using netcore.registerGadget() creates a new gadget instance of this class.  

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods)  

<br />

<a name="Constructor"></a>
## Constructor  

Gadget(dev, auxId)

<br />

<a name="Properties"></a>
## Properties  

  
```js
{
    // protected
    _id: Number,            // @start
    _dev: Object,
    _enable: Boolean,       // @registered to fb framework
    _fb: Object,            // @registered to fb framework

    // Public
    profile: String,
    class: String,
    auxId: String | Number
    attrs: {
        name: String,
        description: String,
        // kvps...
    }
}
```

<br />

<a name="Methods"></a>
## Methods  

* isRegistered() - ok
* isEnabled() - ok
* enable() - ok
* disable() - ok
* getLocation() - ok
* dump() - ok

* read(name) - ok
* write(name, value) - ok
* exec(name[, params]) - ok
* setReportCfg(name, rptCfg) - ok
* getReportCfg(name, rptCfg) - ok
* set() - local attr
* get() - local attr

