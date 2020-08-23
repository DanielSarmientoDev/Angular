"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var badge_1 = require("@angular/material/badge");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var radio_1 = require("@angular/material/radio");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var grid_list_1 = require("@angular/material/grid-list");
var menu_1 = require("@angular/material/menu");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var layout_1 = require("@angular/cdk/layout");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                grid_list_1.MatGridListModule,
                paginator_1.MatPaginatorModule,
                input_1.MatInputModule,
                sort_1.MatSortModule,
                sidenav_1.MatSidenavModule,
                menu_1.MatMenuModule,
                toolbar_1.MatToolbarModule,
                select_1.MatSelectModule,
                layout_1.LayoutModule,
                badge_1.MatBadgeModule,
                list_1.MatListModule,
                radio_1.MatRadioModule,
                table_1.MatTableModule,
                icon_1.MatIconModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                form_field_1.MatFormFieldModule,
            ],
            exports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                grid_list_1.MatGridListModule,
                layout_1.LayoutModule,
                paginator_1.MatPaginatorModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                sort_1.MatSortModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                select_1.MatSelectModule,
                badge_1.MatBadgeModule,
                list_1.MatListModule,
                radio_1.MatRadioModule,
                table_1.MatTableModule,
                icon_1.MatIconModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                form_field_1.MatFormFieldModule,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
