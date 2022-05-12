
const cssModifications = [
    ".backdrop-2 { display: none !important; }",
    ".footer-guide { display: none !important; }",
    ".tiktok-bottom { bottom: 23px !important; }",
    ".home-header { display: none !important; }",
    ".footer > :nth-child(3) { display: none !important; }",
    ".footer > :nth-child(4) { display: none !important; }",
    ".footer > :nth-child(5) { display: none !important; }",
    ".footer { justify-content: space-around !important; }"
];

function loadCSS(css) {
    var head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.textContent = css;
    head.appendChild(style);
}

const alterDom = () => {
    for (const mod of cssModifications) {
        loadCSS(mod);
    }
}

alterDom();
