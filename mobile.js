"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getis5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setis5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.print = function () {
        console.log("The characteristics of the mobile " + this.name + " are:\n- Name: " + this.name + "\n- Model: " + this.model + "\n- Trademark: " + this.trademark + "\n- sdSize: " + this.sdSize + "\n- Color: " + this.color + "\n- Is 5g?: " + this.is5G + "\n- Number of Cameras: " + this.cameraNumber + "\n- Price: " + this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
