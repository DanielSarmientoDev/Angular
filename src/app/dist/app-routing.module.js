"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var demo_component_1 = require("./demo/demo.component");
var layout_component_1 = require("./layout/layout.component");
var admin_guard_1 = require("./admin.guard");
var routes = [
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./home/home.module'); }).then(function (m) { return m.HomeModule; });
                }
            },
            {
                path: 'products',
                canActivate: [admin_guard_1.AdminGuard],
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./product/product.module'); }).then(function (m) { return m.ProductModule; });
                }
            },
            {
                path: 'contact',
                canActivate: [admin_guard_1.AdminGuard],
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./contact/contact.module'); }).then(function (m) { return m.ContactModule; });
                }
            },
        ]
    },
    {
        path: 'demo',
        component: demo_component_1.DemoComponent
    },
    {
        path: 'admin',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./admin/admin.module'); }).then(function (m) { return m.AdminModule; });
        }
    },
    {
        path: '**',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./page-not-found/page-not-found.module'); }).then(function (m) { return m.PageNotFoundModule; });
        }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
