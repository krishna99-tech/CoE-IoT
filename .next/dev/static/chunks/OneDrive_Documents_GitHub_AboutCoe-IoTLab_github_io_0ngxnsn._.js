(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// @ts-nocheck
"use client";
;
function Home() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach({
                "Home.useEffect": (anchor)=>{
                    anchor.addEventListener('click', {
                        "Home.useEffect": function(e) {
                            const href = this.getAttribute('href');
                            if (href && href.startsWith('#') && href !== '#') {
                                e.preventDefault();
                                const targetElement = document.querySelector(href);
                                if (targetElement) {
                                    window.scrollTo({
                                        top: targetElement.getBoundingClientRect().top + window.scrollY - 70,
                                        behavior: 'smooth'
                                    });
                                }
                            }
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            const form = document.querySelector('form');
            if (form) {
                form.addEventListener('submit', {
                    "Home.useEffect": function(e) {
                        e.preventDefault();
                        alert('Thank you for your message! We will get back to you soon.');
                        form.reset();
                    }
                }["Home.useEffect"]);
            }
            // Generic fetch and render
            function loadData(url, containerId, renderFunction) {
                fetch(url).then({
                    "Home.useEffect.loadData": (response)=>response.json()
                }["Home.useEffect.loadData"]).then({
                    "Home.useEffect.loadData": (data)=>{
                        const container = document.getElementById(containerId);
                        if (!container) return;
                        container.innerHTML = '';
                        data.forEach({
                            "Home.useEffect.loadData": (item)=>{
                                const element = renderFunction(item);
                                container.appendChild(element);
                            }
                        }["Home.useEffect.loadData"]);
                    }
                }["Home.useEffect.loadData"]).catch({
                    "Home.useEffect.loadData": (error)=>console.error('Error loading data:', error)
                }["Home.useEffect.loadData"]);
            }
            const renderMember = {
                "Home.useEffect.renderMember": (m)=>{
                    const row = document.createElement('tr');
                    row.innerHTML = '<td>' + m.name + '</td><td><span class="member-role">' + m.role + '</span></td><td>' + m.profession + '</td><td class="member-year">' + m.year + '</td>';
                    return row;
                }
            }["Home.useEffect.renderMember"];
            const renderWorkshop = {
                "Home.useEffect.renderWorkshop": (w)=>{
                    const c = document.createElement('div');
                    c.className = 'workshop-card';
                    c.innerHTML = '<div class="workshop-image"><img src="' + w.image + '" alt="' + w.title + '"></div><div class="workshop-content"><h3>' + w.title + '</h3><div class="workshop-meta"><span><i class="far fa-calendar"></i> ' + w.date + '</span><span><i class="fas fa-users"></i> ' + w.participants + '</span></div><p>' + w.description + '</p></div>';
                    return c;
                }
            }["Home.useEffect.renderWorkshop"];
            const renderPcb = {
                "Home.useEffect.renderPcb": (p)=>{
                    const c = document.createElement('div');
                    c.className = 'pcb-card';
                    c.innerHTML = '<div class="pcb-image"><img src="' + p.image + '" alt="' + p.title + '"></div><div class="pcb-content"><div><div class="pcb-title">' + p.title + '</div></div><div class="pcb-meta"><span class="pcb-badge">' + p.badge + '</span><span class="pcb-year">' + p.year + '</span></div></div>';
                    return c;
                }
            }["Home.useEffect.renderPcb"];
            const renderProject = {
                "Home.useEffect.renderProject": (p)=>{
                    const c = document.createElement('div');
                    c.className = 'workshop-card';
                    c.innerHTML = '<div class="workshop-image"><img src="' + p.image + '" alt="' + p.title + '"></div><div class="workshop-content"><h3>' + p.title + '</h3><div class="workshop-meta"><span><i class="far fa-calendar"></i> ' + p.year + '</span><span><i class="fas fa-industry"></i> ' + p.partner + '</span></div><p>' + p.description + '</p></div>';
                    return c;
                }
            }["Home.useEffect.renderProject"];
            const renderLeadership = {
                "Home.useEffect.renderLeadership": (l)=>{
                    const card = document.createElement('div');
                    card.className = 'card text-center';
                    card.style.cssText = "border: 2px solid #007bff; box-shadow: 0 0 15px rgba(0, 123, 255, 0.3);";
                    card.innerHTML = '<div style="padding: 20px 20px 0;"><img src="' + l.image + '" alt="' + l.name + '" style="width: 200px; height: 200px; object-fit: cover; border-radius: 20px; margin: 0 auto; display: block; box-shadow: 0 5px 15px rgba(0,0,0,0.1);"></div><div class="card-body"><h3 class="card-title" style="font-weight: 700; color: #007bff;">' + l.role + '</h3><p class="text-secondary" style="margin-top: 0.5rem; font-size: 1.05rem; font-weight: 600;">' + l.name + '</p><p style="font-weight: 500;">' + l.description + '</p><p style="font-size: 0.95rem;">' + l.sub_description + '</p></div>';
                    return card;
                }
            }["Home.useEffect.renderLeadership"];
            const renderGalleryItem = {
                "Home.useEffect.renderGalleryItem": (i)=>{
                    const div = document.createElement('div');
                    div.className = 'gallery-item';
                    div.innerHTML = '<img src="' + i.src + '" alt="' + i.alt + '"><div class="gallery-item-overlay"><h3>' + i.title + '</h3></div>';
                    return div;
                }
            }["Home.useEffect.renderGalleryItem"];
            loadData('/members.json', 'members-list', renderMember);
            loadData('/workshops.json', 'workshops-list', renderWorkshop);
            loadData('/pcbs.json', 'pcbs-list', renderPcb);
            loadData('/projects.json', 'projects-list', renderProject);
            loadData('/leadership.json', 'leadership-list', renderLeadership);
            loadData('/gallery.json', 'gallery-list', renderGalleryItem);
            // Menu toggle if present
            const t = document.querySelector('.menu-toggle');
            if (t) t.addEventListener('click', {
                "Home.useEffect": function() {
                    const links = document.querySelector('.nav-links');
                    if (links) links.classList.toggle('active');
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        dangerouslySetInnerHTML: {
            __html: `
    

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Center of Excellence on IoT &amp; Smart Factory</h1>
                <p>Advancing IoT innovation through industry-academia collaboration and cutting-edge research.</p>
                <div class="hero-buttons">
                    <a href="#about" class="btn">Explore Our Lab</a>
                    <a href="#contact" class="btn btn-primary">Collaborate With Us</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-title">
                <h2>About COE-IOT Lab</h2>
                <p>Our state-of-the-art IoT research facility is dedicated to advancing connected technologies and smart systems.</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Industry-Funded Research Excellence</h3>
                    <p>Established in 2023, the CoE Laboratory is a premier research facility funded by ZF Commercial Vehicle Control Systems India Limited. Our mission is to drive innovation in Internet of Things technologies through collaborative industry-academia partnerships.</p>
                    <p>We focus on cutting-edge research in areas including smart cities, industrial IoT, connected healthcare, and sustainable energy systems. Our industry partnerships ensure that our research has real-world impact and addresses current market needs.</p>
                    <p>With over 10+ industry projects completed and 6 patents filed, we continue to push the boundaries of IoT technology and its applications across various sectors.</p>
                    <a href="#contact" class="btn" style="margin-top: 20px;">Collaborate With Us</a>
                </div>
                <div class="about-image">
                    <img src="Images/Coe-IoT.jpg" alt="IoT Laboratory">
                </div>
            </div>
        </div>
    </section>
<!-- Key Leadership Section -->
<section id="leadership" class="bg-light">
  <div class="container">
    <div class="section-title">
      <h2>Leadership</h2>
      <p>Meet the dean guiding our research and innovation.</p>
    </div>

    <div class="card-grid" id="leadership-list">
      <!-- Leadership will be loaded dynamically -->
    </div>
  </div>
</section>
    <!-- Lab Gallery Section -->
    <section id="gallery" class="gallery">
        <div class="container">
            <div class="section-title">
                <h2>Lab Gallery</h2>
                <p>Explore our state-of-the-art IoT research facilities and equipment.</p>
            </div>
            <div class="gallery-grid" id="gallery-list">
                <!-- Gallery items will be loaded dynamically -->
            </div>
        </div>
    </section>

    <!-- Workshops Section -->
    <section id="workshops" class="workshops">
        <div class="container">
            <div class="section-title">
                <h2>Conducted Workshops</h2>
                <p>We regularly organize workshops to share knowledge and foster collaboration in IoT technologies.</p>
            </div>
            <div class="workshops-container" id="workshops-list">
                <!-- Workshops will be loaded dynamically -->
            </div>
        </div>
    </section>

    <!-- Completed Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <div class="section-title">
                <h2>Completed Projects</h2>
                <p>Discover some of our impactful IoT projects completed in collaboration with industry partners.</p>
            </div>
            <div class="workshops-container" id="projects-list">
                <!-- Projects will be loaded dynamically -->
            </div>
        </div>
    </section>

    <!-- Latest PCBs Section -->
    <section id="pcbs" class="pcbs">
        <div class="container">
            <div class="section-title">
                <h2>Latest PCBs</h2>
                <p>Explore our most recent PCB designs used in research and prototypes. Click any card for details.</p>
            </div>
            <div class="pcbs-container" id="pcbs-list">
                <!-- PCBs will be loaded dynamically -->
            </div>
        </div>
    </section>


    <!-- Members Section -->
    <section id="members" class="members">
        <div class="container">
            <div class="section-title">
                <h2>Our Team Members</h2>
                <p>Meet the talented researchers and professionals who drive innovation in our IoT laboratory.</p>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Profession</th>
                            <th>Year Joined</th>
                        </tr>
                    </thead>
                    <tbody id="members-list">
                        <!-- Members will be loaded dynamically -->
                    </tbody>
                </table>
            </div>
        </div>
    </section>


    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-title">
                <h2>Contact Us</h2>
                <p>Get in touch with us for collaborations, inquiries, or to learn more about our IoT research.</p>
            </div>
            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Get In Touch</h3>
                    <div class="contact-details">
                        <div class="contact-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Location</h4>
                                <p>29103-CoE IoT Lab, Research Park, Veltech University, No.42, Avadi-Vel Tech Road, Vel Nagar, Avadi, Chennai, Tamil Nadu, India</p>
                            </div>
                        </div>
                        <div class="contact-detail">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 9751270933</p>
                            </div>
                        </div>
                        <div class="contact-detail">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p>arunca@veltech.edu.in</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="form-container">
                    <h2 class="form-title">Send Us a Message</h2>
                    <div class="contact-form">
                        <form>
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" class="form-control" required="">
                            </div>
                            <div class="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" id="email" name="email" class="form-control" required="">
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" class="form-control" required="">
                            </div>
                            <div class="form-group">
                                <label for="message">Your Message</label>
                                <textarea id="message" name="message" class="form-control" required="" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn" style="width: 100%;">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    

    

`
        }
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/page.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
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

//# sourceMappingURL=OneDrive_Documents_GitHub_AboutCoe-IoTLab_github_io_0ngxnsn._.js.map