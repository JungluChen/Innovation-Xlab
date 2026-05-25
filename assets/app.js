const workflowStages = [
    {
        title: "Natural Language Prompting",
        detail: "Operators explain reconciliation intent in plain language, including matching requirements, variance thresholds, escalation rules, and exception handling expectations.",
        impact: "Moves users away from brittle setup forms and into a more legible intent definition step.",
        research: "Supports non-technical users who need immediate guidance rather than opaque configuration."
    },
    {
        title: "Agentic Workflow Synthesis",
        detail: "Fibula synthesizes node-based workflow structures that connect source documents, logic branches, and exception states into a coherent process representation.",
        impact: "Shows how natural-language requests become actionable workflow logic.",
        research: "Addresses the mental-model gap caused by silent processing."
    },
    {
        title: "Human-in-the-Loop Validation",
        detail: "Generated workflows remain reviewable so teams can inspect nodes, verify assumptions, and adjust the synthesis before live execution.",
        impact: "Keeps humans in the decision loop while preserving automation speed.",
        research: "Improves trust formation and reduces fear of hidden system failures."
    },
    {
        title: "Stateful Live Deployment",
        detail: "Deployed workflows keep state across matching decisions, output handling, retries, and exception resolution instead of resetting to stateless extraction outputs.",
        impact: "Supports AP and BOM reconciliation where exceptions matter as much as matched records.",
        research: "Connects interface trust to operational risk mitigation in live environments."
    }
];

const riskStages = [
    {
        stage: "Start",
        problem: "Hidden entry points slowed onboarding.",
        risk: "Users may not begin the correct workflow.",
        quote: "I dragged my file in, but nothing is responding.",
        direction: "Make system entry points clearer and provide immediate response cues."
    },
    {
        stage: "Template",
        problem: "Too many choices led users into wrong workflow paths.",
        risk: "Incorrect template selection can corrupt downstream logic.",
        quote: "I am not sure which workflow I should choose.",
        direction: "Reduce choice overload through predictive chips and guided selection."
    },
    {
        stage: "Configure",
        problem: "Unclear fields and node expectations weakened matching setup.",
        risk: "Matching rules may be incomplete or wrong.",
        quote: "What does this node need from me?",
        direction: "Clarify configuration language and expose node requirements progressively."
    },
    {
        stage: "Test",
        problem: "Unclear system states reduced trust.",
        risk: "Users may not know whether the workflow passed, failed, or is still running.",
        quote: "I cannot tell whether it is still running or failed.",
        direction: "Expose workflow state and add visible recovery cues during validation."
    },
    {
        stage: "Output",
        problem: "Outputs and variance details were hard to find.",
        risk: "Important reconciliation exceptions may be missed.",
        quote: "Where do I see what changed?",
        direction: "Turn outputs into clear decision matrices with visible variance signals."
    }
];

(function () {
    document.documentElement.classList.add("js-enabled");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    function setWorkflowDetail(index) {
        const stage = workflowStages[index];
        if (!stage) return;

        const title = document.querySelector("[data-workflow-title]");
        const detail = document.querySelector("[data-workflow-detail]");
        const impact = document.querySelector("[data-workflow-impact]");
        const research = document.querySelector("[data-workflow-research]");

        if (title) title.textContent = stage.title;
        if (detail) detail.textContent = stage.detail;
        if (impact) impact.textContent = stage.impact;
        if (research) research.textContent = stage.research;

        document.querySelectorAll(".workflow-stage").forEach((button, buttonIndex) => {
            const isActive = buttonIndex === index;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-selected", isActive ? "true" : "false");
        });
    }

    function setRiskDetail(index) {
        const stage = riskStages[index];
        if (!stage) return;

        const stageField = document.querySelector("[data-risk-stage]");
        const problemField = document.querySelector("[data-risk-problem]");
        const riskField = document.querySelector("[data-risk-detail]");
        const quoteField = document.querySelector("[data-risk-quote]");
        const directionField = document.querySelector("[data-risk-direction]");

        if (stageField) stageField.textContent = stage.stage;
        if (problemField) problemField.textContent = stage.problem;
        if (riskField) riskField.textContent = stage.risk;
        if (quoteField) quoteField.textContent = stage.quote;
        if (directionField) directionField.textContent = stage.direction;

        document.querySelectorAll(".journey-stage-btn").forEach((button, buttonIndex) => {
            button.classList.toggle("active", buttonIndex === index);
        });
    }

    function initWorkflowSelection() {
        const buttons = document.querySelectorAll(".workflow-stage");
        if (!buttons.length) return;

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const index = Number(button.dataset.stageIndex || 0);
                setWorkflowDetail(index);
            });
        });
    }

    function initRiskSelection() {
        const buttons = document.querySelectorAll(".journey-stage-btn");
        if (!buttons.length) return;

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const index = Number(button.dataset.riskIndex || 0);
                setRiskDetail(index);
            });
        });
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
        if (!stages.length) return;

        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            stages.forEach((stage) => stage.classList.add("is-visible"));
            connectors.forEach((connector) => connector.classList.add("is-visible"));
            return;
        }

        const stageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const index = Number(entry.target.dataset.stageIndex || 0);
                entry.target.classList.add("is-visible");
                if (connectors[index]) connectors[index].classList.add("is-visible");
                setWorkflowDetail(index);
            });
        }, { threshold: 0.45, rootMargin: "0px 0px -10% 0px" });

        stages.forEach((stage) => stageObserver.observe(stage));
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

    document.addEventListener("DOMContentLoaded", () => {
        initDocCards();
        initRevealObserver();
        initWorkflowSelection();
        initWorkflowObserver();
        initRiskSelection();
        initFindingsAccordion();
        initActiveNav();
        initMobileMenu();
        setWorkflowDetail(0);
        setRiskDetail(0);
    });
})();
