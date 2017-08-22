/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/admin.js":
/***/ (function(module, exports) {

(function () {
    // 搜索框搜索
    $('.search').click(function () {
        var keyword = $('#keyword').val();
        var url = $(this).data('url') + keyword;
        window.location.href = url;
    });

    // 切换角色
    $('.toggle-type').click(function () {
        var url = $(this).data('url');
        var _this = this;
        $.ajax({
            url: url,
            method: 'put',
            dataType: 'json',
            success: function success(data) {
                if (data.status === 1) {
                    $(_this).text(data.type);
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr) {
                swal('', '请求出错，请刷新重试', 'error');
            }
        });
    });

    // 禁用用户
    $('.user-forbid').click(function () {
        var url = $(this).data('url');
        var _this = this;
        $.ajax({
            url: url,
            method: 'put',
            dataType: 'json',
            success: function success(data) {
                if (data.status === 1) {
                    $(_this).text(data.user_status);
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr) {
                swal('', '请求出错，请刷新重试', 'error');
            }
        });
    });

    // 删除用户
    $('.user-destroy').click(function () {
        var result = confirm('确认删除?');
        if (!result) {
            return false;
        }

        var url = $(this).data('url');
        var _this = this;

        $.ajax({
            url: url,
            method: 'delete',
            dataType: 'json',
            success: function success(data) {
                if (data.status === 1) {
                    $(_this).closest('tr').remove();
                    swal('', data.message, 'success');
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr) {
                swal('', '请求出错，请刷新重试', 'error');
            }
        });
    });

    // 图片删除
    $('.image-destroy').click(function () {
        var result = confirm('确认删除？');
        if (!result) {
            return false;
        }

        var url = $(this).data('url');
        var _this = this;
        $.ajax({
            url: url,
            method: 'delete',
            dataType: 'json',
            success: function success(data) {
                if (data.status === 1) {
                    $(_this).closest('tr').remove();
                    swal('', data.message, 'success');
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr) {
                swal('', '请求失败，请刷新重试', 'error');
            }
        });
    });

    // 评论删除comment-destroy
    $('.comment-destroy').click(function () {
        var result = confirm('确认删除？');
        if (!result) {
            return false;
        }

        var url = $(this).data('url');
        var _this = this;
        $.ajax({
            url: url,
            method: 'delete',
            dataType: 'json',
            success: function success(data) {
                if (data.status === 1) {
                    $(_this).closest('tr').remove();
                    swal('', data.message, 'success');
                } else {
                    swal('', data.message, 'warning');
                }
            },
            error: function error(xhr) {
                swal('', '请求失败，请刷新重试', 'error');
            }
        });
    });
})();

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/admin.js");


/***/ })

/******/ });