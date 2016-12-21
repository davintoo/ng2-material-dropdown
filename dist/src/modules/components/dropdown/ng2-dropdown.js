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
var core_1 = require('@angular/core');
var ng2_dropdown_button_1 = require('../button/ng2-dropdown-button');
var ng2_dropdown_menu_1 = require('../menu/ng2-dropdown-menu');
var ng2_dropdown_state_1 = require('../dropdown/ng2-dropdown-state');
var Ng2Dropdown = (function () {
    function Ng2Dropdown() {
        this.onItemClicked = new core_1.EventEmitter();
        this.onItemSelected = new core_1.EventEmitter();
        this.onShow = new core_1.EventEmitter();
        this.onHide = new core_1.EventEmitter();
        this.state = new ng2_dropdown_state_1.Ng2DropdownState();
    }
    Ng2Dropdown.prototype.toggleMenu = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.state.isVisible ? this.hide() : this.show(position);
    };
    Ng2Dropdown.prototype.hide = function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    Ng2Dropdown.prototype.show = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show();
        this.menu.updatePosition(position);
        this.onShow.emit(this);
    };
    Ng2Dropdown.prototype.scrollListener = function () {
        if (this.menu.state.isVisible && this.button) {
            this.menu.updatePosition(this.button.getPosition());
        }
    };
    Ng2Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.state.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.onItemSelected.subscribe(function (item) { return _this.onItemSelected.emit(item); });
    };
    __decorate([
        core_1.ContentChild(ng2_dropdown_button_1.Ng2DropdownButton), 
        __metadata('design:type', ng2_dropdown_button_1.Ng2DropdownButton)
    ], Ng2Dropdown.prototype, "button", void 0);
    __decorate([
        core_1.ContentChild(ng2_dropdown_menu_1.Ng2DropdownMenu), 
        __metadata('design:type', ng2_dropdown_menu_1.Ng2DropdownMenu)
    ], Ng2Dropdown.prototype, "menu", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2Dropdown.prototype, "onItemClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2Dropdown.prototype, "onItemSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2Dropdown.prototype, "onShow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2Dropdown.prototype, "onHide", void 0);
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Ng2Dropdown.prototype, "scrollListener", null);
    Ng2Dropdown = __decorate([
        core_1.Component({
            selector: 'ng2-dropdown',
            styleUrls: ['./style.css'],
            templateUrl: './template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Dropdown);
    return Ng2Dropdown;
}());
exports.Ng2Dropdown = Ng2Dropdown;
//# sourceMappingURL=ng2-dropdown.js.map