(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/StaggeredMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaggeredMenu",
    ()=>StaggeredMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const StaggeredMenu = ({ position = "right", colors = [
    "#95cb00",
    "#f3db03",
    "#2596be"
], items = [], submenuItems = {}, socialItems = [], displaySocials = true, displayItemNumbering = true, className, logoUrl = "/assets/logos/bangon.png", logoHref = "/", menuButtonColor = "#ffffff", openMenuButtonColor = "#000000", changeMenuColorOnOpen = false, accentColor = "#ff3672", isFixed = false, closeOnClickAway = true, onMenuOpen, onMenuClose })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSubmenu, setActiveSubmenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const preLayerElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const plusHRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const plusVRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iconRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [textLines, setTextLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Menu",
        "Close"
    ]);
    const openTlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textCycleAnimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colorTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const itemEntranceTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visibleItems = activeSubmenu ? submenuItems[activeSubmenu] || [] : items;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "StaggeredMenu.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "StaggeredMenu.useLayoutEffect.ctx": ()=>{
                    const panel = panelRef.current;
                    const preContainer = preLayersRef.current;
                    const plusH = plusHRef.current;
                    const plusV = plusVRef.current;
                    const icon = iconRef.current;
                    const textInner = textInnerRef.current;
                    if (!panel || !plusH || !plusV || !icon || !textInner) return;
                    let preLayers = [];
                    if (preContainer) {
                        preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer"));
                    }
                    preLayerElsRef.current = preLayers;
                    const offscreen = position === "left" ? -100 : 100;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                        panel,
                        ...preLayers
                    ], {
                        xPercent: offscreen,
                        opacity: 1
                    });
                    if (preContainer) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(preContainer, {
                            xPercent: 0,
                            opacity: 1
                        });
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusH, {
                        transformOrigin: "50% 50%",
                        rotate: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(plusV, {
                        transformOrigin: "50% 50%",
                        rotate: 90
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(icon, {
                        rotate: 0,
                        transformOrigin: "50% 50%"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(textInner, {
                        yPercent: 0
                    });
                    if (toggleBtnRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                            color: menuButtonColor
                        });
                    }
                }
            }["StaggeredMenu.useLayoutEffect.ctx"]);
            return ({
                "StaggeredMenu.useLayoutEffect": ()=>ctx.revert()
            })["StaggeredMenu.useLayoutEffect"];
        }
    }["StaggeredMenu.useLayoutEffect"], [
        menuButtonColor,
        position
    ]);
    const animatePanelItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animatePanelItems]": ()=>{
            const panel = panelRef.current;
            if (!panel) return;
            const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
            const numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
            if (itemEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(itemEls, {
                    yPercent: 140,
                    rotate: 10
                }, {
                    yPercent: 0,
                    rotate: 0,
                    duration: 0.75,
                    ease: "power4.out",
                    stagger: {
                        each: 0.08,
                        from: "start"
                    }
                });
            }
            if (numberEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(numberEls, {
                    "--sm-num-opacity": 0
                }, {
                    "--sm-num-opacity": 1,
                    duration: 0.45,
                    ease: "power2.out",
                    stagger: {
                        each: 0.06,
                        from: "start"
                    }
                });
            }
        }
    }["StaggeredMenu.useCallback[animatePanelItems]"], []);
    const buildOpenTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[buildOpenTimeline]": ()=>{
            const panel = panelRef.current;
            const layers = preLayerElsRef.current;
            if (!panel) return null;
            openTlRef.current?.kill();
            if (closeTweenRef.current) {
                closeTweenRef.current.kill();
                closeTweenRef.current = null;
            }
            itemEntranceTweenRef.current?.kill();
            const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
            const numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
            const socialTitle = panel.querySelector(".sm-socials-title");
            const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));
            const offscreen = position === "left" ? -100 : 100;
            const layerStates = layers.map({
                "StaggeredMenu.useCallback[buildOpenTimeline].layerStates": (el)=>({
                        el,
                        start: offscreen
                    })
            }["StaggeredMenu.useCallback[buildOpenTimeline].layerStates"]);
            const panelStart = offscreen;
            if (itemEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
                    yPercent: 140,
                    rotate: 10
                });
            }
            if (numberEls.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
                    "--sm-num-opacity": 0
                });
            }
            if (socialTitle) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
                    opacity: 0
                });
            }
            if (socialLinks.length) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                    y: 25,
                    opacity: 0
                });
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                paused: true
            });
            layerStates.forEach({
                "StaggeredMenu.useCallback[buildOpenTimeline]": (ls, i)=>{
                    tl.fromTo(ls.el, {
                        xPercent: ls.start
                    }, {
                        xPercent: 0,
                        duration: 0.5,
                        ease: "power4.out"
                    }, i * 0.07);
                }
            }["StaggeredMenu.useCallback[buildOpenTimeline]"]);
            const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
            const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
            const panelDuration = 0.65;
            tl.fromTo(panel, {
                xPercent: panelStart
            }, {
                xPercent: 0,
                duration: panelDuration,
                ease: "power4.out"
            }, panelInsertTime);
            if (itemEls.length) {
                const itemsStart = panelInsertTime + panelDuration * 0.15;
                tl.to(itemEls, {
                    yPercent: 0,
                    rotate: 0,
                    duration: 1,
                    ease: "power4.out",
                    stagger: {
                        each: 0.1,
                        from: "start"
                    }
                }, itemsStart);
                if (numberEls.length) {
                    tl.to(numberEls, {
                        duration: 0.6,
                        ease: "power2.out",
                        "--sm-num-opacity": 1,
                        stagger: {
                            each: 0.08,
                            from: "start"
                        }
                    }, itemsStart + 0.1);
                }
            }
            if (socialTitle || socialLinks.length) {
                const socialsStart = panelInsertTime + panelDuration * 0.4;
                if (socialTitle) {
                    tl.to(socialTitle, {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    }, socialsStart);
                }
                if (socialLinks.length) {
                    tl.to(socialLinks, {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: "power3.out",
                        stagger: {
                            each: 0.08,
                            from: "start"
                        },
                        onComplete: {
                            "StaggeredMenu.useCallback[buildOpenTimeline]": ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                                    clearProps: "opacity"
                                });
                            }
                        }["StaggeredMenu.useCallback[buildOpenTimeline]"]
                    }, socialsStart + 0.04);
                }
            }
            openTlRef.current = tl;
            return tl;
        }
    }["StaggeredMenu.useCallback[buildOpenTimeline]"], [
        position
    ]);
    const playOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[playOpen]": ()=>{
            if (busyRef.current) return;
            busyRef.current = true;
            const tl = buildOpenTimeline();
            if (tl) {
                tl.eventCallback("onComplete", {
                    "StaggeredMenu.useCallback[playOpen]": ()=>{
                        busyRef.current = false;
                    }
                }["StaggeredMenu.useCallback[playOpen]"]);
                tl.play(0);
            } else {
                busyRef.current = false;
            }
        }
    }["StaggeredMenu.useCallback[playOpen]"], [
        buildOpenTimeline
    ]);
    const playClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[playClose]": ()=>{
            openTlRef.current?.kill();
            openTlRef.current = null;
            itemEntranceTweenRef.current?.kill();
            const panel = panelRef.current;
            const layers = preLayerElsRef.current;
            if (!panel) return;
            const all = [
                ...layers,
                panel
            ];
            const offscreen = position === "left" ? -100 : 100;
            closeTweenRef.current?.kill();
            closeTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(all, {
                xPercent: offscreen,
                duration: 0.32,
                ease: "power3.in",
                overwrite: "auto",
                onComplete: {
                    "StaggeredMenu.useCallback[playClose]": ()=>{
                        const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
                        if (itemEls.length) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(itemEls, {
                                yPercent: 140,
                                rotate: 10
                            });
                        }
                        const numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
                        if (numberEls.length) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(numberEls, {
                                "--sm-num-opacity": 0
                            });
                        }
                        const socialTitle = panel.querySelector(".sm-socials-title");
                        const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));
                        if (socialTitle) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialTitle, {
                            opacity: 0
                        });
                        if (socialLinks.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialLinks, {
                            y: 25,
                            opacity: 0
                        });
                        setActiveSubmenu(null);
                        busyRef.current = false;
                    }
                }["StaggeredMenu.useCallback[playClose]"]
            });
        }
    }["StaggeredMenu.useCallback[playClose]"], [
        position
    ]);
    const animateIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateIcon]": (opening)=>{
            const icon = iconRef.current;
            if (!icon) return;
            spinTweenRef.current?.kill();
            spinTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(icon, {
                rotate: opening ? 225 : 0,
                duration: opening ? 0.8 : 0.35,
                ease: opening ? "power4.out" : "power3.inOut",
                overwrite: "auto"
            });
        }
    }["StaggeredMenu.useCallback[animateIcon]"], []);
    const animateColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateColor]": (opening)=>{
            const btn = toggleBtnRef.current;
            if (!btn) return;
            colorTweenRef.current?.kill();
            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                    color: targetColor,
                    delay: 0.18,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(btn, {
                    color: opening ? openMenuButtonColor : menuButtonColor
                });
            }
        }
    }["StaggeredMenu.useCallback[animateColor]"], [
        changeMenuColorOnOpen,
        menuButtonColor,
        openMenuButtonColor
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StaggeredMenu.useEffect": ()=>{
            if (!toggleBtnRef.current) return;
            const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(toggleBtnRef.current, {
                color: targetColor
            });
        }
    }["StaggeredMenu.useEffect"], [
        changeMenuColorOnOpen,
        menuButtonColor,
        openMenuButtonColor
    ]);
    const animateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[animateText]": (opening)=>{
            const inner = textInnerRef.current;
            if (!inner) return;
            textCycleAnimRef.current?.kill();
            const currentLabel = opening ? "Menu" : "Close";
            const targetLabel = opening ? "Close" : "Menu";
            const cycles = 3;
            const seq = [
                currentLabel
            ];
            let last = currentLabel;
            for(let i = 0; i < cycles; i++){
                last = last === "Menu" ? "Close" : "Menu";
                seq.push(last);
            }
            if (last !== targetLabel) seq.push(targetLabel);
            seq.push(targetLabel);
            setTextLines(seq);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(inner, {
                yPercent: 0
            });
            const lineCount = seq.length;
            const finalShift = (lineCount - 1) / lineCount * 100;
            textCycleAnimRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(inner, {
                yPercent: -finalShift,
                duration: 0.5 + lineCount * 0.07,
                ease: "power4.out"
            });
        }
    }["StaggeredMenu.useCallback[animateText]"], []);
    const toggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[toggleMenu]": ()=>{
            const target = !openRef.current;
            openRef.current = target;
            setOpen(target);
            if (target) {
                onMenuOpen?.();
                playOpen();
            } else {
                onMenuClose?.();
                playClose();
            }
            animateIcon(target);
            animateColor(target);
            animateText(target);
        }
    }["StaggeredMenu.useCallback[toggleMenu]"], [
        playOpen,
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuOpen,
        onMenuClose
    ]);
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[closeMenu]": ()=>{
            if (!openRef.current) return;
            openRef.current = false;
            setOpen(false);
            onMenuClose?.();
            playClose();
            animateIcon(false);
            animateColor(false);
            animateText(false);
        }
    }["StaggeredMenu.useCallback[closeMenu]"], [
        playClose,
        animateIcon,
        animateColor,
        animateText,
        onMenuClose
    ]);
    const openSubmenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[openSubmenu]": (submenu)=>{
            const panel = panelRef.current;
            if (!panel) return;
            const currentItems = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(currentItems, {
                xPercent: -20,
                opacity: 0,
                duration: 0.25,
                ease: "power2.in",
                onComplete: {
                    "StaggeredMenu.useCallback[openSubmenu]": ()=>{
                        setActiveSubmenu(submenu);
                        requestAnimationFrame({
                            "StaggeredMenu.useCallback[openSubmenu]": ()=>{
                                const nextItems = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(nextItems, {
                                    xPercent: 20,
                                    opacity: 0,
                                    yPercent: 0,
                                    rotate: 0
                                }, {
                                    xPercent: 0,
                                    opacity: 1,
                                    duration: 0.45,
                                    ease: "power3.out",
                                    stagger: {
                                        each: 0.06,
                                        from: "start"
                                    }
                                });
                            }
                        }["StaggeredMenu.useCallback[openSubmenu]"]);
                    }
                }["StaggeredMenu.useCallback[openSubmenu]"]
            });
        }
    }["StaggeredMenu.useCallback[openSubmenu]"], []);
    const backToMainMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StaggeredMenu.useCallback[backToMainMenu]": ()=>{
            const panel = panelRef.current;
            if (!panel) return;
            const currentItems = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(currentItems, {
                xPercent: 20,
                opacity: 0,
                duration: 0.25,
                ease: "power2.in",
                onComplete: {
                    "StaggeredMenu.useCallback[backToMainMenu]": ()=>{
                        setActiveSubmenu(null);
                        requestAnimationFrame({
                            "StaggeredMenu.useCallback[backToMainMenu]": ()=>{
                                const nextItems = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(nextItems, {
                                    xPercent: -20,
                                    opacity: 0,
                                    yPercent: 0,
                                    rotate: 0
                                }, {
                                    xPercent: 0,
                                    opacity: 1,
                                    duration: 0.45,
                                    ease: "power3.out",
                                    stagger: {
                                        each: 0.06,
                                        from: "start"
                                    }
                                });
                            }
                        }["StaggeredMenu.useCallback[backToMainMenu]"]);
                    }
                }["StaggeredMenu.useCallback[backToMainMenu]"]
            });
        }
    }["StaggeredMenu.useCallback[backToMainMenu]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StaggeredMenu.useEffect": ()=>{
            if (!closeOnClickAway || !open) return;
            const handleClickOutside = {
                "StaggeredMenu.useEffect.handleClickOutside": (event)=>{
                    if (panelRef.current && !panelRef.current.contains(event.target) && toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)) {
                        closeMenu();
                    }
                }
            }["StaggeredMenu.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "StaggeredMenu.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["StaggeredMenu.useEffect"];
        }
    }["StaggeredMenu.useEffect"], [
        closeOnClickAway,
        open,
        closeMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (className ? className + " " : "") + "staggered-menu-wrapper" + (isFixed ? " fixed-wrapper" : ""),
        style: accentColor ? {
            "--sm-accent": accentColor
        } : undefined,
        "data-position": position,
        "data-open": open || undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: preLayersRef,
                className: "sm-prelayers",
                "aria-hidden": "true",
                children: (()=>{
                    const raw = colors && colors.length ? colors.slice(0, 4) : [
                        "#95cb00",
                        "#f3db03"
                    ];
                    const arr = [
                        ...raw
                    ];
                    if (arr.length >= 3) {
                        const mid = Math.floor(arr.length / 2);
                        arr.splice(mid, 1);
                    }
                    return arr.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-prelayer",
                            style: {
                                background: color
                            }
                        }, index, false, {
                            fileName: "[project]/components/StaggeredMenu.tsx",
                            lineNumber: 652,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)));
                })()
            }, void 0, false, {
                fileName: "[project]/components/StaggeredMenu.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "staggered-menu-header",
                "aria-label": "Main navigation header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "sm-logo",
                        "aria-label": "Go to home page",
                        href: logoHref,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logoUrl,
                            alt: "Bang On",
                            className: "sm-logo-img",
                            draggable: false,
                            width: 110,
                            height: 24
                        }, void 0, false, {
                            fileName: "[project]/components/StaggeredMenu.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: toggleBtnRef,
                        className: "sm-toggle",
                        "aria-label": open ? "Close menu" : "Open menu",
                        "aria-expanded": open,
                        "aria-controls": "staggered-menu-panel",
                        onClick: toggleMenu,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: textWrapRef,
                                className: "sm-toggle-textWrap",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: textInnerRef,
                                    className: "sm-toggle-textInner",
                                    children: textLines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-toggle-line",
                                            children: line
                                        }, `${line}-${index}`, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 687,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/StaggeredMenu.tsx",
                                lineNumber: 682,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: iconRef,
                                className: "sm-icon",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: plusHRef,
                                        className: "sm-icon-line"
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 697,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: plusVRef,
                                        className: "sm-icon-line sm-icon-line-v"
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 698,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/StaggeredMenu.tsx",
                                lineNumber: 696,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/StaggeredMenu.tsx",
                        lineNumber: 673,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/StaggeredMenu.tsx",
                lineNumber: 661,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "staggered-menu-panel",
                ref: panelRef,
                className: "staggered-menu-panel",
                "aria-hidden": !open,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm-panel-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "sm-panel-list",
                            role: "list",
                            "data-numbering": displayItemNumbering || undefined,
                            children: [
                                activeSubmenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "sm-panel-itemWrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "sm-panel-item sm-panel-back",
                                        "aria-label": "Back to main menu",
                                        onClick: backToMainMenu,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-panel-itemLabel",
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 723,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 717,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 716,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                visibleItems && visibleItems.length ? visibleItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "sm-panel-itemWrap",
                                        children: item.submenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "sm-panel-item sm-panel-submenu-trigger",
                                            "aria-label": item.ariaLabel,
                                            "data-index": index + 1,
                                            onClick: ()=>openSubmenu(item.submenu),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm-panel-itemLabel",
                                                children: [
                                                    item.label,
                                                    " →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 742,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 735,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "sm-panel-item",
                                            href: item.link,
                                            "aria-label": item.ariaLabel,
                                            "data-index": activeSubmenu ? index + 2 : index + 1,
                                            onClick: closeMenu,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm-panel-itemLabel",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 754,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 747,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, `${item.label}-${index}`, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 730,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "sm-panel-itemWrap",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sm-panel-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm-panel-itemLabel",
                                            children: "No items"
                                        }, void 0, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 762,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/StaggeredMenu.tsx",
                                        lineNumber: 761,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 760,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StaggeredMenu.tsx",
                            lineNumber: 710,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        displaySocials && socialItems && socialItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm-socials",
                            "aria-label": "Social links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "sm-socials-title",
                                    children: "Socials"
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 770,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "sm-socials-list",
                                    role: "list",
                                    children: socialItems.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "sm-socials-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "sm-socials-link",
                                                children: social.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/StaggeredMenu.tsx",
                                                lineNumber: 778,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, `${social.label}-${index}`, false, {
                                            fileName: "[project]/components/StaggeredMenu.tsx",
                                            lineNumber: 774,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/StaggeredMenu.tsx",
                                    lineNumber: 772,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StaggeredMenu.tsx",
                            lineNumber: 769,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StaggeredMenu.tsx",
                    lineNumber: 709,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/StaggeredMenu.tsx",
                lineNumber: 703,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/StaggeredMenu.tsx",
        lineNumber: 625,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StaggeredMenu, "CpLK72V8NT0UD1HLOiO0N/yO4Vs=");
_c = StaggeredMenu;
const __TURBOPACK__default__export__ = StaggeredMenu;
var _c;
__turbopack_context__.k.register(_c, "StaggeredMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StaggeredMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const menuItems = [
    {
        label: "Home",
        ariaLabel: "Go to home page",
        link: "/"
    },
    {
        label: "Flavours",
        ariaLabel: "View Bang On flavours",
        link: "#",
        submenu: "flavours"
    },
    {
        label: "Cocktails",
        ariaLabel: "View cocktails",
        link: "/cocktails"
    },
    {
        label: "Where to Buy",
        ariaLabel: "Find where to buy Bang On",
        link: "/where-to-buy"
    },
    {
        label: "Contact",
        ariaLabel: "Contact Bang On",
        link: "/contact"
    },
    {
        label: "Merch",
        ariaLabel: "Shop Bang On merch",
        link: "/merch"
    },
    {
        label: "Shop Now",
        ariaLabel: "Shop Bang On online",
        link: "https://deepbluedistilleries.ca/product-tag/bang-on/"
    }
];
const flavourItems = [
    {
        label: "Big Banana",
        ariaLabel: "View Big Banana flavour",
        link: "/flavours/big-banana"
    },
    {
        label: "Green Apple",
        ariaLabel: "View Green Apple flavour",
        link: "/flavours/green-apple"
    },
    {
        label: "Atomic Peach",
        ariaLabel: "View Atomic Peach flavour",
        link: "/flavours/atomic-peach"
    },
    {
        label: "Ripe Raspberry",
        ariaLabel: "View Ripe Raspberry flavour",
        link: "/flavours/ripe-raspberry"
    },
    {
        label: "Tropical",
        ariaLabel: "View Tropical flavour",
        link: "/flavours/tropical"
    }
];
const socialItems = [
    {
        label: "Instagram",
        link: "https://instagram.com"
    }
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === "/";
    const [isLightSection, setIsLightSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!isHome);
    const [showHeader, setShowHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!isHome) {
                setIsLightSection(true);
                return;
            }
            const checkThemeSection = {
                "Header.useEffect.checkThemeSection": ()=>{
                    const sections = document.querySelectorAll("[data-header-theme='light']");
                    const headerCheckY = 80;
                    const isOverLightSection = Array.from(sections).some({
                        "Header.useEffect.checkThemeSection.isOverLightSection": (section)=>{
                            const rect = section.getBoundingClientRect();
                            return rect.top <= headerCheckY && rect.bottom >= headerCheckY;
                        }
                    }["Header.useEffect.checkThemeSection.isOverLightSection"]);
                    setIsLightSection(isOverLightSection);
                }
            }["Header.useEffect.checkThemeSection"];
            checkThemeSection();
            window.addEventListener("scroll", checkThemeSection, {
                passive: true
            });
            window.addEventListener("resize", checkThemeSection);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", checkThemeSection);
                    window.removeEventListener("resize", checkThemeSection);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isHome
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            let lastScrollY = window.scrollY;
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (menuOpen || currentScrollY < 80) {
                        setShowHeader(true);
                    } else if (currentScrollY > lastScrollY) {
                        setShowHeader(false);
                    } else {
                        setShowHeader(true);
                    }
                    lastScrollY = currentScrollY;
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menuOpen
    ]);
    const useRedLogo = !isHome || isLightSection;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StaggeredMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: showHeader || menuOpen ? "header-visible" : "header-hidden",
        position: "right",
        items: menuItems,
        submenuItems: {
            flavours: flavourItems
        },
        socialItems: socialItems,
        displaySocials: true,
        displayItemNumbering: true,
        isFixed: true,
        closeOnClickAway: true,
        menuButtonColor: useRedLogo ? "#000000" : "#ffffff",
        openMenuButtonColor: "#000000",
        changeMenuColorOnOpen: false,
        colors: [
            "#95cb00",
            "#f3db03",
            "#2596be"
        ],
        accentColor: "#ff3672",
        logoUrl: useRedLogo ? "/assets/logos/bangonred.png" : "/assets/logos/bangon.png",
        logoHref: "/",
        onMenuOpen: ()=>setMenuOpen(true),
        onMenuClose: ()=>setMenuOpen(false)
    }, void 0, false, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(Header, "YpXVaStDl05IxJRZrjN3h3GB81E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
"use client";
;
;
;
;
const footerCards = [
    {
        title: "Flavours",
        links: [
            {
                text: "Atomic Peach",
                href: "/flavours/atomic-peach"
            },
            {
                text: "Big Banana",
                href: "/flavours/big-banana"
            },
            {
                text: "Green Apple",
                href: "/flavours/green-apple"
            },
            {
                text: "Ripe Raspberry",
                href: "/flavours/ripe-raspberry"
            },
            {
                text: "Tropical",
                href: "/flavours/tropical"
            }
        ]
    },
    {
        title: "Explore",
        links: [
            {
                text: "Cocktails",
                href: "/cocktails"
            },
            {
                text: "Where to Buy",
                href: "/where-to-buy"
            },
            {
                text: "Contact",
                href: "/contact"
            }
        ]
    },
    {
        title: "Shop & Social",
        links: [
            {
                text: "Shop Now",
                href: "https://deepbluedistilleries.ca/product-tag/bang-on/",
                external: true
            },
            {
                text: "Instagram",
                href: "https://instagram.com",
                external: true
            }
        ]
    }
];
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative w-full overflow-hidden bg-[#0a0a0a] py-16 md:py-20 lg:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-[1400px] px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true,
                    margin: "-100px"
                },
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "flex flex-col justify-between space-y-6 mb-6 lg:mb-0 border border-[#262626] p-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "block text-4xl text-[#f3db03]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "BANG ON"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-8 text-2xl md:text-3xl leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#fafafa]",
                                                    children: "99 Proof."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#d52b1e]",
                                                    children: "Proudly Canadian."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#d52b1e]",
                                                    children: "Born in BC."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            footerCards.map((card, index)=>{
                                let marginClass = "";
                                if (index > 0) {
                                    marginClass = "-mt-px";
                                }
                                if (index === 0) {
                                    marginClass += " md:mt-0";
                                } else if (index === 1) {
                                    marginClass += " md:-mt-px md:ml-0";
                                } else if (index === 2) {
                                    marginClass += " md:-mt-px md:-ml-px";
                                }
                                marginClass += " lg:mt-0";
                                if (index > 0) {
                                    marginClass += " lg:-ml-px";
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: itemVariants,
                                    className: `group relative min-h-[260px] overflow-hidden border border-[#262626] p-6 sm:p-8 transition-colors hover:bg-[#111111] ${marginClass}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "mb-6 text-lg text-[#fafafa]",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: card.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        target: link.external ? "_blank" : undefined,
                                                        rel: link.external ? "noopener noreferrer" : undefined,
                                                        className: "inline-flex items-center gap-1 text-base text-[#a3a3a3] transition-colors hover:text-[#fafafa]",
                                                        children: [
                                                            link.text,
                                                            link.external && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 25
                                                    }, this)
                                                }, link.text, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, card.title, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "relative flex items-center justify-center overflow-hidden py-8 md:py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            className: " group select-none text-[clamp(5.5rem,16vw,20rem)] leading-none font-black tracking-tighter whitespace-nowrap text-[#141414] transition-all duration-700 hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(90deg,#f3db03_0%,#95cb00_25%,#ff3672_55%,#2596be_100%)] ",
                            children: "BANG ON"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 171,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "border-t border-[#262626] pt-8 flex flex-col md:flex-row justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#737373] text-base",
                                children: "Drink responsibly. Must be 19+."
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#737373] text-base",
                                children: "© 2026 Brazen Bull Creative"
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/FruitNinjaBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FruitNinjaBackground",
    ()=>FruitNinjaBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const IMAGE_PATHS = {
    banana: "/assets/fruit-ninja/banana-01.png",
    bananaLeft: "/assets/fruit-ninja/cut-banana1-04.png",
    bananaRight: "/assets/fruit-ninja/cut-banana2-05.png",
    raspberry: "/assets/fruit-ninja/raspberry.png",
    raspberryHalf: "/assets/fruit-ninja/cut-raspberry-01.png",
    apple: "/assets/fruit-ninja/green-apple-02.png",
    appleHalf: "/assets/fruit-ninja/slice-green-apple-03.png",
    sword: "/assets/fruit-ninja/sword.png",
    splatPink1: "/assets/fruit-ninja/splat-pink-1.png",
    splatPink2: "/assets/fruit-ninja/splat-pink-2.png",
    splatYellow1: "/assets/fruit-ninja/splat-yellow-1.png",
    splatYellow2: "/assets/fruit-ninja/splat-yellow-2.png",
    splatGreen1: "/assets/fruit-ninja/splat-green-1.png",
    splatGreen2: "/assets/fruit-ninja/splat-green-2.png"
};
const SLICE_SOUNDS = [
    "/sounds/slice1.mp3",
    "/sounds/slice2.mp3",
    "/sounds/slice3.mp3",
    "/sounds/slice4.mp3",
    "/sounds/slice5.mp3",
    "/sounds/slice6.mp3",
    "/sounds/slice7.mp3",
    "/sounds/slice8.mp3"
];
const SPLAT_SOUNDS = [
    "/sounds/splat1.mp3",
    "/sounds/splat2.mp3",
    "/sounds/splat3.mp3",
    "/sounds/splat4.mp3",
    "/sounds/splat5.mp3"
];
const CALLOUTS = [
    "JUICYYY!",
    "BANG ON!",
    "バンオン!",
    "DELICIOUS!",
    "THAT'S TART!",
    "SMOOTH HIT!",
    "99 PROOF!",
    "KILLING IT!"
];
const RARE_CALLOUTS = [
    "WANNA BANG?",
    "CONCENTRATED!",
    "HIGH PROOF!",
    "CANADA'S 99!",
    "BORN IN BC!"
];
const FruitNinjaBackground = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function FruitNinjaBackground({ muted, gameActive = false, gamePaused = false, onScoreChange, onMissChange, onFrenzyChange, onMayhemChange, onGameOver }, ref) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const swordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sliceSoundRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const splatSoundRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const audioReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const mutedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(muted);
    const gameActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(gameActive);
    const gamePausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(gamePaused);
    const scoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const missesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const gameOverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onScoreChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onScoreChange);
    const onMissChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onMissChange);
    const onFrenzyChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onFrenzyChange);
    const onMayhemChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onMayhemChange);
    const onGameOverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onGameOver);
    const clearFruitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "FruitNinjaBackground.FruitNinjaBackground.useRef[clearFruitRef]": ()=>{}
    }["FruitNinjaBackground.FruitNinjaBackground.useRef[clearFruitRef]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            mutedRef.current = muted;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        muted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            gameActiveRef.current = gameActive;
            if (gameActive) gameOverRef.current = false;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        gameActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            gamePausedRef.current = gamePaused;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        gamePaused
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            onScoreChangeRef.current = onScoreChange;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        onScoreChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            onMissChangeRef.current = onMissChange;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        onMissChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            onFrenzyChangeRef.current = onFrenzyChange;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        onFrenzyChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            onMayhemChangeRef.current = onMayhemChange;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        onMayhemChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            onGameOverRef.current = onGameOver;
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], [
        onGameOver
    ]);
    function randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    function unlockAudio() {
        audioReadyRef.current = true;
        [
            ...sliceSoundRefs.current,
            ...splatSoundRefs.current
        ].forEach((audio)=>{
            audio.play().then(()=>{
                audio.pause();
                audio.currentTime = 0;
            }).catch(()=>{});
        });
    }
    function resetScoreAndMisses() {
        scoreRef.current = 0;
        missesRef.current = 0;
        gameOverRef.current = false;
        onScoreChangeRef.current?.(0);
        onMissChangeRef.current?.(0);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "FruitNinjaBackground.FruitNinjaBackground.useImperativeHandle": ()=>({
                unlockAudio,
                resetScore: resetScoreAndMisses,
                clearFruit: ({
                    "FruitNinjaBackground.FruitNinjaBackground.useImperativeHandle": ()=>clearFruitRef.current()
                })["FruitNinjaBackground.FruitNinjaBackground.useImperativeHandle"]
            })
    }["FruitNinjaBackground.FruitNinjaBackground.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
            const canvasEl = canvasRef.current;
            if (!canvasEl) return;
            const context = canvasEl.getContext("2d", {
                alpha: true
            });
            if (!context) return;
            const canvas = canvasEl;
            const ctx = context;
            let raf = 0;
            let width = 0;
            let height = 0;
            let dpr = 1;
            let fruitId = 0;
            let calloutId = 0;
            let successfulCuts = 0;
            let waveTimer = 0;
            let waveIndex = 0;
            let waveSpawnQueue = 0;
            let waveSpawnTimer = 0;
            let frenzyTriggered = false;
            let frenzyActive = false;
            let mayhemTriggered = false;
            let mayhemActive = false;
            let internalPaused = false;
            let frenzyTimeout = null;
            let mayhemTimeout = null;
            let lastTime = performance.now();
            let isPointerInside = false;
            let pointer = {
                x: 0,
                y: 0
            };
            let previousPointer = {
                x: 0,
                y: 0
            };
            let slashTrail = [];
            let slashPowerHistory = [];
            const fruits = [];
            const particles = [];
            const splats = [];
            const callouts = [];
            const images = {};
            clearFruitRef.current = ({
                "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
                    fruits.length = 0;
                    particles.length = 0;
                    splats.length = 0;
                    callouts.length = 0;
                    slashTrail = [];
                    slashPowerHistory = [];
                    waveTimer = 0;
                    waveSpawnQueue = 0;
                    waveSpawnTimer = 0;
                }
            })["FruitNinjaBackground.FruitNinjaBackground.useEffect"];
            Object.entries(IMAGE_PATHS).forEach({
                "FruitNinjaBackground.FruitNinjaBackground.useEffect": ([key, src])=>{
                    const img = new Image();
                    img.src = src;
                    images[key] = img;
                    if (key === "sword") swordRef.current = img;
                }
            }["FruitNinjaBackground.FruitNinjaBackground.useEffect"]);
            sliceSoundRefs.current = SLICE_SOUNDS.map({
                "FruitNinjaBackground.FruitNinjaBackground.useEffect": (src)=>{
                    const audio = new Audio(src);
                    audio.volume = 0.25;
                    return audio;
                }
            }["FruitNinjaBackground.FruitNinjaBackground.useEffect"]);
            splatSoundRefs.current = SPLAT_SOUNDS.map({
                "FruitNinjaBackground.FruitNinjaBackground.useEffect": (src)=>{
                    const audio = new Audio(src);
                    audio.volume = 0.12;
                    return audio;
                }
            }["FruitNinjaBackground.FruitNinjaBackground.useEffect"]);
            function resize() {
                const rect = canvas.getBoundingClientRect();
                width = rect.width;
                height = rect.height;
                dpr = Math.min(window.devicePixelRatio || 1, 2);
                canvas.width = Math.floor(width * dpr);
                canvas.height = Math.floor(height * dpr);
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
            function getFruitColor(type) {
                return type === "banana" ? "#f3db03" : type === "apple" ? "#9be33f" : "#ff3672";
            }
            function getSplatKey(type) {
                if (type === "banana") {
                    return Math.random() > 0.5 ? "splatYellow1" : "splatYellow2";
                }
                if (type === "apple") {
                    return Math.random() > 0.5 ? "splatGreen1" : "splatGreen2";
                }
                return Math.random() > 0.5 ? "splatPink1" : "splatPink2";
            }
            function randomFruitType() {
                return randomItem([
                    "banana",
                    "raspberry",
                    "apple"
                ]);
            }
            function spawnFruit() {
                const mobile = window.innerWidth < 768;
                const maxFruit = mobile ? 10 : mayhemActive ? 18 : 14;
                if (fruits.length >= maxFruit) return;
                const type = randomFruitType();
                const mobileScale = mobile ? 0.72 : 1;
                const size = (type === "banana" ? 250 + Math.random() * 70 : type === "apple" ? 210 + Math.random() * 65 : 180 + Math.random() * 60) * mobileScale;
                const useSideLaunch = mayhemActive && Math.random() < 0.45;
                if (useSideLaunch) {
                    const launchFromLeft = Math.random() > 0.5;
                    const x = launchFromLeft ? -size * 0.35 : width + size * 0.35;
                    const y = height * (0.22 + Math.random() * 0.56);
                    const speed = 8.8 + Math.random() * 3.3;
                    fruits.push({
                        id: fruitId++,
                        type,
                        x,
                        y,
                        vx: launchFromLeft ? speed : -speed,
                        vy: -1.4 + Math.random() * 2.8,
                        size,
                        rotation: Math.random() * Math.PI * 2,
                        rotationSpeed: (Math.random() - 0.5) * 0.09,
                        sliced: false,
                        life: 1,
                        countedMiss: false
                    });
                    return;
                }
                const launchFromLeft = Math.random() > 0.5;
                const x = launchFromLeft ? width * (0.08 + Math.random() * 0.1) : width * (0.82 + Math.random() * 0.1);
                const y = height + size * 0.2;
                const landingX = width * (0.44 + Math.random() * 0.12);
                const flightTime = frenzyActive ? 130 + Math.random() * 25 : 165 + Math.random() * 35;
                fruits.push({
                    id: fruitId++,
                    type,
                    x,
                    y,
                    vx: (landingX - x) / flightTime,
                    vy: frenzyActive ? -12.6 - Math.random() * 1.9 : -12.2 - Math.random() * 1.8,
                    size,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.07,
                    sliced: false,
                    life: 1,
                    countedMiss: false
                });
            }
            function queueWave() {
                const mobile = window.innerWidth < 768;
                const idlePattern = mobile ? [
                    2,
                    2,
                    3
                ] : [
                    2,
                    3,
                    3
                ];
                const gamePattern = mobile ? [
                    2,
                    3,
                    3,
                    4
                ] : [
                    3,
                    4,
                    4,
                    5
                ];
                const frenzyPattern = mobile ? [
                    6,
                    7,
                    8
                ] : [
                    9,
                    11,
                    13
                ];
                const pattern = frenzyActive ? frenzyPattern : gameActiveRef.current ? gamePattern : idlePattern;
                waveSpawnQueue = pattern[waveIndex % pattern.length];
                waveIndex++;
                waveTimer = 0;
            }
            function updateWaves(delta) {
                if (gamePausedRef.current || internalPaused || gameOverRef.current) return;
                waveTimer += delta;
                waveSpawnTimer += delta;
                const pauseBetweenWaves = mayhemActive ? 34 : frenzyActive ? 42 : gameActiveRef.current ? 80 : 95;
                const spawnGap = mayhemActive ? 3 : frenzyActive ? 4 : 11;
                if (waveSpawnQueue <= 0 && waveTimer > pauseBetweenWaves) {
                    queueWave();
                }
                if (waveSpawnQueue > 0 && waveSpawnTimer > spawnGap) {
                    spawnFruit();
                    waveSpawnQueue--;
                    waveSpawnTimer = 0;
                }
            }
            function playSound(type) {
                if (!audioReadyRef.current || mutedRef.current) return;
                const pool = type === "slice" ? sliceSoundRefs.current : splatSoundRefs.current;
                const sound = randomItem(pool);
                if (!sound) return;
                sound.currentTime = 0;
                sound.play().catch({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.playSound": ()=>{}
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.playSound"]);
            }
            function createCallout(x, y, fruitType, overrideText) {
                const useRare = Math.random() < 0.12;
                const text = overrideText ?? (useRare ? randomItem(RARE_CALLOUTS) : randomItem(CALLOUTS));
                callouts.push({
                    id: calloutId++,
                    text,
                    x,
                    y,
                    life: 1,
                    color: getFruitColor(fruitType),
                    rotation: (Math.random() - 0.5) * 0.22
                });
            }
            function createJuice(x, y, type) {
                const color = getFruitColor(type);
                splats.push({
                    x: x + (Math.random() - 0.5) * 34,
                    y: y + (Math.random() - 0.5) * 34,
                    size: 105 + Math.random() * 65,
                    rotation: Math.random() * Math.PI * 2,
                    life: 1,
                    imageKey: getSplatKey(type)
                });
                if (splats.length > 6) splats.shift();
                const dropletCount = 30 + Math.floor(Math.random() * 18);
                for(let i = 0; i < dropletCount; i++){
                    const speed = 5 + Math.random() * 11;
                    const angle = Math.random() * Math.PI * 2;
                    particles.push({
                        x: x + (Math.random() - 0.5) * 18,
                        y: y + (Math.random() - 0.5) * 18,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        radius: 1 + Math.random() * 1.8,
                        life: 1,
                        color
                    });
                }
            }
            function triggerFrenzyIfNeeded() {
                if (frenzyTriggered || scoreRef.current < 150 || gameOverRef.current) {
                    return;
                }
                frenzyTriggered = true;
                internalPaused = true;
                onFrenzyChangeRef.current?.(true);
                clearFruitRef.current();
                frenzyTimeout = window.setTimeout({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.triggerFrenzyIfNeeded": ()=>{
                        if (gameOverRef.current) return;
                        frenzyActive = true;
                        internalPaused = false;
                        onFrenzyChangeRef.current?.(false);
                        queueWave();
                    }
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.triggerFrenzyIfNeeded"], 2600);
            }
            function triggerMayhemIfNeeded() {
                if (mayhemTriggered || scoreRef.current < 250 || gameOverRef.current) {
                    return;
                }
                mayhemTriggered = true;
                internalPaused = true;
                onMayhemChangeRef.current?.(true);
                clearFruitRef.current();
                mayhemTimeout = window.setTimeout({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.triggerMayhemIfNeeded": ()=>{
                        if (gameOverRef.current) return;
                        mayhemActive = true;
                        internalPaused = false;
                        onMayhemChangeRef.current?.(false);
                        queueWave();
                    }
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.triggerMayhemIfNeeded"], 2600);
            }
            function awardScore(cutCount, x, y, type) {
                if (cutCount <= 0 || gameOverRef.current) return;
                let points = cutCount;
                if (cutCount === 2) {
                    points = 3;
                    createCallout(x, y - 50, type, "DOUBLE BANG!");
                }
                if (cutCount >= 3) {
                    points = cutCount * 2;
                    createCallout(x, y - 50, type, "TRIPLE BANG!");
                }
                scoreRef.current += points;
                onScoreChangeRef.current?.(scoreRef.current);
                triggerFrenzyIfNeeded();
                triggerMayhemIfNeeded();
            }
            function sliceFruit(fruit) {
                if (fruit.sliced || !gameActiveRef.current || gameOverRef.current) {
                    return false;
                }
                fruit.sliced = true;
                successfulCuts++;
                createJuice(fruit.x, fruit.y, fruit.type);
                if (successfulCuts % 5 === 0 || Math.random() < 0.08) {
                    createCallout(fruit.x, fruit.y - 40, fruit.type);
                }
                playSound("slice");
                setTimeout({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.sliceFruit": ()=>playSound("splat")
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.sliceFruit"], 70);
                return true;
            }
            function triggerGameOver() {
                if (gameOverRef.current) return;
                gameOverRef.current = true;
                internalPaused = false;
                frenzyActive = false;
                frenzyTriggered = false;
                mayhemActive = false;
                mayhemTriggered = false;
                if (frenzyTimeout) {
                    window.clearTimeout(frenzyTimeout);
                    frenzyTimeout = null;
                }
                if (mayhemTimeout) {
                    window.clearTimeout(mayhemTimeout);
                    mayhemTimeout = null;
                }
                onFrenzyChangeRef.current?.(false);
                onMayhemChangeRef.current?.(false);
                onGameOverRef.current?.(scoreRef.current);
                missesRef.current = 0;
                scoreRef.current = 0;
                clearFruitRef.current();
                onMissChangeRef.current?.(0);
            }
            function registerMiss(fruit) {
                if (!gameActiveRef.current || gameOverRef.current || fruit.sliced || fruit.countedMiss) {
                    return;
                }
                fruit.countedMiss = true;
                missesRef.current += 1;
                onMissChangeRef.current?.(missesRef.current);
                if (missesRef.current >= 3) {
                    triggerGameOver();
                }
            }
            function distanceToSegment(px, py, x1, y1, x2, y2) {
                const dx = x2 - x1;
                const dy = y2 - y1;
                if (dx === 0 && dy === 0) return Math.hypot(px - x1, py - y1);
                const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)));
                const cx = x1 + t * dx;
                const cy = y1 + t * dy;
                return Math.hypot(px - cx, py - cy);
            }
            function drawImageCentered(img, x, y, size, rotation) {
                if (!img || !img.complete) return;
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(rotation);
                const ratio = img.width / img.height;
                const drawW = ratio >= 1 ? size : size * ratio;
                const drawH = ratio >= 1 ? size / ratio : size;
                ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
                ctx.restore();
            }
            function drawSplat(splat, delta) {
                const img = images[splat.imageKey];
                if (!img || !img.complete) return;
                splat.life -= 0.008 * delta;
                const alpha = Math.max(splat.life, 0);
                ctx.save();
                ctx.globalAlpha = alpha * 0.42;
                ctx.translate(splat.x, splat.y);
                ctx.rotate(splat.rotation);
                ctx.drawImage(img, -splat.size / 2, -splat.size / 2, splat.size, splat.size);
                ctx.restore();
            }
            function drawFruit(fruit) {
                if (!fruit.sliced) {
                    drawImageCentered(images[fruit.type], fruit.x, fruit.y, fruit.size, fruit.rotation);
                    return;
                }
                const halfSize = fruit.size * 0.72;
                const split = 42 * (1 - fruit.life + 0.35);
                if (fruit.type === "banana") {
                    drawImageCentered(images.bananaLeft, fruit.x - split, fruit.y, halfSize, fruit.rotation - 0.45);
                    drawImageCentered(images.bananaRight, fruit.x + split, fruit.y, halfSize, fruit.rotation + 0.45);
                }
                if (fruit.type === "raspberry") {
                    drawImageCentered(images.raspberryHalf, fruit.x - split, fruit.y, halfSize, fruit.rotation - 0.45);
                    ctx.save();
                    ctx.scale(-1, 1);
                    drawImageCentered(images.raspberryHalf, -fruit.x - split, fruit.y, halfSize, -fruit.rotation + 0.45);
                    ctx.restore();
                }
                if (fruit.type === "apple") {
                    drawImageCentered(images.appleHalf, fruit.x - split, fruit.y, halfSize, fruit.rotation - 0.4);
                    ctx.save();
                    ctx.scale(-1, 1);
                    drawImageCentered(images.appleHalf, -fruit.x - split, fruit.y, halfSize, -fruit.rotation + 0.4);
                    ctx.restore();
                }
            }
            function drawSlashTrail() {
                if (!gameActiveRef.current || gameOverRef.current || slashTrail.length < 2) {
                    return;
                }
                ctx.save();
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                for(let i = 1; i < slashTrail.length; i++){
                    const a = slashTrail[i - 1];
                    const b = slashTrail[i];
                    const alpha = Math.min(a.life, b.life);
                    ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
                    ctx.lineWidth = 7 * alpha;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                    ctx.strokeStyle = `rgba(255,54,114,${alpha * 0.5})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
                ctx.restore();
            }
            function drawCallouts(delta) {
                ctx.save();
                callouts.forEach({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.drawCallouts": (callout)=>{
                        callout.y -= 0.65 * delta;
                        callout.life -= 0.018 * delta;
                        const alpha = Math.max(callout.life, 0);
                        ctx.save();
                        ctx.translate(callout.x, callout.y);
                        ctx.rotate(callout.rotation);
                        ctx.globalAlpha = alpha;
                        ctx.textAlign = "center";
                        ctx.font = "300 36px 'Arial Narrow', Arial, sans-serif";
                        ctx.strokeStyle = "rgba(0,0,0,0.45)";
                        ctx.lineWidth = 3;
                        ctx.strokeText(callout.text, 0, 0);
                        ctx.fillStyle = callout.color;
                        ctx.fillText(callout.text, 0, 0);
                        ctx.restore();
                    }
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.drawCallouts"]);
                ctx.restore();
                for(let i = callouts.length - 1; i >= 0; i--){
                    if (!callouts[i] || callouts[i].life <= 0) callouts.splice(i, 1);
                }
            }
            function drawSword() {
                if (!gameActiveRef.current || gameOverRef.current || window.innerWidth < 768) {
                    return;
                }
                const sword = swordRef.current;
                if (!isPointerInside || !sword || !sword.complete) return;
                const dx = pointer.x - previousPointer.x;
                const dy = pointer.y - previousPointer.y;
                const angle = Math.atan2(dy, dx) || -0.8;
                ctx.save();
                ctx.translate(pointer.x, pointer.y);
                ctx.rotate(angle + Math.PI * 0.12);
                ctx.drawImage(sword, -14, -120, 120, 240);
                ctx.restore();
            }
            function animate(now) {
                const delta = Math.min((now - lastTime) / 16.67, 2);
                lastTime = now;
                ctx.clearRect(0, 0, width, height);
                splats.forEach({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.animate": (splat)=>drawSplat(splat, delta)
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.animate"]);
                for(let i = splats.length - 1; i >= 0; i--){
                    if (!splats[i] || splats[i].life <= 0) splats.splice(i, 1);
                }
                updateWaves(delta);
                fruits.forEach({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.animate": (fruit)=>{
                        if (!fruit) return;
                        fruit.x += fruit.vx * delta;
                        fruit.y += fruit.vy * delta;
                        fruit.vy += 0.115 * delta;
                        fruit.rotation += fruit.rotationSpeed * delta;
                        if (fruit.sliced) fruit.life -= 0.018 * delta;
                        drawFruit(fruit);
                    }
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.animate"]);
                for(let i = fruits.length - 1; i >= 0; i--){
                    const fruit = fruits[i];
                    if (!fruit) continue;
                    if (!fruit.sliced && fruit.y > height + fruit.size * 0.25) {
                        registerMiss(fruit);
                    }
                    if (fruit.y > height + fruit.size * 2 || fruit.x < -fruit.size * 2 || fruit.x > width + fruit.size * 2 || fruit.life <= 0) {
                        fruits.splice(i, 1);
                    }
                }
                particles.forEach({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.animate": (p)=>{
                        if (!p) return;
                        p.x += p.vx * delta;
                        p.y += p.vy * delta;
                        p.vy += 0.08 * delta;
                        p.life -= 0.045 * delta;
                        const alpha = Math.max(p.life, 0);
                        ctx.save();
                        ctx.globalAlpha = alpha * 0.85;
                        ctx.fillStyle = p.color;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.animate"]);
                for(let i = particles.length - 1; i >= 0; i--){
                    if (!particles[i] || particles[i].life <= 0) particles.splice(i, 1);
                }
                slashTrail.forEach({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.animate": (p)=>{
                        p.life -= 0.08 * delta;
                    }
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.animate"]);
                slashTrail = slashTrail.filter({
                    "FruitNinjaBackground.FruitNinjaBackground.useEffect.animate": (p)=>p.life > 0
                }["FruitNinjaBackground.FruitNinjaBackground.useEffect.animate"]);
                drawSlashTrail();
                drawCallouts(delta);
                drawSword();
                raf = requestAnimationFrame(animate);
            }
            function handlePointerMove(e) {
                const rect = canvas.getBoundingClientRect();
                const next = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
                const prev = pointer;
                previousPointer = prev;
                pointer = next;
                isPointerInside = true;
                if (!gameActiveRef.current || gameOverRef.current) return;
                const movement = Math.hypot(next.x - prev.x, next.y - prev.y);
                if (movement > 1.5) {
                    slashTrail.push({
                        x: next.x,
                        y: next.y,
                        life: 1
                    });
                    slashPowerHistory.push(movement);
                    if (slashPowerHistory.length > 5) {
                        slashPowerHistory.shift();
                    }
                    const slashPower = slashPowerHistory.reduce({
                        "FruitNinjaBackground.FruitNinjaBackground.useEffect.handlePointerMove.slashPower": (sum, value)=>sum + value
                    }["FruitNinjaBackground.FruitNinjaBackground.useEffect.handlePointerMove.slashPower"], 0);
                    const mobile = window.innerWidth < 768;
                    const minSlashPower = mobile ? 58 : 82;
                    const currentSegmentPower = mobile ? 11 : 16;
                    const isRealSlash = slashPower >= minSlashPower && movement >= currentSegmentPower;
                    if (!isRealSlash) return;
                    let cutCount = 0;
                    let comboX = 0;
                    let comboY = 0;
                    let comboType = "raspberry";
                    fruits.forEach({
                        "FruitNinjaBackground.FruitNinjaBackground.useEffect.handlePointerMove": (fruit)=>{
                            if (!fruit || fruit.sliced) return;
                            const hitRadius = fruit.size * 0.43;
                            const distance = distanceToSegment(fruit.x, fruit.y, prev.x, prev.y, next.x, next.y);
                            if (distance < hitRadius) {
                                const didSlice = sliceFruit(fruit);
                                if (didSlice) {
                                    cutCount++;
                                    comboX += fruit.x;
                                    comboY += fruit.y;
                                    comboType = fruit.type;
                                }
                            }
                        }
                    }["FruitNinjaBackground.FruitNinjaBackground.useEffect.handlePointerMove"]);
                    if (cutCount > 0) {
                        awardScore(cutCount, comboX / cutCount, comboY / cutCount, comboType);
                        slashPowerHistory = [];
                    }
                }
            }
            function handlePointerEnter() {
                isPointerInside = true;
            }
            function handlePointerLeave() {
                isPointerInside = false;
                slashTrail = [];
                slashPowerHistory = [];
            }
            function handleVisibilityChange() {
                if (document.hidden) {
                    cancelAnimationFrame(raf);
                } else {
                    lastTime = performance.now();
                    raf = requestAnimationFrame(animate);
                }
            }
            resize();
            queueWave();
            raf = requestAnimationFrame(animate);
            window.addEventListener("resize", resize);
            document.addEventListener("visibilitychange", handleVisibilityChange);
            canvas.addEventListener("pointermove", handlePointerMove);
            canvas.addEventListener("pointerenter", handlePointerEnter);
            canvas.addEventListener("pointerleave", handlePointerLeave);
            canvas.addEventListener("pointerdown", unlockAudio, {
                once: true
            });
            canvas.addEventListener("touchstart", unlockAudio, {
                once: true
            });
            return ({
                "FruitNinjaBackground.FruitNinjaBackground.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    if (frenzyTimeout) {
                        window.clearTimeout(frenzyTimeout);
                    }
                    if (mayhemTimeout) {
                        window.clearTimeout(mayhemTimeout);
                    }
                    window.removeEventListener("resize", resize);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    canvas.removeEventListener("pointermove", handlePointerMove);
                    canvas.removeEventListener("pointerenter", handlePointerEnter);
                    canvas.removeEventListener("pointerleave", handlePointerLeave);
                    canvas.removeEventListener("pointerdown", unlockAudio);
                    canvas.removeEventListener("touchstart", unlockAudio);
                }
            })["FruitNinjaBackground.FruitNinjaBackground.useEffect"];
        }
    }["FruitNinjaBackground.FruitNinjaBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-[5] pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: `
          absolute inset-0 z-0
          h-full w-full
          ${gameActive ? "cursor-none" : "cursor-default"}
          touch-none
          pointer-events-auto
        `,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/home/FruitNinjaBackground.tsx",
            lineNumber: 1107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/FruitNinjaBackground.tsx",
        lineNumber: 1106,
        columnNumber: 5
    }, this);
}, "ukrfWAGESQS1r/KprD6rGJvcj8o=")), "ukrfWAGESQS1r/KprD6rGJvcj8o=");
_c1 = FruitNinjaBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "FruitNinjaBackground$forwardRef");
__turbopack_context__.k.register(_c1, "FruitNinjaBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FruitNinjaBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FruitNinjaBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function HeroSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fruitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const musicRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fxMuted, setFxMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [musicEnabled, setMusicEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [frenzyActive, setFrenzyActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mayhemActive, setMayhemActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [finalScore, setFinalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [misses, setMisses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [leaderboard, setLeaderboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeName, setActiveName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    const contentY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        60
    ]);
    const contentOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.6
    ], [
        1,
        0
    ]);
    const isIdle = gameState === "idle";
    const isPlaying = gameState === "playing";
    const isGameOver = gameState === "gameover";
    const loadLeaderboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[loadLeaderboard]": async ()=>{
            try {
                const response = await fetch("/api/leaderboard", {
                    cache: "no-store"
                });
                if (!response.ok) return;
                const data = await response.json();
                if (Array.isArray(data.leaderboard)) {
                    setLeaderboard(data.leaderboard);
                }
            } catch  {
                setLeaderboard([]);
            }
        }
    }["HeroSection.useCallback[loadLeaderboard]"], []);
    const updateLeaderboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[updateLeaderboard]": async (playerName, nextScore)=>{
            if (!playerName || nextScore <= 0) return;
            try {
                const response = await fetch("/api/leaderboard", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: playerName,
                        score: nextScore
                    })
                });
                if (!response.ok) return;
                const data = await response.json();
                if (Array.isArray(data.leaderboard)) {
                    setLeaderboard(data.leaderboard);
                }
            } catch  {
                await loadLeaderboard();
            }
        }
    }["HeroSection.useCallback[updateLeaderboard]"], [
        loadLeaderboard
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            loadLeaderboard();
        }
    }["HeroSection.useEffect"], [
        loadLeaderboard
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const musicAudio = musicRef.current;
            if (!musicAudio) return;
            musicAudio.volume = 0.5;
            musicAudio.loop = true;
            musicAudio.play().then({
                "HeroSection.useEffect": ()=>{
                    setMusicEnabled(true);
                }
            }["HeroSection.useEffect"]).catch({
                "HeroSection.useEffect": ()=>{
                    setMusicEnabled(true);
                }
            }["HeroSection.useEffect"]);
        }
    }["HeroSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (gameState !== "countdown") return;
            setCountdown(5);
            fruitRef.current?.clearFruit();
            const interval = window.setInterval({
                "HeroSection.useEffect.interval": ()=>{
                    setCountdown({
                        "HeroSection.useEffect.interval": (current)=>{
                            if (current <= 1) {
                                window.clearInterval(interval);
                                fruitRef.current?.clearFruit();
                                setGameState("playing");
                                return 0;
                            }
                            return current - 1;
                        }
                    }["HeroSection.useEffect.interval"]);
                }
            }["HeroSection.useEffect.interval"], 1000);
            return ({
                "HeroSection.useEffect": ()=>window.clearInterval(interval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        gameState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (gameState !== "gameover") return;
            const timeout = window.setTimeout({
                "HeroSection.useEffect.timeout": ()=>{
                    setScore(0);
                    setFinalScore(0);
                    setMisses(0);
                    setFrenzyActive(false);
                    setMayhemActive(false);
                    fruitRef.current?.resetScore();
                    fruitRef.current?.clearFruit();
                    setGameState("idle");
                    loadLeaderboard();
                }
            }["HeroSection.useEffect.timeout"], 2000);
            return ({
                "HeroSection.useEffect": ()=>window.clearTimeout(timeout)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        gameState,
        loadLeaderboard
    ]);
    const startGame = ()=>{
        const cleanName = name.trim() || "Player";
        setActiveName(cleanName);
        setScore(0);
        setFinalScore(0);
        setMisses(0);
        setFrenzyActive(false);
        setMayhemActive(false);
        fruitRef.current?.resetScore();
        fruitRef.current?.clearFruit();
        fruitRef.current?.unlockAudio();
        const musicAudio = musicRef.current;
        if (musicAudio && musicEnabled) {
            musicAudio.volume = 0.5;
            musicAudio.loop = true;
            musicAudio.play().catch(()=>{});
        }
        setGameState("countdown");
    };
    const handleGameOver = (finishedScore)=>{
        setFinalScore(finishedScore);
        setScore(finishedScore);
        setMisses(3);
        setFrenzyActive(false);
        setMayhemActive(false);
        if (activeName && finishedScore > 0) {
            updateLeaderboard(activeName, finishedScore);
        }
        setGameState("gameover");
    };
    const toggleMusic = async ()=>{
        const musicAudio = musicRef.current;
        if (!musicAudio) return;
        musicAudio.volume = 0.5;
        musicAudio.loop = true;
        if (musicEnabled) {
            musicAudio.pause();
            setMusicEnabled(false);
            return;
        }
        try {
            await musicAudio.play();
            setMusicEnabled(true);
        } catch  {
            setMusicEnabled(true);
        }
    };
    const toggleFx = ()=>{
        fruitRef.current?.unlockAudio();
        setFxMuted((current)=>!current);
    };
    const handleContinue = ()=>{
        const nextSection = document.getElementById("after-hero");
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: "smooth"
            });
            return;
        }
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative min-h-screen overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: musicRef,
                src: "/sounds/music.mp3",
                preload: "auto",
                loop: true
            }, void 0, false, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FruitNinjaBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FruitNinjaBackground"], {
                ref: fruitRef,
                muted: fxMuted,
                gameActive: isPlaying,
                gamePaused: gameState === "countdown" || frenzyActive || mayhemActive || isGameOver,
                onGameOver: handleGameOver,
                onFrenzyChange: (active)=>{
                    setFrenzyActive(active);
                },
                onMayhemChange: (active)=>{
                    setMayhemActive(active);
                },
                onScoreChange: (nextScore)=>{
                    setScore(nextScore);
                },
                onMissChange: (nextMisses)=>{
                    setMisses(nextMisses);
                }
            }, void 0, false, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(255,54,114,0.18),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.85))] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute left-4 top-28 z-30 w-[240px] border-2 border-[#2596be] bg-black/80 p-4 text-white shadow-[0_0_20px_rgba(37,150,190,0.5)]           backdrop-blur-md pointer-events-auto md:left-8 md:top-24 ",
                children: [
                    isIdle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-black uppercase tracking-[0.04em] text-[#95cb00]",
                                children: "Player 1"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-bold uppercase tracking-[0.22em] text-[#2596be]",
                                children: "Enter Name"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "Your name",
                                maxLength: 16,
                                className: " w-full border border-[#2596be]/80 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.08em] text-white outline-none placeholder:text-white/35 focus:border-[#2596be] "
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: startGame,
                                className: " w-full bg-[#2596be] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#ff3672] ",
                                children: "Play"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase leading-snug tracking-[0.12em] text-white",
                                children: "Slice all fruits. Score resets at 3 misses."
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-1 text-[10px] uppercase tracking-[0.22em] text-[#2596be]",
                                children: isGameOver ? "Final Score" : "Fruits Cut"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-5xl leading-none text-[#ff3672]",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                                },
                                children: isGameOver ? finalScore : score
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[10px] uppercase tracking-[0.16em] text-white/70",
                                children: [
                                    "Player: ",
                                    activeName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex gap-1",
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `h-2 flex-1 ${index < misses ? "bg-[#2596be]" : "bg-white/20"}`
                                    }, index, false, {
                                        fileName: "[project]/components/home/hero-section.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs font-semibold uppercase leading-snug tracking-[0.12em] text-white",
                                children: isGameOver ? "Returning home..." : mayhemActive ? "Absolute mayhem incoming..." : frenzyActive ? "Fruit frenzy incoming..." : "Miss 3 fruits and score resets"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 border-t border-[#2596be]/45 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[12px] uppercase tracking-[0.22em] text-[#2596be]",
                                children: "= Global High Scores ="
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: leaderboard.length > 0 ? leaderboard.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between gap-3 text-xs uppercase tracking-[0.08em] text-white/85",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: [
                                                    String(index + 1).padStart(2, "0"),
                                                    ". ",
                                                    entry.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/hero-section.tsx",
                                                lineNumber: 396,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 text-[#f3db03]",
                                                children: entry.score
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/hero-section.tsx",
                                                lineNumber: 399,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${entry.name}-${entry.score}-${index}`, true, {
                                        fileName: "[project]/components/home/hero-section.tsx",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.08em] text-white/45",
                                    children: "No scores yet"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/hero-section.tsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            gameState === "countdown" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-40 flex items-center justify-center pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-md"
                    }, void 0, false, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-5 text-2xl font-black uppercase tracking-[0.08em] text-[#95cb00] md:text-4xl",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                                    textShadow: "0 0 14px rgba(149,203,0,0.65), 0 0 2px #000000"
                                },
                                children: "Slice all fruits. Score resets at 3 misses."
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[26vw] leading-none text-[#ff3672] md:text-[13vw]",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                                    textShadow: "0 0 20px rgba(255,54,114,0.65), 0 0 2px #ffffff"
                                },
                                children: countdown
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 415,
                columnNumber: 9
            }, this),
            isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-40 flex items-center justify-center pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 bg-black/70 backdrop-blur-md",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.25
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative z-10 px-6 text-center",
                        initial: {
                            opacity: 0,
                            scale: 0.9,
                            y: 24
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.35,
                            ease: "easeOut"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[16vw] leading-[0.85] text-[#ff3672] md:text-[8vw]",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                                    textShadow: "0 0 24px rgba(255,54,114,0.85), 0 0 2px #ffffff"
                                },
                                children: "GAME OVER"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-2xl font-black uppercase tracking-[0.16em] text-[#95cb00] md:text-4xl",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                                },
                                children: [
                                    "FINAL SCORE: ",
                                    finalScore
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm font-black uppercase tracking-[0.22em] text-white/80 md:text-base",
                                children: "Returning home..."
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 448,
                columnNumber: 9
            }, this),
            frenzyActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-40 flex items-center justify-center pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/65 backdrop-blur-md"
                    }, void 0, false, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 494,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14vw] leading-[0.85] text-[#95cb00] md:text-[7vw]",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                                    textShadow: "0 0 22px rgba(149,203,0,0.8), 0 0 2px #ffffff"
                                },
                                children: [
                                    "FRUIT FRENZY",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/hero-section.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this),
                                    "INCOMING"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#f3db03] md:text-lg",
                                children: "The next wave hits harder."
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 493,
                columnNumber: 9
            }, this),
            mayhemActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-40 flex items-center justify-center pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/70 backdrop-blur-md"
                    }, void 0, false, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 521,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13vw] leading-[0.85] text-[#ff3672] md:text-[6.8vw]",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                                    textShadow: "0 0 24px rgba(255,54,114,0.85), 0 0 2px #ffffff"
                                },
                                children: [
                                    "ABSOLUTE",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/home/hero-section.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this),
                                    "MAYHEM"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#95cb00] md:text-lg",
                                children: "Incoming from every side."
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 520,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " absolute right-4 top-28 z-50 flex flex-col gap-2 pointer-events-auto md:right-8 md:top-24 md:flex-row ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: toggleMusic,
                        className: " flex h-10 items-center gap-2 border border-[#f3db03]/50 bg-black/70 px-4 text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:bg-[#f3db03] hover:text-black ",
                        children: [
                            musicEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this),
                            musicEnabled ? "Disable Music" : "Enable Music"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: toggleFx,
                        className: " flex h-10 items-center gap-2 border border-[#95cb00]/50 bg-black/70 px-4 text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:bg-[#ff3672] hover:text-black ",
                        children: [
                            fxMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 599,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 601,
                                columnNumber: 13
                            }, this),
                            fxMuted ? "Enable FX" : "Disable FX"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pointer-events-none",
                style: {
                    y: contentY,
                    opacity: contentOpacity
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: " relative mb-0 w-[94vw] max-w-[1150px] md:w-[76vw] lg:w-[68vw] xl:w-[62vw] ",
                        initial: {
                            y: 36,
                            opacity: 0,
                            scale: 0.96
                        },
                        animate: {
                            y: isIdle ? 0 : -20,
                            opacity: isIdle ? 1 : 0,
                            scale: isIdle ? 1 : 0.94,
                            filter: isIdle ? "blur(0px)" : "blur(10px)"
                        },
                        transition: {
                            duration: isIdle ? 0.9 : 0.45,
                            ease: "easeOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/herologo.png",
                            alt: "Wanna Bang? Bang On!",
                            width: 1600,
                            height: 900,
                            priority: true,
                            className: "h-auto w-full select-none drop-shadow-[0_0_28px_rgba(255,54,114,0.35)]"
                        }, void 0, false, {
                            fileName: "[project]/components/home/hero-section.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: " absolute left-1/2 top-1/2 h-[42vw] w-[70vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff3672]/10 blur-[90px] pointer-events-none ",
                        animate: {
                            opacity: isIdle ? 0.45 : 0.28,
                            scale: isIdle ? 1 : 0.8
                        },
                        transition: {
                            duration: 0.7,
                            ease: "easeOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: " relative z-10 -mt-4 mb-5 text-center md:-mt-6 md:mb-6 ",
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: isIdle ? 1 : 0,
                            y: isIdle ? 0 : 12
                        },
                        transition: {
                            duration: 0.45,
                            delay: isIdle ? 0.15 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: " text-xs font-black uppercase tracking-[0.28em] text-white md:text-lg lg:text-3xl ",
                                style: {
                                    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                                },
                                children: "CANADA'S 99 PROOF • BORN IN BC"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 683,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm font-black tracking-[0.08em] text-[#95cb00] md:text-xl",
                                children: "カナダ発 • 99プルーフ • BC生まれ"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 701,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                        href: "https://deepbluedistilleries.ca/product-tag/bang-on/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: " pointer-events-auto relative z-10 inline-block bg-[#95cb00] px-8 py-3 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_20px_rgba(149,203,0,0.5)] transition-colors duration-300 hover:bg-[#ff3672] md:px-10 md:py-4 md:text-base ",
                        style: {
                            fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                        },
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: isIdle ? 1 : 0,
                            y: isIdle ? 0 : 12,
                            pointerEvents: isIdle ? "auto" : "none"
                        },
                        transition: {
                            duration: 0.4,
                            delay: isIdle ? 0.25 : 0
                        },
                        children: "SHOP NOW"
                    }, void 0, false, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 706,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        type: "button",
                        onClick: handleContinue,
                        className: " pointer-events-auto mt-8 flex flex-col items-center gap-3 text-white/80 transition-colors hover:text-white md:hidden ",
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: isIdle ? 1 : 0,
                            y: isIdle ? 0 : 12,
                            pointerEvents: isIdle ? "auto" : "none"
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.8
                        },
                        "aria-label": "Continue to next section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] uppercase tracking-[0.25em]",
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 767,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: {
                                    y: [
                                        0,
                                        8,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 1.4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                className: " flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl leading-none backdrop-blur-md ",
                                children: "↓"
                            }, void 0, false, {
                                fileName: "[project]/components/home/hero-section.tsx",
                                lineNumber: 771,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/hero-section.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/hero-section.tsx",
                lineNumber: 608,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/hero-section.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "lWYnh1e7CTopOZbwwq109jlsNIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/particle-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ParticleText = ({ text = "brilliant.", className = "", colors = [
    "#40ffaa",
    "#40aaff",
    "#ff40aa",
    "#aa40ff"
], particleSize = 2, particleGap = 2, mouseControls = {
    enabled: true,
    radius: 150,
    strength: 5
}, backgroundColor = "transparent", fontFamily = "sans-serif", fontSize = 200, fontWeight = "bold", friction = 0.75, ease = 0.05, autoFit = true })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000,
        isActive: false
    });
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const resizeObserverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dprRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const computedFontSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fontSize);
    const calculateFitFontSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleText.useCallback[calculateFitFontSize]": (ctx, content, canvasWidth, canvasHeight)=>{
            const dpr = dprRef.current;
            const padding = 40 * dpr;
            const availableWidth = canvasWidth - padding * 2;
            const availableHeight = canvasHeight - padding * 2;
            let minSize = 10 * dpr;
            let maxSize = fontSize * dpr;
            let optimalSize = minSize;
            while(minSize <= maxSize){
                const testSize = Math.floor((minSize + maxSize) / 2);
                ctx.font = `${fontWeight} ${testSize}px ${fontFamily}`;
                const textMetrics = ctx.measureText(content);
                const textWidth = textMetrics.width;
                const textHeight = testSize;
                if (textWidth <= availableWidth && textHeight <= availableHeight) {
                    optimalSize = testSize;
                    minSize = testSize + 1;
                } else {
                    maxSize = testSize - 1;
                }
            }
            return optimalSize / dpr;
        }
    }["ParticleText.useCallback[calculateFitFontSize]"], [
        fontSize,
        fontWeight,
        fontFamily
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleText.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const initParticles = {
                "ParticleText.useEffect.initParticles": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    dprRef.current = dpr;
                    canvas.width = container.clientWidth * dpr;
                    canvas.height = container.clientHeight * dpr;
                    let effectiveFontSize = fontSize;
                    if (autoFit) {
                        effectiveFontSize = calculateFitFontSize(ctx, text, canvas.width, canvas.height);
                    }
                    computedFontSizeRef.current = effectiveFontSize;
                    const scaledFontSize = effectiveFontSize * dpr;
                    const offscreen = document.createElement("canvas");
                    offscreen.width = canvas.width;
                    offscreen.height = canvas.height;
                    const offCtx = offscreen.getContext("2d");
                    if (!offCtx) return;
                    offCtx.font = `${fontWeight} ${scaledFontSize}px ${fontFamily}`;
                    offCtx.textAlign = "center";
                    offCtx.textBaseline = "middle";
                    offCtx.fillStyle = "#ffffff";
                    offCtx.fillText(text, canvas.width / 2, canvas.height / 2);
                    if (!canvas.width || !canvas.height) return;
                    const imageData = offCtx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;
                    const newParticles = [];
                    const step = Math.max(1, Math.floor((particleSize + particleGap) * dpr));
                    for(let y = 0; y < canvas.height; y += step){
                        for(let x = 0; x < canvas.width; x += step){
                            const index = (y * canvas.width + x) * 4;
                            if (data[index + 3] > 128) {
                                const color = colors[Math.floor(Math.random() * colors.length)];
                                newParticles.push({
                                    x: Math.random() * canvas.width,
                                    y: Math.random() * canvas.height,
                                    originX: x,
                                    originY: y,
                                    vx: 0,
                                    vy: 0,
                                    color: color,
                                    size: particleSize * dpr
                                });
                            }
                        }
                    }
                    particlesRef.current = newParticles;
                }
            }["ParticleText.useEffect.initParticles"];
            initParticles();
            const animate = {
                "ParticleText.useEffect.animate": ()=>{
                    const dpr = dprRef.current;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    if (backgroundColor !== "transparent") {
                        ctx.fillStyle = backgroundColor;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                    }
                    const particles = particlesRef.current;
                    const mouse = mouseRef.current;
                    const { radius = 150, strength = 5 } = mouseControls;
                    const scaledRadius = radius * dpr;
                    for(let i = 0; i < particles.length; i++){
                        const p = particles[i];
                        const dx = p.originX - p.x;
                        const dy = p.originY - p.y;
                        let forceX = 0;
                        let forceY = 0;
                        if (mouse.isActive) {
                            const mdx = mouse.x * dpr - p.x;
                            const mdy = mouse.y * dpr - p.y;
                            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                            if (mDist < scaledRadius) {
                                const force = (scaledRadius - mDist) / scaledRadius;
                                const angle = Math.atan2(mdy, mdx);
                                forceX = -Math.cos(angle) * force * strength * 5;
                                forceY = -Math.sin(angle) * force * strength * 5;
                            }
                        }
                        p.vx += dx * ease + forceX;
                        p.vy += dy * ease + forceY;
                        p.vx *= friction;
                        p.vy *= friction;
                        p.x += p.vx;
                        p.y += p.vy;
                        ctx.fillStyle = p.color;
                        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
                    }
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            }["ParticleText.useEffect.animate"];
            animate();
            resizeObserverRef.current = new ResizeObserver({
                "ParticleText.useEffect": ()=>{
                    initParticles();
                }
            }["ParticleText.useEffect"]);
            resizeObserverRef.current.observe(container);
            const handleMouseMove = {
                "ParticleText.useEffect.handleMouseMove": (e)=>{
                    const rect = canvas.getBoundingClientRect();
                    mouseRef.current.x = e.clientX - rect.left;
                    mouseRef.current.y = e.clientY - rect.top;
                    mouseRef.current.isActive = true;
                }
            }["ParticleText.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "ParticleText.useEffect.handleTouchMove": (e)=>{
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    mouseRef.current.x = e.touches[0].clientX - rect.left;
                    mouseRef.current.y = e.touches[0].clientY - rect.top;
                    mouseRef.current.isActive = true;
                }
            }["ParticleText.useEffect.handleTouchMove"];
            const handleMouseLeave = {
                "ParticleText.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current.isActive = false;
                }
            }["ParticleText.useEffect.handleMouseLeave"];
            const handleTouchEnd = {
                "ParticleText.useEffect.handleTouchEnd": ()=>{
                    mouseRef.current.isActive = false;
                }
            }["ParticleText.useEffect.handleTouchEnd"];
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);
            container.addEventListener("touchmove", handleTouchMove, {
                passive: false
            });
            container.addEventListener("touchend", handleTouchEnd);
            return ({
                "ParticleText.useEffect": ()=>{
                    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                    if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
                    container.removeEventListener("mousemove", handleMouseMove);
                    container.removeEventListener("mouseleave", handleMouseLeave);
                    container.removeEventListener("touchmove", handleTouchMove);
                    container.removeEventListener("touchend", handleTouchEnd);
                }
            })["ParticleText.useEffect"];
        }
    }["ParticleText.useEffect"], [
        text,
        colors,
        particleSize,
        particleGap,
        mouseControls,
        backgroundColor,
        fontFamily,
        fontSize,
        fontWeight,
        friction,
        ease,
        autoFit,
        calculateFitFontSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `w-full h-full min-h-[300px] ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "block w-full h-full"
        }, void 0, false, {
            fileName: "[project]/components/particle-text.tsx",
            lineNumber: 290,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/particle-text.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParticleText, "Ht8gu2YEZyRjE6SIt4qAgKzNbRU=");
_c = ParticleText;
ParticleText.displayName = "ParticleText";
const __TURBOPACK__default__export__ = ParticleText;
var _c;
__turbopack_context__.k.register(_c, "ParticleText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StaggeredText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
   * Build keyframes object for motion from a "from" snapshot and one or more "to" snapshots.
   */ const buildKeyframes = (from, steps)=>{
    const keys = new Set([
        ...Object.keys(from),
        ...steps.flatMap((step)=>Object.keys(step))
    ]);
    const keyframes = {};
    keys.forEach((key)=>{
        keyframes[key] = [
            from[key],
            ...steps.map((step)=>step[key])
        ];
    });
    return keyframes;
};
const StaggeredText = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ text, className = "", as = "p", segmentBy = "words", separator, delay = 80, duration = 0.6, easing = (t)=>t, threshold = 0.1, rootMargin = "0px", direction = "top", blur = true, from, to, staggerDirection = "forward", respectReducedMotion = true, exitOnScrollOut = false, onAnimationComplete, onExitComplete }, ref)=>{
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasEnteredView, setHasEnteredView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaggeredText.useEffect": ()=>{
            if (!respectReducedMotion) return;
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(mediaQuery.matches);
            const handleChange = {
                "StaggeredText.useEffect.handleChange": (e)=>{
                    setPrefersReducedMotion(e.matches);
                }
            }["StaggeredText.useEffect.handleChange"];
            mediaQuery.addEventListener("change", handleChange);
            return ({
                "StaggeredText.useEffect": ()=>mediaQuery.removeEventListener("change", handleChange)
            })["StaggeredText.useEffect"];
        }
    }["StaggeredText.useEffect"], [
        respectReducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "StaggeredText.useImperativeHandle": ()=>({
                replay: ({
                    "StaggeredText.useImperativeHandle": ()=>{
                        setIsExiting(false);
                        setHasEnteredView(false);
                        requestAnimationFrame({
                            "StaggeredText.useImperativeHandle": ()=>{
                                setHasEnteredView(true);
                            }
                        }["StaggeredText.useImperativeHandle"]);
                    }
                })["StaggeredText.useImperativeHandle"],
                exit: ({
                    "StaggeredText.useImperativeHandle": ()=>{
                        setIsExiting(true);
                    }
                })["StaggeredText.useImperativeHandle"]
            })
    }["StaggeredText.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaggeredText.useEffect": ()=>{
            if (!rootRef.current) return;
            const observer = new IntersectionObserver({
                "StaggeredText.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setHasEnteredView(true);
                        setIsExiting(false);
                        if (!exitOnScrollOut && rootRef.current) {
                            observer.unobserve(rootRef.current);
                        }
                    } else if (exitOnScrollOut && hasEnteredView) {
                        setIsExiting(true);
                    }
                }
            }["StaggeredText.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(rootRef.current);
            return ({
                "StaggeredText.useEffect": ()=>observer.disconnect()
            })["StaggeredText.useEffect"];
        }
    }["StaggeredText.useEffect"], [
        threshold,
        rootMargin,
        exitOnScrollOut,
        hasEnteredView
    ]);
    const defaultFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StaggeredText.useMemo[defaultFrom]": ()=>{
            const base = {
                opacity: 0
            };
            if (direction === "top" || direction === "bottom") {
                base.y = direction === "top" ? -40 : 40;
            } else {
                base.x = direction === "left" ? -40 : 40;
            }
            if (blur) {
                base.filter = "blur(10px)";
            }
            return base;
        }
    }["StaggeredText.useMemo[defaultFrom]"], [
        direction,
        blur
    ]);
    const defaultTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StaggeredText.useMemo[defaultTo]": ()=>{
            const axisKey = direction === "left" || direction === "right" ? "x" : "y";
            if (!blur) {
                return [
                    {
                        opacity: 1,
                        [axisKey]: 0
                    }
                ];
            }
            const overshoot = direction === "top" || direction === "left" ? 5 : -5;
            return [
                {
                    opacity: 0.7,
                    [axisKey]: overshoot,
                    filter: "blur(5px)"
                },
                {
                    opacity: 1,
                    [axisKey]: 0,
                    filter: "blur(0px)"
                }
            ];
        }
    }["StaggeredText.useMemo[defaultTo]"], [
        direction,
        blur
    ]);
    const fromSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StaggeredText.useMemo[fromSnapshot]": ()=>from ?? defaultFrom
    }["StaggeredText.useMemo[fromSnapshot]"], [
        from,
        defaultFrom
    ]);
    const toSnapshots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StaggeredText.useMemo[toSnapshots]": ()=>{
            if (!to) return defaultTo;
            return Array.isArray(to) ? to : [
                to
            ];
        }
    }["StaggeredText.useMemo[toSnapshots]"], [
        to,
        defaultTo
    ]);
    const stepCount = toSnapshots.length + 1;
    const times = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StaggeredText.useMemo[times]": ()=>Array.from({
                length: stepCount
            }, {
                "StaggeredText.useMemo[times]": (_, i)=>stepCount === 1 ? 0 : i / (stepCount - 1)
            }["StaggeredText.useMemo[times]"])
    }["StaggeredText.useMemo[times]"], [
        stepCount
    ]);
    const { rowsSegments, totalSegments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StaggeredText.useMemo": ()=>{
            if (!text) {
                return {
                    rowsSegments: [],
                    totalSegments: 0
                };
            }
            const rows = separator && separator.length > 0 ? text.split(separator) : text.split(/\r?\n/);
            const rowsSegments = rows.map({
                "StaggeredText.useMemo.rowsSegments": (row)=>{
                    switch(segmentBy){
                        case "chars":
                            return row.split("");
                        case "lines":
                            return [
                                row
                            ];
                        case "words":
                        default:
                            return row.split(" ");
                    }
                }
            }["StaggeredText.useMemo.rowsSegments"]);
            const total = rowsSegments.reduce({
                "StaggeredText.useMemo.total": (sum, rowSegs)=>sum + rowSegs.length
            }["StaggeredText.useMemo.total"], 0);
            return {
                rowsSegments,
                totalSegments: total
            };
        }
    }["StaggeredText.useMemo"], [
        text,
        segmentBy,
        separator
    ]);
    if (!text) return null;
    const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
    let globalIndexCounter = 0;
    const hasMultipleRows = rowsSegments.length > 1;
    const getStaggerDelay = (index, total)=>{
        if (prefersReducedMotion) return 0;
        switch(staggerDirection){
            case "reverse":
                return (total - 1 - index) * delay / 1000;
            case "center":
                {
                    const middle = (total - 1) / 2;
                    const distanceFromCenter = Math.abs(index - middle);
                    return distanceFromCenter * delay / 1000;
                }
            case "forward":
            default:
                return index * delay / 1000;
        }
    };
    const Wrapper = as;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        ref: rootRef,
        className: `staggered-text ${hasMultipleRows || segmentBy === "lines" ? "block" : "flex flex-wrap"} whitespace-pre-wrap ${className}`,
        children: rowsSegments.map((rowSegments, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    rowSegments.map((segment, rowSegIndex)=>{
                        const globalIndex = globalIndexCounter++;
                        const isLast = globalIndex === totalSegments - 1;
                        const transition = prefersReducedMotion ? {
                            duration: 0.01,
                            delay: 0
                        } : {
                            duration,
                            times,
                            delay: getStaggerDelay(globalIndex, totalSegments),
                            ease: easing
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                            initial: fromSnapshot,
                            animate: isExiting ? fromSnapshot : hasEnteredView ? animateKeyframes : fromSnapshot,
                            transition: transition,
                            onAnimationComplete: isLast ? ()=>{
                                if (isExiting) {
                                    onExitComplete?.();
                                } else {
                                    onAnimationComplete?.();
                                }
                            } : undefined,
                            style: {
                                display: segmentBy === "lines" ? "block" : "inline-block",
                                willChange: "transform, filter, opacity"
                            },
                            children: [
                                segmentBy === "chars" ? segment === " " ? "\u00A0" : segment : segment,
                                segmentBy === "words" && rowSegIndex < rowSegments.length - 1 && "\u00A0"
                            ]
                        }, `seg-${rowIndex}-${rowSegIndex}`, true, {
                            fileName: "[project]/components/StaggeredText.tsx",
                            lineNumber: 326,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    rowIndex < rowsSegments.length - 1 && segmentBy !== "lines" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, `br-${rowIndex}`, false, {
                        fileName: "[project]/components/StaggeredText.tsx",
                        lineNumber: 365,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, `row-${rowIndex}`, true, {
                fileName: "[project]/components/StaggeredText.tsx",
                lineNumber: 308,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/StaggeredText.tsx",
        lineNumber: 303,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "gFs2U/nPoQOoAb0AJDB5xG88vSw=")), "gFs2U/nPoQOoAb0AJDB5xG88vSw=");
_c1 = StaggeredText;
StaggeredText.displayName = "StaggeredText";
const __TURBOPACK__default__export__ = StaggeredText;
var _c, _c1;
__turbopack_context__.k.register(_c, "StaggeredText$forwardRef");
__turbopack_context__.k.register(_c1, "StaggeredText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ProductRevealSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductRevealSection",
    ()=>ProductRevealSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProductRevealSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductRevealSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const observer = new IntersectionObserver({
                "ProductRevealSection.useEffect": ([entry])=>{
                    document.body.classList.toggle("light-header-section", entry.isIntersecting);
                }
            }["ProductRevealSection.useEffect"], {
                threshold: 0.35
            });
            observer.observe(section);
            return ({
                "ProductRevealSection.useEffect": ()=>{
                    document.body.classList.remove("light-header-section");
                    observer.disconnect();
                }
            })["ProductRevealSection.useEffect"];
        }
    }["ProductRevealSection.useEffect"], []);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    /**
   * Bottle transitions
   * Order: Atomic Peach → Green Apple → Big Banana → Tropical → Ripe Raspberry
   */ const peachOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.0,
        0.14,
        0.21
    ], [
        1,
        1,
        0
    ]);
    const peachX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.0,
        0.21
    ], [
        0,
        -200
    ]);
    const appleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.19,
        0.31,
        0.4
    ], [
        0,
        1,
        0
    ]);
    const appleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.19,
        0.4
    ], [
        200,
        -200
    ]);
    const bananaOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.38,
        0.5,
        0.59
    ], [
        0,
        1,
        0
    ]);
    const bananaX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.38,
        0.59
    ], [
        200,
        -200
    ]);
    const tropicalOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.57,
        0.69,
        0.78
    ], [
        0,
        1,
        0
    ]);
    const tropicalX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.57,
        0.78
    ], [
        200,
        -200
    ]);
    const raspberryOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.76,
        0.9
    ], [
        0,
        1
    ]);
    const raspberryX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.76,
        0.9
    ], [
        200,
        0
    ]);
    /**
   * Text transitions
   */ const peachTextOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.0,
        0.14,
        0.21
    ], [
        1,
        1,
        0
    ]);
    const appleTextOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.19,
        0.31,
        0.4
    ], [
        0,
        1,
        0
    ]);
    const bananaTextOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.38,
        0.5,
        0.59
    ], [
        0,
        1,
        0
    ]);
    const tropicalTextOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.57,
        0.69,
        0.78
    ], [
        0,
        1,
        0
    ]);
    const raspberryTextOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.76,
        0.9
    ], [
        0,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        "data-header-theme": "light",
        className: "relative bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[340vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 h-screen flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: " text-black text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-[0.9] ",
                                    children: [
                                        "Flavours",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        "That Hit Different"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-10 h-40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                opacity: peachTextOpacity
                                            },
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#ff7a1a] text-4xl md:text-5xl font-extrabold uppercase tracking-tight",
                                                    children: "Atomic Peach"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-black text-lg md:text-xl max-w-md",
                                                    children: "Juicy peach flavour with a sweet opening and a high-proof finish. Bright, bold, and built to explode."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                opacity: appleTextOpacity
                                            },
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#95cb00] text-4xl md:text-5xl font-extrabold uppercase tracking-tight",
                                                    children: "Green Apple"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-black text-lg md:text-xl max-w-md",
                                                    children: "Fresh green apple flavour with a clean finish. Bright, punchy, and dangerously easy to drink."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                opacity: bananaTextOpacity
                                            },
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-yellow-400 text-4xl md:text-5xl font-extrabold uppercase tracking-tight",
                                                    children: "Big Banana"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-black text-lg md:text-xl max-w-md",
                                                    children: "The banana liqueur you remember from your past, but made better and bolder. Balanced, redefined, unforgettable."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                opacity: tropicalTextOpacity
                                            },
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#2596be] text-4xl md:text-5xl font-extrabold uppercase tracking-tight",
                                                    children: "Tropical Mayhem"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-black text-lg md:text-xl max-w-md",
                                                    children: "Pineapple, coconut, and citrus flavours with a bold island-inspired punch. Sweet, bright, and finished with a smooth Bang On kick."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                opacity: raspberryTextOpacity
                                            },
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-pink-500 text-4xl md:text-5xl font-extrabold uppercase tracking-tight",
                                                    children: "Ripe Raspberry"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-black text-lg md:text-xl max-w-md",
                                                    children: "Sweet-crisp punch that hits different. Berry bold. When life gives you raspberries, make them 99 proof."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[560px] md:h-[700px] flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        opacity: peachOpacity,
                                        x: peachX
                                    },
                                    className: "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/atomic-peach-bottle.png",
                                        alt: "Bang On Atomic Peach",
                                        width: 520,
                                        height: 700,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ProductRevealSection.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        opacity: appleOpacity,
                                        x: appleX
                                    },
                                    className: "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/apple-bottle.png",
                                        alt: "Bang On Green Apple",
                                        width: 520,
                                        height: 700
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ProductRevealSection.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        opacity: bananaOpacity,
                                        x: bananaX
                                    },
                                    className: "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/banana-bottle.png",
                                        alt: "Bang On Big Banana",
                                        width: 520,
                                        height: 700
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ProductRevealSection.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        opacity: tropicalOpacity,
                                        x: tropicalX
                                    },
                                    className: "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/tropical-bottle.png",
                                        alt: "Bang On Tropical",
                                        width: 520,
                                        height: 700
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ProductRevealSection.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        opacity: raspberryOpacity,
                                        x: raspberryX
                                    },
                                    className: "absolute",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/raspberry-bottle.png",
                                        alt: "Bang On Ripe Raspberry",
                                        width: 520,
                                        height: 700
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/ProductRevealSection.tsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ProductRevealSection.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ProductRevealSection.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ProductRevealSection.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/ProductRevealSection.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/ProductRevealSection.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(ProductRevealSection, "LoHLw3dBEbzF7BIkQPZj6S8AFng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ProductRevealSection;
var _c;
__turbopack_context__.k.register(_c, "ProductRevealSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ProductRevealSectionMobile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductRevealSectionMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function ProductRevealSectionMobile() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white px-6 py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: " text-black text-5xl font-extrabold uppercase tracking-tight leading-[0.95] mb-12 ",
                initial: {
                    opacity: 0,
                    y: 16
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.6
                },
                children: [
                    "Flavours",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    "That Hit Different"
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.6
                        },
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/apple-bottle.png",
                            alt: "Bang On Green Apple",
                            width: 300,
                            height: 420,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#95cb00] text-4xl font-extrabold uppercase tracking-tight mb-4",
                        children: "Green Apple"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black text-lg leading-relaxed max-w-md",
                        children: "Crisp green apple flavour that goes down easy and hits hard."
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.6
                        },
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/banana-bottle.png",
                            alt: "Bang On Big Banana",
                            width: 300,
                            height: 420
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-yellow-400 text-4xl font-extrabold uppercase tracking-tight mb-4",
                        children: "Big Banana"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black text-lg leading-relaxed max-w-md",
                        children: "The banana liqueur you remember from your past, but made better and bolder. Balanced, redefined, unforgettable."
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.6
                        },
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/tropical-bottle.png",
                            alt: "Bang On Tropical Mayhem",
                            width: 300,
                            height: 420
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#2596be] text-4xl font-extrabold uppercase tracking-tight mb-4",
                        children: "Tropical Mayhem"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black text-lg leading-relaxed max-w-md",
                        children: "Pineapple, coconut, and citrus flavours with a bold island-inspired punch. Sweet, bright, and finished with a smooth Bang On kick."
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.6
                        },
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/atomic-peach-bottle.png",
                            alt: "Bang On Atomic Peach",
                            width: 300,
                            height: 420
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#ff7a1a] text-4xl font-extrabold uppercase tracking-tight mb-4",
                        children: "Atomic Peach"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black text-lg leading-relaxed max-w-md",
                        children: "Juicy peach flavour with a sweet opening and a high-proof finish. Bright, bold, and built to explode."
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.6
                        },
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/raspberry-bottle.png",
                            alt: "Bang On Ripe Raspberry",
                            width: 300,
                            height: 420
                        }, void 0, false, {
                            fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-pink-500 text-4xl font-extrabold uppercase tracking-tight mb-4",
                        children: "Ripe Raspberry"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black text-lg leading-relaxed max-w-md",
                        children: "Sweet-crisp punch that hits different. Berry bold. When life gives you raspberries, make them 99 proof."
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ProductRevealSectionMobile.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ProductRevealSectionMobile;
var _c;
__turbopack_context__.k.register(_c, "ProductRevealSectionMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/banana-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BananaSection",
    ()=>BananaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BananaSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BananaSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const observer = new IntersectionObserver({
                "BananaSection.useEffect": ([entry])=>{
                    document.body.classList.toggle("light-header-section", entry.isIntersecting);
                }
            }["BananaSection.useEffect"], {
                threshold: 0.35
            });
            observer.observe(section);
            return ({
                "BananaSection.useEffect": ()=>{
                    document.body.classList.remove("light-header-section");
                    observer.disconnect();
                }
            })["BananaSection.useEffect"];
        }
    }["BananaSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-header-theme": "light",
        className: "py-32 md:py-40 bg-[#f3db03] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none",
                initial: {
                    opacity: 0,
                    rotate: -3,
                    scale: 0.9
                },
                whileInView: {
                    opacity: 0.15,
                    rotate: -2,
                    scale: 1
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[30vw] md:text-[25vw] text-[#0a0a0a] leading-none whitespace-nowrap block",
                    children: "BANANA"
                }, void 0, false, {
                    fileName: "[project]/components/home/banana-section.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/banana-section.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#0a0a0a] mb-12 text-left",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "BIG"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/banana-section.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "BANANA"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/banana-section.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/banana-section.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-4 mb-12 text-left max-w-xl",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-[#0a0a0a]",
                                    children: "Made with twice distilled premium spirit. Balanced flavours. 99 proof."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/banana-section.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-[#0a0a0a]",
                                    children: "Super concentrated for maximum impact."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/banana-section.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/banana-section.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/flavours/big-banana",
                                className: "inline-block bg-[#f94a02] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300",
                                children: "EXPLORE BIG BANANA →"
                            }, void 0, false, {
                                fileName: "[project]/components/home/banana-section.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/banana-section.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/banana-section.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/banana-section.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/banana-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(BananaSection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = BananaSection;
var _c;
__turbopack_context__.k.register(_c, "BananaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/peach-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PeachSection",
    ()=>PeachSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function PeachSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 bg-[#ff7a1a] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none",
                initial: {
                    opacity: 0,
                    rotate: -3,
                    scale: 0.9
                },
                whileInView: {
                    opacity: 0.15,
                    rotate: -2,
                    scale: 1
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[30vw] md:text-[25vw] text-[#0a0a0a] leading-none whitespace-nowrap block",
                    children: "ATOMIC"
                }, void 0, false, {
                    fileName: "[project]/components/home/peach-section.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/peach-section.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#0a0a0a] mb-12 text-left",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "ATOMIC"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/peach-section.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "PEACH"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/peach-section.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/peach-section.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-4 mb-12 text-left max-w-xl",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-[#0a0a0a]",
                                    children: "Juicy peach flavour. Twice distilled premium spirit. 99 proof."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/peach-section.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-[#0a0a0a]",
                                    children: "Sweet, bold, and explosive with a smooth Bang On kick."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/peach-section.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/peach-section.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/flavours/atomic-peach",
                                className: "inline-block bg-[#ffd400] text-[#0a0a0a] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] hover:text-[#fafafa] transition-colors duration-300",
                                children: "EXPLORE ATOMIC PEACH →"
                            }, void 0, false, {
                                fileName: "[project]/components/home/peach-section.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/peach-section.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/peach-section.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/peach-section.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/peach-section.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PeachSection;
var _c;
__turbopack_context__.k.register(_c, "PeachSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/greenapple-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GreenappleSection",
    ()=>GreenappleSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GreenappleSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GreenappleSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const observer = new IntersectionObserver({
                "GreenappleSection.useEffect": ([entry])=>{
                    document.body.classList.toggle("light-header-section", entry.isIntersecting);
                }
            }["GreenappleSection.useEffect"], {
                threshold: 0.35
            });
            observer.observe(section);
            return ({
                "GreenappleSection.useEffect": ()=>{
                    document.body.classList.remove("light-header-section");
                    observer.disconnect();
                }
            })["GreenappleSection.useEffect"];
        }
    }["GreenappleSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-header-theme": "light",
        className: "py-32 md:py-40 bg-[#95cb00] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none",
                initial: {
                    opacity: 0,
                    rotate: -3,
                    scale: 0.9
                },
                whileInView: {
                    opacity: 0.15,
                    rotate: -2,
                    scale: 1
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[30vw] md:text-[25vw] text-[#0a0a0a] leading-none whitespace-nowrap block",
                    children: "GREEN APPLE"
                }, void 0, false, {
                    fileName: "[project]/components/home/greenapple-section.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/greenapple-section.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: " text-[20vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#0a0a0a] mb-12 text-right pl-6 md:pl-0 ",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "GREEN"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/greenapple-section.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "APPLE"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/greenapple-section.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/greenapple-section.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-4 mb-12 text-right max-w-xl pl-6 md:pl-0",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-[#0a0a0a]",
                                    children: "Crisp green apple flavour. Twice distilled premium spirit. 99 proof."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/greenapple-section.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-[#0a0a0a]/80",
                                    children: "Sharp, juicy, and built to hit hard."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/greenapple-section.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/greenapple-section.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "pl-6 md:pl-0",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/flavours/green-apple",
                                className: "inline-block bg-[#f94a02] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300",
                                children: "EXPLORE GREEN APPLE →"
                            }, void 0, false, {
                                fileName: "[project]/components/home/greenapple-section.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/greenapple-section.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/greenapple-section.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/greenapple-section.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/greenapple-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(GreenappleSection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = GreenappleSection;
var _c;
__turbopack_context__.k.register(_c, "GreenappleSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/tropical-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TropicalSection",
    ()=>TropicalSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function TropicalSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 bg-[#2596be] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none",
                initial: {
                    opacity: 0,
                    rotate: -3,
                    scale: 0.9
                },
                whileInView: {
                    opacity: 0.15,
                    rotate: -2,
                    scale: 1
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[30vw] md:text-[25vw] text-[#0a0a0a] leading-none whitespace-nowrap block",
                    children: "TROPICAL"
                }, void 0, false, {
                    fileName: "[project]/components/home/tropical-section.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/tropical-section.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#0a0a0a] mb-12 text-left",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "TROPICAL"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/tropical-section.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "MAYHEM"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/tropical-section.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/tropical-section.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-4 mb-12 text-left max-w-xl",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-[#0a0a0a]",
                                    children: "Pineapple, coconut and citrus flavour. Twice distilled premium spirit. 99 proof."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/tropical-section.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-[#0a0a0a]",
                                    children: "Sweet up front, bright through the middle, and finished with a smooth Bang On kick."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/tropical-section.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/tropical-section.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/flavours/tropical",
                                className: "inline-block bg-[#f94a02] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300",
                                children: "EXPLORE TROPICAL →"
                            }, void 0, false, {
                                fileName: "[project]/components/home/tropical-section.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/tropical-section.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/tropical-section.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/tropical-section.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/tropical-section.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TropicalSection;
var _c;
__turbopack_context__.k.register(_c, "TropicalSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/marquee-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarqueeSection",
    ()=>MarqueeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function MarqueeSection() {
    const marqueeText = "99 PROOF • SUPER CONCENTRATED • MADE IN BC • ";
    // Duplicate text for seamless loop
    const repeatedText = Array(6).fill(marqueeText).join("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-20 bg-[#0a0a0a] overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex whitespace-nowrap",
                animate: {
                    x: [
                        0,
                        -2400
                    ]
                },
                transition: {
                    x: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl md:text-6xl lg:text-7xl text-[#fafafa] px-4",
                        children: repeatedText
                    }, void 0, false, {
                        fileName: "[project]/components/home/marquee-section.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl md:text-6xl lg:text-7xl text-[#fafafa] px-4",
                        children: repeatedText
                    }, void 0, false, {
                        fileName: "[project]/components/home/marquee-section.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/marquee-section.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/marquee-section.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/marquee-section.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = MarqueeSection;
var _c;
__turbopack_context__.k.register(_c, "MarqueeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/RaspberrySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RaspberrySection",
    ()=>RaspberrySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function RaspberrySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 bg-[#ff3672] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none",
                initial: {
                    opacity: 0,
                    rotate: -3,
                    scale: 0.9
                },
                whileInView: {
                    opacity: 0.15,
                    rotate: -2,
                    scale: 1
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[20vw] md:text-[17vw] text-[#fafafa] leading-none whitespace-nowrap block",
                    children: "RASPBERRY"
                }, void 0, false, {
                    fileName: "[project]/components/home/RaspberrySection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/RaspberrySection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: " text-[20vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#0a0a0a] mb-12 text-right pl-6 md:pl-0 ",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "RIPE"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "RASPBERRY"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/RaspberrySection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-4 mb-12 text-right max-w-xl pl-6 md:pl-0",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-[#fafafa]",
                                    children: "Made with twice distilled premium spirit. Balanced flavours. 99 proof."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-[#fafafa]/80",
                                    children: "Super concentrated for maximum impact."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/RaspberrySection.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "pl-6 md:pl-0",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/flavours/ripe-raspberry",
                                className: "inline-block bg-[#006ad7] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300",
                                children: "EXPLORE RIPE RASPBERRY →"
                            }, void 0, false, {
                                fileName: "[project]/components/home/RaspberrySection.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/RaspberrySection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/RaspberrySection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/RaspberrySection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/RaspberrySection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = RaspberrySection;
var _c;
__turbopack_context__.k.register(_c, "RaspberrySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/RaspberrySectionMobile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RaspberrySectionMobile",
    ()=>RaspberrySectionMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function RaspberrySectionMobile() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 bg-[#ff3672] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none",
                initial: {
                    opacity: 0,
                    rotate: -3,
                    scale: 0.9
                },
                whileInView: {
                    opacity: 0.15,
                    rotate: -2,
                    scale: 1
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[25vw] md:text-[30vw] text-[#0a0a0a] leading-none whitespace-nowrap block",
                    children: "RASPBERRY"
                }, void 0, false, {
                    fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-[18vw] md:text-[15vw] lg:text-[12vw] leading-[0.85] text-[#ffffff] mb-12 text-left",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "RIPE"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: "RASPBERRY"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "space-y-4 mb-12 text-left max-w-xl",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-[#0a0a0a]",
                                    children: "Made with twice distilled premium spirit. Balanced flavours. 99 proof."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-[#0a0a0a]",
                                    children: "Super concentrated for maximum impact."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/flavours/big-banana",
                                className: "inline-block bg-[#006ad7] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#0a0a0a] transition-colors duration-300",
                                children: "EXPLORE RIPE RASPBERRY →"
                            }, void 0, false, {
                                fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/RaspberrySectionMobile.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = RaspberrySectionMobile;
var _c;
__turbopack_context__.k.register(_c, "RaspberrySectionMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/cocktails-teaser-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CocktailsTeaserSection",
    ()=>CocktailsTeaserSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const cocktails = [
    {
        name: "Apple Jacked",
        description: "Green Apple + whisky + ginger ale",
        flavour: "Bang On Green Apple",
        image: "/assets/apple-jacked.webp"
    },
    {
        name: "Raspberry Rumble",
        description: "Ripe Raspberry + vodka + lime + soda",
        flavour: "Ripe Raspberry",
        image: "/assets/raspberry-rumble.webp"
    },
    {
        name: "Tropical Bang On",
        description: "Tropical + coconut rum + pineapple",
        flavour: "Tropical",
        image: "/assets/tropical-bang.webp"
    },
    {
        name: "Peach Fizz",
        description: "Atomic Peach + sparkling wine + orange twist",
        flavour: "Atomic Peach",
        image: "/assets/peach-fizz.png"
    },
    {
        name: "Banana Velvet Shot",
        description: "Bang On Big Banana + Bailey's liqueur",
        flavour: "Big Banana",
        image: "/assets/banana-velvet.webp"
    }
];
function flavourColour(flavour) {
    if (flavour === "Big Banana") return "text-[#f94a02]";
    if (flavour === "Ripe Raspberry") return "text-[#ff3672]";
    if (flavour === "Tropical") return "text-[#2596be]";
    if (flavour === "Atomic Peach") return "text-[#ff7a1a]";
    return "text-[#95cb00]";
}
function CocktailCard({ cocktail, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "bg-white p-8 group rounded-sm transition-shadow duration-300",
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        whileHover: {
            y: -4
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-3xl md:text-2xl xl:text-3xl text-[#0a0a0a] mb-3 font-bold",
                children: cocktail.name
            }, void 0, false, {
                fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg md:text-base xl:text-lg tracking-tight text-[#525252] mb-3",
                children: cocktail.description
            }, void 0, false, {
                fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-lg md:text-sm xl:text-base block mb-6 font-medium ${flavourColour(cocktail.flavour)}`,
                children: [
                    "Made with ",
                    cocktail.flavour
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-[4/5] overflow-hidden bg-black rounded-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: cocktail.image,
                    alt: cocktail.name,
                    fill: true,
                    className: "object-cover transition-transform duration-500 group-hover:scale-105",
                    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }, void 0, false, {
                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/cocktails-teaser-section.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = CocktailCard;
function CocktailsTeaserSection() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const maxIndex = cocktails.length - 3;
    const nextSlide = ()=>{
        setActiveIndex((current)=>current >= maxIndex ? 0 : current + 1);
    };
    const prevSlide = ()=>{
        setActiveIndex((current)=>current <= 0 ? maxIndex : current - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-header-theme": "light",
        className: "py-20 md:py-28 bg-[#f5f5f5]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1800px] mx-auto px-6 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "text-5xl md:text-5xl lg:text-6xl text-[#0a0a0a] text-center mb-16 font-black",
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: "COCKTAILS THAT GO BANG"
                }, void 0, false, {
                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 lg:hidden",
                    children: cocktails.map((cocktail, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CocktailCard, {
                            cocktail: cocktail,
                            index: index
                        }, cocktail.name, false, {
                            fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:block mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex gap-6",
                                animate: {
                                    x: `calc(-${activeIndex} * (33.333333% + 16px))`
                                },
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                },
                                children: cocktails.map((cocktail, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-[calc(33.333333%-16px)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CocktailCard, {
                                            cocktail: cocktail,
                                            index: index
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this)
                                    }, cocktail.name, false, {
                                        fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4 mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: prevSlide,
                                    className: "bg-[#0a0a0a] text-[#fafafa] w-12 h-12 rounded-full hover:bg-[#f94a02] transition-colors duration-300",
                                    "aria-label": "Previous cocktails",
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: Array.from({
                                        length: maxIndex + 1
                                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveIndex(index),
                                            className: `w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? "bg-[#f94a02]" : "bg-[#0a0a0a]/25"}`,
                                            "aria-label": `Go to cocktail slide ${index + 1}`
                                        }, index, false, {
                                            fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: nextSlide,
                                    className: "bg-[#0a0a0a] text-[#fafafa] w-12 h-12 rounded-full hover:bg-[#f94a02] transition-colors duration-300",
                                    "aria-label": "Next cocktails",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-center",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cocktails",
                        className: "inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#f94a02] transition-colors duration-300",
                        children: "VIEW ALL COCKTAILS →"
                    }, void 0, false, {
                        fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/cocktails-teaser-section.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/cocktails-teaser-section.tsx",
            lineNumber: 109,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/cocktails-teaser-section.tsx",
        lineNumber: 108,
        columnNumber: 1
    }, this);
}
_s(CocktailsTeaserSection, "rd+5N/MkYjuYD0I+B+MlySxQysU=");
_c1 = CocktailsTeaserSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "CocktailCard");
__turbopack_context__.k.register(_c1, "CocktailsTeaserSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/where-to-buy-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhereToBuySection",
    ()=>WhereToBuySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WhereToBuySection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhereToBuySection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const observer = new IntersectionObserver({
                "WhereToBuySection.useEffect": ([entry])=>{
                    document.body.classList.toggle("light-header-section", entry.isIntersecting);
                }
            }["WhereToBuySection.useEffect"], {
                threshold: 0.35
            });
            observer.observe(section);
            return ({
                "WhereToBuySection.useEffect": ()=>{
                    document.body.classList.remove("light-header-section");
                    observer.disconnect();
                }
            })["WhereToBuySection.useEffect"];
        }
    }["WhereToBuySection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-header-theme": "light",
        className: "py-16 md:py-20 bg-[#e5e5e5]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "max-w-xl",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        transition: {
                            duration: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl lg:text-5xl text-[#0a0a0a] mb-4",
                                children: "GET YOUR BANG ON"
                            }, void 0, false, {
                                fileName: "[project]/components/home/where-to-buy-section.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[#525252]",
                                children: "Find Bang On at select retailers or visit the distillery."
                            }, void 0, false, {
                                fileName: "[project]/components/home/where-to-buy-section.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/where-to-buy-section.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/where-to-buy",
                            className: "inline-block bg-[#0a0a0a] text-[#fafafa] px-6 py-3 text-base rounded hover:bg-[#f94a02] transition-colors duration-300",
                            children: "FIND BANG ON →"
                        }, void 0, false, {
                            fileName: "[project]/components/home/where-to-buy-section.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/where-to-buy-section.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/where-to-buy-section.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/where-to-buy-section.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/where-to-buy-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(WhereToBuySection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = WhereToBuySection;
var _c;
__turbopack_context__.k.register(_c, "WhereToBuySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ead42e1e._.js.map