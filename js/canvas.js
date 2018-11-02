function Canvas(tagname, canvasWidth, canvasHeight, desc) {
    this.svg;
    this.init(tagname, canvasWidth, canvasHeight, desc);

}

Canvas.prototype.init = function (tagname, canvasWidth, canvasHeight, desc) {

    if (tagname != undefined) {
        this.svg = d3.select(tagname).append("svg")
            .attr("id", tagname + "-canvas")
            .style("width", canvasWidth)
            .style("height", canvasHeight)
            .style("border", "0px solid #555")
            .style("fill-opacity", "0.8");

        var width = document.getElementById(tagname + "-canvas").clientWidth;
        var height = document.getElementById(tagname + "-canvas").clientHeight;

        this.svg.append("text")
            .attr("id", tagname + "-label")
            .attr("x", width/3)
            .attr("y", height * 0.9)
            .attr("font-size", 20)
            .attr("font-weight", "bold")
            .attr("text-align", "left")
            .style("cursor", "default")
            .text(desc);
    }
}

Canvas.prototype.getCanvas = function () {
    return this.svg;
}
