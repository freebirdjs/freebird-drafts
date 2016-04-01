WebSocket Server Library
===============

WebSocket server library

<br />

## Table of Contents  

* [Properties](#Properties)  
* [Methods](#Methods) 
* [Event](#Event)

<a name="Properties"></a>
## Properties  

**Examples**

```js
{
    // private
    _freebird: Object
    _wsServer: Object       // an instance of WebSocketServerclass
    _wsClients: Array
}

<br />

<a name="Methods"></a>
## Methods  

* initialize(server)
* getClients()
* sendRsp(socket, data)
	- encrypt

<br />

<a name="Event"></a>
## Events

//server
* .on('connection')
	- authenticate
* .on('error')

//client
* .on('message')
	- decrypt
	- authorize
	- callApi
* .on('close')
	- remove socket from _wsClients
* .on('error')