module.exports = [
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// @ts-nocheck
"use client";
;
;
function Home() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
            anchor.addEventListener('click', function(e) {
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
            });
        });
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            });
        }
        // Generic fetch and render
        function loadData(url, containerId, renderFunction) {
            fetch(url).then((response)=>response.json()).then((data)=>{
                const container = document.getElementById(containerId);
                if (!container) return;
                container.innerHTML = '';
                data.forEach((item)=>{
                    const element = renderFunction(item);
                    container.appendChild(element);
                });
            }).catch((error)=>console.error('Error loading data:', error));
        }
        const renderMember = (m)=>{
            const row = document.createElement('tr');
            row.innerHTML = '<td>' + m.name + '</td><td><span class="member-role">' + m.role + '</span></td><td>' + m.profession + '</td><td class="member-year">' + m.year + '</td>';
            return row;
        };
        const renderWorkshop = (w)=>{
            const c = document.createElement('div');
            c.className = 'workshop-card';
            c.innerHTML = '<div class="workshop-image"><img src="' + w.image + '" alt="' + w.title + '"></div><div class="workshop-content"><h3>' + w.title + '</h3><div class="workshop-meta"><span><i class="far fa-calendar"></i> ' + w.date + '</span><span><i class="fas fa-users"></i> ' + w.participants + '</span></div><p>' + w.description + '</p></div>';
            return c;
        };
        const renderPcb = (p)=>{
            const c = document.createElement('div');
            c.className = 'pcb-card';
            c.innerHTML = '<div class="pcb-image"><img src="' + p.image + '" alt="' + p.title + '"></div><div class="pcb-content"><div><div class="pcb-title">' + p.title + '</div></div><div class="pcb-meta"><span class="pcb-badge">' + p.badge + '</span><span class="pcb-year">' + p.year + '</span></div></div>';
            return c;
        };
        const renderProject = (p)=>{
            const c = document.createElement('div');
            c.className = 'workshop-card';
            c.innerHTML = '<div class="workshop-image"><img src="' + p.image + '" alt="' + p.title + '"></div><div class="workshop-content"><h3>' + p.title + '</h3><div class="workshop-meta"><span><i class="far fa-calendar"></i> ' + p.year + '</span><span><i class="fas fa-industry"></i> ' + p.partner + '</span></div><p>' + p.description + '</p></div>';
            return c;
        };
        const renderLeadership = (l)=>{
            const card = document.createElement('div');
            card.className = 'card text-center';
            card.style.cssText = "border: 2px solid #007bff; box-shadow: 0 0 15px rgba(0, 123, 255, 0.3);";
            card.innerHTML = '<div style="padding: 20px 20px 0;"><img src="' + l.image + '" alt="' + l.name + '" style="width: 200px; height: 200px; object-fit: cover; border-radius: 20px; margin: 0 auto; display: block; box-shadow: 0 5px 15px rgba(0,0,0,0.1);"></div><div class="card-body"><h3 class="card-title" style="font-weight: 700; color: #007bff;">' + l.role + '</h3><p class="text-secondary" style="margin-top: 0.5rem; font-size: 1.05rem; font-weight: 600;">' + l.name + '</p><p style="font-weight: 500;">' + l.description + '</p><p style="font-size: 0.95rem;">' + l.sub_description + '</p></div>';
            return card;
        };
        const renderGalleryItem = (i)=>{
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = '<img src="' + i.src + '" alt="' + i.alt + '"><div class="gallery-item-overlay"><h3>' + i.title + '</h3></div>';
            return div;
        };
        loadData('/members.json', 'members-list', renderMember);
        loadData('/workshops.json', 'workshops-list', renderWorkshop);
        loadData('/pcbs.json', 'pcbs-list', renderPcb);
        loadData('/projects.json', 'projects-list', renderProject);
        loadData('/leadership.json', 'leadership-list', renderLeadership);
        loadData('/gallery.json', 'gallery-list', renderGalleryItem);
        // Menu toggle if present
        const t = document.querySelector('.menu-toggle');
        if (t) t.addEventListener('click', function() {
            const links = document.querySelector('.nav-links');
            if (links) links.classList.toggle('active');
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
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
}),
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=OneDrive_Documents_GitHub_AboutCoe-IoTLab_github_io_0udd5fn._.js.map