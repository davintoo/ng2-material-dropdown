import { EventEmitter } from '@angular/core';
import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { Ng2DropdownState } from '../dropdown/ng2-dropdown-state';
export declare class Ng2Dropdown {
    button: Ng2DropdownButton;
    menu: Ng2DropdownMenu;
    onItemClicked: EventEmitter<string>;
    onItemSelected: EventEmitter<string>;
    onShow: EventEmitter<Ng2Dropdown>;
    onHide: EventEmitter<Ng2Dropdown>;
    state: Ng2DropdownState;
    toggleMenu(position?: ClientRect): void;
    private hide();
    private show(position?);
    private scrollListener();
    ngOnInit(): void;
}
