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
var animations_1 = require('./animations');
var actions_1 = require('./actions');
var ng2_menu_item_1 = require('../menu-item/ng2-menu-item');
var ng2_dropdown_1 = require('../dropdown/ng2-dropdown');
var Ng2DropdownMenu = (function () {
    function Ng2DropdownMenu(dropdown, element, renderer) {
        var _this = this;
        this.dropdown = dropdown;
        this.element = element;
        this.renderer = renderer;
        this.width = 4;
        this.focusFirstElement = true;
        this.state = {
            isVisible: false,
            toString: function () {
                return _this.state.isVisible ? 'visible' : 'hidden';
            }
        };
    }
    Ng2DropdownMenu.prototype.show = function () {
        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'block');
        this.state.isVisible = true;
        if (this.focusFirstElement) {
            this.dropdown.state.select(this.items.first, false);
        }
    };
    Ng2DropdownMenu.prototype.hide = function () {
        this.state.isVisible = false;
        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'none');
        this.dropdown.state.unselect();
    };
    Ng2DropdownMenu.prototype.updatePosition = function (position) {
        this.position = position;
        this.ngDoCheck();
    };
    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
        if (!this.state.isVisible) {
            return;
        }
        var key = $event.keyCode, items = this.items.toArray(), index = items.indexOf(this.dropdown.state.selectedItem);
        if (!actions_1.ACTIONS.hasOwnProperty(key)) {
            return;
        }
        actions_1.ACTIONS[key].call(this, index, items, this.dropdown.state);
        $event.preventDefault();
    };
    Ng2DropdownMenu.prototype.getMenuElement = function () {
        return this.element.nativeElement.children[0];
    };
    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        var _a = this.applyOffset((position.top + y - 15) + "px", (position.left + x - 5) + "px"), top = _a.top, left = _a.left;
        var element = this.getMenuElement(), clientWidth = element.clientWidth, clientHeight = element.clientHeight, marginFromBottom = parseInt(top) + clientHeight, marginFromRight = parseInt(left) + clientWidth, windowScrollHeight = window.innerHeight + window.scrollY, windowScrollWidth = window.innerWidth + window.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = (parseInt(top.replace('px', '')) - clientHeight) + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var marginRight = marginFromRight - windowScrollWidth + 30;
            left = (parseInt(left.replace('px', '')) - marginRight) + "px";
        }
        return { top: top, left: left };
    };
    Ng2DropdownMenu.prototype.applyOffset = function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = (parseInt(top.replace('px', '')) + parseInt(offset[0])) + "px";
        left = (parseInt(left.replace('px', '')) + parseInt(offset[1])) + "px";
        return { top: top, left: left };
    };
    Ng2DropdownMenu.prototype.ngOnInit = function () {
        var body = document.querySelector('body');
        body.appendChild(this.element.nativeElement);
        this.listener = this.renderer.listen(body, 'keyup', this.handleKeypress.bind(this));
    };
    Ng2DropdownMenu.prototype.ngDoCheck = function () {
        if (this.state.isVisible) {
            var element = this.getMenuElement();
            var _a = this.calcPositionOffset(this.position), top_1 = _a.top, left = _a.left;
            this.renderer.setElementStyle(element, 'top', top_1);
            this.renderer.setElementStyle(element, 'left', left);
        }
    };
    Ng2DropdownMenu.prototype.ngOnDestroy = function () {
        var elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listener) {
            this.listener();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Ng2DropdownMenu.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Ng2DropdownMenu.prototype, "offset", void 0);
    __decorate([
        core_1.ContentChildren(ng2_menu_item_1.Ng2MenuItem), 
        __metadata('design:type', core_1.QueryList)
    ], Ng2DropdownMenu.prototype, "items", void 0);
    Ng2DropdownMenu = __decorate([
        core_1.Component({
            selector: 'ng2-dropdown-menu',
            styleUrls: ['./style.css'],
            templateUrl: './template.html',
            animations: animations_1.animations
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return ng2_dropdown_1.Ng2Dropdown; }))), 
        __metadata('design:paramtypes', [ng2_dropdown_1.Ng2Dropdown, core_1.ElementRef, core_1.Renderer])
    ], Ng2DropdownMenu);
    return Ng2DropdownMenu;
}());
exports.Ng2DropdownMenu = Ng2DropdownMenu;
//# sourceMappingURL=ng2-dropdown-menu.js.map