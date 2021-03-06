"use strict";
var core_1 = require('@angular/core');
exports.animations = [
    core_1.trigger('fade', [
        core_1.state('visible', core_1.style({
            width: '100%',
            maxHeight: '350px',
            opacity: 1
        })),
        core_1.state('hidden', core_1.style({
            width: '0px',
            maxHeight: '0px',
            opacity: 0
        })),
        core_1.transition('visible => hidden', [
            core_1.animate('100ms ease-out')
        ]),
        core_1.transition('hidden => visible', [
            core_1.animate('150ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
];
//# sourceMappingURL=animations.js.map