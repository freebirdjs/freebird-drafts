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

new Device(nc, rawDevice, info) <-> nc.newDevice()

<br />

<a name="Properties"></a>
## Properties  

* _netcore      -> getNetcore()
* _rawDev
* _id (R)       -> getId()
* _enabled (R)  -> isEnabled()
* _raw (X)
* _gads (R)     -> gadgetList()
* _maySleep
* _joinTime     -> getJoinTime()
* _registered   -> isRegistered()

* role
* parent
* status
* address
    * address.permanent
    * address.dynamic
* extra (RW)

* attributes
    * name (RW)
    * description (RW)
    * location (RW)
    * manufacturer (R)
    * model (R)
    * serial (R)
    * version (R)
        * version.hw
        * version.sw
        * version.fmw
    * power (R)
        * power.type
        * power.voltage

<br />

<a name="Methods"></a>
## Methods  

* dump()
* registerGadget()
* read(name)
* write(name, value)
* remove()
* identify()
* ping()
* ban()
* unban()
