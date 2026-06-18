(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/data/lab-images.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "src": "Images/Gallery/Image1.jpg",
        "caption": "Lab photo 1 — Pooja"
    },
    {
        "src": "Images/Gallery/Image2.jpg",
        "caption": "Lab photo 2 — Pooja"
    },
    {
        "src": "Images/Gallery/Image5.jpg",
        "caption": "Lab photo 5 — Workshop"
    },
    {
        "src": "Images/Gallery/image6.jpg",
        "caption": "Lab photo 6 — Workshop"
    },
    {
        "src": "Images/Gallery/image7.jpg",
        "caption": "Lab photo 7 — Workshop"
    },
    {
        "src": "Images/Gallery/Image8.jpg",
        "caption": "Lab photo 8 — Workshop"
    },
    {
        "src": "Images/Gallery/Image9.jpg",
        "caption": "Lab photo 9 — Workshop"
    },
    {
        "src": "Images/Gallery/Image3.jpg",
        "caption": "Lab photo 3 — Workshop"
    },
    {
        "src": "Images/Gallery/Image4.jpg",
        "caption": "Lab photo 4 — Workshop"
    },
    {
        "src": "Images/Gallery/Image10.jpg",
        "caption": "Lab photo 10 — Workshop"
    },
    {
        "src": "Images/Gallery/Image11.jpg",
        "caption": "Lab photo 11 — Internship June-2025"
    },
    {
        "src": "Images/Gallery/Image12.jpg",
        "caption": "Lab photo 12 — Fun"
    },
    {
        "src": "Images/Gallery/image13.jpg",
        "caption": "Lab photo 13 — PCB Master"
    },
    {
        "src": "Images/Gallery/image14.jpg",
        "caption": "Workshop"
    },
    {
        "src": "Images/Gallery/image15.jpg",
        "caption": "Workshop"
    },
    {
        "src": "Images/Gallery/image16.jpg",
        "caption": "Workshop"
    },
    {
        "src": "Images/Gallery/image17.jpg",
        "caption": "Workshop"
    },
    {
        "src": "Images/Gallery/image18.jpg",
        "caption": "Workshop"
    },
    {
        "src": "Images/Gallery/image19.jpg",
        "caption": "Workshop"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$src$2f$data$2f$lab$2d$images$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/data/lab-images.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LabImages() {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$src$2f$data$2f$lab$2d$images$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const autoPlayDelay = 5000;
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const goToImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LabImages.useCallback[goToImage]": (index)=>{
            let nextIndex = index;
            if (index < 0) nextIndex = images.length - 1;
            if (index >= images.length) nextIndex = 0;
            setCurrentIndex(nextIndex);
            setProgress(0);
            setZoomLevel(1);
        }
    }["LabImages.useCallback[goToImage]"], [
        images.length
    ]);
    const nextImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LabImages.useCallback[nextImage]": ()=>goToImage(currentIndex + 1)
    }["LabImages.useCallback[nextImage]"], [
        currentIndex,
        goToImage
    ]);
    const prevImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LabImages.useCallback[prevImage]": ()=>goToImage(currentIndex - 1)
    }["LabImages.useCallback[prevImage]"], [
        currentIndex,
        goToImage
    ]);
    const togglePlayPause = ()=>{
        setIsPlaying(!isPlaying);
    };
    const shuffleImages = ()=>{
        const shuffled = [
            ...images
        ].sort(()=>Math.random() - 0.5);
        setImages(shuffled);
        setCurrentIndex(0);
        setProgress(0);
    };
    const toggleFullscreen = ()=>{
        setIsFullscreen(!isFullscreen);
    };
    const zoomIn = ()=>setZoomLevel((prev)=>Math.min(prev + 0.25, 3));
    const zoomOut = ()=>setZoomLevel((prev)=>Math.max(prev - 0.25, 0.5));
    const resetZoom = ()=>setZoomLevel(1);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LabImages.useEffect": ()=>{
            const handleKeyDown = {
                "LabImages.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'ArrowLeft') prevImage();
                    if (e.key === 'ArrowRight') nextImage();
                    if (e.key === ' ') {
                        e.preventDefault();
                        togglePlayPause();
                    }
                    if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
                    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
                }
            }["LabImages.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "LabImages.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["LabImages.useEffect"];
        }
    }["LabImages.useEffect"], [
        isFullscreen,
        nextImage,
        prevImage,
        isPlaying
    ]);
    // Autoplay and Progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LabImages.useEffect": ()=>{
            if (isPlaying) {
                timerRef.current = setInterval(nextImage, autoPlayDelay);
                progressRef.current = setInterval({
                    "LabImages.useEffect": ()=>{
                        setProgress({
                            "LabImages.useEffect": (prev)=>{
                                if (prev >= 100) return 0;
                                return prev + 100 / (autoPlayDelay / 100);
                            }
                        }["LabImages.useEffect"]);
                    }
                }["LabImages.useEffect"], 100);
            } else {
                if (timerRef.current) clearInterval(timerRef.current);
                if (progressRef.current) clearInterval(progressRef.current);
            }
            return ({
                "LabImages.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                    if (progressRef.current) clearInterval(progressRef.current);
                }
            })["LabImages.useEffect"];
        }
    }["LabImages.useEffect"], [
        isPlaying,
        nextImage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        style: {
            paddingBottom: '50px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Lab Photo Stream"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "meta",
                        children: "Interactive gallery showcasing our lab activities. Navigate using controls or click thumbnails. Images auto-advance every 5 seconds."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `carousel ${isFullscreen ? 'fullscreen' : ''}`,
                id: "carousel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "main-slide",
                        id: "mainSlide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `/${images[currentIndex].src}`,
                                alt: images[currentIndex].caption,
                                id: "mainImage",
                                style: {
                                    transform: `scale(${zoomLevel})`,
                                    transformOrigin: 'center center',
                                    transition: 'transform 0.3s ease, opacity 0.3s ease'
                                },
                                onContextMenu: (e)=>e.preventDefault(),
                                onDragStart: (e)=>e.preventDefault()
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "caption",
                                id: "mainCaption",
                                children: images[currentIndex].caption
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "image-counter",
                                id: "imageCounter",
                                children: [
                                    currentIndex + 1,
                                    " / ",
                                    images.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "fullscreen-btn",
                                id: "fullscreenBtn",
                                title: "Fullscreen",
                                onClick: toggleFullscreen,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "zoom-controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "zoom-btn",
                                        id: "zoomInBtn",
                                        title: "Zoom In",
                                        onClick: zoomIn,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-search-plus"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "zoom-btn",
                                        id: "zoomOutBtn",
                                        title: "Zoom Out",
                                        onClick: zoomOut,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-search-minus"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "zoom-btn",
                                        id: "resetZoomBtn",
                                        title: "Reset Zoom",
                                        onClick: resetZoom,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-sync-alt"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "close-fullscreen",
                        id: "closeFullscreen",
                        onClick: toggleFullscreen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fas fa-times"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn",
                                        id: "prevBtn",
                                        onClick: prevImage,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-left"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            " Previous"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn",
                                        id: "nextBtn",
                                        onClick: nextImage,
                                        children: [
                                            "Next ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-right"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "progress-bar",
                                    id: "progressBar",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-accent",
                                        id: "playPauseBtn",
                                        onClick: togglePlayPause,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `fas ${isPlaying ? 'fa-pause' : 'fa-play'}`
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            isPlaying ? 'Pause' : 'Play'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-outline",
                                        id: "shuffleBtn",
                                        title: "Shuffle",
                                        onClick: shuffleImages,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-random"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "thumbnails",
                        id: "thumbnails",
                        children: images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `thumb ${index === currentIndex ? 'active' : ''}`,
                                onClick: ()=>{
                                    goToImage(index);
                                    setIsPlaying(false);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `/${img.src}`,
                                        alt: img.caption,
                                        onContextMenu: (e)=>e.preventDefault(),
                                        onDragStart: (e)=>e.preventDefault()
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "thumb-overlay",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: 'center',
                    marginTop: '30px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "btn btn-outline",
                    style: {
                        textDecoration: 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fas fa-arrow-left"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        " Back to Main Site"
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(LabImages, "zlloHEr+xfRwKcbVKEmAQL77oDU=");
_c = LabImages;
var _c;
__turbopack_context__.k.register(_c, "LabImages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_GitHub_AboutCoe-IoTLab_github_io_src_08a4jom._.js.map