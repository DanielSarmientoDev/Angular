"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormProductComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("../../../utils/validators");
var operators_1 = require("rxjs/operators");
var FormProductComponent = /** @class */ (function () {
    function FormProductComponent(formBuilder, productsService, router, storage) {
        this.formBuilder = formBuilder;
        this.productsService = productsService;
        this.router = router;
        this.storage = storage;
        this.buildForm();
    }
    FormProductComponent.prototype.ngOnInit = function () { };
    FormProductComponent.prototype.saveProduct = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.form.valid) {
            var product = this.form.value;
            this.productsService.createProduct(product).subscribe(function (newProduct) {
                console.log(newProduct);
                _this.router.navigate(['./admin/products']);
            });
        }
    };
    FormProductComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var name = 'images.png';
        var fileRef = this.storage.ref(name);
        var task = this.storage.upload(name, file);
        task
            .snapshotChanges()
            .pipe(operators_1.finalize(function () {
            _this.image$ = fileRef.getDownloadURL();
            _this.image$.subscribe(function (url) {
                console.log(url);
                _this.form.get('image').setValue(url);
            });
        }))
            .subscribe();
    };
    FormProductComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            id: ['', [forms_1.Validators.required]],
            title: ['', [forms_1.Validators.required]],
            price: ['', [forms_1.Validators.required, validators_1.myValidators.isPriceValid]],
            image: [''],
            description: ['', [forms_1.Validators.required]]
        });
    };
    Object.defineProperty(FormProductComponent.prototype, "priceField", {
        get: function () {
            return this.form.get('price');
        },
        enumerable: false,
        configurable: true
    });
    FormProductComponent = __decorate([
        core_1.Component({
            selector: 'app-form-product',
            templateUrl: './form-product.component.html',
            styleUrls: ['./form-product.component.scss']
        })
    ], FormProductComponent);
    return FormProductComponent;
}());
exports.FormProductComponent = FormProductComponent;
