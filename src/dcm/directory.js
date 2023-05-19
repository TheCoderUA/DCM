"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directory = /** @class */ (function () {
    function Directory(name, owner, status) {
        var _this = this;
        /* Methods implementation */
        this.addContent = function (content) {
            _this.contents.add(content);
            // In case of successfull insertion - return true, otherwise - false:
            return _this.contents.has(content) ? true : false;
        };
        this.removeContent = function (content) {
            if (_this.contents.has(content)) {
                _this.contents.delete(content);
                return true;
            }
            else {
                return false;
            }
        };
        this.renameContent = function (content, newName) {
            if (_this.contents.has(content)) {
                for (var _i = 0, _a = _this.contents.values(); _i < _a.length; _i++) {
                    var element = _a[_i];
                    if (element === content) {
                        element.name = newName;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        };
        this.name = name;
        this.owner = owner;
        this.status = status;
        this.contents = new Set(); // Creating a empty set at beginning
    }
    return Directory;
}());
exports.default = Directory;
