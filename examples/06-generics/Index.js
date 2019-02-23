"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Warrior = /** @class */ (function () {
    function Warrior() {
        this.name = '';
    }
    return Warrior;
}());
var Mage = /** @class */ (function () {
    function Mage() {
        this.name = '';
    }
    return Mage;
}());
var BaseHero = /** @class */ (function () {
    function BaseHero() {
        this.database = [];
    }
    BaseHero.prototype.create = function (item) {
        console.log('creating..', item);
        this.database.push(item);
        return true;
    };
    return BaseHero;
}());
var WarriorSvc = /** @class */ (function (_super) {
    __extends(WarriorSvc, _super);
    function WarriorSvc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WarriorSvc;
}(BaseHero));
var MageSvc = /** @class */ (function (_super) {
    __extends(MageSvc, _super);
    function MageSvc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MageSvc.prototype.list = function () {
        return this.database;
    };
    return MageSvc;
}(BaseHero));
var warrior = new WarriorSvc();
warrior.create({
    name: 'Samurai Jack'
});
var mage = new MageSvc();
mage.create({
    name: 'Zantex'
});
console.log('Mage', 'final result: ', mage.list());
