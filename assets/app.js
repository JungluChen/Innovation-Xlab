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

const showcaseItems = [
  {
    group: "workflow",
    section: "Workflow",
    eyebrow: "Stage 1 / Intent intake",
    title: workflowStages[0].title,
    body: workflowStages[0].detail,
    points: workflowStages[0].extended,
    node: "intent",
    theme: "workflow"
  },
  {
    group: "workflow",
    section: "Workflow",
    eyebrow: "Stage 2 / Agent logic",
    title: workflowStages[1].title,
    body: workflowStages[1].detail,
    points: workflowStages[1].extended,
    node: "synthesis",
    theme: "workflow"
  },
  {
    group: "workflow",
    section: "Workflow",
    eyebrow: "Stage 3 / Human review",
    title: workflowStages[2].title,
    body: workflowStages[2].detail,
    points: workflowStages[2].extended,
    node: "validation",
    theme: "workflow"
  },
  {
    group: "workflow",
    section: "Workflow",
    eyebrow: "Stage 4 / Stateful run",
    title: workflowStages[3].title,
    body: workflowStages[3].detail,
    points: workflowStages[3].extended,
    node: "deploy",
    theme: "workflow"
  },
  {
    group: "method",
    section: "Method",
    eyebrow: "Evidence card 1 / Workflow mapping",
    title: "Map document logic before interface fixes.",
    body: "Document types, matching keys, variance decisions, and exception paths were mapped before visual fixes were proposed.",
    points: ["Map document types across AP and BOM reconciliation flows", "Identify matching keys and trace variance decisions", "Translate workflow ambiguity into product requirements"],
    node: "intent",
    theme: "method"
  },
  {
    group: "method",
    section: "Method",
    eyebrow: "Evidence card 2 / Task-based testing",
    title: "Observe users without steering their choices.",
    body: "More than 15 unguided think-aloud sessions captured hesitation, misclicks, confusion, and abandonment across participant cohorts.",
    points: ["Run more than 15 unguided think-aloud sessions", "Record hesitation, misclicks, confusion, and abandonment", "Compare behavior across 11 participant cohorts"],
    node: "validation",
    theme: "method"
  },
  {
    group: "method",
    section: "Method",
    eyebrow: "Evidence card 3 / Success framework",
    title: "Evidence-based coding prioritized repeated friction.",
    body: "The 90 percent No-Help Rule kept testing consistent and translated repeated friction logs into concrete product fixes.",
    points: ["Apply the 90 percent No-Help Rule", "Use evidence-based coding rather than subjective preference", "Keep core evidence visible without hover-only disclosure"],
    node: "synthesis",
    theme: "method"
  },
  ...risk2Stages.map((stage, index) => ({
    group: "risk",
    section: "Risk Map",
    eyebrow: `Risk stage ${index + 1} / ${stage.title}`,
    title: stage.title,
    body: stage.direction,
    points: [stage.problem, stage.risk, stage.quote],
    node: index === 0 ? "intent" : index < 3 ? "synthesis" : index === 3 ? "validation" : "deploy",
    theme: "risk"
  })),
  {
    group: "fixes",
    section: "Fixes",
    eyebrow: "Finding 1 / Spatial desynchronization",
    title: "Users needed visible workflow construction.",
    body: "Silent processing made the workflow feel disconnected from the user's mental model.",
    points: ["Problem: users could not connect intent to system output", "Fix: draw workflow nodes as synthesis happens", "Impact: users can see progress and system activity"],
    node: "synthesis",
    theme: "fixes"
  },
  {
    group: "fixes",
    section: "Fixes",
    eyebrow: "Finding 2 / Convenience bias",
    title: "Choice overload pushed users toward the quickest path.",
    body: "Verbose option lists caused users to select convenient paths rather than correct reconciliation flows.",
    points: ["Problem: too many visible choices", "Fix: predictive chips and progressive disclosure", "Impact: faster choices with less cognitive burden"],
    node: "intent",
    theme: "fixes"
  },
  {
    group: "fixes",
    section: "Fixes",
    eyebrow: "Finding 3 / Operational opacity",
    title: "Failure states needed visible recovery paths.",
    body: "Silent errors and dead-end modals left users without a clear way to recover inside the workflow.",
    points: ["Problem: unclear error recovery", "Fix: advice cards, rerun shortcuts, next-step guidance", "Impact: users recover without leaving the workflow"],
    node: "validation",
    theme: "fixes"
  },
  {
    group: "impact",
    section: "Impact",
    eyebrow: "Impact panel 1 / Mental model gap",
    title: "Users needed visible system guidance, not silent synthesis.",
    body: "The redesign makes natural-language intent visible as executable structure and reduces uncertainty during automation.",
    points: ["Immediate guidance from the first action", "Live feedback while workflows are synthesized", "Visible bridge from intent to structure"],
    node: "deploy",
    theme: "impact"
  },
  {
    group: "impact",
    section: "Impact",
    eyebrow: "Impact panel 2 / Reconciliation risk mitigation",
    title: "Clear exception visibility protects industrial decisions.",
    body: "Fibula turns outputs into clearer decision surfaces where variance, exception states, and human validation remain visible.",
    points: ["Expose missed variance and unclear output risk", "Make exception states visible and recoverable", "Keep human validation in the automation loop"],
    node: "deploy",
    theme: "impact"
  }
];

const showcaseGroups = {
    workflow: {
        section: "Workflow",
        eyebrow: "Solution reveal",
        title: "Fibula turns reconciliation intent into stateful workflows.",
        body: "Operators describe matching requirements in plain language, then watch Fibula turn that intent into reviewable workflow structure.",
        contentSide: "left"
    },
    method: {
        section: "Method",
        eyebrow: "Credibility section",
        title: "Research evidence moves through the same product workflow.",
        body: "Document logic, think-aloud behavior, and repeated friction were treated as evidence files before interface changes were made.",
        contentSide: "right"
    },
    risk: {
        section: "Risk Map",
        eyebrow: "Human failure-point section",
        title: "Observed user failures become operational risk signals.",
        body: "Each journey risk is filed into the workflow so the product can reveal where trust, setup, and output review break down.",
        contentSide: "left"
    },
    fixes: {
        section: "Fixes",
        eyebrow: "Proof-of-evolution section",
        title: "Findings archive into concrete product corrections.",
        body: "The redesign is shown as a sequence of files moving from observed friction to specific workflow fixes.",
        contentSide: "right"
    },
    impact: {
        section: "Impact",
        eyebrow: "Strategic analysis section",
        title: "The workflow ends as visible, auditable reconciliation confidence.",
        body: "Fibula reduces hidden automation risk by keeping intent, exception handling, and human validation visible from start to deployment.",
        contentSide: "left"
    }
};

(function () {
    document.documentElement.classList.add("js-enabled");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeWorkflowIndex = -1;
    let workflowManualOverrideUntil = 0;

    function clampValue(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function normalizeWorkflowNodeName(name) {
        return name === "deployment" ? "deploy" : name;
    }

    function configureSharedWorkflowElement(workflow) {
        if (!workflow) return null;
        if (workflow.dataset.sharedWorkflowReady === "true") return workflow;

        workflow.dataset.sharedWorkflowReady = "true";
        workflow.dataset.sharedWorkflow = "true";
        workflow.classList.add("shared-workflow-model", "product-showcase-workflow");
        workflow.setAttribute("aria-hidden", "true");

        if (workflow.parentElement !== document.body) {
            document.body.appendChild(workflow);
        }

        const svg = workflow.querySelector(".fibula-demo-lines");
        if (svg) svg.classList.add("product-showcase-lines");

        workflow.querySelectorAll("[data-demo-line]").forEach((line) => {
            const fromName = normalizeWorkflowNodeName(line.dataset.flowFrom || "");
            const toName = normalizeWorkflowNodeName(line.dataset.flowTo || "");
            if (fromName && toName) line.dataset.showcaseLine = `${fromName}-${toName}`;
            line.classList.add("product-line");
        });

        workflow.querySelectorAll("[data-demo-node]").forEach((node) => {
            const nodeName = normalizeWorkflowNodeName(node.dataset.demoNode || "");
            if (!nodeName) return;
            node.dataset.showcaseNode = nodeName;
            node.classList.add("product-node", `product-node-${nodeName}`);
            if (!node.querySelector("[data-node-count]")) {
                const count = document.createElement("em");
                count.dataset.nodeCount = nodeName;
                count.textContent = "0";
                node.appendChild(count);
            }
        });

        return workflow;
    }

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
        const introCopy = introSection ? introSection.querySelector(".fibula-intro-copy") : null;
        if (!docs.length || !nodes.length || !workflow) return;
        configureSharedWorkflowElement(workflow);

        const nodeMap = new Map(nodes.map((node) => [node.dataset.demoNode, node]));
        const mobileDemoQuery = window.matchMedia("(max-width: 767px)");
        const getArchivedScale = () => mobileDemoQuery.matches ? 0.16 : introSection ? 0.18 : 0.42;
        const getArchivedAlpha = () => introSection ? 0 : 0.42;
        const getIntroHandoffX = () => {
            if (!introSection || mobileDemoQuery.matches) return 0;
            return 0;
        };
        const getIntroHandoffY = () => {
            if (!introSection) return 0;
            if (mobileDemoQuery.matches) return clampValue(window.innerHeight * 0.1, 36, 76);
            return clampValue(window.innerHeight * 0.075, 54, 86);
        };

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
                if (introCopy) {
                    introCopy.style.opacity = "1";
                    introCopy.style.visibility = "visible";
                    introCopy.style.transform = "translate3d(0,0,0)";
                    introCopy.style.filter = "blur(0)";
                }
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
            gsap.set(nodes, { autoAlpha: introSection ? 0 : 0.35, scale: 0.9, y: 6, rotation: 0 });
            gsap.set(lines, { autoAlpha: introSection ? 0 : 0.4 });
            gsap.set(workflow, { autoAlpha: introSection ? 0.08 : 0.92, xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 1, scaleX: 1, scaleY: 1, rotation: 0 });
            if (introCopy) gsap.set(introCopy, { autoAlpha: 0, y: 18, filter: "blur(6px)" });
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
                timelineConfig.end = "+=145%";
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
                    duration: 0.18,
                    ease: "power2.out"
                }, 0.04)
                .to(docs, {
                    x: (index, doc) => getDocTravel(doc, index).x,
                    y: (index, doc) => getDocTravel(doc, index).y,
                    rotation: 0,
                    scale: getArchivedScale,
                    autoAlpha: getArchivedAlpha,
                    duration: 0.48,
                    ease: "power3.inOut",
                    stagger: { amount: 0.24, from: "random" }
                }, 0.02)
                .to(nodes, {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.28,
                    ease: "back.out(1.8)",
                    stagger: 0.07
                }, 0.3)
                .to(lines, {
                    autoAlpha: 1,
                    duration: 0.24,
                    ease: "none",
                    stagger: 0.08
                }, 0.46)
                .to(workflow, {
                    x: getIntroHandoffX,
                    y: getIntroHandoffY,
                    scaleX: 1.015,
                    scaleY: 0.985,
                    rotation: 0,
                    duration: 0.18,
                    ease: "power2.out"
                }, 0.62);

            if (introCopy) {
                timeline
                    .to(introCopy, {
                        autoAlpha: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.24,
                        ease: "power3.out"
                    }, 0.88)
                    .to(introCopy, {
                        autoAlpha: 0,
                        y: -22,
                        filter: "blur(7px)",
                        duration: 0.32,
                        ease: "power2.inOut"
                    }, 1.42)
                    .to(workflow, {
                        x: getIntroHandoffX,
                        y: getIntroHandoffY,
                        scaleX: 1,
                        scaleY: 1,
                        rotation: 0,
                        duration: 0.14,
                        ease: "back.out(1.45)"
                    }, 1.5);
            }

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

                if (introCopy) {
                    timeline
                        .to(introCopy, {
                            autoAlpha: 1,
                            y: 0,
                            filter: "blur(0px)",
                            duration: 0.38,
                            ease: "power3.out"
                        }, 0.62)
                        .to(introCopy, {
                            autoAlpha: 0,
                            y: -22,
                            filter: "blur(7px)",
                            duration: 0.34,
                            ease: "power2.inOut"
                        }, 0.94);
                }

                timeline.to(workflow, {
                    x: getIntroHandoffX,
                    y: getIntroHandoffY,
                    scale: 0.92,
                    rotation: 0,
                    duration: 0.22,
                    ease: "power2.out"
                }, 0.78);

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

    function initProductShowcase() {
        const root = document.querySelector("[data-product-showcase]");
        const track = root ? root.querySelector("[data-showcase-track]") : null;
        const stage = root ? root.querySelector("[data-showcase-stage]") : null;
        const card = root ? root.querySelector("[data-showcase-card]") : null;
        const titleCard = root ? root.querySelector("[data-showcase-title-card]") : null;
        const archiveLayer = root ? root.querySelector("[data-showcase-archive]") : null;
        const workflow = configureSharedWorkflowElement(document.querySelector("[data-demo-workflow]"));
        if (!root || !track || !stage || !card || !workflow || !showcaseItems.length) return;

        const sectionLabel = root.querySelector("[data-showcase-section]");
        const indexLabel = root.querySelector("[data-showcase-index]");
        const eyebrow = root.querySelector("[data-showcase-eyebrow]");
        const title = root.querySelector("[data-showcase-title]");
        const body = root.querySelector("[data-showcase-body]");
        const points = root.querySelector("[data-showcase-points]");
        const titleSection = root.querySelector("[data-showcase-title-section]");
        const titleEyebrow = root.querySelector("[data-showcase-title-eyebrow]");
        const groupTitle = root.querySelector("[data-showcase-group-title]");
        const groupBody = root.querySelector("[data-showcase-group-body]");
        const mobileList = root.querySelector("[data-showcase-mobile-list]");
        const teamSection = document.getElementById("team");
        const nodes = Array.from(workflow.querySelectorAll("[data-showcase-node]"));
        const lines = Array.from(workflow.querySelectorAll("[data-showcase-line]"));
        const counters = Array.from(workflow.querySelectorAll("[data-node-count]"));
        const nodeMap = new Map(nodes.map((node) => [node.dataset.showcaseNode, node]));
        const groupOrder = Object.keys(showcaseGroups);
        const groupFirstIndex = showcaseItems.reduce((map, item, index) => {
            if (typeof map[item.group] === "undefined") map[item.group] = index;
            return map;
        }, {});

        const groupLastIndex = showcaseItems.reduce((map, item, index) => {
            map[item.group] = index;
            return map;
        }, {});

        const groupItemsByName = showcaseItems.reduce((map, item) => {
            if (!map[item.group]) map[item.group] = [];
            map[item.group].push(item);
            return map;
        }, {});

        const entryRoutes = [
            { x: -460, y: -120, rotation: -12 },
            { x: 420, y: -150, rotation: 10 },
            { x: -390, y: 170, rotation: 9 },
            { x: 440, y: 130, rotation: -8 },
            { x: 0, y: -260, rotation: 6 }
        ];

        let activeIndex = -1;
        let activeGroup = "";
        let groupSwitchTimer = null;
        let workflowMotion = null;
        let showcaseSyncFrame = null;
        let archiveCards = [];
        const sectionTiming = {
            setupStart: 0.015,
            setupEnd: 0.17,
            readStart: 0.19,
            readEnd: 0.76,
            archiveStart: 0.79,
            archiveEnd: 0.985
        };

        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
        const smoothStep = (start, end, value) => {
            const progress = clamp((value - start) / Math.max(end - start, 0.0001), 0, 1);
            return progress * progress * (3 - 2 * progress);
        };
        const formatIndex = (index) => `${String(index + 1).padStart(2, "0")} / ${String(showcaseItems.length).padStart(2, "0")}`;
        const getGroup = (groupName) => showcaseGroups[groupName] || showcaseGroups.workflow;
        const getGroupItems = (groupName) => groupItemsByName[groupName] || [];
        const getSide = (item) => getGroup(item.group).contentSide || (groupOrder.indexOf(item.group) % 2 === 0 ? "left" : "right");
        const getGroupProgress = (item, index, localProgress) => {
            const first = groupFirstIndex[item.group] ?? index;
            const last = groupLastIndex[item.group] ?? index;
            return clamp((index - first + localProgress) / Math.max(last - first + 1, 1), 0, 1);
        };

        const getWorkflowOffset = (item, index, localProgress) => {
            const stageWidth = Math.max(stage.clientWidth, 1);
            const workflowWidth = Math.max(workflow.offsetWidth || stageWidth * 0.45, 1);
            const edgeGap = clamp(stageWidth * 0.035, 28, 54);
            const safeBase = Math.max(190, stageWidth / 2 - workflowWidth / 2 - edgeGap);
            const base = Math.min(clamp(stageWidth * 0.27, 230, 405), safeBase);
            const side = getSide(item);
            const groupIndex = Math.max(groupOrder.indexOf(item.group), 0);
            const groupProgress = getGroupProgress(item, index, localProgress);
            return {
                x: side === "left" ? base : -base,
                y: -64 + groupProgress * 20 + Math.sin((groupIndex + 1) * 0.9) * 6,
                side
            };
        };

        const getCardHomeY = () => Math.max(stage.clientHeight, 1) * 0.64 - Math.max(card.offsetHeight, 1) / 2;

        const getArchivePoint = (item, localIndex) => {
            const stageWidth = Math.max(stage.clientWidth, 1);
            const stageHeight = Math.max(stage.clientHeight, 1);
            const side = getSide(item);
            const row = Math.floor(localIndex / 2);
            const col = localIndex % 2;
            const xBase = side === "left" ? stageWidth * 0.48 : stageWidth * 0.52;
            const xDirection = side === "left" ? 1 : -1;
            return {
                x: clamp(xBase + xDirection * (col * 78 + row * 20), stageWidth * 0.24, stageWidth * 0.76),
                y: clamp(stageHeight * 0.78 - row * 70 + col * 9, stageHeight * 0.36, stageHeight * 0.84)
            };
        };

        const getArchiveCardOffset = (item, localIndex) => {
            const point = getArchivePoint(item, localIndex);
            return {
                x: point.x - card.offsetLeft,
                y: point.y - getCardHomeY()
            };
        };

        const getThumbnailSourcePoint = (item) => {
            const sourceX = card.offsetLeft + getCardBaseX(item) + card.offsetWidth * 0.18;
            const sourceY = getCardHomeY() + card.offsetHeight * 0.52;
            return {
                x: sourceX,
                y: sourceY
            };
        };

        const getWorkflowNodeStagePoint = (nodeName = "intent") => {
            const targetNode = nodeMap.get(nodeName) || nodeMap.get("intent") || nodes[0];
            if (!targetNode) return { x: stage.clientWidth / 2, y: stage.clientHeight / 2 };
            const stageRect = stage.getBoundingClientRect();
            const nodeRect = targetNode.getBoundingClientRect();
            return {
                x: nodeRect.left - stageRect.left + nodeRect.width / 2,
                y: nodeRect.top - stageRect.top + nodeRect.height / 2
            };
        };

        const getCardBaseX = (item) => {
            const side = getSide(item);
            const stageWidth = Math.max(stage.clientWidth, 1);
            const cardWidth = Math.max(card.offsetWidth, 1);
            const margin = clamp(stageWidth * 0.055, 34, 78);
            const targetLeft = side === "left" ? margin : stageWidth - cardWidth - margin;
            return targetLeft - card.offsetLeft;
        };

        const getNodeArchiveOffset = (item, workflowOffset) => {
            const nodeOrder = { intent: -120, synthesis: -18, validation: 18, deploy: 124 };
            const sideNudge = workflowOffset.side === "left" ? 1 : -1;
            return {
                x: workflowOffset.x + (nodeOrder[item.node] || 0) * sideNudge,
                y: workflowOffset.y + (item.node === "synthesis" ? -74 : item.node === "validation" ? 52 : 0)
            };
        };

        const getWorkflowMotion = () => {
            if (typeof gsap === "undefined") return null;
            if (!workflowMotion) {
                gsap.set(workflow, { xPercent: -50, yPercent: -50 });
                workflowMotion = {
                    x: gsap.quickTo(workflow, "x", { duration: 0.13, ease: "power3.out" }),
                    y: gsap.quickTo(workflow, "y", { duration: 0.13, ease: "power3.out" }),
                    scaleX: gsap.quickTo(workflow, "scaleX", { duration: 0.18, ease: "back.out(1.8)" }),
                    scaleY: gsap.quickTo(workflow, "scaleY", { duration: 0.18, ease: "back.out(1.8)" }),
                    rotation: gsap.quickTo(workflow, "rotation", { duration: 0.15, ease: "power3.out" })
                };
            }
            return workflowMotion;
        };

        const getShowcaseState = () => {
            const anchors = Array.from(root.querySelectorAll(".product-showcase-anchor"));
            if (!anchors.length) {
                return { item: showcaseItems[0], index: 0, localIndex: 0, localProgress: 0, groupProgress: 0, groupArchive: 0, groupReadScaled: 0 };
            }

            const probe = Math.min(window.innerHeight * 0.32, 260);
            let activeAnchor = anchors[0];
            let nearestDistance = Infinity;

            anchors.forEach((anchor) => {
                const rect = anchor.getBoundingClientRect();
                if (rect.top <= probe && rect.bottom > probe) {
                    activeAnchor = anchor;
                    nearestDistance = 0;
                    return;
                }

                const distance = Math.min(Math.abs(rect.top - probe), Math.abs(rect.bottom - probe));
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    activeAnchor = anchor;
                }
            });

            const groupName = activeAnchor.dataset.showcaseAnchor || "workflow";
            const groupItems = getGroupItems(groupName);
            const rect = activeAnchor.getBoundingClientRect();
            const groupProgress = clamp((probe - rect.top) / Math.max(rect.height, 1), 0, 0.999999);
            const setupProgress = smoothStep(sectionTiming.setupStart, sectionTiming.setupEnd, groupProgress);
            const readProgress = clamp((groupProgress - sectionTiming.readStart) / Math.max(sectionTiming.readEnd - sectionTiming.readStart, 0.0001), 0, 0.999999);
            const groupReadScaled = readProgress * Math.max(groupItems.length, 1);
            const localIndex = Math.min(groupItems.length - 1, Math.max(0, Math.floor(groupReadScaled)));
            const localProgress = groupReadScaled - localIndex;
            const item = groupItems[localIndex] || showcaseItems[0];
            const index = Math.max(0, showcaseItems.indexOf(item));
            const groupArchive = smoothStep(sectionTiming.archiveStart, sectionTiming.archiveEnd, groupProgress);

            return { item, index, localIndex, localProgress, groupProgress, setupProgress, readProgress, groupArchive, groupReadScaled };
        };

        const renderMobileCards = () => {
            if (!mobileList) return;
            let previousGroup = "";
            mobileList.innerHTML = showcaseItems.map((item, index) => {
                const group = getGroup(item.group);
                const groupMarkup = item.group !== previousGroup ? `
                    <article class="product-mobile-section-card">
                        <div class="product-mobile-meta"><span>${group.section}</span><span>Section</span></div>
                        <p class="product-showcase-file-eyebrow">${group.eyebrow}</p>
                        <h3>${group.title}</h3>
                        <p>${group.body}</p>
                    </article>` : "";
                previousGroup = item.group;
                const pointMarkup = item.points.slice(0, 3).map((point) => `<li>${point}</li>`).join("");
                return `${groupMarkup}
                    <article class="product-mobile-card">
                        <div class="product-mobile-meta"><span>${item.section}</span><span>${formatIndex(index)}</span></div>
                        <p class="product-showcase-file-eyebrow">${item.eyebrow}</p>
                        <h3>${item.title}</h3>
                        <p class="product-mobile-body">${item.body}</p>
                        <ul>${pointMarkup}</ul>
                    </article>`;
            }).join("");
        };

        const renderArchiveCards = () => {
            if (!archiveLayer) return;
            archiveLayer.innerHTML = showcaseItems.map((item, index) => `
                <article class="product-archive-file" data-archive-index="${index}">
                    <span>${item.section}</span>
                    <strong>${item.title}</strong>
                </article>
            `).join("");
            archiveCards = Array.from(archiveLayer.querySelectorAll("[data-archive-index]"));
        };

        const renderGroup = (item) => {
            const group = getGroup(item.group);
            if (titleSection) titleSection.textContent = group.section;
            if (titleEyebrow) titleEyebrow.textContent = group.eyebrow;
            if (groupTitle) groupTitle.textContent = group.title;
            if (groupBody) groupBody.textContent = group.body;
            root.classList.add("is-group-switching");
            workflow.classList.add("is-group-switching");
            window.clearTimeout(groupSwitchTimer);
            groupSwitchTimer = window.setTimeout(() => {
                root.classList.remove("is-group-switching");
                workflow.classList.remove("is-group-switching");
            }, 620);
        };

        const renderCard = (item, index) => {
            if (sectionLabel) sectionLabel.textContent = item.section;
            if (indexLabel) indexLabel.textContent = formatIndex(index);
            if (eyebrow) eyebrow.textContent = item.eyebrow;
            if (title) title.textContent = item.title;
            if (body) body.textContent = item.body;
            if (points) points.innerHTML = item.points.slice(0, 3).map((point) => `<li>${point}</li>`).join("");
            root.dataset.showcaseTheme = item.theme;
            root.dataset.showcaseGroup = item.group;
            root.dataset.showcaseSide = getSide(item);
        };

        const hideStageCard = () => {
            if (typeof gsap !== "undefined") {
                gsap.killTweensOf(card);
                gsap.set(card, { autoAlpha: 0 });
            }
        };

        const hideAllContent = () => {
            window.clearTimeout(groupSwitchTimer);
            groupSwitchTimer = null;
            if (typeof gsap !== "undefined") {
                gsap.killTweensOf([card, titleCard, ...archiveCards].filter(Boolean));
                gsap.set([card, titleCard, ...archiveCards].filter(Boolean), { autoAlpha: 0 });
            }
        };

        const updateNodeState = (item, index, localProgress, groupArchive = 0) => {
            const archivedThrough = index + (groupArchive > 0.62 || localProgress > 0.92 ? 1 : 0);
            const counts = { intent: 0, synthesis: 0, validation: 0, deploy: 0 };
            showcaseItems.slice(0, archivedThrough).forEach((archivedItem) => {
                if (counts[archivedItem.node] !== undefined) counts[archivedItem.node] += 1;
            });

            counters.forEach((counter) => {
                counter.textContent = String(counts[counter.dataset.nodeCount] || 0);
            });

            nodes.forEach((node) => {
                node.classList.toggle("is-active", node.dataset.showcaseNode === item.node);
            });

            const activeLines = groupArchive > 0.08 ? ["intent-synthesis", "intent-validation", "synthesis-deploy", "validation-deploy"] : {
                intent: [],
                synthesis: ["intent-synthesis"],
                validation: ["intent-validation"],
                deploy: ["synthesis-deploy", "validation-deploy"]
            }[item.node] || [];

            lines.forEach((line) => {
                line.classList.toggle("is-active", activeLines.includes(line.dataset.showcaseLine));
            });

            workflow.classList.toggle("is-accepting-files", groupArchive > 0.08);
            workflow.classList.toggle("is-processing-files", groupArchive <= 0.08 && localProgress > 0.18 && localProgress < 0.9);
            nodes.forEach((node) => {
                node.classList.toggle("is-receiving", groupArchive > 0.08 && node.dataset.showcaseNode === "intent");
                node.classList.toggle("is-processing", groupArchive <= 0.08 && node.dataset.showcaseNode === item.node && localProgress > 0.18 && localProgress < 0.9);
            });
        };

        const updateWorkflowMotion = (item, index, localProgress) => {
            workflow.dataset.showcaseTheme = item.theme;
            const offset = getWorkflowOffset(item, index, localProgress);
            const groupIndex = Math.max(groupOrder.indexOf(item.group), 0);
            const morph = Math.sin(localProgress * Math.PI);
            if (typeof gsap === "undefined") {
                workflow.style.opacity = "1";
                return offset;
            }
            const motion = getWorkflowMotion();
            motion.x(offset.x + morph * (offset.side === "left" ? 18 : -18));
            motion.y(offset.y + morph * 10);
            motion.scaleX(1 + morph * 0.035);
            motion.scaleY(1 - morph * 0.025);
            motion.rotation((offset.side === "left" ? 1 : -1) * (1.4 + morph * 1.2) + groupIndex * 0.12);
            return offset;
        };

        const updateTitleMotion = (state, exitAlpha = 1) => {
            if (!titleCard) return;
            const enter = smoothStep(0.07, sectionTiming.setupEnd, state.groupProgress);
            const leave = smoothStep(0.965, 0.995, state.groupProgress);
            const alpha = clamp(enter * (1 - leave) * exitAlpha, 0, 1);
            const y = (1 - enter) * 16 - leave * 18;
            const scale = 0.975 + alpha * 0.025;
            const blur = (1 - alpha) * 6;

            if (typeof gsap !== "undefined") {
                gsap.set(titleCard, {
                    autoAlpha: alpha,
                    y,
                    scale,
                    filter: `blur(${blur.toFixed(2)}px)`
                });
            } else {
                titleCard.style.opacity = String(alpha);
            }
        };

        const updateCardMotion = (state, workflowOffset, exitAlpha = 1) => {
            const { item, index, localIndex, localProgress, groupArchive, groupProgress } = state;
            const baseX = getCardBaseX(item);
            const route = entryRoutes[index % entryRoutes.length];
            const sectionGate = smoothStep(sectionTiming.readStart, sectionTiming.readStart + 0.07, groupProgress);
            const enter = smoothStep(0.015, 0.24, localProgress) * sectionGate;
            const storeScale = smoothStep(0.54, 0.94, localProgress);
            const storeMove = smoothStep(0.68, 0.985, localProgress);
            const archive = groupArchive;
            const nodeOffset = getNodeArchiveOffset(item, workflowOffset);
            const miniOffset = getArchiveCardOffset(item, localIndex);
            const startX = baseX + route.x * (1 - enter);
            const startY = route.y * (1 - enter);
            const storedX = startX + (miniOffset.x - baseX) * storeMove;
            const storedY = startY + miniOffset.y * storeMove;
            const x = storedX + (nodeOffset.x - storedX) * archive;
            const y = storedY + (nodeOffset.y - storedY) * archive;
            const scale = 0.9 + 0.1 * enter - 0.42 * storeScale - 0.58 * archive;
            const rotation = route.rotation * (1 - enter) + (workflowOffset.side === "left" ? 5 : -5) * storeMove - 8 * archive;
            const alpha = clamp(enter * (1 - storeScale * 0.96) * (1 - archive * 1.05) * exitAlpha, 0, 1);

            if (typeof gsap !== "undefined") {
                gsap.set(card, { x, y, scale, rotation, autoAlpha: alpha });
            } else {
                card.style.opacity = String(alpha);
            }
        };

        const updateArchiveCards = (state, exitAlpha = 1) => {
            if (!archiveCards.length || typeof gsap === "undefined") return;
            const groupItems = getGroupItems(state.item.group);
            const target = getWorkflowNodeStagePoint("intent");

            archiveCards.forEach((archiveCard) => {
                const archiveIndex = Number(archiveCard.dataset.archiveIndex || -1);
                const archiveItem = showcaseItems[archiveIndex];
                if (!archiveItem || archiveItem.group !== state.item.group) {
                    gsap.set(archiveCard, { autoAlpha: 0 });
                    return;
                }

                const localArchiveIndex = groupItems.indexOf(archiveItem);
                const readProgress = state.groupReadScaled - localArchiveIndex;
                const stored = smoothStep(0.52, 0.985, readProgress);
                const isActive = archiveIndex === state.index;
                const visible = state.groupArchive > 0.04 ? 1 : isActive ? Math.max(0, stored - 0.08) : stored;
                const point = getArchivePoint(archiveItem, localArchiveIndex);
                const source = getThumbnailSourcePoint(archiveItem);
                const morph = smoothStep(0.02, 0.98, stored);
                const parkedX = source.x + (point.x - source.x) * morph;
                const parkedY = source.y + (point.y - source.y) * morph - Math.sin(morph * Math.PI) * 28;
                const staggeredArchive = smoothStep(localArchiveIndex * 0.045, 0.82 + localArchiveIndex * 0.03, state.groupArchive);
                const arc = Math.sin(staggeredArchive * Math.PI) * (localArchiveIndex % 2 === 0 ? -24 : 24);
                const x = parkedX + (target.x - parkedX) * staggeredArchive + arc;
                const y = parkedY + (target.y - parkedY) * staggeredArchive + Math.sin((localArchiveIndex + 1) * 1.7) * (1 - staggeredArchive) * 5;
                const scale = (1.28 - morph * 0.42) - staggeredArchive * 0.46;
                const rotation = ((localArchiveIndex % 2 === 0 ? -1 : 1) * (9 - morph * 4 + localArchiveIndex * 1.3)) * (1 - staggeredArchive);
                const archiveFade = 1 - smoothStep(0.72, 1, staggeredArchive);
                const alpha = clamp(visible * smoothStep(0.05, 0.32, stored) * archiveFade * exitAlpha, 0, 0.94);

                gsap.set(archiveCard, { x, y, scale, rotation, autoAlpha: alpha });
            });
        };

        const updateShowcase = () => {
            const rootRect = root.getBoundingClientRect();
            if (rootRect.top > 96) {
                hideAllContent();
                const handoffProgress = 1 - clamp((rootRect.top - 96) / Math.max(window.innerHeight * 0.32, 240), 0, 1);
                if (handoffProgress > 0.01 && typeof gsap !== "undefined") {
                    const firstItem = showcaseItems[0];
                    const offset = getWorkflowOffset(firstItem, 0, 0);
                    const motion = getWorkflowMotion();
                    const introY = clamp(window.innerHeight * 0.075, 54, 86);
                    const easedHandoff = smoothStep(0, 1, handoffProgress);
                    const handoffArc = Math.sin(easedHandoff * Math.PI);
                    workflow.classList.add("is-showcase-controlled", "is-handoff");
                    gsap.set(workflow, { autoAlpha: 1 });
                    motion.x(offset.x * easedHandoff);
                    motion.y(introY * (1 - easedHandoff) + offset.y * easedHandoff - handoffArc * 18);
                    motion.scaleX(1 + handoffArc * 0.05);
                    motion.scaleY(1 - handoffArc * 0.035);
                    motion.rotation(-1.8 * easedHandoff);
                } else {
                    workflow.classList.remove("is-showcase-controlled", "is-group-switching", "is-handoff", "is-processing-files", "is-accepting-files");
                }
                return;
            }

            const state = getShowcaseState();
            const { item, index, localIndex, localProgress, groupArchive } = state;
            const groupChanged = item.group !== activeGroup;
            const rootExitAlpha = clamp(smoothStep(window.innerHeight * 0.32, window.innerHeight * 1.08, rootRect.bottom), 0, 1);
            const teamRect = teamSection ? teamSection.getBoundingClientRect() : null;
            const teamFadeAlpha = teamRect ? smoothStep(window.innerHeight * 0.88, window.innerHeight * 1.1, teamRect.top) : 1;
            const impactExitBlend = item.group === "impact" ? smoothStep(0.92, 1, groupArchive) : 1;
            const gatedRootExitAlpha = item.group === "impact" ? 1 - impactExitBlend + rootExitAlpha * impactExitBlend : rootExitAlpha;
            const gatedTeamFadeAlpha = item.group === "impact" ? 1 - impactExitBlend + teamFadeAlpha * impactExitBlend : teamFadeAlpha;
            const rawExitAlpha = Math.min(gatedRootExitAlpha, gatedTeamFadeAlpha);
            const exitAlpha = rawExitAlpha < 0.035 ? 0 : rawExitAlpha;

            if (index !== activeIndex) {
                activeIndex = index;
                renderCard(item, index);
                hideStageCard();
            }

            if (groupChanged) {
                activeGroup = item.group;
                renderGroup(item);
            }

            workflow.classList.add("is-showcase-controlled");
            workflow.classList.remove("is-handoff");
            const workflowOffset = updateWorkflowMotion(item, index, localProgress);
            if (typeof gsap !== "undefined") gsap.set(workflow, { autoAlpha: exitAlpha });
            updateNodeState(item, index, localProgress, groupArchive);
            updateTitleMotion(state, exitAlpha);
            updateCardMotion(state, workflowOffset, exitAlpha);
            updateArchiveCards(state, exitAlpha);
        };

        const releaseWorkflow = (hideWorkflow) => {
            if (hideWorkflow) {
                const rootBottom = root.getBoundingClientRect().bottom;
                const teamTop = teamSection ? teamSection.getBoundingClientRect().top : Infinity;
                if (rootBottom > window.innerHeight * 0.12 && teamTop > window.innerHeight * 0.18) {
                    updateShowcase();
                    return;
                }
            }

            workflow.classList.remove("is-showcase-controlled", "is-group-switching", "is-processing-files", "is-accepting-files");
            if (hideWorkflow && typeof gsap !== "undefined") {
                workflow.classList.add("is-fading-away");
                gsap.to([workflow, card, titleCard, ...archiveCards].filter(Boolean), {
                    autoAlpha: 0,
                    y: "-=18",
                    scale: 0.985,
                    filter: "blur(5px)",
                    duration: 0.62,
                    ease: "power2.out",
                    overwrite: "auto",
                    onComplete: () => {
                        workflow.classList.remove("is-fading-away", "is-accepting-files");
                        nodes.forEach((node) => node.classList.remove("is-processing", "is-receiving"));
                        gsap.set([workflow, card, titleCard, ...archiveCards].filter(Boolean), { autoAlpha: 0, y: 0, scale: 1, filter: "none" });
                    }
                });
            } else {
                hideAllContent();
            }
        };

        renderArchiveCards();
        renderMobileCards();

        if (window.matchMedia("(max-width: 767px)").matches) {
            const syncMobileWorkflowVisibility = () => {
                const rect = root.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.82) {
                    if (typeof gsap !== "undefined") {
                        gsap.set(workflow, { autoAlpha: 0 });
                    } else {
                        workflow.style.opacity = "0";
                        workflow.style.visibility = "hidden";
                    }
                }
            };

            syncMobileWorkflowVisibility();
            window.setTimeout(syncMobileWorkflowVisibility, 250);
            window.setTimeout(syncMobileWorkflowVisibility, 900);
            window.setTimeout(syncMobileWorkflowVisibility, 1500);
            window.addEventListener("scroll", () => window.requestAnimationFrame(syncMobileWorkflowVisibility), { passive: true });
            return;
        }

        renderGroup(showcaseItems[0]);
        renderCard(showcaseItems[0], 0);

        if (prefersReducedMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
            root.classList.add("showcase-reduced-motion");
            if (titleCard) titleCard.style.opacity = "1";
            card.style.opacity = "1";
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        gsap.set([card, titleCard].filter(Boolean), { autoAlpha: 0 });

        const requestShowcaseSync = () => {
            if (showcaseSyncFrame !== null) return;
            showcaseSyncFrame = window.requestAnimationFrame(() => {
                showcaseSyncFrame = null;
                updateShowcase();
            });
        };

        ScrollTrigger.create({
            trigger: track,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            refreshPriority: -8,
            onEnter: updateShowcase,
            onEnterBack: updateShowcase,
            onUpdate: updateShowcase,
            onLeave: () => releaseWorkflow(true),
            onLeaveBack: () => releaseWorkflow(false)
        });

        window.addEventListener("scroll", requestShowcaseSync, { passive: true });
        window.addEventListener("resize", requestShowcaseSync);
        requestShowcaseSync();
    }

    function initNavProgress() {
        const nav = document.getElementById("site-nav");
        if (!nav) return;
        const navLinks = Array.from(document.querySelectorAll(".nav-link[href^='#']"));
        const sectionIds = ["before", "workflow", "methodology", "risk-map", "findings", "impact", "team", "cta"];
        const sectionLinks = new Map(navLinks.map((link) => [link.getAttribute("href").slice(1), link]));
        const productRoot = document.querySelector("[data-product-showcase]");
        const groupToSectionId = {
            workflow: "workflow",
            method: "methodology",
            risk: "risk-map",
            fixes: "findings",
            impact: "impact"
        };

        const moveNavFocus = (activeLink) => {
            if (!activeLink || !activeLink.getClientRects().length) {
                nav.style.setProperty("--active-nav-left", "0px");
                nav.style.setProperty("--active-nav-width", "0px");
                return;
            }

            const navRect = nav.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            nav.style.setProperty("--active-nav-left", `${(linkRect.left - navRect.left).toFixed(1)}px`);
            nav.style.setProperty("--active-nav-width", `${linkRect.width.toFixed(1)}px`);
        };

        const updateActiveLink = () => {
            const probeY = window.scrollY + 120;
            let activeId = sectionIds[0];

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (!section) return;
                const top = section.offsetTop;
                const bottom = top + Math.max(section.offsetHeight, window.innerHeight * 0.55);
                if (probeY >= top && probeY < bottom) activeId = id;
            });

            if (productRoot) {
                const productRect = productRoot.getBoundingClientRect();
                if (productRect.top <= 120 && productRect.bottom > 120) {
                    activeId = groupToSectionId[productRoot.dataset.showcaseGroup] || activeId || "workflow";
                }
            }

            ["team", "cta"].forEach((id) => {
                const section = document.getElementById(id);
                if (!section) return;
                const rect = section.getBoundingClientRect();
                if (rect.top <= 160 && rect.bottom > 120) activeId = id;
            });

            navLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = sectionLinks.get(activeId);
            if (activeLink) activeLink.classList.add("active");
            nav.dataset.activeSection = activeId;
            moveNavFocus(activeLink);
        };

        const updateProgress = () => {
            const doc = document.documentElement;
            const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
            const progress = clampValue(window.scrollY / maxScroll, 0, 1);
            nav.style.setProperty("--page-progress", `${(progress * 100).toFixed(2)}%`);
            updateActiveLink();
        };

        updateProgress();
        window.addEventListener("scroll", () => window.requestAnimationFrame(updateProgress), { passive: true });
        window.addEventListener("resize", updateProgress);
    }

    function initActiveNav() {
        if (document.querySelector("[data-product-showcase]")) return;
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
        initProductShowcase();
        resetWorkflowDefault();
        initRevealObserver();
        initWorkflowSelection();
        initWorkflowObserver();
        window.addEventListener("resize", () => window.requestAnimationFrame(updateActiveWorkflowPanelOrigin));
        window.requestAnimationFrame(updateActiveWorkflowPanelOrigin);
        initRiskSelectionV2();
        initFindingsAccordion();
        initActiveNav();
        initNavProgress();
        initSpringFeedback();
        initMobileMenu();
        initMethodReveal();
        initTeamSloganAnimation();
        resetWorkflowDefault();
    });

    window.addEventListener("pageshow", resetWorkflowDefault);
})();
