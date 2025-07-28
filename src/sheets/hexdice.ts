import { Container as SVGContainer, Symbol as SVGSymbol } from "@svgdotjs/svg.js";
import type { ISheet } from "./ISheet";

const sheet: ISheet = {
    name: "hexdice",
    // tslint:disable-next-line:object-literal-sort-keys
    description: "This contains hexagonal dice glyphs.",
    cellsize: 100,
    glyphs: new Map<string, (canvas: SVGContainer) => SVGSymbol>(),
};

// Alphabetize by glyph name, please!
// The element's root `id` must be the same as its map key.
// If using groups to make complex glyphs, be sure to include the attribute `data-cellsize` (the greater of width and height) so the renderer can scale it properly.

sheet.glyphs.set("hexfdie-00", (canvas: SVGContainer) => {
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

sheet.glyphs.set("hexfdie-01", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
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

sheet.glyphs.set("hexfdie-02", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 36.5);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-03", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 36.5);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-04", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 36.5);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-05", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 13.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 36.5);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-06", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(13.5, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(36.5, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-07", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-08", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-09", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 10);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(10).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-10", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-11", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-12", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-13", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-14", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(15, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(35, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-15", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(15, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(25, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(35, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexfdie-16", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("0,41.57 24,0 72,0 96,41.57 72,83.14 24,83.14")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-context-border", true)
        .attr("data-playerfill", true)
        .center(25, 25);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(10, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(20, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(30, 40);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 10);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 20);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 30);
    group.circle(8).fill("#000")
        .attr("data-context-fill", true)
        .center(40, 40);
    group.viewbox(0, 0, 50, 50);
    return group;
});

sheet.glyphs.set("hexpdie-00", (canvas: SVGContainer) => {
    const group = canvas.symbol();
    group.polygon("25,50 46.67,37.5 46.67,12.5 25,0 3.33,12.5 3.33,37.5")
        .fill("none")
        .stroke({width: 1, color: "#000"})
        .attr("data-playerfill", true)
        .attr("data-context-border", true)
        .center(25, 25);
    group.viewbox(0, 0, 50, 50);
    return group;
});

export { sheet as HexdiceSheet };
