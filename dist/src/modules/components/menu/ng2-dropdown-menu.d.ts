import { ElementRef, Renderer, QueryList } from '@angular/core';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2Dropdown } from '../dropdown/ng2-dropdown';
export declare class Ng2DropdownMenu {
    private dropdown;
    private element;
    private renderer;
    width: number;
    focusFirstElement: boolean;
    offset: string;
    items: QueryList<Ng2MenuItem>;
    state: {
        isVisible: boolean;
        toString: () => string;
    };
    private position;
    private listener;
    constructor(dropdown: Ng2Dropdown, element: ElementRef, renderer: Renderer);
    show(): void;
    hide(): void;
    updatePosition(position: ClientRect): void;
    handleKeypress($event: any): void;
    private getMenuElement();
    private calcPositionOffset(position);
    private applyOffset(top, left);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
