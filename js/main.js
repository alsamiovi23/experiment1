/* =====================================================
   OVI'S PERSONAL WEBSITE — SHARED JAVASCRIPT
   This file is loaded on every page. Each section checks
   whether the elements it needs exist before doing anything,
   so nothing breaks on pages that don't have that feature.
   ===================================================== */


/* =====================================================
   1. CURRENT YEAR (footer)
   ===================================================== */

const yearEl = document.getElementById("year");

if (yearEl) {

  yearEl.textContent = new Date().getFullYear();

}



/* =====================================================
   2. MOBILE NAVIGATION TOGGLE
   ===================================================== */

const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

if (navToggle && siteNav) {

  navToggle.addEventListener("click", () => {

    const isOpen = siteNav.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

  });

  /* Close the mobile menu after a link is tapped */

  siteNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      siteNav.classList.remove("open");

      navToggle.setAttribute("aria-expanded", "false");

    });

  });

}



/* =====================================================
   3. ACTIVE NAV LINK
   Every <body> tag carries data-page="..." and every nav
   link carries a matching data-page attribute.
   ===================================================== */

const currentPage = document.body.dataset.page;

if (currentPage) {

  document.querySelectorAll("nav a[data-page]").forEach((link) => {

    if (link.dataset.page === currentPage) {

      link.classList.add("active");

      link.setAttribute("aria-current", "page");

    }

  });

}



/* =====================================================
   4. SCROLL REVEAL
   ===================================================== */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });

}



/* =====================================================
   5. ARCHIVE MODAL (archive.html)
   Each .archive-item can carry:
   data-title       -> modal heading
   data-content     -> modal description
   data-link        -> optional page to visit (omitted if
                        that page doesn't exist yet)
   data-link-label  -> label for the link
   ===================================================== */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const modalLink = document.getElementById("modal-link");

const archiveItems = document.querySelectorAll(".archive-item");

if (modal && modalTitle && modalContent && modalClose && archiveItems.length) {

  archiveItems.forEach((item) => {

    item.addEventListener("click", () => {

      modalTitle.textContent = item.dataset.title || "";

      modalContent.textContent = item.dataset.content || "";

      if (modalLink) {

        if (item.dataset.link) {

          modalLink.href = item.dataset.link;

          modalLink.textContent = item.dataset.linkLabel || "visit page →";

          modalLink.style.display = "inline-block";

        } else {

          modalLink.style.display = "none";

        }

      }

      modal.classList.add("open");

    });

  });

  modalClose.addEventListener("click", () => {

    modal.classList.remove("open");

  });

  modal.addEventListener("click", (event) => {

    if (event.target === modal) {

      modal.classList.remove("open");

    }

  });

}



/* =====================================================
   6. INTEREST MAP (about.html)
   ===================================================== */

const mapInfo = document.getElementById("map-info");
const mapInfoTitle = document.getElementById("map-info-title");
const mapInfoText = document.getElementById("map-info-text");
const mapNodes = document.querySelectorAll(".map-node");

if (mapInfo && mapInfoTitle && mapInfoText && mapNodes.length) {

  mapNodes.forEach((node) => {

    node.addEventListener("click", () => {

      mapNodes.forEach((n) => {

        n.classList.remove("active");

      });

      node.classList.add("active");

      mapInfoTitle.textContent = node.dataset.map;

      mapInfoText.textContent = node.dataset.description;

      mapInfo.classList.add("visible");

    });

  });

}



/* =====================================================
   7. RANDOM FACT GENERATOR (lab.html)
   ===================================================== */

const facts = [

  "Honey never naturally spoils. Archaeologists have found ancient honey that was still edible.",

  "The shortest recorded war lasted roughly 40 minutes.",

  "Octopuses have three hearts.",

  "Bananas are botanically berries. Strawberries aren't.",

  "A day on Venus is longer than its year.",

  "The word 'queue' is pronounced the same even if you remove four of its five letters.",

  "There are more possible games of chess than atoms in the observable universe.",

  "Wombat poop is cube-shaped.",

  "The inventor of the Pringles can had some of his ashes buried in one.",

  "A group of flamingos is called a flamboyance."

];

const factButton = document.getElementById("fact-button");
const factOutput = document.getElementById("fact-output");

if (factButton && factOutput) {

  factButton.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * facts.length);

    factOutput.textContent = facts[randomIndex];

  });

}



/* =====================================================
   8. DEBATE MOTION GENERATOR (lab.html)
   ===================================================== */

const subjects = [

  "schools",
  "universities",
  "governments",
  "social media platforms",
  "parents",
  "AI companies",
  "video game developers",
  "the internet",
  "cities",
  "libraries"

];

const actions = [

  "should replace",
  "should ban",
  "should subsidize",
  "should abolish",
  "should force",
  "should allow",
  "should discourage",
  "should completely automate"

];

const objects = [

  "homework with boss fights",

  "exams with competitive gaming",

  "social media with handwritten letters",

  "lectures with debates",

  "school uniforms with formal pajamas",

  "advertisements with public-service announcements",

  "textbooks with interactive simulations",

  "morning classes with afternoon classes"

];

const argumentButton = document.getElementById("argument-button");
const argumentOutput = document.getElementById("argument-output");

if (argumentButton && argumentOutput) {

  argumentButton.addEventListener("click", () => {

    const subject = subjects[Math.floor(Math.random() * subjects.length)];

    const action = actions[Math.floor(Math.random() * actions.length)];

    const object = objects[Math.floor(Math.random() * objects.length)];

    argumentOutput.textContent = `THBT ${subject} ${action} ${object}.`;

  });

}



/* =====================================================
   9. MOVIE QUIZ PLACEHOLDER (lab.html)
   ===================================================== */

const movieQuizButton = document.getElementById("movie-quiz-button");

if (movieQuizButton) {

  movieQuizButton.addEventListener("click", () => {

    alert("Coming eventually. Probably.");

  });

}



/* =====================================================
   10. RABBIT HOLE GENERATOR (lab.html)
   ===================================================== */

const rabbitHoleButton = document.getElementById("rabbit-hole-button");

if (rabbitHoleButton) {

  const topics = [

    "Psychology",

    "Cognitive Biases",

    "Confirmation Bias",

    "Conspiracy Thinking",

    "Internet Communities",

    "OSINT",

    "Digital Footprints",

    "Privacy",

    "Surveillance",

    "Artificial Intelligence",

    "Human Behaviour",

    "Philosophy",

    "Free Will",

    "Consciousness"

  ];

  rabbitHoleButton.addEventListener("click", () => {

    const current = topics[Math.floor(Math.random() * topics.length)];

    alert(
      "Your rabbit hole begins with:\n\n" +
      current +
      "\n\nGood luck getting out."
    );

  });

}



/* =====================================================
   11. PLACEHOLDER LINKS (contact.html and elsewhere)
   Any link with class="placeholder-link" shows a reminder
   instead of going to '#'.
   ===================================================== */

const placeholderLinks = document.querySelectorAll(".placeholder-link");

if (placeholderLinks.length) {

  placeholderLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      alert(
        "This link hasn't been added yet.\n\n" +
        "Replace the '#' in the HTML with your real link."
      );

    });

  });

}



/* =====================================================
   12. LOGO EASTER EGG (every page)
   ===================================================== */

const logo = document.getElementById("logo");

if (logo) {

  let logoClicks = 0;

  let logoTimer;

  logo.addEventListener("click", () => {

    logoClicks++;

    clearTimeout(logoTimer);

    logoTimer = setTimeout(() => {

      logoClicks = 0;

    }, 1200);

    if (logoClicks >= 7) {

      logoClicks = 0;

      document.body.style.transform = "rotate(1deg)";

      setTimeout(() => {

        document.body.style.transform = "rotate(0deg)";

      }, 400);

      alert(
        "You clicked the logo seven times.\n\n" +
        "I have no idea why you did that.\n\n" +
        "But congratulations."
      );

    }

  });

}



/* =====================================================
   13. KEYBOARD SHORTCUTS (every page)
   ===================================================== */

document.addEventListener("keydown", (event) => {

  const typingInField =
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "TEXTAREA";

  /* "/" -> go home */

  if (event.key === "/" && !typingInField) {

    event.preventDefault();

    if (currentPage !== "home") {

      window.location.href = "index.html";

    }

  }

  /* "?" -> show shortcuts */

  if (event.key === "?" && !typingInField) {

    alert(
      "KEYBOARD SHORTCUTS\n\n" +
      "/  → home\n" +
      "?  → shortcuts\n" +
      "Esc → close window / menu"
    );

  }

  /* Escape -> close modal or mobile nav */

  if (event.key === "Escape") {

    if (modal) {

      modal.classList.remove("open");

    }

    if (siteNav && siteNav.classList.contains("open")) {

      siteNav.classList.remove("open");

      if (navToggle) {

        navToggle.setAttribute("aria-expanded", "false");

      }

    }

  }

});
