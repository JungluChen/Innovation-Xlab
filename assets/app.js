const workflowStages = [
    {
        title: "Natural Language Prompting",
        detail: "Operators explain reconciliation intent in plain language, including matching requirements, variance thresholds, escalation rules, and exception handling expectations.",
        impact: "Moves users away from brittle setup forms and into a more legible intent definition step.",
        research: "Supports non-technical users who need immediate guidance rather than opaque configuration.",
        extended: [
            "Describe matching rules in natural language without complex configuration forms",
            "Set variance thresholds and tolerance ranges for each document type",
            "Define escalation paths for exceptions that exceed acceptable variance"
        ]
    },
    {
        title: "Agentic Workflow Synthesis",
        detail: "Fibula synthesizes node-based workflow structures that connect source documents, logic branches, and exception states into a coherent process representation.",
        impact: "Shows how natural-language requests become actionable workflow logic.",
        research: "Addresses the mental-model gap caused by silent processing.",
        extended: [
            "Intent-to-node translation preserves the operator's original logic in every step",
            "Automatic dependency mapping connects document sources to matching rules",
            "Multi-document state tracking handles PO, INV, GRN, BOM, and WO simultaneously"
        ]
    },
    {
        title: "Human-in-the-Loop Validation",
        detail: "Generated workflows remain reviewable so teams can inspect nodes, verify assumptions, and adjust the synthesis before live execution.",
        impact: "Keeps humans in the decision loop while preserving automation speed.",
        research: "Improves trust formation and reduces fear of hidden system failures.",
        extended: [
            "Interactive node inspection lets operators verify every step before deployment",
            "Pre-deployment simulation validates workflow behavior against sample data",
            "Approval chain configuration routes validation to the right stakeholders"
        ]
    },
    {
        title: "Stateful Live Deployment",
        detail: "Deployed workflows keep state across matching decisions, output handling, retries, and exception resolution instead of resetting to stateless extraction outputs.",
        impact: "Supports AP and BOM reconciliation where exceptions matter as much as matched records.",
        research: "Connects interface trust to operational risk mitigation in live environments.",
        extended: [
            "Cross-session state persistence preserves context across interruptions and restarts",
            "Real-time exception handling surfaces variance flags without halting the workflow",
            "Audit-ready decision log records every match, override, and approval with full metadata"
        ]
    }
];

const risk2Stages = [
  {
    title: "Start",
    problem: "Hidden entry points slowed onboarding.",
    risk: "Users may not begin the correct workflow.",
    quote: "I dragged my file in, but nothing is responding.",
    direction: "Make system entry points clearer and provide immediate response cues.",
    videoTitle: "Start interaction",
    video: "video/start.mp4"
  },
  {
    title: "Template",
    problem: "Too many choices led users into wrong workflow paths.",
    risk: "Users may select the wrong reconciliation flow before understanding the task.",
    quote: "I am not sure which template I should choose.",
    direction: "Provide guided workflow recommendations and reduce first-step decision load.",
    videoTitle: "Template selection",
    video: "video/template.mp4"
  },
  {
    title: "Configure",
    problem: "Unclear fields and node expectations weakened matching setup.",
    risk: "Incorrect field mapping may cause PO, GRN, invoice, and credit-note mismatch.",
    quote: "I do not know what this field is expecting.",
    direction: "Add inline field explanations, previews, and validation before execution.",
    videoTitle: "Configuration flow",
    video: "video/configure.mp4"
  },
  {
    title: "Test",
    problem: "Unclear system states reduced trust.",
    risk: "Users may stop trusting the automation if processing status is invisible.",
    quote: "Is the system still working or did it fail?",
    direction: "Show live processing states, progress feedback, and visible error recovery.",
    videoTitle: "Testing feedback",
    video: "video/test.mp4"
  },
  {
    title: "Output",
    problem: "Outputs and variance details were hard to find.",
    risk: "Important exceptions may be missed during finance review.",
    quote: "Where can I see what changed or failed?",
    direction: "Make reconciled outputs, variance details, and exception actions more visible.",
    videoTitle: "Output review",
    video: "video/output.mp4"
  }
];

(function () {
    document.documentElement.classList.add("js-enabled");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeWorkflowIndex = -1;
    let workflowManualOverrideUntil = 0;

    function initDocCards() {
        const cards = document.querySelectorAll("[data-doc]");
        if (!cards.length) return;

        if (prefersReducedMotion || typeof anime === "undefined") {
            cards.forEach((card) => {
                card.style.opacity = "1";
            });
            return;
        }

        anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [18, 0],
            delay: anime.stagger(110),
            duration: 700,
            easing: "easeOutExpo"
        });
    }

    function updateActiveWorkflowPanelOrigin() {
        if (activeWorkflowIndex < 0) return;
        const index = activeWorkflowIndex;
        const activeButton = document.querySelector(`.workflow-stage[data-stage-index="${index}"]`);
        const activePanel = document.getElementById(`stage-panel-${index}`);
        if (!activeButton || !activePanel) return;

        const buttonRect = activeButton.getBoundingClientRect();
        const panelRect = activePanel.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const rawOriginX = buttonCenterX - panelRect.left;
        const clampedOriginX = Math.max(24, Math.min(panelRect.width - 24, rawOriginX));
        activePanel.style.setProperty("--workflow-origin-x", `${clampedOriginX}px`);
    }

    function setWorkflowDetail(index) {
        const stage = workflowStages[index];
        if (!stage) return;
        if (activeWorkflowIndex === index) return;
        const previousWorkflowIndex = activeWorkflowIndex;
        activeWorkflowIndex = index;

        // Update all panels
        document.querySelectorAll('.stage-detail-panel').forEach((panel, panelIndex) => {
            const isActive = panelIndex === index;
            
            if (isActive) {
                // Populate content
                const title = panel.querySelector('[data-workflow-title]');
                const detail = panel.querySelector('[data-workflow-detail]');
                const impact = panel.querySelector('[data-workflow-impact]');
                const research = panel.querySelector('[data-workflow-research]');
                const extendedBody = panel.querySelector('[data-extended-body]');
                
                if (title) title.textContent = stage.title;
                if (detail) detail.textContent = stage.detail;
                if (impact) impact.textContent = stage.impact;
                if (research) research.textContent = stage.research;
                
                if (extendedBody && stage.extended) {
                    extendedBody.innerHTML = '<ul>' + stage.extended.map(item => `<li>${item}</li>`).join('') + '</ul>';
                }
                
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });

        document.querySelectorAll(".workflow-stage").forEach((button, buttonIndex) => {
            const isActive = buttonIndex === index;
            const isLeaving = buttonIndex === previousWorkflowIndex && previousWorkflowIndex !== index;
            button.classList.toggle("active", isActive);
            button.classList.toggle("leaving-active", isLeaving);
            button.setAttribute("aria-selected", isActive ? "true" : "false");
            button.setAttribute("aria-expanded", isActive ? "true" : "false");
            
            if (isLeaving) {
                window.setTimeout(() => button.classList.remove("leaving-active"), 400);
            }
        });

        document.querySelectorAll(".workflow-connector").forEach((connector, connectorIndex) => {
            connector.classList.toggle("active", connectorIndex < index);
        });

        window.requestAnimationFrame(updateActiveWorkflowPanelOrigin);
    }

    function initWorkflowSelection() {
        const buttons = document.querySelectorAll(".workflow-stage");
        if (!buttons.length) return;

        buttons.forEach((button) => {
            const activate = () => {
                const index = Number(button.dataset.stageIndex || 0);
                workflowManualOverrideUntil = Date.now() + 1200;
                setWorkflowDetail(index);
            };
            button.addEventListener("click", () => {
                activate();
            });
            button.addEventListener("focus", activate);
        });
    }

    function resetWorkflowDefault() {
        if (activeWorkflowIndex !== 0) {
            setWorkflowDetail(0);
        }
    }

    function initRiskSelectionV2() {
        const risk2Track = document.querySelector("#risk-map .risk2-scroll-track");
        const risk2StagesEls = Array.from(document.querySelectorAll("#risk-map .risk2-stage"));

        const risk2CopyCard = document.querySelector("#risk-map .risk2-copy-card");
        const risk2VideoCard = document.querySelector("#risk-map .risk2-video-card");

        const risk2Title = document.getElementById("risk2-title");
        const risk2Problem = document.getElementById("risk2-problem");
        const risk2Risk = document.getElementById("risk2-risk");
        const risk2Quote = document.getElementById("risk2-quote");
        const risk2Direction = document.getElementById("risk2-direction");
        const risk2VideoTitle = document.getElementById("risk2-video-title");
        const risk2Video = document.getElementById("risk2-video");

        if (!risk2Track || !risk2StagesEls.length) return;

        let risk2ActiveIndex = -1;
        let risk2Ticking = false;

        function risk2Clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        function setRisk2Stage(index) {
            index = risk2Clamp(index, 0, risk2Stages.length - 1);

            if (index === risk2ActiveIndex) return;

            risk2ActiveIndex = index;
            const data = risk2Stages[index];

            risk2StagesEls.forEach((stage, i) => {
                stage.classList.toggle("is-completed", i < index);
                stage.classList.toggle("is-active", i === index);
                stage.classList.toggle("is-upcoming", i > index);
                stage.setAttribute("aria-selected", i === index ? "true" : "false");
            });

            risk2CopyCard.classList.add("is-changing");
            risk2VideoCard.classList.add("is-changing");

            window.setTimeout(() => {
                risk2Title.textContent = data.title;
                risk2Problem.textContent = data.problem;
                risk2Risk.textContent = data.risk;
                risk2Quote.textContent = data.quote;
                risk2Direction.textContent = data.direction;
                risk2VideoTitle.textContent = data.videoTitle;

                const source = risk2Video.querySelector("source");

                if (source && source.getAttribute("src") !== data.video) {
                    source.setAttribute("src", data.video);
                    risk2Video.load();
                }

                risk2CopyCard.classList.remove("is-changing");
                risk2VideoCard.classList.remove("is-changing");
            }, 180);
        }

        function updateRisk2ByScroll() {
            if (!risk2Track) return;

            const rect = risk2Track.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const scrollable = rect.height - viewportHeight;
            const inside = risk2Clamp(-rect.top, 0, scrollable);

            const progress = scrollable > 0 ? inside / scrollable : 0;

            const index = Math.min(
                risk2Stages.length - 1,
                Math.floor(progress * risk2Stages.length)
            );

            setRisk2Stage(index);

            risk2Ticking = false;
        }

        function onRisk2Scroll() {
            if (!risk2Ticking) {
                window.requestAnimationFrame(updateRisk2ByScroll);
                risk2Ticking = true;
            }
        }

        window.addEventListener("scroll", onRisk2Scroll, { passive: true });
        window.addEventListener("resize", updateRisk2ByScroll);

        risk2StagesEls.forEach((stage) => {
            stage.addEventListener("click", () => {
                const index = Number(stage.dataset.riskStage);
                setRisk2Stage(index);
            });
        });

        setRisk2Stage(0);
        updateRisk2ByScroll();
    }

    function initFindingsAccordion() {
        const triggers = document.querySelectorAll(".finding-trigger");
        if (!triggers.length) return;

        triggers.forEach((trigger) => {
            const panelId = trigger.getAttribute("aria-controls");
            const panel = panelId ? document.getElementById(panelId) : null;
            if (!panel) return;

            trigger.addEventListener("click", () => {
                const isExpanded = trigger.getAttribute("aria-expanded") === "true";

                triggers.forEach((otherTrigger) => {
                    const otherPanelId = otherTrigger.getAttribute("aria-controls");
                    const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
                    const otherChevron = otherTrigger.querySelector(".finding-chevron");

                    otherTrigger.classList.remove("active");
                    otherTrigger.setAttribute("aria-expanded", "false");
                    if (otherPanel) otherPanel.classList.remove("open");
                    if (otherChevron) otherChevron.classList.remove("rotated");
                });

                if (!isExpanded) {
                    trigger.classList.add("active");
                    trigger.setAttribute("aria-expanded", "true");
                    panel.classList.add("open");
                    const chevron = trigger.querySelector(".finding-chevron");
                    if (chevron) chevron.classList.add("rotated");
                }
            });
        });
    }

    function initRevealObserver() {
        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            document.querySelectorAll(".reveal-on-scroll, .workflow-stage, .workflow-connector").forEach((el) => {
                el.classList.add("is-revealed", "is-visible");
            });
            return;
        }

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-revealed");
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

        document.querySelectorAll(".reveal-on-scroll").forEach((el) => revealObserver.observe(el));
    }

    function initWorkflowObserver() {
        const stages = Array.from(document.querySelectorAll(".workflow-stage"));
        const connectors = Array.from(document.querySelectorAll(".workflow-connector"));
        const workflowSection = document.getElementById("workflow");
        if (!stages.length) return;

        const isDesktopWorkflow = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktopWorkflow) {
            stages.forEach((stage) => stage.classList.add("is-visible"));
            connectors.forEach((connector) => connector.classList.add("is-visible"));
            setWorkflowDetail(0);
            return;
        }

        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            stages.forEach((stage) => stage.classList.add("is-visible"));
            connectors.forEach((connector) => connector.classList.add("is-visible"));
            setWorkflowDetail(0);
            return;
        }

        let hasRevealedWorkflow = false;
        let ticking = false;

        const revealWorkflow = () => {
            if (hasRevealedWorkflow) return;
            hasRevealedWorkflow = true;
            stages.forEach((stage, index) => {
                window.setTimeout(() => {
                    stage.classList.add("is-visible");
                    if (connectors[index - 1]) connectors[index - 1].classList.add("is-visible");
                }, index * 170);
            });
            setWorkflowDetail(0);
        };

        const getWorkflowIndexFromScroll = () => {
            if (!workflowSection) return 0;
            const rect = workflowSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const travel = Math.max(1, rect.height - viewportHeight);
            const progress = Math.max(0, Math.min(1, -rect.top / travel));

            if (progress >= 0.76) return 3;
            if (progress >= 0.52) return 2;
            if (progress >= 0.28) return 1;
            return 0;
        };

        const syncWorkflowToScroll = () => {
            ticking = false;
            if (!workflowSection) return;
            if (Date.now() < workflowManualOverrideUntil) return;
            const rect = workflowSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const isNearWorkflow = rect.top < viewportHeight * 0.72 && rect.bottom > viewportHeight * 0.16;
            if (!isNearWorkflow) return;
            setWorkflowDetail(getWorkflowIndexFromScroll());
        };

        const requestWorkflowSync = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(syncWorkflowToScroll);
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                revealWorkflow();
                requestWorkflowSync();
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -20% 0px" });

        if (workflowSection) sectionObserver.observe(workflowSection);

        window.addEventListener("scroll", requestWorkflowSync, { passive: true });
        window.addEventListener("resize", requestWorkflowSync);

        requestWorkflowSync();
    }

    function initActiveNav() {
        const sections = Array.from(document.querySelectorAll("main section[id]"));
        const links = Array.from(document.querySelectorAll(".nav-link[href^='#']"));
        if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

        const linkMap = new Map(links.map((link) => [link.getAttribute("href"), link]));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((link) => link.classList.remove("active"));
                const link = linkMap.get(`#${entry.target.id}`);
                if (link) link.classList.add("active");
            });
        }, { threshold: 0.35, rootMargin: "-80px 0px -45% 0px" });

        sections.forEach((section) => observer.observe(section));
    }

    function initMobileMenu() {
        const button = document.querySelector(".mobile-menu-button");
        const menu = document.getElementById("mobile-menu");
        if (!button || !menu) return;

        const closeMenu = () => {
            button.setAttribute("aria-expanded", "false");
            menu.hidden = true;
        };

        button.addEventListener("click", () => {
            const isOpen = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", isOpen ? "false" : "true");
            menu.hidden = isOpen;
        });

        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", (event) => {
            if (menu.hidden) return;
            if (menu.contains(event.target) || button.contains(event.target)) return;
            closeMenu();
        });
    }

    function initMethodReveal() {
        const section = document.getElementById("methodology");
        if (!section || section.dataset.methodAnimated) return;

        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            section.querySelectorAll(".method-reveal, .asset-reveal").forEach((el) => {
                el.classList.add("is-revealed");
            });
            section.dataset.methodAnimated = "1";
            return;
        }

        const countUp = (band) => {
            band.querySelectorAll(".metric-value").forEach((el) => {
                const target = parseInt(el.getAttribute("data-target"), 10);
                if (!target || typeof anime === "undefined") { el.textContent = target || "0"; return; }
                const proxy = { v: 0 };
                anime({
                    targets: proxy,
                    v: target,
                    round: 1,
                    easing: "easeOutExpo",
                    duration: 1400,
                    update: () => { el.textContent = proxy.v; },
                });
            });
        };

        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                section.dataset.methodAnimated = "1";
                obs.unobserve(entry.target);

                const methodCards = Array.from(section.querySelectorAll(".method-reveal"));
                const assets = Array.from(section.querySelectorAll(".asset-reveal"));
                const metricsBand = section.querySelector(".method-reveal[data-metrics]");

                methodCards.forEach((card, i) => {
                    window.setTimeout(() => card.classList.add("is-revealed"), i * 110);
                });

                if (metricsBand) {
                    const bandDelay = methodCards.length * 110 + 80;
                    window.setTimeout(() => {
                        metricsBand.classList.add("is-revealed");
                        countUp(metricsBand);
                    }, bandDelay);
                }

                assets.forEach((asset, i) => {
                    const baseDelay = methodCards.length * 110 + 300 + i * 80;
                    window.setTimeout(() => asset.classList.add("is-revealed"), baseDelay);
                });
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

        obs.observe(section);
    }

    function initTeamSloganAnimation() {
        const slogan = document.querySelector("#team .slogan");
        if (!slogan || slogan.dataset.animated) return;

        const flatten = () => {
            const frag = document.createDocumentFragment();
            Array.from(slogan.childNodes).forEach((node) => {
                const el = document.createElement("span");
                el.textContent = node.textContent;
                if (node.nodeType === 1 && node.className) el.className = node.className;
                frag.appendChild(el);
            });
            slogan.textContent = "";
            slogan.appendChild(frag);
        };

        const trigger = () => {
            if (slogan.dataset.animated) return;
            slogan.dataset.animated = "1";

            flatten();

            const spans = Array.from(slogan.children);
            if (!spans.length) return;

            const eDash = "\u2014";
            const splitAt = spans.findIndex((s) => s.textContent.includes(eDash));

            const buildLine = document.createElement("span");
            buildLine.style.display = "block";

            const beforeDash = document.createElement("span");
            beforeDash.style.display = "block";

            let afterDash = null;

            for (let i = 0; i < spans.length; i++) {
                if (i < splitAt) {
                    beforeDash.appendChild(spans[i].cloneNode(true));
                } else if (i === splitAt) {
                    const text = spans[i].textContent;
                    const pos = text.indexOf(eDash);
                    const left = text.slice(0, pos + 1);
                    const right = text.slice(pos + 1);

                    const leftSpan = document.createElement("span");
                    leftSpan.textContent = left;
                    if (spans[i].className) leftSpan.className = spans[i].className;
                    beforeDash.appendChild(leftSpan);

                    if (right.trim()) {
                        afterDash = document.createElement("span");
                        afterDash.style.display = "block";
                        const rightSpan = document.createElement("span");
                        rightSpan.textContent = right;
                        afterDash.appendChild(rightSpan);
                    }
                } else {
                    if (!afterDash) {
                        afterDash = document.createElement("span");
                        afterDash.style.display = "block";
                    }
                    afterDash.appendChild(spans[i].cloneNode(true));
                }
            }

            if (!afterDash) {
                afterDash = document.createElement("span");
                afterDash.style.display = "block";
            }

            const L1 = beforeDash;
            const L2 = afterDash;

            slogan.textContent = "";
            slogan.appendChild(L1);
            slogan.appendChild(L2);

            const highlight = slogan.querySelector(".slogan-highlight");

            if (prefersReducedMotion || typeof anime === "undefined") return;

            [L1, L2].forEach((l) => {
                l.style.opacity = "0";
                l.style.transform = "translateY(1.2rem)";
            });

            anime({
                targets: L1,
                opacity: [0, 1],
                translateY: ["1.2rem", 0],
                easing: "easeOutExpo",
                duration: 700,
            });

            anime({
                targets: L2,
                opacity: [0, 1],
                translateY: ["1.2rem", 0],
                easing: "easeOutExpo",
                duration: 700,
                delay: 280,
                complete: () => {
                    if (highlight) {
                        anime({
                            targets: highlight,
                            scale: [1, 1.06, 1],
                            duration: 900,
                            easing: "easeInOutQuad",
                            direction: "alternate",
                            loop: 2,
                        });
                    }
                },
            });
        };

        if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                trigger();
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.3 });

        obs.observe(slogan);
    }

    document.addEventListener("DOMContentLoaded", () => {
        initDocCards();
        resetWorkflowDefault();
        initRevealObserver();
        initWorkflowSelection();
        initWorkflowObserver();
        window.addEventListener("resize", () => window.requestAnimationFrame(updateActiveWorkflowPanelOrigin));
        window.requestAnimationFrame(updateActiveWorkflowPanelOrigin);
        initRiskSelectionV2();
        initFindingsAccordion();
        initActiveNav();
        initMobileMenu();
        initMethodReveal();
        initTeamSloganAnimation();
        resetWorkflowDefault();
    });

    window.addEventListener("pageshow", resetWorkflowDefault);
})();
