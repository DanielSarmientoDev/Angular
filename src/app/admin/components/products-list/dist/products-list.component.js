"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsListComponent = void 0;
var core_1 = require("@angular/core");
var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(productsService) {
        this.productsService = productsService;
        this.products = [];
        this.displayedColumns = ['id', 'title', 'price', 'actions'];
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.fetchProducts();
    };
    ProductsListComponent.prototype.fetchProducts = function () {
        var _this = this;
        this.productsService.getAllProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductsListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.productsService.deleteProduct(id).subscribe(function (rta) {
            _this.fetchProducts();
        });
    };
    ProductsListComponent = __decorate([
        core_1.Component({
            selector: 'app-products-list',
            templateUrl: './products-list.component.html',
            styleUrls: ['./products-list.component.scss']
        })
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
