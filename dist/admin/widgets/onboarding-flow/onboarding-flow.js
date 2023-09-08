"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const medusa_react_1 = require("medusa-react");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const order_detail_1 = __importDefault(require("../../components/onboarding-flow/orders/order-detail"));
const orders_list_1 = __importDefault(require("../../components/onboarding-flow/orders/orders-list"));
const product_detail_1 = __importDefault(require("../../components/onboarding-flow/products/product-detail"));
const products_list_1 = __importDefault(require("../../components/onboarding-flow/products/products-list"));
const ui_1 = require("@medusajs/ui");
const accordion_1 = __importDefault(require("../../components/shared/accordion"));
const get_started_1 = __importDefault(require("../../components/shared/icons/get-started"));
const STEP_FLOW = [
    "create_product",
    "preview_product",
    "create_order",
    "setup_finished",
];
const QUERY_KEY = ["onboarding_state"];
const OnboardingFlow = (props) => {
    var _a, _b;
    const { data, isLoading } = (0, medusa_react_1.useAdminCustomQuery)("/onboarding", QUERY_KEY);
    const { mutate } = (0, medusa_react_1.useAdminCustomPost)("/onboarding", QUERY_KEY);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const currentStep = (_a = data === null || data === void 0 ? void 0 : data.status) === null || _a === void 0 ? void 0 : _a.current_step;
    const [openStep, setOpenStep] = (0, react_1.useState)(currentStep);
    const [completed, setCompleted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setOpenStep(currentStep);
        if (currentStep === STEP_FLOW[STEP_FLOW.length - 1])
            setCompleted(true);
    }, [currentStep]);
    if (!isLoading &&
        ((_b = data === null || data === void 0 ? void 0 : data.status) === null || _b === void 0 ? void 0 : _b.is_complete) &&
        !localStorage.getItem("override_onboarding_finish"))
        return null;
    const updateServerState = (payload, onSuccess = () => { }) => {
        mutate(payload, { onSuccess });
    };
    const onStart = () => {
        updateServerState({ current_step: STEP_FLOW[0] });
        navigate(`/a/products`);
    };
    const setStepComplete = ({ step_id, extraData, onComplete, }) => {
        const next = STEP_FLOW[STEP_FLOW.findIndex((step) => step === step_id) + 1];
        updateServerState({ current_step: next, ...extraData }, onComplete);
    };
    const goToProductView = (product) => {
        setStepComplete({
            step_id: "create_product",
            extraData: { product_id: product.id },
            onComplete: () => navigate(`/a/products/${product.id}`),
        });
    };
    const goToOrders = () => {
        setStepComplete({
            step_id: "preview_product",
            onComplete: () => navigate(`/a/orders`),
        });
    };
    const goToOrderView = (order) => {
        setStepComplete({
            step_id: "create_order",
            onComplete: () => navigate(`/a/orders/${order.id}`),
        });
    };
    const onComplete = () => {
        setCompleted(true);
    };
    const onHide = () => {
        updateServerState({ is_complete: true });
    };
    const Steps = [
        {
            id: "create_product",
            title: "Create Product",
            component: products_list_1.default,
            onNext: goToProductView,
        },
        {
            id: "preview_product",
            title: "Preview Product",
            component: product_detail_1.default,
            onNext: goToOrders,
        },
        {
            id: "create_order",
            title: "Create an Order",
            component: orders_list_1.default,
            onNext: goToOrderView,
        },
        {
            id: "setup_finished",
            title: "Setup Finished: Start developing with Medusa",
            component: order_detail_1.default,
        },
    ];
    const isStepComplete = (step_id) => STEP_FLOW.indexOf(currentStep) > STEP_FLOW.indexOf(step_id);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ui_1.Container, { className: (0, ui_1.clx)("text-ui-fg-subtle px-0 pt-0 pb-4", {
                "mb-4": completed
            }), children: (0, jsx_runtime_1.jsxs)(accordion_1.default, { type: "single", value: openStep, onValueChange: (value) => setOpenStep(value), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, ui_1.clx)("flex py-6 px-8", {
                            "items-start": completed,
                            "items-center": !completed
                        }), children: [(0, jsx_runtime_1.jsx)("div", { className: "w-12 h-12 p-1 flex justify-center items-center rounded-full bg-ui-bg-base shadow-elevation-card-rest mr-4", children: (0, jsx_runtime_1.jsx)(get_started_1.default, {}) }), !completed ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h1", className: "text-ui-fg-base", children: "Get started" }), (0, jsx_runtime_1.jsx)(ui_1.Text, { children: "Learn the basics of Medusa by creating your first order." })] }), (0, jsx_runtime_1.jsx)("div", { className: "ml-auto flex items-start gap-2", children: !!currentStep ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: currentStep === STEP_FLOW[STEP_FLOW.length - 1] ? ((0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "primary", size: "base", onClick: () => onComplete(), children: "Complete Setup" })) : ((0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "base", onClick: () => onHide(), children: "Cancel Setup" })) })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "base", onClick: () => onHide(), children: "Close" }), (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "primary", size: "base", onClick: () => onStart(), children: "Begin setup" })] })) })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ui_1.Heading, { level: "h1", className: "text-ui-fg-base", children: "Thank you for completing the setup guide!" }), (0, jsx_runtime_1.jsxs)(ui_1.Text, { children: ["This whole experience was built using our new", " ", (0, jsx_runtime_1.jsx)("strong", { children: "widgets" }), " feature.", (0, jsx_runtime_1.jsx)("br", {}), " You can find out more details and build your own by following", " ", (0, jsx_runtime_1.jsx)("a", { href: "https://docs.medusajs.com/admin/onboarding?ref=onboarding", target: "_blank", className: "text-blue-500 font-semibold", children: "our guide" }), "."] })] }), (0, jsx_runtime_1.jsx)("div", { className: "ml-auto flex items-start gap-2", children: (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "secondary", size: "base", onClick: () => onHide(), children: "Close" }) })] }))] }), (0, jsx_runtime_1.jsx)("div", { children: (!completed ? Steps : Steps.slice(-1)).map((step) => {
                            const isComplete = isStepComplete(step.id);
                            const isCurrent = currentStep === step.id;
                            return ((0, jsx_runtime_1.jsx)(accordion_1.default.Item, { title: step.title, value: step.id, headingSize: "medium", active: isCurrent, complete: isComplete, disabled: !isComplete && !isCurrent, ...(!isComplete &&
                                    !isCurrent && {
                                    customTrigger: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
                                }), children: (0, jsx_runtime_1.jsx)("div", { className: "pl-14 pb-6 pr-7", children: (0, jsx_runtime_1.jsx)(step.component, { onNext: step.onNext, isComplete: isComplete, data: data === null || data === void 0 ? void 0 : data.status, ...props }) }) }, step.id));
                        }) })] }) }) }));
};
exports.config = {
    zone: [
        "product.list.before",
        "product.details.before",
        "order.list.before",
        "order.details.before",
    ],
};
exports.default = OnboardingFlow;
