Gadget Class
===============

Gadget class for freebird. This class is exported by **freebird-base** module.  

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
    _id: Number,            // @start
    _dev: Object,
    _auxId: Number | String,

    _panel: {
        enable: Boolean,    // @registered to fb framework
        profile: '',
        class: ''
    },

    _props: {
        name: 'unknown',
        description: ''
    },

    _attrs: {
        // other kvps
    }

    extra: Object
}
```

<br />

<a name="Methods"></a>
## Methods  

* enable() - ok
    - enable gadget
    - return this

* disable() - ok
    - disable gadget
    - return this

* isRegistered() - ok
    - check if gadget has registered to freebird
    - return this

* isEnabled() - ok
    - check if gadget is enabled
    - return this

* getId() - ok
    - get gadget id
    - return Number, gadId

* getDev() - ok
    - get device who owns this gadget
    - return Object, device

* getPermAddr() - ok
    - get permanent address of the device that owns this gadget
    - return String, address

* getAuxId() - ok
    - get gadget auxiliary id
    - return Number | String, auxId

* getNetcore() - ok
    - get netcore that holds this gadget
    - return Object, netcore

* getLocation() - ok
    - get location of this gadget from its device
    - return String, location

* getPanelInfo(paths) - ok
    - get gadget panel information
    - return Object, { enabled, profile, class }

* getProps(paths) - ok
    - get gadget local properties
    - return Object, { name, description }

* getAttrs(paths) - ok
    - get gadget remote attributes
    - return Object, { // kvps }

* setPanelInfo(info) - ok
    - set gadget panel information
    - return this

* setProps(props) - ok
    - set gadget local properties
    - return this

* setAttrs(attrs) - ok
    - set gadget remote attributes
    - return this

* dump() - ok
    - dump gadget data (for db)
    - return Object

* read(attrName, callback) - ok
    - remotely read an attribute on the agdget
    - return none

* write(attrName, val, callback) - ok
    - remotely write a value to an attirubte on the gagdet
    - return none

* exec(attrName[, args], callback) - ok
    - remotely execute an procedure on the gadget
    - return none

* setReportCfg(attrName, cfg, callback) - ok
    - configure the attribute report on the gadget
    - return none

* getReportCfg(attrName, callback) - ok
    - get the reporting configuration of the attribute on the gadget
    - return none

## Protected Methods  

* _fbEmit(evt, data) - ok
    - emit an event to freebird
    - return Boolean, true: emitted, false: not emit

* _get(type, paths) - ok
    - get something from '_panel', '_props', or '_attrs' space
    - return Any, value
