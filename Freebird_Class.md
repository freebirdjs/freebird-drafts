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

Freebird(httpServer)

**Arguments:**  

1. `httpServer` (_Object_): The http server created by express or node http  

**Returns:**  

* (_Object_) freebird (instance of Freebird class)

**Example:**  

```js
var Freebird = require('freebird');
var fb = new Freebird(http_server_create_somewhere);
```

<br />

<a name="Properties"></a>
## Properties  

**Examples:**  

```js
{
    // protected
    _plugins: [],
    _devbox: _Storage_,
    _gadbox: _Storage_,
    _netcores: _Netcore[]_,
    _httpServer: _HTTP-SERVER_,         // created from express or node http
    _wsServer: _freebird-websocket_,    // only exists when http server is given

    _ncEventListeners: {},              // listeners to bridge low-layer netcore events up
    _wsApis: {},                        // apis for ws-server to call from
    net: {},                            // net driver namespace
    dev: {},                            // dev driver namespace
    gad: {}                             // gad driver namespace
}
```

<br />

<a name="Methods"></a>
## Methods  

* _getHttpServer()
    - get http server
    - return httpServer or null

* _getWsServer()
    - get websocket server
    - return wsServer or null

* _emitws(evt, fbMsg, wsMsg)
    - emit message to freebird itself and to wsServer
    - evt: event name
    - fbMsg: message to freebird itself
    - wsMsg: message to websokcet server
    - return none

* _ncInstance(nc)
    - always get instance of netcore 
    - return nc or undefined

* _devInstance(dev)
    - always instance of dev 
    - return dev or undefined

* _gadInstance(gad)
    - always instance of gad 
    - return gad or undefined

* _reload(ncName, callback) - TODO
    - reload records under the specified netcore
    - callback(err, recArray)
    - return none

* getNetcore(ncName)
    - get registered netcore by its name
    - return netcore

* findDev(pre)
    - find a device by predicator
    - return device or undefined

* findGad(pre)
    - find a gadget by predicator
    - return gadget or undefined

* findDevById(id)
    - find a device by its id
    - return device or undefined

* findDevByAddr(ncName, permAddr)
    - find a device from the netcore by its permenant address
    - return device or undefined

* findGadById(id)
    - find a gadget by its id
    - return gadget or undefined

* findGadByAddrAuxId(ncName, permAddr, auxId)
    - find a gadget from the netcpr by its permenant address and auxiliary id
    - return gadget or undefined

* registerNetcore(nc) - TODO
    - register a netcore to freebird

* unregisterNetcore(nc) - TODO
    - unregister a netcore from freebird

* registerDev(dev, callback)
    - register a device to freebird
    - return this

* unregisterDev(dev, callback)
    - unregister a device from freebird, all gadget will be unregistered
    - return this

* registerGad(gad, callback)
    - register a gadget to freebird
    - return this

* unregisterGad(dev, callback)
    - unregister a gadget from freebird
    - return this

* getAllDevs([ncName])
    - get all devs under a netcore
    - return Device[]

* getAllGads([ncName])
    - get all gads under a netcore
    - return Device[]

* getBlacklist(ncName)
    - get blacklist of a netcore
    - return Device[] | undefined

net
fb.net.start()
fb.net.stop()
fb.net.xxx

dev
fb.dev.enable()
fb.dev.disable()
fb.dev.xxx

gad

fb.gad.read()
fb.gad.write()
fb.gad.xxx

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
