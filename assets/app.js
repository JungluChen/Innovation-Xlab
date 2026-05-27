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

    function initFibulaGsapDemo() {
        const demo = document.querySelector("[data-fibula-demo]");
        if (!demo) return;

        const docs = Array.from(demo.querySelectorAll("[data-demo-doc]"));
        const nodes = Array.from(demo.querySelectorAll("[data-demo-node]"));
        const lines = Array.from(demo.querySelectorAll("[data-demo-line]"));
        const workflow = demo.querySelector("[data-demo-workflow]");
        const flowSvg = demo.querySelector(".fibula-demo-lines");
        const statusLabel = demo.querySelector("[data-fibula-demo-status]");
        const introSection = demo.closest("[data-fibula-intro]");
        const introPin = introSection ? introSection.querySelector("[data-fibula-intro-pin]") : null;
        if (!docs.length || !nodes.length || !workflow) return;

        const nodeMap = new Map(nodes.map((node) => [node.dataset.demoNode, node]));
        const mobileDemoQuery = window.matchMedia("(max-width: 767px)");
        const getArchivedScale = () => mobileDemoQuery.matches ? 0.16 : introSection ? 0.18 : 0.42;
        const getArchivedAlpha = () => introSection ? 0 : 0.42;

        const getNodeBox = (nodeName) => {
            const node = nodeMap.get(nodeName);
            if (!node || !flowSvg) return { x: 0, y: 0 };

            const viewBoxWidth = 420;
            const viewBoxHeight = 220;
            const xScale = viewBoxWidth / Math.max(workflow.offsetWidth, 1);
            const yScale = viewBoxHeight / Math.max(workflow.offsetHeight, 1);
            const left = node.offsetLeft * xScale;
            const top = node.offsetTop * yScale;
            const width = node.offsetWidth * xScale;
            const height = node.offsetHeight * yScale;

            return {
                left,
                right: left + width,
                top,
                bottom: top + height,
                centerX: left + width / 2,
                centerY: top + height / 2,
                halfWidth: width / 2,
                halfHeight: height / 2
            };
        };

        const getRectIntersection = (box, target) => {
            const dx = target.centerX - box.centerX;
            const dy = target.centerY - box.centerY;
            if (dx === 0 && dy === 0) return { x: box.centerX, y: box.centerY };

            const scale = Math.min(
                box.halfWidth / Math.max(Math.abs(dx), 0.001),
                box.halfHeight / Math.max(Math.abs(dy), 0.001)
            );

            return {
                x: box.centerX + dx * scale,
                y: box.centerY + dy * scale
            };
        };

        const buildFlowPath = (fromName, toName) => {
            const fromBox = getNodeBox(fromName);
            const toBox = getNodeBox(toName);
            const start = getRectIntersection(fromBox, toBox);
            const end = getRectIntersection(toBox, fromBox);
            const distance = Math.max(Math.abs(end.x - start.x), 48);
            const c1 = { x: start.x + distance * 0.42, y: start.y };
            const c2 = { x: end.x - distance * 0.42, y: end.y };

            return `M${start.x.toFixed(1)} ${start.y.toFixed(1)} C${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
        };

        const updateWorkflowLines = () => {
            lines.forEach((line) => {
                const fromName = line.dataset.flowFrom;
                const toName = line.dataset.flowTo;
                if (!fromName || !toName) return;
                line.setAttribute("d", buildFlowPath(fromName, toName));
                line.style.strokeDasharray = "";
                line.style.strokeDashoffset = "";
            });
        };

        const getDocTravel = (doc, index) => {
            const targetNode = nodeMap.get(doc.dataset.targetNode) || nodes[index % nodes.length];
            if (!targetNode) return { x: 0, y: 0 };

            const demoRect = demo.getBoundingClientRect();
            const docRect = doc.getBoundingClientRect();
            const nodeRect = targetNode.getBoundingClientRect();
            const offsetX = Number(doc.dataset.targetOffsetX || 0);
            const offsetY = Number(doc.dataset.targetOffsetY || 0);

            const docCenterX = docRect.left - demoRect.left + docRect.width / 2;
            const docCenterY = docRect.top - demoRect.top + docRect.height / 2;
            const targetCenterX = nodeRect.left - demoRect.left + nodeRect.width / 2 + offsetX;
            const targetCenterY = nodeRect.top - demoRect.top + nodeRect.height / 2 + offsetY;

            return {
                x: targetCenterX - docCenterX,
                y: targetCenterY - docCenterY
            };
        };

        const applyStaticWorkflow = () => {
            demo.classList.add("demo-static");
            window.requestAnimationFrame(() => {
                updateWorkflowLines();
                if (statusLabel) statusLabel.textContent = "Archived workflow";
                docs.forEach((doc, index) => {
                    const travel = getDocTravel(doc, index);
                    doc.style.opacity = String(getArchivedAlpha());
                    doc.style.transform = `translate3d(${travel.x}px, ${travel.y}px, 0) rotate(0deg) scale(${getArchivedScale()})`;
                });

                nodes.forEach((node) => {
                    node.style.opacity = "1";
                    node.style.visibility = "visible";
                    node.style.transform = "translate3d(0, 0, 0) scale(1)";
                });

                lines.forEach((line) => {
                    line.style.opacity = "1";
                    line.style.visibility = "visible";
                    line.style.strokeDasharray = "";
                    line.style.strokeDashoffset = "";
                });
            });
        };

        if (prefersReducedMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
            applyStaticWorkflow();
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        demo.classList.add("motion-ready");

        const setStartState = () => {
            updateWorkflowLines();
            gsap.set(docs, { x: 0, y: 0, scale: 1, autoAlpha: 1 });
            gsap.set(nodes, { autoAlpha: introSection ? 0 : 0.35, scale: 0.9, y: 6 });
            gsap.set(lines, { autoAlpha: introSection ? 0 : 0.4 });
            gsap.set(workflow, { autoAlpha: introSection ? 0.08 : 0.92 });
            if (statusLabel) statusLabel.textContent = "Scattered documents";
        };

        const updateStatus = (progress) => {
            if (!statusLabel) return;
            if (progress > 0.74) {
                statusLabel.textContent = "Archived workflow";
            } else if (progress > 0.36) {
                statusLabel.textContent = "Classifying evidence";
            } else {
                statusLabel.textContent = "Scattered documents";
            }
        };

        setStartState();

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            setStartState();

            const triggerTarget = introSection || demo;
            const timelineConfig = {
                trigger: triggerTarget,
                start: introSection ? 0 : "top 72%",
                scrub: introSection ? true : 0.85,
                invalidateOnRefresh: true,
                refreshPriority: introSection ? -20 : 0,
                onRefresh: updateWorkflowLines,
                onUpdate: (self) => updateStatus(self.progress)
            };

            if (introSection && introPin) {
                timelineConfig.end = "+=115%";
                timelineConfig.pin = introPin;
                timelineConfig.anticipatePin = 1;
            } else {
                timelineConfig.endTrigger = "#workflow";
                timelineConfig.end = "top 40%";
            }

            const timeline = gsap.timeline({
                scrollTrigger: timelineConfig
            });

            timeline
                .to(workflow, {
                    autoAlpha: 1,
                    duration: 0.48,
                    ease: "power2.out"
                }, 0.06)
                .to(docs, {
                    x: (index, doc) => getDocTravel(doc, index).x,
                    y: (index, doc) => getDocTravel(doc, index).y,
                    rotation: 0,
                    scale: getArchivedScale,
                    autoAlpha: getArchivedAlpha,
                    duration: 1,
                    ease: "power2.inOut",
                    stagger: { each: 0.035, from: "random" }
                }, 0)
                .to(nodes, {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "back.out(1.8)",
                    stagger: 0.07
                }, 0.18)
                .to(lines, {
                    autoAlpha: 1,
                    duration: 0.78,
                    ease: "none",
                    stagger: 0.08
                }, 0.32);

            return () => {
                timeline.kill();
            };
        });

        mm.add("(max-width: 767px)", () => {
            setStartState();

            if (introSection) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: introSection,
                        start: 0,
                        end: "bottom top",
                        scrub: true,
                        invalidateOnRefresh: true,
                        refreshPriority: -20,
                        onRefresh: updateWorkflowLines,
                        onUpdate: (self) => updateStatus(self.progress)
                    }
                });

                timeline
                    .to(workflow, {
                        autoAlpha: 1,
                        duration: 0.35,
                        ease: "power2.out"
                    }, 0.08)
                    .to(docs, {
                        x: (index, doc) => getDocTravel(doc, index).x,
                        y: (index, doc) => getDocTravel(doc, index).y,
                        rotation: 0,
                        scale: getArchivedScale,
                        autoAlpha: getArchivedAlpha,
                        duration: 0.9,
                        ease: "power2.inOut",
                        stagger: { each: 0.035, from: "random" }
                    }, 0)
                    .to(nodes, {
                        autoAlpha: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "back.out(1.55)",
                        stagger: 0.055
                    }, 0.25)
                    .to(lines, {
                        autoAlpha: 1,
                        duration: 0.7,
                        ease: "none",
                        stagger: 0.05
                    }, 0.4);

                return () => {
                    timeline.kill();
                };
            }

            const playMobileSequence = () => {
                const timeline = gsap.timeline({ defaults: { overwrite: "auto" } });

                timeline
                    .to(workflow, {
                        autoAlpha: 1,
                        duration: 0.38,
                        ease: "power2.out",
                        onStart: () => updateStatus(0.38)
                    }, 0.18)
                    .fromTo(docs,
                        { autoAlpha: 0, y: 12, scale: 0.96 },
                        { autoAlpha: 1, y: 0, scale: 1, duration: 0.38, ease: "back.out(1.8)", stagger: 0.045 }
                    )
                    .to(docs, {
                        x: (index, doc) => getDocTravel(doc, index).x,
                        y: (index, doc) => getDocTravel(doc, index).y,
                        rotation: 0,
                        scale: getArchivedScale,
                        autoAlpha: getArchivedAlpha,
                        duration: 0.85,
                        ease: "power3.inOut",
                        stagger: { each: 0.035, from: "random" },
                        onComplete: () => updateStatus(1)
                    }, 0.42)
                    .to(nodes, {
                        autoAlpha: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "back.out(1.7)",
                        stagger: 0.06
                    }, 0.54)
                    .to(lines, {
                        autoAlpha: 1,
                        duration: 0.65,
                        ease: "none",
                        stagger: 0.05
                    }, 0.68);

                return timeline;
            };

            if (!("IntersectionObserver" in window)) {
                const timeline = playMobileSequence();
                return () => timeline.kill();
            }

            let mobileTimeline = null;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting || mobileTimeline) return;
                    mobileTimeline = playMobileSequence();
                    observer.unobserve(demo);
                });
            }, { threshold: 0.35 });

            observer.observe(demo);

            return () => {
                observer.disconnect();
                if (mobileTimeline) mobileTimeline.kill();
            };
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
        const risk2MobileQuery = window.matchMedia("(max-width: 767px)");

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
            if (risk2MobileQuery.matches) {
                risk2Ticking = false;
                return;
            }

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
        risk2MobileQuery.addEventListener("change", () => {
            setRisk2Stage(0);
            updateRisk2ByScroll();
        });

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

    function initSpringFeedback() {
        if (prefersReducedMotion || typeof gsap === "undefined") return;

        const targets = document.querySelectorAll(".nav-link, .nav-cta, .btn-primary, .btn-secondary, .mobile-menu-button");
        targets.forEach((target) => {
            if (target.dataset.springReady === "true") return;
            target.dataset.springReady = "true";

            target.addEventListener("pointerenter", (event) => {
                if (event.pointerType === "touch") return;
                gsap.to(target, { y: -2, scale: 1.025, duration: 0.32, ease: "back.out(2)", overwrite: "auto" });
            });

            target.addEventListener("pointerleave", () => {
                gsap.to(target, { y: 0, scale: 1, duration: 0.28, ease: "power2.out", overwrite: "auto" });
            });

            target.addEventListener("pointerdown", () => {
                gsap.to(target, { scale: 0.96, duration: 0.12, ease: "power2.out", overwrite: "auto" });
            });

            target.addEventListener("pointerup", () => {
                gsap.to(target, { scale: 1.025, duration: 0.2, ease: "back.out(2)", overwrite: "auto" });
            });
        });
    }

    function initMobileMenu() {
        const button = document.querySelector(".mobile-menu-button");
        const menu = document.getElementById("mobile-menu");
        if (!button || !menu) return;
        const menuItems = Array.from(menu.querySelectorAll("a"));
        const canAnimateMenu = !prefersReducedMotion && typeof gsap !== "undefined";

        const closeMenu = () => {
            button.setAttribute("aria-expanded", "false");
            if (menu.hidden) return;

            if (!canAnimateMenu) {
                menu.hidden = true;
                return;
            }

            gsap.killTweensOf([menu, ...menuItems]);
            gsap.to(menu, {
                autoAlpha: 0,
                y: -8,
                scale: 0.98,
                duration: 0.18,
                ease: "power2.in",
                onComplete: () => {
                    menu.hidden = true;
                    gsap.set([menu, ...menuItems], { clearProps: "opacity,visibility,transform" });
                }
            });
        };

        const openMenu = () => {
            button.setAttribute("aria-expanded", "true");
            menu.hidden = false;

            if (!canAnimateMenu) return;

            gsap.killTweensOf([menu, ...menuItems]);
            gsap.set(menu, { autoAlpha: 0, y: -10, scale: 0.96, transformOrigin: "top right" });
            gsap.set(menuItems, { autoAlpha: 0, y: 12, scale: 0.98 });

            gsap.timeline()
                .to(menu, { autoAlpha: 1, y: 0, scale: 1, duration: 0.28, ease: "back.out(1.6)" })
                .to(menuItems, {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.34,
                    ease: "back.out(1.8)",
                    stagger: 0.045
                }, "-=0.15");
        };

        button.addEventListener("click", () => {
            const isOpen = button.getAttribute("aria-expanded") === "true";
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        menuItems.forEach((link) => {
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
        initFibulaGsapDemo();
        resetWorkflowDefault();
        initRevealObserver();
        initWorkflowSelection();
        initWorkflowObserver();
        window.addEventListener("resize", () => window.requestAnimationFrame(updateActiveWorkflowPanelOrigin));
        window.requestAnimationFrame(updateActiveWorkflowPanelOrigin);
        initRiskSelectionV2();
        initFindingsAccordion();
        initActiveNav();
        initSpringFeedback();
        initMobileMenu();
        initMethodReveal();
        initTeamSloganAnimation();
        resetWorkflowDefault();
    });

    window.addEventListener("pageshow", resetWorkflowDefault);
})();
