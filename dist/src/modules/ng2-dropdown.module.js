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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng2_dropdown_1 = require('./components/dropdown/ng2-dropdown');
var ng2_dropdown_menu_1 = require('./components/menu/ng2-dropdown-menu');
var ng2_dropdown_button_1 = require('./components/button/ng2-dropdown-button');
var ng2_menu_item_1 = require('./components/menu-item/ng2-menu-item');
var core_1 = require('@angular/core');
var Ng2DropdownModule = (function () {
    function Ng2DropdownModule() {
    }
    Ng2DropdownModule = __decorate([
        core_1.NgModule({
            exports: [
                ng2_menu_item_1.Ng2MenuItem,
                ng2_dropdown_button_1.Ng2DropdownButton,
                ng2_dropdown_menu_1.Ng2DropdownMenu,
                ng2_dropdown_1.Ng2Dropdown
            ],
            declarations: [
                ng2_dropdown_1.Ng2Dropdown,
                ng2_menu_item_1.Ng2MenuItem,
                ng2_dropdown_button_1.Ng2DropdownButton,
                ng2_dropdown_menu_1.Ng2DropdownMenu
            ],
            imports: []
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2DropdownModule);
    return Ng2DropdownModule;
}());
exports.Ng2DropdownModule = Ng2DropdownModule;
__export(require('./components/dropdown/ng2-dropdown'));
__export(require('./components/menu/ng2-dropdown-menu'));
__export(require('./components/button/ng2-dropdown-button'));
__export(require('./components/menu-item/ng2-menu-item'));
//# sourceMappingURL=ng2-dropdown.module.js.map