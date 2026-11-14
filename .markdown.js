import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
// import markdownItContainer from "markdown-it-container";
import fs from "fs";

const linkIcon = fs.readFileSync("./src/_includes/icons/link.svg");

const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
}).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: linkIcon
});

export { markdownLibrary };
