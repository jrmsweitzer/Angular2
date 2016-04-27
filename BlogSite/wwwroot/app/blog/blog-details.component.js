System.register(["angular2/core", "angular2/router", "../services/blog.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, blog_service_1;
    var BlogDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            BlogDetailComponent = (function () {
                function BlogDetailComponent(_blogService, _routeParams, _router) {
                    this._blogService = _blogService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.isLoading = false;
                }
                BlogDetailComponent.prototype.ngOnInit = function () {
                    this.get();
                };
                BlogDetailComponent.prototype.get = function () {
                    var _this = this;
                    this.isLoading = true;
                    var title = this._routeParams.get("title");
                    this._blogService.getBlog(title, function (json) {
                        if (json) {
                            _this.convertDateTimeToDate(json);
                            _this.isLoading = false;
                        }
                    });
                };
                BlogDetailComponent.prototype.convertDateTimeToDate = function (json) {
                    var blog = json;
                    blog.CreateDate = new Date(blog.CreateDate);
                    this.blog = blog;
                };
                BlogDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                BlogDetailComponent.prototype.edit = function (id) {
                    this._router.navigate(["BlogEdit", { id: id }]);
                };
                BlogDetailComponent = __decorate([
                    core_1.Component({
                        selector: "my-blog-detail",
                        templateUrl: "app/blog/blog-details.component.html"
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService, router_1.RouteParams, router_1.Router])
                ], BlogDetailComponent);
                return BlogDetailComponent;
            }());
            exports_1("BlogDetailComponent", BlogDetailComponent);
        }
    }
});
//# sourceMappingURL=blog-details.component.js.map