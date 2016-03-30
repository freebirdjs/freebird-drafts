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
    _owner: Object,
    _enable: Boolean,       // @registered to fb framework
    _registered: Boolean,   // @registered to fb framework
    _freebird: Object,      // @registered to fb framework

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

* location()

* dump()
* read(name)
* write(name, value)
* exec(name[, params])
* setReportCfg(name, rptCfg)
* getReportCfg(name, rptCfg)
* set() - local attr
* get() - local attr

