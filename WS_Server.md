WebSocket Server Library
===============

WebSocket server library

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods) 
* [Event](#Event)

<a name="Constructor"></a>
## Constructor  

WsServer(fb)

**Arguments:**  

1. `fb` (_Object_): The freebird  

**Returns:**  

* (_Object_) wsServer (instance of WsServer class)

<a name="Properties"></a>
## Properties  

**Examples**

```js
{
    // private
    _fb: Object
    _wsServer: Object       // an instance of ws.Server
    _wsClients: Array
}

<br />

<a name="Methods"></a>
## Methods  

* start(server)
    - start running websocket server and listening connection event
    - server: Object, http server
    - return this

* stop()
    - stop running websocket server and terminate all clients
    - return this

* isRunning() 
    - check server is running or not
    - return Boolean

* _initClient(wsClient) 
    - process client 'messege', 'close', 'error' events and check authenticate

* _reqHdlr(wsClient, reqMsg)
    - check authorize and generate response data

* _sendRsp(wsClient, reqMsg, rspCode, rspData)
    - send response to websocket client

* _sendInd(subsys, type, data, id)
    - send indication to authorized client

* onPermitJoin
* onNetChanged
* onStatusChanged
* onDevIncoming
* onDevLeaving
* onGadIncoming
* onGadLeaving
* onAttrReport
* onDevAttrsChanged
* onGadAttrsChanged

<br />

<a name="Event"></a>
## Events

//server
* .on('connection')
    - _initClient()
* .on('error')

//client
* .on('message')
    - decrypt
    - authorize
    - callApi
* .on('close')
    - remove all clients
* .on('error')