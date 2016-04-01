WebSocket Client Library
===============

WebSocket client library for webApp client developer

<br />

## Table of Contents  

* [Properties](#Properties)  
* [Methods](#Methods) 
* [Event](@Event)

<a name="Properties"></a>
## Properties  

**Examples**

```js
{
    // private
    _wsClient: Object       // an instance of WebSocketClient class
    _wsApis: {
        net: {},
        dev: {},
        gad: {}
    }
}

<br />

<a name="Methods"></a>
## Methods  

* encrypt(msg)
* decrypt(msgBuf)
* regClientInfo(userName, password)
* sendReq(subSys, cmd, args)
    * wsApis.net.getAllDevIds([ncName])
    * wsApis.net.getAllGadIds([ncName])
    * wsApis.net.getDevs(ids)
    * wsApis.net.getGads(ids)
    * wsApis.net.getNetcores(ncNames)
    * wsApis.net.getBlacklist(ncName)
    * wsApis.net.permitJoin(ncName, duration)
    * wsApis.net.maintain(ncName)
    * wsApis.net.reset(ncName)
    * wsApis.net.enable(ncName)
    * wsApis.net.disable(ncName)
    * wsApis.net.ban(ncName, permAddr)
    * wsApis.net.unban(ncName, permAddr)
    * wsApis.net.remove(devId)
    * wsApis.net.ping(devId)
    * wsApis.dev.read(id, attrName)
    * wsApis.dev.write(id, attrName, value)
    * wsApis.dev.identify(id)
    * wsApis.gad.read(id, attrName)
    * wsApis.gad.write(id, attrName, value)
    * wsApis.gad.exec(id, attrName[, params])
    * wsApis.gad.setReportCfg(id, attrName, rptCfg)
    * wsApis.gad.getReportCfg(id, attrName)

