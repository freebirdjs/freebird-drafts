Freebird Class
===============

Freebird framework core module.  

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods)  

<br />

<a name="Constructor"></a>
## Constructor  

var freebird = require('freebird');

<br />

<a name="Properties"></a>
## Properties  

  
```js
{
    // protected
    _plugins: [],
    _devbox: null,
    _gadbox: null,
    _netmux: null
}
```

<br />

<a name="Methods"></a>
## Methods  

* start()
* stop()
* findDevByAddr()
* findDevById()
* findGadById()
* findGadByAddrAuxId()
* getAllDevs([nc])
* getAllGads([nc])

* updateDevAttrs()
* updateGadAttrs()

net
fb.net.start()
fb.net.stop()
fb.net.xxx      // netcore public methods

dev
fb.dev.enable()
fb.dev.disable()
fb.dev.xxx      // dev public methods

gad

fb.gad.read()
fb.gad.write()
fb.gad.xxx      // gad public methods

<a name="Events"></a>
## Events  

* Listen from netmux <- netcore // maybe we dont need netmux, just need a event namespace
    * 'net:devIncoming', device                 // add or not
    * 'net:devLeaving', device                  // kill
    * 'net:gadIncoming', gadget                 // add or not
    * 'net:devAttrsChanged', device, attrsObj   // to update device
    * 'net:gadAttrsChanged', gadget, attrsObj   // to update gadget
    * 'net:attrReport', gadget, attrsObj        // to update gadget
    * 'net:netChanged', device, netObj          // to update device
    // * 'net:statusChanged', device, status    // fb try to emit statusChanged
    * 'net:permitJoin', netcore, timeLeft       // to bubble up

* emit out (server side)
    * 'devIncoming', device
    * 'devLeaving', device
    * 'gadIncoming', gadget
    * 'gadLeaving', gadget
    * 'devAttrsChanged', device, attrsObj   // device updated
    * 'gadAttrsChanged', gadget, attrsObj   // gadget updated
    * 'attrReport', gadget, attrsObj
    * 'netChanged', device, netObj
    * 'statusChanged', device, status
    * 'permitJoin', netcore, timeLeft

* emit out (client side)
    * 'devIncoming', devInfo
    * 'devLeaving', { id }
    * 'gadIncoming', gadInfo
    * 'gadLeaving', { id }
    * 'attrsChanged', attrsObj
    * 'attrReport', attrsObj
    * 'netChanged', { address, status }
    * 'statusChanged', { status }
    * 'permitJoin', { netcore, leftTime }
