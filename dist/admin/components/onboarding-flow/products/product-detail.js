"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const medusa_react_1 = require("medusa-react");
const ui_1 = require("@medusajs/ui");
const ProductDetail = ({ onNext, isComplete, data }) => {
    var _a;
    const { publishable_api_keys: keys, isLoading } = (0, medusa_react_1.useAdminPublishableApiKeys)({
        offset: 0,
        limit: 1,
    });
    const api_key = ((_a = keys === null || keys === void 0 ? void 0 : keys[0]) === null || _a === void 0 ? void 0 : _a.id) || "pk_01H0PY648BTMEJR34ZDATXZTD9";
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ui_1.Text, { children: "On this page, you can view your product's details and edit them." }), (0, jsx_runtime_1.jsx)(ui_1.Text, { children: "You can preview your product using Medusa's Store APIs. You can copy any of the following code snippets to try it out." }), (0, jsx_runtime_1.jsx)("div", { children: !isLoading && ((0, jsx_runtime_1.jsxs)(ui_1.CodeBlock, { snippets: [
                        {
                            label: "cURL",
                            language: "bash",
                            code: `curl "http://localhost:9000/store/products/${data === null || data === void 0 ? void 0 : data.product_id}" -H "x-publishable-key: ${api_key}"`,
                        },
                        {
                            label: "Medusa JS Client",
                            language: "js",
                            code: `// Install the JS Client in your storefront project: @medusajs/medusa-js\n\nimport Medusa from "@medusajs/medusa-js"\n\nconst medusa = new Medusa({ publishableApiKey: "${api_key}"})\nconst product = await medusa.products.retrieve("${data === null || data === void 0 ? void 0 : data.product_id}")\nconsole.log(product.id)`,
                        },
                        {
                            label: "Medusa React",
                            language: "tsx",
                            code: `// Install the React SDK and required dependencies in your storefront project:\n// medusa-react @tanstack/react-query @medusajs/medusa\n\nimport { useProduct } from "medusa-react"\n\nconst { product } = useProduct("${data === null || data === void 0 ? void 0 : data.product_id}")\nconsole.log(product.id)`,
                        },
                    ], className: "my-6", children: [(0, jsx_runtime_1.jsx)(ui_1.CodeBlock.Header, {}), (0, jsx_runtime_1.jsx)(ui_1.CodeBlock.Body, {})] })) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsx)("a", { href: `http://localhost:9000/store/products/${data === null || data === void 0 ? void 0 : data.product_id}`, target: "_blank", children: (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "base", children: "Open preview in browser" }) }), !isComplete && ((0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "primary", size: "base", onClick: () => onNext(), children: "Next step" }))] })] }));
};
exports.default = ProductDetail;
