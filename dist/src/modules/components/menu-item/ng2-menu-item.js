"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ng2_dropdown_1 = require('../dropdown/ng2-dropdown');
var Ng2MenuItem = (function () {
    function Ng2MenuItem(dropdown) {
        this.dropdown = dropdown;
        this.preventClose = false;
    }
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: function () {
            return this === this.dropdown.state.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Ng2MenuItem.prototype.select = function () {
        this.dropdown.state.select(this, true);
    };
    Ng2MenuItem.prototype.click = function () {
        this.dropdown.state.onItemClicked.emit(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2MenuItem.prototype, "preventClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2MenuItem.prototype, "value", void 0);
    Ng2MenuItem = __decorate([
        core_1.Component({
            selector: 'ng2-menu-item',
            styleUrls: ['./style.css'],
            templateUrl: './template.html'
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return ng2_dropdown_1.Ng2Dropdown; }))), 
        __metadata('design:paramtypes', [ng2_dropdown_1.Ng2Dropdown])
    ], Ng2MenuItem);
    return Ng2MenuItem;
}());
exports.Ng2MenuItem = Ng2MenuItem;
//# sourceMappingURL=ng2-menu-item.js.map