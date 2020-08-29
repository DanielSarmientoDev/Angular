"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var exponential_pipe_1 = require("./pipes/exponential/exponential.pipe");
var highlight_directive_1 = require("./directives/highlight/highlight.directive");
var banner_component_1 = require("./components/banner/banner.component");
var footer_component_1 = require("./components/footer/footer.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var material_module_1 = require("../material/material.module");
var badge_1 = require("@angular/material/badge");
var icon_1 = require("@angular/material/icon");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                exponential_pipe_1.ExponentialPipe,
                banner_component_1.BannerComponent,
                highlight_directive_1.HighlightDirective,
                footer_component_1.FooterComponent,
            ],
            exports: [
                exponential_pipe_1.ExponentialPipe,
                highlight_directive_1.HighlightDirective,
                banner_component_1.BannerComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule,
                material_module_1.MaterialModule,
                icon_1.MatIconModule,
                badge_1.MatBadgeModule,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
