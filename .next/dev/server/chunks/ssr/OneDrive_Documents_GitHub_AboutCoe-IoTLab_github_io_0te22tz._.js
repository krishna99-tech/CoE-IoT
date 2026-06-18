module.exports = [
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/src/app/lab-images/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// @ts-nocheck
"use client";
;
;
function LabImages() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Menu toggle if present
        const t = document.querySelector('.menu-toggle');
        if (t) t.addEventListener('click', function() {
            const links = document.querySelector('.nav-links');
            if (links) links.classList.toggle('active');
        });
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
        return ()=>{
            document.body.removeChild(script);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$AboutCoe$2d$IoTLab$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
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
}),
"[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Documents/GitHub/AboutCoe-IoTLab.github.io/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=OneDrive_Documents_GitHub_AboutCoe-IoTLab_github_io_0te22tz._.js.map