import tocbot from "tocbot";

export default function initTocBot() {
    const options = {
        // Where to render the table of contents.
        tocSelector: '.gh-table-of-content',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.gh-content',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        // Ensure correct positioning
        hasInnerContainers: false,
        // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
        scrollSmoothOffset: -50,
        // Collapse depth of the table of contents.
        collapseDepth: 3,
        // Optional callback to change heading labels.
        headingObjectCallback: (x, y) => {

            x.id = x.textContent.replace(" ","------------")
                // replace all non latin or cyrillic characters with dashes
                .replace(/[^a-zA-Z0-9а-яА-Я]/g, '-')
                // clear multiple dashes
                .replace(/-{2,}/ig, '-')
                .toLowerCase();
            y.id = x.id;
            return x
        }
    };

    if(window.TOC_BOT_OPTIONS) {
        Object.assign(options, window.TOC_BOT_OPTIONS);
    }

    tocbot.init(options);

    console.log(tocbot)
    const elements = document.querySelector(".gh-table-of-content li");
    console.log(elements)

    if (elements) {
        document.querySelector(".widget.table-of-content").classList.add("show");
    }
}
