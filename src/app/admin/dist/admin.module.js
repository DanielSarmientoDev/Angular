"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_routing_module_1 = require("./admin-routing.module");
var product_form_component_1 = require("./components/product-form/product-form.component");
var forms_1 = require("@angular/forms");
var nav_component_1 = require("./components/nav/nav.component");
var table_component_1 = require("./components/table/table.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var products_list_component_1 = require("./components/products-list/products-list.component");
var material_module_1 = require("../material/material.module");
var form_product_component_1 = require("./components/form-product/form-product.component");
var product_edit_component_1 = require("./components/product-edit/product-edit.component");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_form_component_1.ProductFormComponent,
                nav_component_1.NavComponent,
                table_component_1.TableComponent,
                dashboard_component_1.DashboardComponent,
                products_list_component_1.ProductsListComponent,
                form_product_component_1.FormProductComponent,
                product_edit_component_1.ProductEditComponent,
            ],
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                forms_1.ReactiveFormsModule,
                material_module_1.MaterialModule,
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
