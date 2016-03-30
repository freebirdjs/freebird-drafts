Netcore.prototype.findDevById = function (id) {
    if (this._fb)
        return this._fb.findDevById(id);
    else
        return;
};

Netcore.prototype.findDevByAddr = function (permAddr) {
    if (this._fb)
        return this._fb.findDevByAddr(permAddr);
    else
        return;
};

Netcore.prototype.findGadById = function (id) {
    if (this._fb)
        return this._fb.findGadById(id);
    else
        return;
};

Netcore.prototype.findGadByAuxId = function (permAddr, auxId) {
    // [TODO] find from dev.gads or gadbox?

};