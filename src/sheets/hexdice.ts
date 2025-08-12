import { Container as SVGContainer, Symbol as SVGSymbol } from "@svgdotjs/svg.js";
import type { ISheet } from "./ISheet";

const sheet: ISheet = {
    name: "hexdice",
    // tslint:disable-next-line:object-literal-sort-keys
    description: "This contains hexagonal (hexf) dice glyphs.",
    cellsize: 100,
    glyphs: new Map<string, (canvas: SVGContainer) => SVGSymbol>(),
};

// Alphabetize by glyph name, please!
// The element's root `id` must be the same as its map key.
// If using groups to make complex glyphs, be sure to include the attribute `data-cellsize` (the greater of width and height) so the renderer can scale it properly.

sheet.glyphs.set("hexdie-00", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-01", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.circle(10)
        .fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-02", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-03", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 35);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 15);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-04", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(17.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(32.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(11, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(38, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-05", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(17.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(32.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(11, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(38, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-06", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(17.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(17.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(32.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(32.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(11, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(38, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-07", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(17.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(17.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(32.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(32.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(11, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(39, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-08", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-09", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-10", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-11", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-12", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-13", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-14", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-15", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-16", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(21, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-17", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(21, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-18", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(21, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(21, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexdie-19", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,20.76 12,0 36,0 48,20.76 36,41.57 12,41.57")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 11);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(21, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 18);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(9, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(41, 25);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(13, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(21, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(29, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(37, 32);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(17, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 39);
    group.circle(7).fill("#000")
        .attr("data-context-fill", true)
        .center(33, 39);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexpdie-00", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("20.76,0 0,12 0,36 20.76,48 41.57,36 41.57,12")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

export { sheet as HexdiceSheet };
