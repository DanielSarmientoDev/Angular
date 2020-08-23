"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailComponent = void 0;
var core_1 = require("@angular/core");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productsService) {
        this.route = route;
        this.productsService = productsService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params.id;
            _this.fetchProduct(id);
            /* this.product = this.productsService.getProduct(id); */
        });
    };
    ProductDetailComponent.prototype.fetchProduct = function (id) {
        var _this = this;
        this.productsService.getProduct(id).subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductDetailComponent.prototype.createProduct = function () {
        var newProduct = {
            id: '22',
            title: 'nuevo desde angular',
            image: 'assets/images/banner-1.jpg',
            description: 'xxxxxxxxxx',
            price: 10000
        };
        this.productsService.createProduct(newProduct).subscribe(function (product) {
            console.log();
        });
    };
    ProductDetailComponent.prototype.updateProduct = function () {
        var updateProduct = {
            title: 'nuevo desde angular',
            description: 'xxxxxxxxxx',
            price: 2662362
        };
        this.productsService
            .updateProduct('22', updateProduct)
            .subscribe(function (product) {
            console.log(product);
        });
    };
    ProductDetailComponent.prototype.deleteProduct = function () {
        this.productsService.deleteProduct('8').subscribe(function (product) {
            console.log(product);
        });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
