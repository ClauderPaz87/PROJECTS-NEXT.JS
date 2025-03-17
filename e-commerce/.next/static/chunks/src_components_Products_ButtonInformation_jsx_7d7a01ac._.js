(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_Products_ButtonInformation_jsx_7d7a01ac._.js", {

"[project]/src/components/Products/ButtonInformation.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$NextStore$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/NextStore.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ButtonInformation = ({ products })=>{
    _s();
    const { addProducts, productCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$NextStore$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNextStore"])();
    const btnAddCart = ()=>{
        const validationProduct = productCart.some((product)=>product.title === product.title);
        if (!validationProduct) {
            addProducts(products.id, products.image, products.title, products.price);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: ()=>btnAddCart(),
        className: "w-full max-w-sm min-w-[150px] text-white bg-teal-400    hover:bg-teal-500 cursor-pointer hover:-translate-y-1 duration-200 rounded-sm mt-3",
        children: "Adicionar ao carrinho"
    }, void 0, false, {
        fileName: "[project]/src/components/Products/ButtonInformation.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(ButtonInformation, "cVpVdkCy15wHtaaEhv+j3EVXG1M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$NextStore$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNextStore"]
    ];
});
_c = ButtonInformation;
const __TURBOPACK__default__export__ = ButtonInformation;
var _c;
__turbopack_context__.k.register(_c, "ButtonInformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_Products_ButtonInformation_jsx_7d7a01ac._.js.map