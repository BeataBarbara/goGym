"use strict";
exports.__esModule = true;
exports.appRoutes = void 0;
var app_component_1 = require("./app.component");
var oops_component_1 = require("./oops/oops.component");
var tumble_component_1 = require("./tumble/tumble.component");
exports.appRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'tumble', component: tumble_component_1.TumbleComponent },
    { path: '**', component: oops_component_1.OopsComponent }
];
