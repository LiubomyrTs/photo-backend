(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (self["webpackChunkphoto"] = self["webpackChunkphoto"] || []).push([["main"], {
    /***/
    8255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    4523: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/admin.guard */
      9509);
      /* harmony import */


      var src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/enums/layout.enum */
      2716);

      var _routes = [{
        path: 'admin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! src/app/admin/admin.module */
          7095)).then(function (m) {
            return m.AdminModule;
          });
        },
        canActivate: [src_app_auth_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AdminGuard],
        data: {
          layout: src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_1__.LAYOUT.ADMIM
        }
      }];
      /***/
    },

    /***/
    158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _main_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/routes */
      4806);
      /* harmony import */


      var _admin_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin/routes */
      4523);
      /* harmony import */


      var _blog_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog/routes */
      178);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [].concat(_toConsumableArray(_admin_routes__WEBPACK_IMPORTED_MODULE_1__.routes), _toConsumableArray(_main_routes__WEBPACK_IMPORTED_MODULE_0__.routes), _toConsumableArray(_blog_routes__WEBPACK_IMPORTED_MODULE_2__.routes));

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/enums/layout.enum */
      2716);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_components_alerts_list_alerts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/components/alerts-list/alerts-list.component */
      6773);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/header/header.component */
      3556);
      /* harmony import */


      var src_app_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/footer/footer.component */
      1229);

      function AppComponent_app_header_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        }
      }

      function AppComponent_app_footer_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-footer");
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(router) {
          _classCallCheck(this, _AppComponent);

          this.router = router;
          this.title = 'photo';
          this.layout = src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_0__.LAYOUT.MAIN;
          this.LAYOUT = src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_0__.LAYOUT;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.RoutesRecognized;
            })).subscribe(function (event) {
              var routerSnapshot = event.state.root.firstChild;
              var data = routerSnapshot.data;

              if (data.layout) {
                _this.layout = data.layout;
              } else {
                _this.layout = src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_0__.LAYOUT.MAIN;
              }

              console.log(_this.layout);
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 2,
        consts: [[1, "application-container"], [4, "ngIf"], [1, "content"], [1, "width-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-alerts-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_app_header_2_Template, 1, 0, "app-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppComponent_app_footer_6_Template, 1, 0, "app-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.layout === ctx.LAYOUT.MAIN);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.layout === ctx.LAYOUT.MAIN);
          }
        },
        directives: [src_app_shared_components_alerts_list_alerts_list_component__WEBPACK_IMPORTED_MODULE_1__.AlertsListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/header/header.component */
      3556);
      /* harmony import */


      var src_app_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/footer/footer.component */
      1229);
      /* harmony import */


      var src_app_main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/main/main.module */
      5705);
      /* harmony import */


      var src_app_blog_blog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/blog/blog.module */
      797);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      9408);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      4466);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var src_app_core_interceptors_domain_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/interceptors/domain.interceptor */
      1704);
      /* harmony import */


      var src_app_shared_handlers_global_error_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/handlers/global-error.handler */
      1727);
      /* harmony import */


      var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/alert.service */
      704);
      /* harmony import */


      var src_app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/core/interceptors/auth.interceptor */
      1603);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ErrorHandler,
          useClass: src_app_shared_handlers_global_error_handler__WEBPACK_IMPORTED_MODULE_9__.GlobalErrorHandler,
          deps: [src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_10__.AlertService]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
          useClass: src_app_core_interceptors_domain_interceptor__WEBPACK_IMPORTED_MODULE_8__.DomainInterceptor,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
          useClass: src_app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__.AuthInterceptor,
          multi: true
        }],
        imports: [[src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, src_app_blog_blog_module__WEBPACK_IMPORTED_MODULE_5__.BlogModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, src_app_main_main_module__WEBPACK_IMPORTED_MODULE_4__.MainModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_16__.EditorModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
          imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, src_app_blog_blog_module__WEBPACK_IMPORTED_MODULE_5__.BlogModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, src_app_main_main_module__WEBPACK_IMPORTED_MODULE_4__.MainModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_16__.EditorModule]
        });
      })();
      /***/

    },

    /***/
    9509: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminGuard": function AdminGuard() {
          return (
            /* binding */
            _AdminGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_auth_user_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/user-roles.enum */
      8680);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AdminGuard = /*#__PURE__*/function () {
        function _AdminGuard(authService, router) {
          _classCallCheck(this, _AdminGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(_AdminGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            return this.authService.isUserInRole(src_app_auth_user_roles_enum__WEBPACK_IMPORTED_MODULE_0__.USER_ROLES.ADMIN);
          }
        }]);

        return _AdminGuard;
      }();

      _AdminGuard.ɵfac = function AdminGuard_Factory(t) {
        return new (t || _AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _AdminGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AdminGuard,
        factory: _AdminGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    384: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8636);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var src_app_auth_user_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/user-roles.enum */
      8680);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      6491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http, router) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.router = router;
          this.loggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.isLoggedIn());
          this.loadToken();
        }

        _createClass(_AuthService, [{
          key: "dashboardUrl",
          get: function get() {
            return this.isUserInRole(src_app_auth_user_roles_enum__WEBPACK_IMPORTED_MODULE_0__.USER_ROLES.ADMIN) ? ['/admin'] : ['/dashboard'];
          }
        }, {
          key: "isUserInRole",
          value: function isUserInRole(role) {
            var user = JSON.parse(localStorage.getItem('user'));

            if (user) {
              return user.role === role;
            }

            return false;
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            if (localStorage.getItem('user')) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "authenticateUser",
          value: function authenticateUser(user) {
            var _this2 = this;

            return this.http.post('users/authenticate', user).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (res) {
              _this2.storeUserData(res.token, res.user);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('id_token');
            this.authToken = null;
            this.user = null;
            this.router.navigate(['/']);
            this.loggedInSubject.next(false);
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            var token = localStorage.getItem('id_token') || null;
            this.authToken = token;
          }
        }, {
          key: "storeUserData",
          value: function storeUserData(token, user) {
            localStorage.setItem('id_token', token);
            localStorage.setItem('user', JSON.stringify(user));
            this.authToken = token;
            this.user = user;
          }
        }, {
          key: "registerUser",
          value: function registerUser(user) {
            return this.http.post('users/register', user);
          }
        }, {
          key: "profile",
          value: function profile() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
            headers = headers.append('Authorization', this.authToken);
            return this.http.get('users/profile', {
              headers: headers
            });
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac
      });
      /***/
    },

    /***/
    8680: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "USER_ROLES": function USER_ROLES() {
          return (
            /* binding */
            _USER_ROLES
          );
        }
        /* harmony export */

      });

      var _USER_ROLES;

      (function (USER_ROLES) {
        USER_ROLES["ADMIN"] = "ADMIN";
        USER_ROLES["CUSTOMER"] = "CUSTOMER";
      })(_USER_ROLES || (_USER_ROLES = {}));
      /***/

    },

    /***/
    4223: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogGridComponent": function BlogGridComponent() {
          return (
            /* binding */
            _BlogGridComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_blog_services_blog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/blog/services/blog.service */
      9316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var src_app_shared_directives_server_src_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/directives/server-src.directive */
      6298);

      function BlogGridComponent_h1_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0411\u043B\u043E\u0433");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BlogGridComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogGridComponent_div_2_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var blog_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.handleCardClick(blog_r2._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var blog_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appServerSrc", blog_r2.cover);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 4, blog_r2.created_at, "shortDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](blog_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](blog_r2.subtitle);
        }
      }

      var _BlogGridComponent = /*#__PURE__*/function () {
        function _BlogGridComponent(router, blogService) {
          _classCallCheck(this, _BlogGridComponent);

          this.router = router;
          this.blogService = blogService;
          this.title = '';
          this.mainPage = false;
          this.blogs = [];
        }

        _createClass(_BlogGridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.blogService.getAll().subscribe(function (blogs) {
              _this3.blogs = blogs;
            });
          }
        }, {
          key: "handleCardClick",
          value: function handleCardClick(id) {
            this.router.navigate(['blog', id]);
          }
        }]);

        return _BlogGridComponent;
      }();

      _BlogGridComponent.ɵfac = function BlogGridComponent_Factory(t) {
        return new (t || _BlogGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_blog_services_blog_service__WEBPACK_IMPORTED_MODULE_0__.BlogService));
      };

      _BlogGridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BlogGridComponent,
        selectors: [["app-blog-grid"]],
        inputs: {
          title: "title",
          mainPage: "mainPage",
          num: "num",
          obj: "obj"
        },
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"], [1, "row", "my-4"], ["class", "blog-card col-sm-4", 3, "click", 4, "ngFor", "ngForOf"], [1, "blog-card", "col-sm-4", 3, "click"], ["alt", "", 2, "width", "100%", 3, "appServerSrc"], [1, "blog-title"], [1, "blog-description"]],
        template: function BlogGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlogGridComponent_h1_0_Template, 2, 0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BlogGridComponent_div_2_Template, 10, 7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.mainPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.blogs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, src_app_shared_directives_server_src_directive__WEBPACK_IMPORTED_MODULE_1__.ServerSrcDirective],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    9159: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogViewComponent": function BlogViewComponent() {
          return (
            /* binding */
            _BlogViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_blog_services_blog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/blog/services/blog.service */
      9316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_shared_pipes_safe_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/pipes/safe-html/safe-html.pipe */
      4699);

      var _BlogViewComponent = /*#__PURE__*/function () {
        function _BlogViewComponent(blogService, activatedRoute) {
          _classCallCheck(this, _BlogViewComponent);

          this.blogService = blogService;
          this.activatedRoute = activatedRoute;
        }

        _createClass(_BlogViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var id = this.activatedRoute.snapshot.params.id;
            this.blogService.getById(id).subscribe(function (blog) {
              return _this4.blog = blog;
            });
          }
        }]);

        return _BlogViewComponent;
      }();

      _BlogViewComponent.ɵfac = function BlogViewComponent_Factory(t) {
        return new (t || _BlogViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_blog_services_blog_service__WEBPACK_IMPORTED_MODULE_0__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };

      _BlogViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BlogViewComponent,
        selectors: [["app-blog-view"]],
        decls: 6,
        vars: 4,
        consts: [[3, "innerHTML"]],
        template: function BlogViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "blog-view works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "safeHtml");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.blog == null ? null : ctx.blog.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx.blog == null ? null : ctx.blog.content), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
          }
        },
        pipes: [src_app_shared_pipes_safe_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    797: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogModule": function BlogModule() {
          return (
            /* binding */
            _BlogModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var src_app_blog_blog_grid_blog_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/blog/blog-grid/blog-grid.component */
      4223);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      4466);
      /* harmony import */


      var _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog-view/blog-view.component */
      9159);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BlogModule = function _BlogModule() {
        _classCallCheck(this, _BlogModule);
      };

      _BlogModule.ɵfac = function BlogModule_Factory(t) {
        return new (t || _BlogModule)();
      };

      _BlogModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _BlogModule
      });
      _BlogModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_BlogModule, {
          declarations: [src_app_blog_blog_grid_blog_grid_component__WEBPACK_IMPORTED_MODULE_0__.BlogGridComponent, _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_2__.BlogViewComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
          exports: [src_app_blog_blog_grid_blog_grid_component__WEBPACK_IMPORTED_MODULE_0__.BlogGridComponent]
        });
      })();
      /***/

    },

    /***/
    178: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/enums/layout.enum */
      2716);
      /* harmony import */


      var src_app_blog_blog_grid_blog_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/blog/blog-grid/blog-grid.component */
      4223);
      /* harmony import */


      var src_app_blog_blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/blog/blog-view/blog-view.component */
      9159);

      var _routes2 = [{
        path: 'blog',
        component: src_app_blog_blog_grid_blog_grid_component__WEBPACK_IMPORTED_MODULE_1__.BlogGridComponent,
        data: {
          layout: src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_0__.LAYOUT.MAIN
        }
      }, {
        path: 'blog/:id',
        component: src_app_blog_blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_2__.BlogViewComponent,
        data: {
          layout: src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_0__.LAYOUT.MAIN
        }
      }];
      /***/
    },

    /***/
    9316: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogService": function BlogService() {
          return (
            /* binding */
            _BlogService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var _BlogService = /*#__PURE__*/function () {
        function _BlogService(http) {
          _classCallCheck(this, _BlogService);

          this.http = http;
        }

        _createClass(_BlogService, [{
          key: "getById",
          value: function getById(id) {
            return this.http.get("blogs/".concat(id));
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get('blogs');
          }
        }, {
          key: "save",
          value: function save(formData) {
            return this.http.post('blogs', formData);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("blogs/".concat(id));
          }
        }]);

        return _BlogService;
      }();

      _BlogService.ɵfac = function BlogService_Factory(t) {
        return new (t || _BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _BlogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _BlogService,
        factory: _BlogService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2716: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LAYOUT": function LAYOUT() {
          return (
            /* binding */
            _LAYOUT
          );
        }
        /* harmony export */

      });

      var _LAYOUT;

      (function (LAYOUT) {
        LAYOUT["MAIN"] = "MAIN";
        LAYOUT["ADMIM"] = "ADMIN";
      })(_LAYOUT || (_LAYOUT = {}));

      ;
      /***/
    },

    /***/
    1229: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 28,
        vars: 0,
        consts: [[1, "footer"], [1, "width-container", "row", "align-items-center", "justify-content-between"], [1, "logo", "col-md-2"], ["routerLink", "/", 1, "router-link"], ["src", "assets/images/logo.svg", "alt", "logo"], [1, "d-flex", "flex-column", "align-items-center", "col-auto"], ["href", "mailto:Dykyi.oleksandr.if@gmail.com", 1, "link-default"], [1, "fa", "fa-envelope", "mr-2", 2, "font-size", "14px"], ["href", "#", 1, "link-default"], [1, "fa", "fa-phone", "mr-2"], [1, "text-white"], [1, "fa", "fa-map-marker", "mr-2"], [1, "col-auto", "row", "justify-content-center"], [1, "social-link"], [1, "fa", "fa-instagram"], [1, "fa", "fa-facebook"], [1, "fa", "fa-youtube"], [1, "fa", "fa-telegram"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dykyi.oleksandr.if@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+38099999999");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u043C. \u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    3556: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);

      var _c0 = function _c0() {
        return ["/registration"];
      };

      var _c1 = function _c1() {
        return ["/login"];
      };

      function HeaderComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0423\u0432\u0456\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
        }
      }

      function HeaderComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041A\u0430\u0431\u0456\u043D\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_38_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0412\u0438\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r2.dashboardUrl);
        }
      }

      var _c2 = function _c2() {
        return ["/blog"];
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(authService, router) {
          _classCallCheck(this, _HeaderComponent);

          this.authService = authService;
          this.router = router;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.authService.loggedInSubject.subscribe(function (isLoggedIn) {
              return _this5.isLoggedIn = isLoggedIn;
            });
            this.dashboardUrl = this.authService.dashboardUrl;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 40,
        vars: 4,
        consts: [[1, "header"], [1, "width-container", "row", "align-items-center", "justify-content-between"], [1, "logo", "col-auto"], ["routerLink", "/", 1, "router-link"], ["src", "assets/images/logo.svg", "alt", "logo"], [1, "navigation-list", "col-auto"], [1, "navigation-link"], ["href", "#", 1, "link-default"], [1, "navigation-link", "nav-dropdown-menu"], [1, "nav-sub-list"], ["href", "#", 1, "link-default", 3, "routerLink"], ["class", "col-auto row justify-content-end", 4, "ngIf", "ngIfElse"], ["dashboardLink", ""], [1, "col-auto", "row", "justify-content-end"], [1, "navigation-link", "border-right"], [1, "link-default", 3, "routerLink"], ["href", "javascript:void(0)", 1, "link-default", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041F\u043E\u0441\u043B\u0443\u0433\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0412\u0435\u0441\u0456\u043B\u044C\u043D\u0430 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0421\u0456\u043C\u0435\u0439\u043D\u0430 \u0444\u043E\u0442\u043E\u0437\u0439\u043E\u043C\u043A\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F LoveStory");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0424\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0412\u0456\u0434\u0433\u0443\u043A\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0411\u043B\u043E\u0433");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, HeaderComponent_div_37_Template, 7, 4, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, HeaderComponent_ng_template_38_Template, 7, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn)("ngIfElse", _r1);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    1603: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthInterceptor": function AuthInterceptor() {
          return (
            /* binding */
            _AuthInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);

      var _AuthInterceptor = /*#__PURE__*/function () {
        function _AuthInterceptor(auhtService) {
          _classCallCheck(this, _AuthInterceptor);

          this.auhtService = auhtService;
        }

        _createClass(_AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (this.auhtService.authToken) {
              var domainRequest = request.clone({
                headers: request.headers.set('Authorization', this.auhtService.authToken)
              });
              return next.handle(domainRequest);
            } else {
              return next.handle(request);
            } // send cloned request with header to the next handler.

          }
        }]);

        return _AuthInterceptor;
      }();

      _AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || _AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthInterceptor,
        factory: _AuthInterceptor.ɵfac
      });
      /***/
    },

    /***/
    1704: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DomainInterceptor": function DomainInterceptor() {
          return (
            /* binding */
            _DomainInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DomainInterceptor = /*#__PURE__*/function () {
        function _DomainInterceptor() {
          _classCallCheck(this, _DomainInterceptor);
        }

        _createClass(_DomainInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (request.url.startsWith('http://') || request.url.startsWith('https://')) {
              return next.handle(request);
            }

            var domainRequest = request.clone({
              url: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverUrl + request.url
            }); // send cloned request with header to the next handler.

            return next.handle(domainRequest);
          }
        }]);

        return _DomainInterceptor;
      }();

      _DomainInterceptor.ɵfac = function DomainInterceptor_Factory(t) {
        return new (t || _DomainInterceptor)();
      };

      _DomainInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _DomainInterceptor,
        factory: _DomainInterceptor.ɵfac
      });
      /***/
    },

    /***/
    6894: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent(authService) {
          _classCallCheck(this, _DashboardComponent);

          this.authService = authService;
        }

        _createClass(_DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.authService.profile().subscribe(function (profile) {
              _this6.user = profile.user;
            });
          }
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 2,
        vars: 1,
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.name, " \u0432\u0456\u0442\u0430\u0454\u043C\u043E \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0456\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    3840: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/enums/alert-types.enum */
      7279);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/alert.service */
      704);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_shared_components_form_control_errors_form_control_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/form-control-errors/form-control-errors.component */
      1144);

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(alertService, authService, formBuilder, router) {
          _classCallCheck(this, _LoginComponent);

          this.alertService = alertService;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.router = router;
          this.form = this.formBuilder.group({
            username: '',
            password: ''
          });
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleSubmit",
          value: function handleSubmit() {
            var _this7 = this;

            if (!this.form.valid) {
              return;
            }

            var user = this.form.value;
            this.authService.authenticateUser(user).subscribe(function (response) {
              _this7.alertService.showAlert(src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__.ALERT_TYPES.SUCCESS, 'Ви успішно увійшли в систему');

              _this7.authService.loggedInSubject.next(true);

              _this7.router.navigate(_this7.authService.dashboardUrl);
            });
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 18,
        vars: 3,
        consts: [[1, "form-container", "my-4"], [3, "formGroup", "submit"], ["ngForm", "ngForm"], [1, "form-group"], ["for", "username"], ["required", "", "type", "text", "id", "username", "formControlName", "username", "placeholder", "\u041B\u043E\u0433\u0456\u043D", "minlength", "2", "maxlength", "30", 1, "form-control"], ["controlName", "username", 3, "ngForm"], ["for", "password"], ["required", "", "type", "password", "id", "password", "formControlName", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "minlength", "2", "maxlength", "30", 1, "form-control"], ["controlName", "password", 3, "ngForm"], [1, "button-group"], ["type", "submit", 1, "app-btn", "app-submit-btn"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0423\u0432\u0456\u0439\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_3_listener() {
              return ctx.handleSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u041B\u043E\u0433\u0456\u043D");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-form-control-errors", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u041F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-form-control-errors", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u0423\u0432\u0456\u0439\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForm", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForm", _r0);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, src_app_shared_components_form_control_errors_form_control_errors_component__WEBPACK_IMPORTED_MODULE_3__.FormControlErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    1680: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainGridComponent": function MainGridComponent() {
          return (
            /* binding */
            _MainGridComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _main_info_card_main_info_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../main-info-card/main-info-card.component */
      8262);
      /* harmony import */


      var src_app_blog_blog_grid_blog_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/blog/blog-grid/blog-grid.component */
      4223);
      /* harmony import */


      var src_app_shared_components_generated_content_generated_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/generated-content/generated-content.component */
      8381);

      var _MainGridComponent = /*#__PURE__*/function () {
        function _MainGridComponent() {
          _classCallCheck(this, _MainGridComponent);

          this.content = '';
          this.title = 'Блог';
          this.num = 1;
          this.obj = {
            name: '123',
            surname: '321'
          };
        }

        _createClass(_MainGridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainGridComponent;
      }();

      _MainGridComponent.ɵfac = function MainGridComponent_Factory(t) {
        return new (t || _MainGridComponent)();
      };

      _MainGridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MainGridComponent,
        selectors: [["app-main-grid"]],
        decls: 7,
        vars: 2,
        consts: [[1, "text-overlay"], ["src", "assets/images/1.jpg"], [1, "text-overlay-title"], [3, "mainPage"], [3, "content"]],
        template: function MainGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Lorem, ipsum dolor.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-main-info-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-blog-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-generated-content", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mainPage", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx.content);
          }
        },
        directives: [_main_info_card_main_info_card_component__WEBPACK_IMPORTED_MODULE_0__.MainInfoCardComponent, src_app_blog_blog_grid_blog_grid_component__WEBPACK_IMPORTED_MODULE_1__.BlogGridComponent, src_app_shared_components_generated_content_generated_content_component__WEBPACK_IMPORTED_MODULE_2__.GeneratedContentComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    8262: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainInfoCardComponent": function MainInfoCardComponent() {
          return (
            /* binding */
            _MainInfoCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MainInfoCardComponent = /*#__PURE__*/function () {
        function _MainInfoCardComponent() {
          _classCallCheck(this, _MainInfoCardComponent);
        }

        _createClass(_MainInfoCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainInfoCardComponent;
      }();

      _MainInfoCardComponent.ɵfac = function MainInfoCardComponent_Factory(t) {
        return new (t || _MainInfoCardComponent)();
      };

      _MainInfoCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MainInfoCardComponent,
        selectors: [["app-main-info-card"]],
        decls: 13,
        vars: 0,
        consts: [[1, "info-card"], [1, "row"], [1, "col-sm-7", "info-card-section"], [1, "info-card-title"], [1, "info-card-text"], ["href", "#", 1, "link-black", "info-card-link"], [1, "col-sm-5", "info-card-section", "info-card-section__bg", "shadowed"], [1, "info-card-photos"], ["src", "assets/images/1.jpg", "alt", ""]],
        template: function MainInfoCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem, ipsum. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sed tempora animi enim ducimus. Assumenda iste iusto dolore quo, nemo modi a. Odit aliquid recusandae accusamus ullam, ipsum nihil, expedita quidem dolor totam quo commodi excepturi officia tempora quam perferendis. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    5705: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainModule": function MainModule() {
          return (
            /* binding */
            _MainModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_blog_blog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/blog/blog.module */
      797);
      /* harmony import */


      var src_app_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/main/dashboard/dashboard.component */
      6894);
      /* harmony import */


      var src_app_main_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/main/login/login.component */
      3840);
      /* harmony import */


      var src_app_main_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/main/main-grid/main-grid.component */
      1680);
      /* harmony import */


      var _main_info_card_main_info_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main-info-card/main-info-card.component */
      8262);
      /* harmony import */


      var src_app_main_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/main/registration/registration.component */
      1396);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      4466);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MainModule = function _MainModule() {
        _classCallCheck(this, _MainModule);
      };

      _MainModule.ɵfac = function MainModule_Factory(t) {
        return new (t || _MainModule)();
      };

      _MainModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _MainModule
      });
      _MainModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[src_app_blog_blog_module__WEBPACK_IMPORTED_MODULE_0__.BlogModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_MainModule, {
          declarations: [src_app_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, src_app_main_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, src_app_main_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_3__.MainGridComponent, _main_info_card_main_info_card_component__WEBPACK_IMPORTED_MODULE_4__.MainInfoCardComponent, src_app_main_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__.RegistrationComponent],
          imports: [src_app_blog_blog_module__WEBPACK_IMPORTED_MODULE_0__.BlogModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    1396: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationComponent": function RegistrationComponent() {
          return (
            /* binding */
            _RegistrationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/enums/alert-types.enum */
      7279);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/alert.service */
      704);
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      384);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_shared_components_form_control_errors_form_control_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/form-control-errors/form-control-errors.component */
      1144);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function RegistrationComponent_small_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u0456 \u043D\u0435 \u0441\u043F\u0456\u0432\u043F\u0430\u0434\u0430\u044E\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/login"];
      };

      var _RegistrationComponent = /*#__PURE__*/function () {
        function _RegistrationComponent(alertsService, authService, formBuilder, router) {
          _classCallCheck(this, _RegistrationComponent);

          this.alertsService = alertsService;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.router = router;
          this.form = this.formBuilder.group({
            name: '',
            email: '',
            username: '',
            password: '',
            confirm_password: ''
          }, {
            validator: this.confirmPasswordValidator()
          });
        }

        _createClass(_RegistrationComponent, [{
          key: "confirmPasswordValidator",
          value: function confirmPasswordValidator() {
            return function (formGroup) {
              var isPasswordMatching = formGroup.get('confirm_password').value === formGroup.get('password').value;
              return !isPasswordMatching ? {
                confirmPassword: true
              } : null;
            };
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit() {
            var _this8 = this;

            if (this.form.invalid) {
              return;
            }

            var user = this.form.value;
            delete user.confirm_password;
            this.authService.registerUser(this.form.value).subscribe(function () {
              _this8.alertsService.showAlert(src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__.ALERT_TYPES.SUCCESS, 'Вас успішно зареєстровано!');

              _this8.router.navigate(['/login']);
            });
          }
        }]);

        return _RegistrationComponent;
      }();

      _RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
        return new (t || _RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _RegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _RegistrationComponent,
        selectors: [["app-registration"]],
        decls: 36,
        vars: 9,
        consts: [[1, "form-container", "my-4"], [3, "formGroup", "submit"], ["ngForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "\u0406\u043C\u044F", "required", "", "minlength", "2", "maxlength", "30", 1, "form-control"], ["controlName", "name", 3, "ngForm"], ["for", "email"], ["required", "", "email", "", "type", "email", "id", "email", "formControlName", "email", "placeholder", "email", "minlength", "2", "maxlength", "30", 1, "form-control"], ["controlName", "email", 3, "ngForm"], ["for", "username"], ["required", "", "type", "text", "id", "username", "formControlName", "username", "placeholder", "\u041B\u043E\u0433\u0456\u043D", "minlength", "2", "maxlength", "30", 1, "form-control"], ["controlName", "username", 3, "ngForm"], ["for", "password"], ["required", "", "type", "password", "id", "password", "formControlName", "password", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "minlength", "2", "maxlength", "30", 1, "form-control"], ["controlName", "password", 3, "ngForm"], ["for", "confirm_password"], ["required", "", "type", "password", "id", "confirm_password", "formControlName", "confirm_password", "placeholder", "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", 1, "form-control"], ["controlName", "confirm_password", 3, "ngForm"], ["class", "form-text text-danger", "translate", "", 4, "ngIf"], [1, "button-group"], ["type", "submit", 1, "app-btn", "app-submit-btn"], [1, "app-btn", 3, "routerLink"], ["translate", "", 1, "form-text", "text-danger"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_3_listener() {
              return ctx.handleSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0406\u043C'\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-form-control-errors", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-form-control-errors", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u041B\u043E\u0433\u0456\u043D");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-form-control-errors", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u041F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-form-control-errors", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "app-form-control-errors", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, RegistrationComponent_small_30_Template, 2, 0, "small", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u0423\u0432\u0456\u0439\u0442\u0438");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForm", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForm", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForm", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForm", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForm", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.errors && ctx.form.errors.confirmPassword && _r0.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, src_app_shared_components_form_control_errors_form_control_errors_component__WEBPACK_IMPORTED_MODULE_3__.FormControlErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    4806: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes3
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_main_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/main/main-grid/main-grid.component */
      1680);
      /* harmony import */


      var src_app_main_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/main/registration/registration.component */
      1396);
      /* harmony import */


      var src_app_main_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/main/login/login.component */
      3840);
      /* harmony import */


      var src_app_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/main/dashboard/dashboard.component */
      6894);
      /* harmony import */


      var src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/enums/layout.enum */
      2716);

      var _routes3 = [{
        path: '',
        component: src_app_main_main_grid_main_grid_component__WEBPACK_IMPORTED_MODULE_0__.MainGridComponent,
        data: {
          layout: src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_4__.LAYOUT.MAIN
        }
      }, {
        path: 'registration',
        component: src_app_main_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationComponent,
        data: {
          layout: src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_4__.LAYOUT.MAIN
        }
      }, {
        path: 'login',
        component: src_app_main_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        data: {
          layout: src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_4__.LAYOUT.MAIN
        }
      }, {
        path: 'dashboard',
        component: src_app_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        data: {
          layout: src_app_core_enums_layout_enum__WEBPACK_IMPORTED_MODULE_4__.LAYOUT.MAIN
        }
      }];
      /***/
    },

    /***/
    6773: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertsListComponent": function AlertsListComponent() {
          return (
            /* binding */
            _AlertsListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/enums/alert-types.enum */
      7279);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      5428);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/alert.service */
      704);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      4364);

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "app-alert-success": a0,
          "app-alert-danger": a1,
          "app-alert-error": a2
        };
      };

      function AlertsListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertsListComponent_div_1_Template_span_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var alert_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.handleClose(alert_r1.key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0423\u0432\u0430\u0433\u0430!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c0, alert_r1.value.type === ctx_r0.ALERT_TYPES.SUCCESS, alert_r1.value.type === ctx_r0.ALERT_TYPES.DANGER, alert_r1.value.type === ctx_r0.ALERT_TYPES.ERROR));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](alert_r1.value.text);
        }
      }

      var _AlertsListComponent = /*#__PURE__*/function () {
        function _AlertsListComponent(changeDetector, alertService) {
          _classCallCheck(this, _AlertsListComponent);

          this.changeDetector = changeDetector;
          this.alertService = alertService;
          this.alerts = new Map();
          this.ALERT_TYPES = src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__.ALERT_TYPES;
        }

        _createClass(_AlertsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.alertService.alerts.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (alert) {
              var key = new Date().getTime();

              _this9.alerts.set(key, alert);

              _this9.changeDetector.detectChanges();

              return key;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(5000)).subscribe(this.handleClose.bind(this));
          }
        }, {
          key: "handleClose",
          value: function handleClose(key) {
            this.alerts["delete"](key);
            this.changeDetector.detectChanges();
          }
        }]);

        return _AlertsListComponent;
      }();

      _AlertsListComponent.ɵfac = function AlertsListComponent_Factory(t) {
        return new (t || _AlertsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService));
      };

      _AlertsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AlertsListComponent,
        selectors: [["app-alerts-list"]],
        decls: 3,
        vars: 3,
        consts: [[1, "app-alerts-list"], [4, "ngFor", "ngForOf"], [1, "app-alert", "app-fade-out", 3, "ngClass"], [1, "app-close", 3, "click"], [1, "app-alert-header"], [1, "app-alert-content"]],
        template: function AlertsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AlertsListComponent_div_1_Template, 8, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx.alerts));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    7082: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileUploadComponent": function FileUploadComponent() {
          return (
            /* binding */
            _FileUploadComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);

      var _c0 = ["fileUpload"];

      function FileUploadComponent_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r4.name);
        }
      }

      function FileUploadComponent_div_1_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "em", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/api/files?key=" + file_r4.key + (ctx_r7.accessToken ? "?access_token=" + ctx_r7.accessToken : ""), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", file_r4.name, "\xA0 ");
        }
      }

      function FileUploadComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "em", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileUploadComponent_div_1_span_5_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FileUploadComponent_div_1_a_6_Template, 3, 2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileUploadComponent_div_1_Template_div_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var i_r5 = restoredCtx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.handleFileDelete(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "em", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !file_r4.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r4.key);
        }
      }

      function FileUploadComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "em", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.dragzone);
        }
      }

      function FileUploadComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "em", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.fileUploadError);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          required: a0
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          dragover: a0,
          error: a1
        };
      };

      var _FileUploadComponent = /*#__PURE__*/function () {
        function _FileUploadComponent(elementRef) {
          _classCallCheck(this, _FileUploadComponent);

          this.elementRef = elementRef;
          this.errorFileSizeMessage = 'The file you are trying to upload is too large.';
          this.errorFileExtensionMessage = 'The file format is not allowed.';
          this.errorFileNumberMessage = 'You exceed the allowed number of attachments.';
          this.allowedExtensions = ['png', 'jpeg', 'jpg'];
          this.maxSize = 5242880;
          this.multiple = false;
          this.dragOverCounter = 0;
          this.files = [];
        }

        _createClass(_FileUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fileUploadId = lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId('file-upload-');
          }
        }, {
          key: "handleDragOver",
          value: function handleDragOver(e) {
            // Default browser handler has to be prevented for this event.
            // Otherwise browser will try to open a file once `drop` happens.
            e.preventDefault();
            e.stopPropagation();
          }
        }, {
          key: "handleDragEnter",
          value: function handleDragEnter(e) {
            e.preventDefault();
            e.stopPropagation();
            ++this.dragOverCounter;
          }
        }, {
          key: "handleDragLeave",
          value: function handleDragLeave(e) {
            e.preventDefault();
            e.stopPropagation();
            --this.dragOverCounter;
          }
        }, {
          key: "handleDrop",
          value: function handleDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.dragOverCounter = 0;
            this.handleFileDrop(e.dataTransfer.files);
          }
        }, {
          key: "required",
          get: function get() {
            return this.elementRef.nativeElement.hasAttribute('required');
          }
        }, {
          key: "handleFileDrop",
          value: function handleFileDrop(files) {
            var _this10 = this;

            if (!files || !files.length) {
              return;
            }

            if (this.files.length + files.length > this.fileMaximumNumber) {
              this.fileUploadError = this.errorFileNumberMessage;
              return;
            }

            this.fileUploadError = null;

            var _loop = function _loop(i) {
              var file = files.item(i);

              if (file.size > _this10.maxSize) {
                _this10.fileUploadError = _this10.errorFileSizeMessage;
                return {
                  v: void 0
                };
              }

              if (_this10.allowedExtensions.every(function (e) {
                return !file.name.toLowerCase().endsWith(".".concat(e.toLowerCase()));
              })) {
                _this10.fileUploadError = _this10.errorFileExtensionMessage;
                return {
                  v: void 0
                };
              }
            };

            for (var i = 0; i < files.length; ++i) {
              var _ret = _loop(i);

              if (typeof _ret === "object") return _ret.v;
            }

            if (this.multiple) {
              this.files = this.files.concat(Array.from(files));
            } else {
              this.files = [files[0]];
            }

            this.emitFilesChanged();
          }
        }, {
          key: "handleFileDelete",
          value: function handleFileDelete(index) {
            var _this11 = this;

            // Timeout is required to run this code after the previous event is finished
            setTimeout(function () {
              _this11.fileUpload.nativeElement.value = '';

              _this11.files.splice(index, 1);

              _this11.emitFilesChanged();
            }, 0);
          }
        }, {
          key: "emitFilesChanged",
          value: function emitFilesChanged() {
            if (!this.onChange) {
              return;
            }

            if (!this.multiple) {
              this.onChange(this.files[0]);
            } else {
              this.onChange(this.files);
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {}
        }, {
          key: "writeValue",
          value: function writeValue(files) {
            if (!files) {
              files = [];
            } else if (!Array.isArray(files)) {
              files = [files];
            }

            this.files = files;
          }
        }]);

        return _FileUploadComponent;
      }();

      _FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
        return new (t || _FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _FileUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FileUploadComponent,
        selectors: [["app-file-upload"]],
        viewQuery: function FileUploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
          }
        },
        hostBindings: function FileUploadComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragover", function FileUploadComponent_dragover_HostBindingHandler($event) {
              return ctx.handleDragOver($event);
            })("dragenter", function FileUploadComponent_dragenter_HostBindingHandler($event) {
              return ctx.handleDragEnter($event);
            })("dragleave", function FileUploadComponent_dragleave_HostBindingHandler($event) {
              return ctx.handleDragLeave($event);
            })("drop", function FileUploadComponent_drop_HostBindingHandler($event) {
              return ctx.handleDrop($event);
            });
          }
        },
        inputs: {
          errorFileSizeMessage: "errorFileSizeMessage",
          errorFileExtensionMessage: "errorFileExtensionMessage",
          errorFileNumberMessage: "errorFileNumberMessage",
          allowedExtensions: "allowedExtensions",
          dragzone: "dragzone",
          maxSize: "maxSize",
          message: "message",
          multiple: "multiple",
          fileMaximumNumber: "fileMaximumNumber"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function () {
            return _FileUploadComponent;
          }),
          multi: true
        }])],
        decls: 11,
        vars: 16,
        consts: [[1, "app-file-upload"], ["class", "app-file-upload-item", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "app-file-upload-dropzone", 3, "for", "ngClass"], [4, "ngIf"], ["type", "file", 3, "id", "change"], ["fileUpload", ""], [1, "app-file-upload-item"], [1, "row"], [1, "col-10"], [1, "fa", "fa-lg", "fa-file-text-o"], ["class", "btn btn-link", "rel", "noopener", "target", "_blank", 3, "href", 4, "ngIf"], [1, "col-2", "text-right", "app-file-upload-item-delete", 3, "click"], [1, "fa", "fa-lg", "fa-times-circle"], ["rel", "noopener", "target", "_blank", 1, "btn", "btn-link", 3, "href"], [1, "fa", "fa-lg", "fa-eye"], [1, "fa", "fa-lg", "fa-paperclip"], [1, "fa", "fa-lg", "fa-times"]],
        template: function FileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FileUploadComponent_div_1_Template, 9, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FileUploadComponent_div_5_Template, 5, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FileUploadComponent_div_6_Template, 5, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_9_listener($event) {
              return ctx.handleFileDrop($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", ctx.fileUploadId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c2, ctx.dragOverCounter > 0, !!ctx.fileUploadError));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fileUploadError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.fileUploadError);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Note: Allowed extensions are ", ctx.allowedExtensions.join(" "), " and file size up to ", 5, " MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx.fileUploadId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("multiple", ctx.multiple || null);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.app-file-upload-dropzone[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #48494B;\n  border: 1px solid #101010;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  font-size: 16px;\n  font-weight: bold;\n  height: 100%;\n  height: 10px;\n  justify-content: center;\n  min-height: 80px;\n  opacity: 1;\n  padding: 1rem;\n}\n\n.app-file-upload-dropzone.error[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #fff;\n}\n\n.app-file-upload-dropzone.dragover[_ngcontent-%COMP%] {\n  background: blue;\n  color: #fff;\n}\n\n.app-file-upload-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 5px;\n  font-size: 14px;\n  line-height: 2em;\n  margin-bottom: 1rem;\n  padding: 5px 0.75rem;\n  height: 38px;\n}\n\n.app-file-upload-item[_ngcontent-%COMP%]   em.fa[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.app-file-upload-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: blue;\n  text-decoration: none;\n  text-transform: inherit;\n}\n\n.app-file-upload-item-delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQ0xhO0VETWIseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFGRjs7QUFJRTtFQUNFLHFCQ3BCSztFRHNCTCxXQUFBO0FBSEo7O0FBTUU7RUFDRSxnQkN6Qk07RUQyQk4sV0FBQTtBQUxKOztBQVNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBTkY7O0FBUUU7RUFDRSxXQ3pDTTtBRG1DVjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBUEo7O0FBV0E7RUFDRSxlQUFBO0FBUkYiLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiO1xuXG5pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcHAtZmlsZS11cGxvYWQtZHJvcHpvbmUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1ncmV5O1xuICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gY29sb3I6ICRwcmltYXJ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4OyAvLyBXb3JrYXJvdW5kIGZvciBJRSBhbGlnbiB2ZXJ0aWNhbGx5XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxcmVtO1xuXG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXI7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiAkY29sb3ItZGFuZ2VyLWhvdmVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgJi5kcmFnb3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uYXBwLWZpbGUtdXBsb2FkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogNXB4IDAuNzVyZW07XG4gIGhlaWdodDogMzhweDtcblxuICBlbS5mYSB7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB9XG59XG5cbi5hcHAtZmlsZS11cGxvYWQtaXRlbS1kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIkcHJpbWFyeS15ZWxsb3c6ICNmZmQxNTI7XG4kbGlnaHQtYmxhY2s6ICMxMDEwMTA7XG4kbGlnaHQtZ3JleTogI0Q5REREQztcbiRwcmltYXJ5LWdyZXk6ICM0ODQ5NEI7XG4kZGFuZ2VyOiByZWQ7XG4kcHJpbWFyeTogYmx1ZTtcblxuJGRlZmF1bHQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDsiXX0= */"]
      });
      /***/
    },

    /***/
    1144: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormControlErrorsComponent": function FormControlErrorsComponent() {
          return (
            /* binding */
            _FormControlErrorsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function FormControlErrorsComponent_small_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage(error_r1));
        }
      }

      var ERROR_MESSAGES_MAP = {
        app_integer: 'Number must be the integer',
        app_whitespace: 'Field can not contain only spaces',
        email: 'Невірний email',
        fileextension: 'File extension is not supported',
        filesize: 'File size is too big',
        format: 'Wrong date format',
        hijridate: 'Please enter a valid date',
        max: 'Max acceptable value is {{max}}',
        maxlength: 'Максимум {{requiredLength}} символів',
        min: 'Min acceptable value is {{max}}',
        minlength: 'Мінімум {{requiredLength}} символів',
        pattern: 'Wrong input format',
        required: 'Поле обов\'язкове до заповнення'
      };

      var _FormControlErrorsComponent = /*#__PURE__*/function () {
        function _FormControlErrorsComponent() {
          _classCallCheck(this, _FormControlErrorsComponent);

          this.customMessageKeys = {};
          this.errors = [];
        }

        _createClass(_FormControlErrorsComponent, [{
          key: "formControl",
          get: function get() {
            return this.ngForm.form.get(this.controlName);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subscriptions = [this.ngForm.ngSubmit.subscribe(this.buildErrors.bind(this)), this.formControl.statusChanges.subscribe(this.buildErrors.bind(this))];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscriptions) {
              this.subscriptions.forEach(function (s) {
                return s.unsubscribe();
              });
            }
          }
        }, {
          key: "buildErrors",
          value: function buildErrors() {
            if (this.errors.length) {
              this.errors = [];
            }

            if (this.formControl.dirty && this.formControl.touched || this.ngForm.submitted) {
              this.errors = Object.keys(this.formControl.errors || {});
            }
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(error) {
            if (error === 'minlength' || error === 'maxlength') {
              return ERROR_MESSAGES_MAP[error].replace('{{requiredLength}}', this.formControl.errors[error].requiredLength);
            }

            return this.customMessageKeys[error] || ERROR_MESSAGES_MAP[error];
          }
        }]);

        return _FormControlErrorsComponent;
      }();

      _FormControlErrorsComponent.ɵfac = function FormControlErrorsComponent_Factory(t) {
        return new (t || _FormControlErrorsComponent)();
      };

      _FormControlErrorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormControlErrorsComponent,
        selectors: [["app-form-control-errors"]],
        inputs: {
          controlName: "controlName",
          customMessageKeys: "customMessageKeys",
          ngForm: "ngForm"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "form-text text-danger", 4, "ngFor", "ngForOf"], [1, "form-text", "text-danger"]],
        template: function FormControlErrorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormControlErrorsComponent_small_0_Template, 2, 1, "small", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        encapsulation: 2
      });
      /***/
    },

    /***/
    8381: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeneratedContentComponent": function GeneratedContentComponent() {
          return (
            /* binding */
            _GeneratedContentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_pipes_safe_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/pipes/safe-html/safe-html.pipe */
      4699);

      var _GeneratedContentComponent = /*#__PURE__*/function () {
        function _GeneratedContentComponent() {
          _classCallCheck(this, _GeneratedContentComponent);

          this.content = '';
        }

        _createClass(_GeneratedContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _GeneratedContentComponent;
      }();

      _GeneratedContentComponent.ɵfac = function GeneratedContentComponent_Factory(t) {
        return new (t || _GeneratedContentComponent)();
      };

      _GeneratedContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _GeneratedContentComponent,
        selectors: [["app-generated-content"]],
        inputs: {
          content: "content"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "innerHTML"], [2, "clear", "both"]],
        template: function GeneratedContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "safeHtml");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.content), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        pipes: [src_app_shared_pipes_safe_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0ZWQtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    6298: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServerSrcDirective": function ServerSrcDirective() {
          return (
            /* binding */
            _ServerSrcDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ServerSrcDirective = /*#__PURE__*/function () {
        function _ServerSrcDirective(el) {
          _classCallCheck(this, _ServerSrcDirective);

          this.el = el;
          this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverUrl;
        }

        _createClass(_ServerSrcDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.el.nativeElement.src = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverUrl).concat(this.src);
          }
        }]);

        return _ServerSrcDirective;
      }();

      _ServerSrcDirective.ɵfac = function ServerSrcDirective_Factory(t) {
        return new (t || _ServerSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _ServerSrcDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _ServerSrcDirective,
        selectors: [["", "appServerSrc", ""]],
        inputs: {
          src: ["appServerSrc", "src"]
        }
      });
      /***/
    },

    /***/
    7279: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ALERT_TYPES": function ALERT_TYPES() {
          return (
            /* binding */
            _ALERT_TYPES
          );
        }
        /* harmony export */

      });

      var _ALERT_TYPES;

      (function (ALERT_TYPES) {
        ALERT_TYPES["SUCCESS"] = "SUCCESS";
        ALERT_TYPES["DANGER"] = "DANGER";
        ALERT_TYPES["ERROR"] = "ERROR";
      })(_ALERT_TYPES || (_ALERT_TYPES = {}));
      /***/

    },

    /***/
    1727: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalErrorHandler": function GlobalErrorHandler() {
          return (
            /* binding */
            _GlobalErrorHandler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/enums/alert-types.enum */
      7279);
      /* harmony import */


      var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/alert.service */
      704);

      var _GlobalErrorHandler = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(_GlobalErrorHandler, _angular_core__WEBPAC);

        var _super = _createSuper(_GlobalErrorHandler);

        function _GlobalErrorHandler(alertService) {
          var _this12;

          _classCallCheck(this, _GlobalErrorHandler);

          _this12 = _super.call(this);
          _this12.alertService = alertService;
          return _this12;
        }

        _createClass(_GlobalErrorHandler, [{
          key: "handleError",
          value: function handleError(error) {
            var _this13 = this;

            var messages = this.getErrorMessages(error);
            messages.forEach(function (message) {
              _this13.alertService.showAlert(src_app_shared_enums_alert_types_enum__WEBPACK_IMPORTED_MODULE_0__.ALERT_TYPES.ERROR, message.error);
            }); // delegate to the default handler

            _get(_getPrototypeOf(_GlobalErrorHandler.prototype), "handleError", this).call(this, error);
          }
        }, {
          key: "getErrorMessages",
          value: function getErrorMessages(error) {
            var _a;

            console.log(error);

            if (!error) {
              return [{
                error: 'Sorry, unknown error has occurred :('
              }];
            }

            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.msg) {
              return [{
                error: error.error.msg
              }];
            }

            if (error.message) {
              return [{
                error: error.message
              }];
            }
          }
        }]);

        return _GlobalErrorHandler;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHandler);

      _GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) {
        return new (t || _GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService));
      };

      _GlobalErrorHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _GlobalErrorHandler,
        factory: _GlobalErrorHandler.ɵfac
      });
      /***/
    },

    /***/
    4699: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SafeHtmlPipe": function SafeHtmlPipe() {
          return (
            /* binding */
            _SafeHtmlPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);

      var _SafeHtmlPipe = /*#__PURE__*/function () {
        function _SafeHtmlPipe(sanitized) {
          _classCallCheck(this, _SafeHtmlPipe);

          this.sanitized = sanitized;
        }

        _createClass(_SafeHtmlPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.sanitized.bypassSecurityTrustHtml(value);
          }
        }]);

        return _SafeHtmlPipe;
      }();

      _SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
        return new (t || _SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
      };

      _SafeHtmlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeHtml",
        type: _SafeHtmlPipe,
        pure: true
      });
      /***/
    },

    /***/
    704: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertService": function AlertService() {
          return (
            /* binding */
            _AlertService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AlertService = /*#__PURE__*/function () {
        function _AlertService() {
          _classCallCheck(this, _AlertService);

          this.alerts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(_AlertService, [{
          key: "showAlert",
          value: function showAlert(type, text) {
            this.alerts.next({
              type: type,
              text: text
            });
          }
        }]);

        return _AlertService;
      }();

      _AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || _AlertService)();
      };

      _AlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AlertService,
        factory: _AlertService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var src_app_shared_pipes_safe_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/pipes/safe-html/safe-html.pipe */
      4699);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var src_app_shared_components_alerts_list_alerts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/components/alerts-list/alerts-list.component */
      6773);
      /* harmony import */


      var src_app_shared_components_form_control_errors_form_control_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/form-control-errors/form-control-errors.component */
      1144);
      /* harmony import */


      var src_app_shared_components_generated_content_generated_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/generated-content/generated-content.component */
      8381);
      /* harmony import */


      var src_app_shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/file-upload/file-upload.component */
      7082);
      /* harmony import */


      var src_app_shared_directives_server_src_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/directives/server-src.directive */
      6298);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [src_app_shared_components_alerts_list_alerts_list_component__WEBPACK_IMPORTED_MODULE_1__.AlertsListComponent, src_app_shared_components_form_control_errors_form_control_errors_component__WEBPACK_IMPORTED_MODULE_2__.FormControlErrorsComponent, src_app_shared_components_generated_content_generated_content_component__WEBPACK_IMPORTED_MODULE_3__.GeneratedContentComponent, src_app_shared_pipes_safe_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe, src_app_shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__.FileUploadComponent, src_app_shared_directives_server_src_directive__WEBPACK_IMPORTED_MODULE_5__.ServerSrcDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
          exports: [src_app_shared_components_alerts_list_alerts_list_component__WEBPACK_IMPORTED_MODULE_1__.AlertsListComponent, src_app_shared_components_form_control_errors_form_control_errors_component__WEBPACK_IMPORTED_MODULE_2__.FormControlErrorsComponent, src_app_shared_components_generated_content_generated_content_component__WEBPACK_IMPORTED_MODULE_3__.GeneratedContentComponent, src_app_shared_pipes_safe_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe, src_app_shared_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__.FileUploadComponent, src_app_shared_directives_server_src_directive__WEBPACK_IMPORTED_MODULE_5__.ServerSrcDirective]
        });
      })();
      /***/

    },

    /***/
    2340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        serverUrl: 'http://localhost:8080/',
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map