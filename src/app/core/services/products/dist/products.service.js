"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../../../environments/environment");
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getAllProducts = function () {
        return this.http.get(environment_1.environment.url_API + "/products");
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.http.get(environment_1.environment.url_API + "/products/" + id);
    };
    ProductsService.prototype.createProduct = function (product) {
        return this.http.post(environment_1.environment.url_API + "/products", product);
    };
    ProductsService.prototype.updateProduct = function (id, changes) {
        return this.http.put(environment_1.environment.url_API + "/products/" + id, {});
    };
    ProductsService.prototype.deleteProduct = function (id) {
        return this.http["delete"](environment_1.environment.url_API + "/products/" + id);
    };
    ProductsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
