"use strict";
var KEYS = {
    ENTER: 13,
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40
};
var onSwitchNext = function (index, items, state) {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
};
var onSwitchPrev = function (index, items, state) {
    if (index > 0) {
        state.select(items[index - 1], true);
    }
};
var onBackspace = function (index, items, state) {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
    else {
        state.select(items[0], true);
    }
};
var onEnter = function (index, items, state) {
    if (!state.selectedItem) {
        return;
    }
    state.onItemClicked.emit(state.selectedItem);
};
exports.ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onEnter,
    _a
);
var _a;
//# sourceMappingURL=actions.js.map