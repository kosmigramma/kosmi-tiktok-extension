
const cssModifications = [
    ".tiktok-dialog { display: none !important; }",
    ".footer-guide { display: none !important; }",
    ".captcha_verify_container { display: none !important; }",
    // ".tiktok-bottom { bottom: var(--app-menu-height) !important;}",
    ".tiktok-bottom { bottom: 23px !important;}",
    ".tiktok-bottom-left { pointer-events: none !important; }",
    ".tiktok-bottom a { pointer-events: none !important; }",
    ".home-header { display: none !important; }",
    ".footer > :nth-child(3) { display: none !important; }",
    ".footer > :nth-child(4) { display: none !important; }",
    ".footer > :nth-child(5) { display: none !important; }",
    ".footer { justify-content: space-around !important; }",
    ".heart-twink, .tiktok-toolbar-comment, .tiktok-toolbar-share {pointer-events: none !important;"
];

const generateModalSelectors = () => {
    for (let index = 0; index < 1000; index++) {
        cssModifications.push(`.backdrop-${index} { display: none !important; },`)
    }
}

function loadCSS(css) {
    var head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.textContent = css;
    head.appendChild(style);
}

const applDomAlterations = () => {
    for (const mod of cssModifications) {
        loadCSS(mod);
    }
}

generateModalSelectors();
applDomAlterations();