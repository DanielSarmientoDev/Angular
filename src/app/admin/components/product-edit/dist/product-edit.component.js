"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductEditComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("../../../utils/validators");
var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(formBuilder, productsService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.productsService = productsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.buildForm();
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.id;
            _this.productsService.getProduct(_this.id).subscribe(function (product) {
                _this.form.patchValue(product);
            });
        });
    };
    ProductEditComponent.prototype.saveProduct = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.form.valid) {
            var product = this.form.value;
            this.productsService
                .updateProduct(this.id, product)
                .subscribe(function (newProduct) {
                console.log(newProduct);
                _this.router.navigate(['./admin/products']);
            });
        }
    };
    ProductEditComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            title: ['', [forms_1.Validators.required]],
            price: ['', [forms_1.Validators.required, validators_1.myValidators.isPriceValid]],
            image: [''],
            description: ['', [forms_1.Validators.required]]
        });
    };
    Object.defineProperty(ProductEditComponent.prototype, "priceField", {
        get: function () {
            return this.form.get('price');
        },
        enumerable: false,
        configurable: true
    });
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'app-product-edit',
            templateUrl: './product-edit.component.html',
            styleUrls: ['./product-edit.component.scss']
        })
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
