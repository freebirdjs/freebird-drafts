freebird-base
===============

**freebird-base** module provides base classes of Device, Gadget, and Netcore for netcore implementation.  

<br />

## Table of Contents  

* [Usage](#Usage)  
* [Classes](#Classes)  
    * [Device](#Device)  
    * [Gadget](#Gadget)  
    * [Netcore](#Netcore)  

<br />

<a name="Constructor"></a>
## Constructor  

new Device(nc, raw, info)

<br />

<a name="Usage"></a>
## Usage  

var fbbs = require('freebird-base');

<a name="Properties"></a>
## Properties  

* Netrcore  (class)
* Device    (class)
* Gadget    (class)

<br />

<a name="Methods"></a>
## Methods  

* fbbs.newNetcore()
* fbbs.newDevice()
* fbbs.newGadget()

nc.registerDevice(devInfo)
dev.registerGadget(gadInfo, auxId)
