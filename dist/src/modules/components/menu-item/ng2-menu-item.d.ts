import { Ng2Dropdown } from '../dropdown/ng2-dropdown';
export declare class Ng2MenuItem {
    private dropdown;
    preventClose: boolean;
    value: any;
    constructor(dropdown: Ng2Dropdown);
    readonly isSelected: boolean;
    select(): void;
    click(): void;
}
