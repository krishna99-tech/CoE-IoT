(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// @ts-nocheck
"use client";
;
function LabImages() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LabImages.useEffect": ()=>{
            // Menu toggle if present
            const t = document.querySelector('.menu-toggle');
            if (t) t.addEventListener('click', {
                "LabImages.useEffect": function() {
                    const links = document.querySelector('.nav-links');
                    if (links) links.classList.toggle('active');
                }
            }["LabImages.useEffect"]);
            // Load external gallery script
            const script = document.createElement('script');
            script.innerHTML = `
        (function(){
            // Image data
            let images = [];
            
            // DOM elements
            const mainImage = document.getElementById('mainImage');
            const mainCaption = document.getElementById('mainCaption');
            const imageCounter = document.getElementById('imageCounter');
            const thumbnailsContainer = document.getElementById('thumbnails');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const playPauseBtn = document.getElementById('playPauseBtn');
            const shuffleBtn = document.getElementById('shuffleBtn');
            const progressBar = document.getElementById('progressBar');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const closeFullscreenBtn = document.getElementById('closeFullscreen');
            const zoomInBtn = document.getElementById('zoomInBtn');
            const zoomOutBtn = document.getElementById('zoomOutBtn');
            const resetZoomBtn = document.getElementById('resetZoomBtn');
            const carousel = document.getElementById('carousel');
            
            // State variables
            let currentIndex = 0;
            let isPlaying = false;
            let interval = null;
            let progressInterval = null;
            let isFullscreen = false;
            let zoomLevel = 1;
            const autoPlayDelay = 5000; // 5 seconds
            
            // Initialize thumbnails
            function initThumbnails() {
                thumbnailsContainer.innerHTML = '';
                
                images.forEach((image, index) => {
                    const thumb = document.createElement('div');
                    thumb.className = 'thumb';
                    if (index === 0) thumb.classList.add('active');
                    
                    thumb.innerHTML = \`
                        <img src="\${image.src}" alt="\${image.caption}">
                        <div class="thumb-overlay">\${index + 1}</div>
                    \`;
                    
                    thumb.dataset.index = index;
                    thumb.addEventListener('click', () => {
                        goToImage(index);
                        pause();
                    });

                    // Prevent right-click on thumbnail images
                    const thumbImg = thumb.querySelector('img');
                    thumbImg.addEventListener('contextmenu', (e) => e.preventDefault());
                    thumbImg.ondragstart = () => false;
                    
                    thumbnailsContainer.appendChild(thumb);
                });

                // Prevent right-click on main image
                mainImage.addEventListener('contextmenu', (e) => e.preventDefault());
                mainImage.ondragstart = () => false;
            }
            
            // Go to specific image
            function goToImage(index) {
                if (index < 0) index = images.length - 1;
                if (index >= images.length) index = 0;
                
                currentIndex = index;
                const image = images[currentIndex];
                
                // Fade out current image
                mainImage.classList.add('fade-out');
                
                // Update after fade transition
                setTimeout(() => {
                    mainImage.src = image.src;
                    mainImage.alt = image.caption;
                    mainCaption.textContent = image.caption;
                    imageCounter.textContent = \`\${currentIndex + 1} / \${images.length}\`;
                    mainImage.classList.remove('fade-out');
                    
                    // Update active thumbnail
                    document.querySelectorAll('.thumb').forEach((thumb, i) => {
                        thumb.classList.toggle('active', i === currentIndex);
                    });
                    
                    // Ensure active thumbnail is visible
                    const activeThumb = document.querySelector('.thumb.active');
                    if (activeThumb) {
                        activeThumb.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'center'
                        });
                    }
                    
                    // Reset progress bar
                    resetProgressBar();
                }, 300);
            }
            
            // Next image
            function nextImage() {
                goToImage(currentIndex + 1);
            }
            
            // Previous image
            function prevImage() {
                goToImage(currentIndex - 1);
            }
            
            // Play slideshow
            function play() {
                isPlaying = true;
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
                interval = setInterval(nextImage, autoPlayDelay);
                startProgressBar();
            }
            
            // Pause slideshow
            function pause() {
                isPlaying = false;
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
                clearInterval(interval);
                clearInterval(progressInterval);
            }
            
            // Toggle play/pause
            function togglePlayPause() {
                if (isPlaying) {
                    pause();
                } else {
                    play();
                }
            }
            
            // Shuffle images
            function shuffleImages() {
                // Fisher-Yates shuffle algorithm
                for (let i = images.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [images[i], images[j]] = [images[j], images[i]];
                }
                
                // Reinitialize thumbnails and go to first image
                initThumbnails();
                goToImage(0);
                
                // Show shuffle feedback
                shuffleBtn.style.backgroundColor = 'var(--accent)';
                setTimeout(() => {
                    shuffleBtn.style.backgroundColor = '';
                }, 500);
            }
            
            // Progress bar functions
            function startProgressBar() {
                progressBar.style.width = '0%';
                let progress = 0;
                const increment = 100 / (autoPlayDelay / 100);
                
                progressInterval = setInterval(() => {
                    progress += increment;
                    progressBar.style.width = \`\${progress}%\`;
                    
                    if (progress >= 100) {
                        clearInterval(progressInterval);
                    }
                }, 100);
            }
            
            function resetProgressBar() {
                clearInterval(progressInterval);
                if (isPlaying) {
                    startProgressBar();
                } else {
                    progressBar.style.width = '0%';
                }
            }
            
            // Fullscreen functions
            function enterFullscreen() {
                carousel.classList.add('fullscreen');
                isFullscreen = true;
                document.body.style.overflow = 'hidden';
            }
            
            function exitFullscreen() {
                carousel.classList.remove('fullscreen');
                isFullscreen = false;
                document.body.style.overflow = 'auto';
            }
            
            function toggleFullscreen() {
                if (isFullscreen) {
                    exitFullscreen();
                } else {
                    enterFullscreen();
                }
            }
            
            // Zoom functions
            function zoomIn() {
                if (zoomLevel < 3) {
                    zoomLevel += 0.25;
                    applyZoom();
                }
            }
            
            function zoomOut() {
                if (zoomLevel > 0.5) {
                    zoomLevel -= 0.25;
                    applyZoom();
                }
            }
            
            function resetZoom() {
                zoomLevel = 1;
                applyZoom();
            }
            
            function applyZoom() {
                mainImage.style.transform = \`scale(\${zoomLevel})\`;
                mainImage.style.transformOrigin = 'center center';
            }
            
            // Keyboard navigation
            function handleKeydown(e) {
                if (e.key === 'ArrowLeft') {
                    prevImage();
                    pause();
                } else if (e.key === 'ArrowRight') {
                    nextImage();
                    pause();
                } else if (e.key === ' ') {
                    e.preventDefault();
                    togglePlayPause();
                } else if (e.key === 'Escape' && isFullscreen) {
                    exitFullscreen();
                } else if (e.key === 'f' || e.key === 'F') {
                    toggleFullscreen();
                }
            }
            
            // Initialize event listeners
            function initEventListeners() {
                prevBtn.addEventListener('click', () => {
                    prevImage();
                    pause();
                });
                
                nextBtn.addEventListener('click', () => {
                    nextImage();
                    pause();
                });
                
                playPauseBtn.addEventListener('click', togglePlayPause);
                
                shuffleBtn.addEventListener('click', shuffleImages);
                
                fullscreenBtn.addEventListener('click', toggleFullscreen);
                
                closeFullscreenBtn.addEventListener('click', exitFullscreen);
                
                zoomInBtn.addEventListener('click', zoomIn);
                
                zoomOutBtn.addEventListener('click', zoomOut);
                
                resetZoomBtn.addEventListener('click', resetZoom);
                
                document.addEventListener('keydown', handleKeydown);
                
                // Swipe support for touch devices
                let touchStartX = 0;
                let touchEndX = 0;
                
                carousel.addEventListener('touchstart', e => {
                    touchStartX = e.changedTouches[0].screenX;
                });
                
                carousel.addEventListener('touchend', e => {
                    touchEndX = e.changedTouches[0].screenX;
                    handleSwipe();
                });
                
                function handleSwipe() {
                    const swipeThreshold = 50;
                    
                    if (touchEndX < touchStartX - swipeThreshold) {
                        // Swipe left - next image
                        nextImage();
                        pause();
                    }
                    
                    if (touchEndX > touchStartX + swipeThreshold) {
                        // Swipe right - previous image
                        prevImage();
                        pause();
                    }
                }
            }
            
            // Initialize the gallery
            function init() {
                fetch('lab-images.json')
                    .then(response => response.json())
                    .then(data => {
                        images = data;
                        initThumbnails();
                        initEventListeners();
                        goToImage(0);
                    })
                    .catch(error => console.error('Error loading gallery images:', error));
                
                // Mobile Menu Toggle
                document.querySelector('.menu-toggle').addEventListener('click', function() {
                    document.querySelector('.nav-links').classList.toggle('active');
                });
            }
            
            // Start the gallery
            init();
        })();
    `;
            document.body.appendChild(script);
            return ({
                "LabImages.useEffect": ()=>{
                    document.body.removeChild(script);
                }
            })["LabImages.useEffect"];
        }
    }["LabImages.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        dangerouslySetInnerHTML: {
            __html: `
    

    <div class="container">
        <div class="section-title">
            <h2>Lab Photo Stream</h2>
            <p class="meta">Interactive gallery showcasing our lab activities. Navigate using controls or click thumbnails. Images auto-advance every 5 seconds.</p>
        </div>

        <div class="carousel" id="carousel">
            <div class="main-slide" id="mainSlide">
                <img src="Images/Gallery/Image1.jpg" alt="Lab photo 1" id="mainImage">
                <div class="caption" id="mainCaption">Lab photo 1 — Prototype testing</div>
                <div class="image-counter" id="imageCounter">1 / 13</div>
                
                <button class="fullscreen-btn" id="fullscreenBtn" title="Fullscreen">
                    <i class="fas fa-expand"></i>
                </button>
                
                <div class="zoom-controls">
                    <button class="zoom-btn" id="zoomInBtn" title="Zoom In">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button class="zoom-btn" id="zoomOutBtn" title="Zoom Out">
                        <i class="fas fa-search-minus"></i>
                    </button>
                    <button class="zoom-btn" id="resetZoomBtn" title="Reset Zoom">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
            
            <button class="close-fullscreen" id="closeFullscreen">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="controls">
                <div>
                    <button class="btn" id="prevBtn">
                        <i class="fas fa-chevron-left"></i> Previous
                    </button>
                    <button class="btn" id="nextBtn">
                        Next <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar" id="progressBar"></div>
                </div>
                
                <div>
                    <button class="btn btn-accent" id="playPauseBtn">
                        <i class="fas fa-pause"></i> Pause
                    </button>
                    <button class="btn btn-outline" id="shuffleBtn" title="Shuffle">
                        <i class="fas fa-random"></i>
                    </button>
                </div>
            </div>
            
            <div class="thumbnails" id="thumbnails">
                <!-- Thumbnails will be populated by JavaScript -->
            </div>
        </div>

        <p style="text-align:center; margin-top:30px">
            <a href="/" class="btn btn-outline" style="text-decoration:none">
                <i class="fas fa-arrow-left"></i> Back to Main Site
            </a>
        </p>
    </div>

    


`
        }
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx",
        lineNumber: 347,
        columnNumber: 5
    }, this);
}
_s(LabImages, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LabImages;
var _c;
__turbopack_context__.k.register(_c, "LabImages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_GitHub_AboutCoe-IoTLab_github_io_0eqoe2j._.js.map