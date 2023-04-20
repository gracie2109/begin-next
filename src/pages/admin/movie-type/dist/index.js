"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var link_1 = require("next/link");
var antd_1 = require("antd");
var utils_1 = require("@/utils");
var common_1 = require("@/components/common");
var react_1 = require("react");
var hooks_1 = require("@/hooks");
var router_1 = require("next/router");
var hooks_2 = require("@/app/hooks");
var actions_1 = require("@/features/movie-type/actions");
var Text = antd_1.Typography.Text;
var FaArrowRight = utils_1.SharedIcons.FaArrowRight, HighlightOutlined = utils_1.SharedIcons.HighlightOutlined, PlusOutlined = utils_1.SharedIcons.PlusOutlined;
var MovieFormat = function () {
    var getColumnSearchProps = hooks_1.useSearchTable().getColumnSearchProps;
    var route = router_1.useRouter();
    var _a = react_1.useState([]), selectedArr = _a[0], setSelectedArr = _a[1];
    var dispatch = hooks_2.useAppDispatch();
    var _b = hooks_2.useAppSelector(function (state) { return state.listMovieTypeReducer; }), data = _b.data, pending = _b.pending, error = _b.error;
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(actions_1.listMovieTypes())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); }); })();
    }, []);
    var columns = [
        __assign(__assign(__assign({}, utils_1.getColumnTable('name')), getColumnSearchProps('name')), { render: function (_, _a) {
                var name = _a.name, id = _a.id;
                return React.createElement(link_1["default"], { href: "/admin/movie-type/" + id },
                    React.createElement(Text, null, name));
            } }),
        __assign(__assign({}, utils_1.getColumnTable('updateAt')), { render: function (_, _a) {
                var updateAt = _a.updateAt;
                return (React.createElement(React.Fragment, null,
                    " ",
                    utils_1.compareDate(updateAt).covertDate));
            } }),
        __assign({}, utils_1.getColumnTable('credit')),
        {
            title: "action",
            key: "action",
            render: function (_, _a) {
                var id = _a.id, name = _a.name;
                return (React.createElement(antd_1.Tooltip, { title: "Edit" },
                    " ",
                    React.createElement(HighlightOutlined, { onClick: function () { route.push("/admin/movie/" + id); } })));
            },
            width: 120
        },
    ];
    var dataSource = data.map(function (item, index) {
        return {
            key: index,
            id: item._id,
            name: utils_1.formatWord(item.name, "title"),
            updateAt: item.updatedAt,
            credit: item.imdbId ? "IMDB" : "Thủ công"
        };
    });
    console.log("selectedArr", selectedArr);
    var components = [
        {
            key: 1,
            comp: React.createElement(link_1["default"], { href: "/admin/movie-type/create" },
                " ",
                React.createElement(antd_1.Button, { type: "dashed", icon: React.createElement(PlusOutlined, null) }, "T\u1EA1o danh s\u00E1ch"))
        },
        {
            key: 2,
            comp: React.createElement(link_1["default"], { href: "/admin/movie" },
                " ",
                React.createElement(antd_1.Button, { type: "primary", icon: React.createElement(FaArrowRight, null) }, "Danh s\u00E1ch phim"))
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(common_1.HeaderAction, { title: "Danh s\u00E1ch th\u1EC3 lo\u1EA1i phim", components: components }),
        React.createElement(common_1.DataTable, { data: dataSource, columns: columns, expandTable: false, loading: pending, PS: 7, selectedArr: selectedArr, setSelectedArr: setSelectedArr })));
};
exports["default"] = MovieFormat;
MovieFormat.Layout = "Admin";
