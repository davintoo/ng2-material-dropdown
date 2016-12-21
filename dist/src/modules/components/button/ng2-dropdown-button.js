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
var Ng2DropdownButton = (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new core_1.EventEmitter();
        this.showCaret = true;
    }
    Ng2DropdownButton.prototype.toggleMenu = function () {
        this.onMenuToggled.emit(true);
    };
    Ng2DropdownButton.prototype.getPosition = function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2DropdownButton.prototype, "showCaret", void 0);
    Ng2DropdownButton = __decorate([
        core_1.Component({
            selector: 'ng2-dropdown-button',
            styleUrls: ['./style.css'],
            templateUrl: './template.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2DropdownButton);
    return Ng2DropdownButton;
}());
exports.Ng2DropdownButton = Ng2DropdownButton;
//# sourceMappingURL=ng2-dropdown-button.js.map