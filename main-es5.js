function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _instruction_component_instruction_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./instruction-component/instruction-component.component */
    "./src/app/instruction-component/instruction-component.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");

    var routes = [{
      path: '',
      component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
    }, {
      path: 'instructions',
      component: _instruction_component_instruction_component_component__WEBPACK_IMPORTED_MODULE_2__["InstructionComponentComponent"]
    }, {
      path: 'game',
      component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'TicTacToe';
      }

      _createClass(AppComponent, [{
        key: "openNav",
        value: function openNav() {
          console.log("hai");
          document.getElementById("mySidenav").style.width = "250px";
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 0,
      consts: [["id", "mySidenav", 1, "sidenav"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], ["routerLink", "/game", 1, "button"], ["routerLink", "/instructions", 1, "button"], [1, "menu", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_1_listener() {
            return ctx.closeNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_7_listener() {
            return ctx.openNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u2630 Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n   font-family: cursive;\r\n }\r\n .menu[_ngcontent-%COMP%]\r\n {\r\n  font-size:4em;\r\n  cursor:pointer;\r\n  color:black;\r\n  margin-top: 1em;\r\n  position: absolute;\r\n  top: -40px;left:30px\r\n }\r\n .sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    background-color: gold;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    top: 0em;\r\n    padding-top: 35px;\r\n  }\r\n .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #000;\r\n    display: block;\r\n    transition: 0.3s;\r\n    margin-top:42px;\r\n  }\r\n .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #f1f1f1;\r\n  }\r\n .sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n @media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n  }\r\n h1[_ngcontent-%COMP%] {\r\n      color: black;\r\n      font-size: 50px;\r\n      align-content: center;\r\n  \r\n  }\r\n button[_ngcontent-%COMP%] {\r\n      background: blue;\r\n      color: #fff;\r\n      font-weight: bold;\r\n      border: 1px solid #000;\r\n      cursor: pointer;\r\n      width: 200px;\r\n      height: 40px;\r\n      font-size: 22px;\r\n      display: block;\r\n      margin: 10px auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7R0FDRSxvQkFBb0I7Q0FDdEI7Q0FDQTs7RUFFQyxhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVUsQ0FBQztDQUNaO0NBQ0M7SUFDRSxZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixpQkFBaUI7RUFDbkI7Q0FFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7Q0FFQTtJQUNFLGNBQWM7RUFDaEI7Q0FFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7Q0FFQTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUI7Q0FDRTtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YscUJBQXFCOztFQUV6QjtDQUNFO01BQ0UsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixZQUFZO01BQ1osWUFBWTtNQUNaLGVBQWU7TUFDZixjQUFjO01BQ2QsaUJBQWlCO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgKntcclxuICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiB9XHJcbiAubWVudVxyXG4ge1xyXG4gIGZvbnQtc2l6ZTo0ZW07XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC00MHB4O2xlZnQ6MzBweFxyXG4gfVxyXG4gIC5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRvcDogMGVtO1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWFyZ2luLXRvcDo0MnB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogYmx1ZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbiAgXHJcblxyXG4gIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _square_square_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./square/square.component */
    "./src/app/square/square.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/board/board.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");
    /* harmony import */


    var _instruction_component_instruction_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./instruction-component/instruction-component.component */
    "./src/app/instruction-component/instruction-component.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _square_square_component__WEBPACK_IMPORTED_MODULE_4__["SquareComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], _instruction_component_instruction_component_component__WEBPACK_IMPORTED_MODULE_7__["InstructionComponentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _square_square_component__WEBPACK_IMPORTED_MODULE_4__["SquareComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], _instruction_component_instruction_component_component__WEBPACK_IMPORTED_MODULE_7__["InstructionComponentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/board/board.component.ts":
  /*!******************************************!*\
    !*** ./src/app/board/board.component.ts ***!
    \******************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _square_square_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../square/square.component */
    "./src/app/square/square.component.ts");

    function BoardComponent_square_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "square", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerClick", function BoardComponent_square_6_Template_square_playerClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.clickHandler(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var square_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", square_r3);
      }
    }

    function BoardComponent_square_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "square", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerClick", function BoardComponent_square_9_Template_square_playerClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var i_r8 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.clickHandler(i_r8 + 3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var square_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", square_r7);
      }
    }

    function BoardComponent_square_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "square", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("playerClick", function BoardComponent_square_12_Template_square_playerClick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var i_r12 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.clickHandler(i_r12 + 6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var square_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", square_r11);
      }
    }

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);

        this.squares = [];
        this.turn = 'X';
        this.gameover = false;
        this.winner = null;
        this.myVar = false;
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 0; i < 9; i++) {
            this.squares[i] = null;
          }
        }
      }, {
        key: "clickHandler",
        value: function clickHandler(id) {
          console.log(id);

          if (!this.gameover) {
            if (this.squares[id] === null) {
              this.squares[id] = this.turn;
              this.changeTurn();
              this.checkWinner();
            }
          }
        }
      }, {
        key: "startGame",
        value: function startGame() {
          window.location.reload(true);
          this.turn = 'X';
          this.gameover = false;
        }
      }, {
        key: "changeTurn",
        value: function changeTurn() {
          if (this.turn === 'X') {
            this.turn = 'O';
          } else {
            this.turn = 'X';
          }
        }
      }, {
        key: "checkWinner",
        value: function checkWinner() {
          var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

          for (var _i = 0, _lines = lines; _i < _lines.length; _i++) {
            var line = _lines[_i];

            if (this.squares[line[0]] === this.squares[line[1]] && this.squares[line[1]] === this.squares[line[2]] && this.squares[line[0]] !== null) {
              this.gameover = true;
              this.winner = this.squares[line[0]];
              this.myVar = true;
              return;
            }
          }

          var cell = 0;
          this.squares.forEach(function (e) {
            cell += e !== null ? 1 : 0;
          });

          if (cell === 9) {
            this.gameover = true;
            this.winner = 'tie';
          }
        }
      }]);

      return BoardComponent;
    }();

    BoardComponent.ɵfac = function BoardComponent_Factory(t) {
      return new (t || BoardComponent)();
    };

    BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BoardComponent,
      selectors: [["board"]],
      decls: 17,
      vars: 17,
      consts: [[1, "game-board"], [1, "player"], [1, "blinking"], [1, "board"], [3, "value", "playerClick", 4, "ngFor", "ngForOf"], [1, "game-btn", 3, "click"], [3, "value", "playerClick"]],
      template: function BoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_square_6_Template, 1, 1, "square", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BoardComponent_square_9_Template, 1, 1, "square", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BoardComponent_square_12_Template, 1, 1, "square", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_div_click_15_listener() {
            return ctx.startGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Start Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.myVar ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.winner, " Congratulations !!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 6, ctx.squares, 0, 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 10, ctx.squares, 3, 6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 14, ctx.squares, 6));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _square_square_component__WEBPACK_IMPORTED_MODULE_2__["SquareComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]],
      styles: [".blinking[_ngcontent-%COMP%] {\r\n    width: 91%;\r\n\theight:50px;\r\n    display: block;\r\n    text-align: center;\r\n    font-family: cursive;\r\n    font-size: 25px;\r\n\talign-content: center;\r\n    margin: 2px;\r\n    -webkit-animation:blinkingText 1.2s infinite;\r\n            animation:blinkingText 1.2s infinite;\r\n}\r\n@-webkit-keyframes blinkingText{\r\n    0%{     color: rgb(240, 71, 85);    }\r\n    49%{    color: rgb(199, 25, 25); }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: rgb(241, 10, 10);    }\r\n}\r\n@keyframes blinkingText{\r\n    0%{     color: rgb(240, 71, 85);    }\r\n    49%{    color: rgb(199, 25, 25); }\r\n    60%{    color: transparent; }\r\n    99%{    color:transparent;  }\r\n    100%{   color: rgb(241, 10, 10);    }\r\n}\r\n.game-btn[_ngcontent-%COMP%] {\r\n    background-color: #ffab00;\r\n    border: none;\r\n    color: blue;\r\n    padding: 25px 42px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7Q0FDYixXQUFXO0lBQ1IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtDQUNsQixxQkFBcUI7SUFDbEIsV0FBVztJQUNYLDRDQUFvQztZQUFwQyxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFFBQVEsdUJBQXVCLEtBQUs7SUFDcEMsUUFBUSx1QkFBdUIsRUFBRTtJQUNqQyxRQUFRLGtCQUFrQixFQUFFO0lBQzVCLFFBQVEsaUJBQWlCLEdBQUc7SUFDNUIsUUFBUSx1QkFBdUIsS0FBSztBQUN4QztBQU5BO0lBQ0ksUUFBUSx1QkFBdUIsS0FBSztJQUNwQyxRQUFRLHVCQUF1QixFQUFFO0lBQ2pDLFFBQVEsa0JBQWtCLEVBQUU7SUFDNUIsUUFBUSxpQkFBaUIsR0FBRztJQUM1QixRQUFRLHVCQUF1QixLQUFLO0FBQ3hDO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGlua2luZyB7XHJcbiAgICB3aWR0aDogOTElO1xyXG5cdGhlaWdodDo1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGFuaW1hdGlvbjpibGlua2luZ1RleHQgMS4ycyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJsaW5raW5nVGV4dHtcclxuICAgIDAleyAgICAgY29sb3I6IHJnYigyNDAsIDcxLCA4NSk7ICAgIH1cclxuICAgIDQ5JXsgICAgY29sb3I6IHJnYigxOTksIDI1LCAyNSk7IH1cclxuICAgIDYwJXsgICAgY29sb3I6IHRyYW5zcGFyZW50OyB9XHJcbiAgICA5OSV7ICAgIGNvbG9yOnRyYW5zcGFyZW50OyAgfVxyXG4gICAgMTAwJXsgICBjb2xvcjogcmdiKDI0MSwgMTAsIDEwKTsgICAgfVxyXG59XHJcblxyXG4uZ2FtZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWIwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZzogMjVweCA0MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'board',
          templateUrl: './board.component.html',
          styleUrls: ['./board.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../board/board.component */
    "./src/app/board/board.component.ts");

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent() {
        _classCallCheck(this, GameComponent);
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)();
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["game"]],
      decls: 6,
      vars: 0,
      consts: [[1, "main"], ["src", "../../assets/tic.gif", "alt", "Loading..", 1, "headimg"], [1, "board"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "board");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]],
      styles: [".main[_ngcontent-%COMP%]\r\n {\r\n     display: grid;\r\n     grid-template-columns: 100%;\r\n }\r\n .headimg[_ngcontent-%COMP%]{\r\n    width: 10em;\r\n    height: 5em;  \r\n    margin-left: 36em;\r\n}\r\n .board[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDOztLQUVJLGFBQWE7S0FDYiwyQkFBMkI7Q0FDL0I7Q0FDQTtJQUNHLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0NBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAubWFpblxyXG4ge1xyXG4gICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gfVxyXG4gLmhlYWRpbWd7XHJcbiAgICB3aWR0aDogMTBlbTtcclxuICAgIGhlaWdodDogNWVtOyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMzZlbTtcclxufVxyXG5cclxuLmJvYXJkXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'game',
          templateUrl: './game.component.html',
          styleUrls: ['./game.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/instruction-component/instruction-component.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/instruction-component/instruction-component.component.ts ***!
    \**************************************************************************/

  /*! exports provided: InstructionComponentComponent */

  /***/
  function srcAppInstructionComponentInstructionComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstructionComponentComponent", function () {
      return InstructionComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var InstructionComponentComponent = /*#__PURE__*/function () {
      function InstructionComponentComponent() {
        _classCallCheck(this, InstructionComponentComponent);
      }

      _createClass(InstructionComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InstructionComponentComponent;
    }();

    InstructionComponentComponent.ɵfac = function InstructionComponentComponent_Factory(t) {
      return new (t || InstructionComponentComponent)();
    };

    InstructionComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstructionComponentComponent,
      selectors: [["app-instruction-component"]],
      decls: 18,
      vars: 0,
      consts: [[1, "container"], ["id", "start", "routerLink", "/game"]],
      template: function InstructionComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 1. The game is played on a grid that's 3 squares by 3 squares.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 2. Player 1 is \"X\" and Player 2 is \"O\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 3. Players take turns putting their marks in empty squares.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 4. Any player to get 3 of same (up, down, across, or diagonally) is the winner.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 5. When all 9 squares are full, the game is over. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Now...!!!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n\r\n    background-color: white;\r\n    color: black;\r\n}\r\n.container[_ngcontent-%COMP%]\r\n{\r\nwidth:760px;\r\nheight:450px;\r\ntop:30px;\r\nleft:30px;\r\nmargin: 50px auto 0 auto;\r\nfont-family: sans-serif;\r\nfont-size: 30px;\r\nalign-content: center;\r\n}\r\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    font-family: cursive;\r\n    background-color: blue;\r\n    border: none;\r\n    color: white;\r\n    padding: 25px 42px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y3Rpb24tY29tcG9uZW50L2luc3RydWN0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWixRQUFRO0FBQ1IsU0FBUztBQUNULHdCQUF3QjtBQUN4Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9uLWNvbXBvbmVudC9pbnN0cnVjdGlvbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jb250YWluZXJcclxue1xyXG53aWR0aDo3NjBweDtcclxuaGVpZ2h0OjQ1MHB4O1xyXG50b3A6MzBweDtcclxubGVmdDozMHB4O1xyXG5tYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIHB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjVweCA0MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-instruction-component',
          templateUrl: './instruction-component.component.html',
          styleUrls: ['./instruction-component.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/square/square.component.ts":
  /*!********************************************!*\
    !*** ./src/app/square/square.component.ts ***!
    \********************************************/

  /*! exports provided: SquareComponent */

  /***/
  function srcAppSquareSquareComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SquareComponent", function () {
      return SquareComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SquareComponent = /*#__PURE__*/function () {
      function SquareComponent() {
        _classCallCheck(this, SquareComponent);

        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SquareComponent, [{
        key: "clickHandler",
        value: function clickHandler() {
          this.click.emit('');
        }
      }]);

      return SquareComponent;
    }();

    SquareComponent.ɵfac = function SquareComponent_Factory(t) {
      return new (t || SquareComponent)();
    };

    SquareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SquareComponent,
      selectors: [["square"]],
      hostBindings: function SquareComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SquareComponent_click_HostBindingHandler() {
            return ctx.clickHandler();
          });
        }
      },
      inputs: {
        value: "value"
      },
      outputs: {
        click: "playerClick"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "cell"]],
      template: function SquareComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value, "");
        }
      },
      styles: [".cell[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 100px;\r\n    color: #FFC300 ;\r\n    border: 7px solid black;\r\n    float: left;\r\n    font-size: 5em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3F1YXJlL3NxdWFyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zcXVhcmUvc3F1YXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBjb2xvcjogI0ZGQzMwMCA7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SquareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'square',
          templateUrl: './square.component.html',
          styleUrls: ['./square.component.css']
        }]
      }], function () {
        return [];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        click: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['playerClick']
        }],
        clickHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\angular_projects\Tic-Tac-Toe-Angular\TicTacToe\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map