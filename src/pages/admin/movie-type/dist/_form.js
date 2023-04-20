"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var MovieFormatDetailForm = function () {
    var onFinish = function (values) {
        console.log("Success:", values);
    };
    var onFinishFailed = function (errorInfo) {
        console.log("Failed:", errorInfo);
    };
    return (React.createElement(antd_1.Form, { name: "basic", style: { marginTop: "3rem" }, onFinish: onFinish, onFinishFailed: onFinishFailed },
        React.createElement(antd_1.Form.Item, { label: "name", name: "name" },
            React.createElement(antd_1.Input, null)),
        React.createElement(antd_1.Form.Item, { wrapperCol: { offset: "-90%", span: 24 } },
            React.createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit"))));
};
exports["default"] = MovieFormatDetailForm;
