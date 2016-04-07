WebSocket Client Library
===============

WebSocket client library for webApp client developer

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods) 
* [Event](#Event)

<a name="Constructor"></a>
## Constructor  

WsClient()

<br />

<a name="Properties"></a>
## Properties  

**Examples**

```js
{
    // private
    _wsClient: Object,       // an instance of WebSocketClient class
    _auth: Boolean,
    _connected: Boolean,
    _nextTransId: Function
}

<br />

<a name="Methods"></a>
## Methods  

* start(addr, option, authData)
    - start running websocket client, and sent authentication data to server to do authenticate
    - addr: String, host address
    - option: Object, same as ws.WebSocket
    - authData: Object

* stop()
    - stop running websocket client

* sendReq(subSys, cmd, args, callback)
    - send request to websocket server
    - subSys: String, 'net', 'dev', and 'gad'
    - cmd: String, command identifier corresponding to the API name
    - args: Object, a value-object that contains command arguments
    - callback: Function, get called when server respond to client with the results

<br />

<a name="Event"></a>
## Event

* open
* close
* error

// {subsys, id, data}
* permitJoining
* netChanged
* statusChanged
* devIncoming
* devLeaving
* gadIncoming
* gadLeaving
* attrReport
* attrsChanged
