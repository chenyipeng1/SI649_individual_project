function RedBlackTree(tagname, canvasWidth, canvasHeight, zoom, desc) {
    this.tagname = tagname;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.zoom = zoom;
    this.desc = desc;
    Tree.call(this, true, tagname, canvasWidth, canvasHeight, zoom, desc);
}
RedBlackTree.prototype = new Tree();


RedBlackTree.prototype.plot_chart1 = function(){
    this.root = this.createNode("2", "black", this.tagname);
    this.root.leftNode = this.createNode("1", "red", this.tagname);
    this.root.rightNode = this.createNode("3", "green", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}
RedBlackTree.prototype.plot_chart2 = function(){
    this.root = this.createNode("2", "red", this.tagname);
    this.root.leftNode = this.createNode("1", "black", this.tagname);
    this.root.rightNode = this.createNode("3", "black", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}
RedBlackTree.prototype.plot_chart3 = function(){
    this.root = this.createNode("2", "red", this.tagname);
    this.root.leftNode = this.createNode("1", "red", this.tagname);
    this.root.rightNode = this.createNode("3", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}
RedBlackTree.prototype.plot_chart4 = function(){
    this.root = this.createNode("2", "red", this.tagname);
    this.root.leftNode = this.createNode("1", "red", this.tagname);
    this.root.rightNode = this.createNode("3", "black", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}

RedBlackTree.prototype.plot_chart5 = function(){
    this.root = this.createNode("5", "black", this.tagname);
    this.root.leftNode = this.createNode("3", "red", this.tagname);
    this.root.rightNode = this.createNode("8", "black", this.tagname);
    this.root.leftNode.leftNode = this.createNode("1", "black", this.tagname);
    this.root.leftNode.rightNode = this.createNode("4", "black", this.tagname);
    this.root.rightNode.leftNode = this.createNode("6", "red", this.tagname);
    this.root.rightNode.rightNode = this.createNode("9", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}

RedBlackTree.prototype.plot_chart6 = function(){
    this.root = this.createNode("5", "black", this.tagname);
    this.root.leftNode = this.createNode("3", "red", this.tagname);
    this.root.rightNode = this.createNode("8", "black", this.tagname);
    this.root.leftNode.leftNode = this.createNode("1", "black", this.tagname);
    this.root.leftNode.rightNode = this.createNode("4", "black", this.tagname);
    this.root.rightNode.leftNode = this.createNode("6", "red", this.tagname);
    this.root.rightNode.rightNode = this.createNode("9", "red", this.tagname);
    this.root.rightNode.leftNode.rightNode = this.createNode("7", "black", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}

RedBlackTree.prototype.plot_chart7 = function(){
    this.root = this.createNode("5", "black", this.tagname);
    this.root.leftNode = this.createNode("3", "red", this.tagname);
    this.root.rightNode = this.createNode("8", "black", this.tagname);
    this.root.leftNode.leftNode = this.createNode("1", "black", this.tagname);
    this.root.leftNode.rightNode = this.createNode("4", "black", this.tagname);
    this.root.rightNode.leftNode = this.createNode("6", "red", this.tagname);
    this.root.rightNode.rightNode = this.createNode("9", "red", this.tagname);
    this.root.leftNode.leftNode.rightNode = this.createNode("2", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}

RedBlackTree.prototype.plot_chart8 = function(){
    this.root = this.createNode("8", "black", this.tagname);
    this.root.leftNode = this.createNode("6", "red", this.tagname);
    this.root.rightNode = this.createNode("9", "red", this.tagname);
    this.root.leftNode.rightNode = this.createNode("7", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
}


RedBlackTree.prototype.plot_recolor = function (){
    this.clear()
    this.root = this.createNode("a", "black", this.tagname);
    this.root.leftNode = this.createNode("b", "red", this.tagname);
    this.root.rightNode = this.createNode("c", "black", this.tagname);
    this.root.leftNode.leftNode = this.createNode("d", "black", this.tagname);
    this.root.leftNode.rightNode = this.createNode("e", "black", this.tagname);
    this.root.rightNode.leftNode = this.createNode("f", "red", this.tagname);
    this.root.rightNode.rightNode = this.createNode("g", "red", this.tagname);
    this.root.rightNode.leftNode.rightNode = this.createNode("h", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.supp();
}
RedBlackTree.prototype.supp = function(){
    console.log(this.tagname)
    d3.select("#" + this.tagname+ "-label")
        .transition()
        .text("Change c to red")
        .delay(this.duration/2)
        .each("end", function () {
            treeRecolar.support();
        });  
    
}
RedBlackTree.prototype.support = function(){
    var p = this.root;
    var r = d3.select("#circle-" + p.textValue + this.tagname).attr("r");
    console.log(p.svg)


    d3.select("#circle-" + "c" + this.tagname)
    .transition().duration(this.duration)
    .delay(this.duration)
    .attr("fill", "red"); 

    d3.select("#circle-" + "f" + this.tagname)
    .transition().duration(this.duration)
    .delay(this.duration * 3)
    .attr("fill", "black");

    d3.select("#circle-" + "g" + this.tagname)
    .transition().duration(this.duration)
    .delay(this.duration * 3)
    .attr("fill", "black"); 

    d3.select("#" + this.tagname+ "-label")
    .transition()
    .text("change f and g to black")
    .delay(this.duration * 2)

    d3.select("#" + this.tagname+ "-label")
    .transition()
    .text("Now violation is fixed!")
    .delay(this.duration * 4)
}


RedBlackTree.prototype.rotateAnimation = function () {
    this.root = this.createNode("A", "black", this.tagname);
    this.root.leftNode = this.createNode("B", "black", this.tagname);
    this.root.rightNode = this.createNode("C", "black", this.tagname);
    this.root.rightNode.leftNode = this.createNode("D", "black", this.tagname);
    this.root.rightNode.rightNode = this.createNode("E", "black", this.tagname);

    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.rotateAnimationStep1();
}

RedBlackTree.prototype.rotateAnimationStep1 = function () {

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Rotate Left")
        .delay(this.duration/2)
        .each("end", function () {
            treeRotate.rotateAnimationStep2();
        });
}

RedBlackTree.prototype.rotateAnimationStep2 = function () {

    var p = this.root;
    var a = p.leftNode;
    var q = p.rightNode;
    var b = q.leftNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue + this.tagname).attr("r");

    p.moveTo(0, r * 1.5, null, false, this.duration);
    a.moveTo(0, r * 1.5, p, true, this.duration);
    q.moveTo(0, -r * 1.5, p, true, this.duration);
    c.moveTo(0, -r * 1.5, q, true, this.duration);
    b.moveTo(0, -r * 1.5, q, false, this.duration);

    d3.select("#circle-" + p.textValue + this.tagname)
        .transition()
        .delay(this.durationSlow)
        .each("end", function () {
            treeRotate.rotateAnimationStep3();
        });
}

RedBlackTree.prototype.rotateAnimationStep3 = function () {

    var p = this.root;
    var a = p.leftNode;
    var q = p.rightNode;
    var b = q.leftNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue + this.tagname).attr("r");

    this.root = q;
    q.rightNode = c;
    q.leftNode = p;
    p.leftNode = a;
    p.rightNode = b;

    p.moveTo(-r / 2, r * 1.5, q, true, this.duration);
    q.moveTo(0, -r * 1.5, p, true, this.duration);
    c.moveTo(r * 1.5, -r * 1.5, q, true, this.duration);
    b.moveTo(0, r * 1.5, p, true, this.duration);
    a.moveTo(0, r * 1.5, p, true, this.duration);

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("")
        .delay(this.duration)
        .each("end", function () {
            treeRotate.rotateAnimationStep4();
        });
}

RedBlackTree.prototype.rotateAnimationStep4 = function () {

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Rotate Right")
        .delay(this.duration)
        .each("end", function () {
            treeRotate.rotateAnimationStep5();
        });
}

RedBlackTree.prototype.rotateAnimationStep5 = function () {

    var q = this.root;
    var p = q.leftNode;
    var a = p.leftNode;
    var b = p.rightNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue + this.tagname).attr("r");

    this.root = p;
    p.rightNode = q;
    q.leftNode = b;

    p.moveTo(0, -r * 1.5, null, false, this.duration);
    a.moveTo(0, -r * 1.5, p, true, this.duration);
    q.moveTo(0, r * 1.5, p, true, this.duration);
    c.moveTo(0, r * 1.5, q, true, this.duration);
    b.moveTo(0, -r * 1.5, q, false, this.duration);

    d3.select("#circle-" + p.textValue + this.tagname)
        .transition()
        .delay(this.durationSlow)
        .each("end", function () {
            treeRotate.rotateAnimationStep6();
        });
}

RedBlackTree.prototype.rotateAnimationStep6 = function () {

    var p = this.root;
    var a = p.leftNode;
    var q = p.rightNode;
    var b = q.leftNode;
    var c = q.rightNode;
    var r = d3.select("#circle-" + p.textValue + this.tagname).attr("r");

    p.moveTo(r / 2, -r * 1.5, q, true, this.duration);
    q.moveTo(0, r * 1.5, p, true, this.duration);
    c.moveTo(-r * 1.5, r * 1.5, q, true, this.duration);
    b.moveTo(0, r * 1.5, q, true, this.duration);
    a.moveTo(0, -r * 1.5, p, true, this.duration);

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("")
        .delay(this.duration * 1.5)
        .each("end", function () {
            treeRotate.rotateAnimationStep1();
        });
}






RedBlackTree.prototype.leafAnimation = function () {
    this.root = this.createNode("G", "black", this.tagname);
    this.root.leftNode = this.createNode("P", "red", this.tagname);
    this.root.rightNode = this.createNode("Q", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.leafAnimationStep1();
}
RedBlackTree.prototype.leafAnimationStep1 = function () {
    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("I inserted")
        .delay(this.duration/2)
        .each("end", function () {
            treeLeaf.leafAnimationStep2();
        });    
}

RedBlackTree.prototype.leafAnimationStep2 = function () {
    this.root.leftNode.leftNode = this.createNode("I", "red", this.tagname);
    this.draw(false);

    d3.select("#circle-" + "P" + this.tagname)
    .transition().duration(this.duration)
    .delay(this.duration *1.5)
    .attr("fill", "black"); 

    d3.select("#circle-" + "Q" + this.tagname)
    .transition().duration(this.duration)
    .delay(this.duration * 1.5)
    .attr("fill", "black");


    d3.select("#" + this.tagname+ "-label")
    .transition()
    .text("change P and Q to black")
    .delay(this.duration/1.5 )

    d3.select("#" + this.tagname+ "-label")
    .transition()
    .text("Violation sloved!")
    .delay(this.duration * 3 )

}


RedBlackTree.prototype.leafAnimation_1 = function () {
    this.root = this.createNode("G", "black", this.tagname);
    this.root.leftNode = this.createNode("P", "red", this.tagname);
    this.root.leftNode.leftNode = this.createNode("I", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.leafAnimation_1_Step1();
}

RedBlackTree.prototype.leafAnimation_1_Step1 = function () {
    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Rotate Right")
        .delay(this.duration)
        .each("end", function () {
            treeLeaf_1.leafAnimation_1_Step2();
        });
}
RedBlackTree.prototype.leafAnimation_1_Step2 = function () {
    var g = this.root;
    var p = g.leftNode;
    var i = p.leftNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");

    g.moveTo(0, r * 1.5, null, false, this.duration);
    p.moveTo(0, -r * 1.5, g, true, this.duration);
    i.moveTo(0, -r * 1.5, p, true, this.duration);
    
    d3.select("#circle-" + g.textValue + this.tagname)
    .transition()
    .delay(this.durationSlow)
    .each("end", function () {
        treeLeaf_1.leafAnimation_1_Step3();
    });
}
RedBlackTree.prototype.leafAnimation_1_Step3 = function (){
    var g = this.root;
    var p = g.leftNode;
    var i = p.leftNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");

    g.moveTo(0, 3*r, p, true, this.duration);
    p.moveTo(r/1.8, 0, g, true, this.duration);
    i.moveTo(r/2, 0, p, true, this.duration);


    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Recoloring")
        .delay(this.duration)
        .each("end", function () {
            treeLeaf_1.leafAnimation_1_Step4();
        });   
}
RedBlackTree.prototype.leafAnimation_1_Step4 = function (){
    var g = this.root;
    var p = g.leftNode;
    var i = p.leftNode;

    p.recolor("black", this.duration)
    g.recolor("red", this.duration * 2)

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Now violation is fixed!")
        .delay(this.duration * 2)
}



// treeleaf_2
RedBlackTree.prototype.leafAnimation_2 = function () {
    this.root = this.createNode("G", "black", this.tagname);
    this.root.leftNode = this.createNode("P", "red", this.tagname);
    this.root.leftNode.rightNode = this.createNode("I", "red", this.tagname);

    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.leafAnimation_2_Step1();
}

RedBlackTree.prototype.leafAnimation_2_Step1 = function () {
    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Rotate Left")
        .delay(this.duration)
        .each("end", function () {
            treeLeaf_2.leafAnimation_2_Step1_1();
        });
}
RedBlackTree.prototype.leafAnimation_2_Step1_1 = function () {
    var g = this.root;
    var p = g.leftNode;
    var i = p.rightNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");    


    i.moveTo(- r * 2, -r * 3, g, true, this.duration);
    p.moveTo(- r * 2, r * 4, i, true, this.duration);
    g.leftNode = i;
    i.leftNode = p;
    treeLeaf_2.leafAnimation_2_Step1_2();
}
RedBlackTree.prototype.leafAnimation_2_Step1_2 = function (){
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("It's exactly SAME AS CASE TWO,then rotate right")
    .delay(this.duration * 2)
    .duration(this.duration * 2)
    .each("end", function () {
        treeLeaf_2.leafAnimation_2_Step2();
    });
}




RedBlackTree.prototype.leafAnimation_2_Step2 = function () {
    var g = this.root;
    var p = g.leftNode;
    var i = p.leftNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");

    g.moveTo(0, r * 1.5, null, false, this.duration);
    p.moveTo(0, -r * 1.5, g, true, this.duration);
    i.moveTo(0, -r * 1.5, p, true, this.duration);
    
    d3.select("#circle-" + g.textValue + this.tagname)
    .transition()
    .delay(this.durationSlow)
    .each("end", function () {
        treeLeaf_2.leafAnimation_2_Step3();
    });
}
RedBlackTree.prototype.leafAnimation_2_Step3 = function (){
    var g = this.root;
    var p = g.leftNode;
    var i = p.leftNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");

    g.moveTo(-r/5, 3.2*r, p, true, this.duration);
    p.moveTo(r/1.1, 0, g, true, this.duration);
    i.moveTo(r/2, - 0.8 * r, p, true, this.duration);


    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Recoloring")
        .delay(this.duration)
        .each("end", function () {
            treeLeaf_2.leafAnimation_2_Step4();
        });   
}
RedBlackTree.prototype.leafAnimation_2_Step4 = function (){
    var g = this.root;
    var p = g.leftNode;
    var i = p.leftNode;

    p.recolor("black", this.duration)
    g.recolor("red", this.duration * 2)

    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Now violation is fixed!")
        .delay(this.duration * 2)
}


RedBlackTree.prototype.nodeAnimation = function () {
    this.root = this.createNode("G", "black", this.tagname);
    this.root.leftNode = this.createNode("P", "red", this.tagname);
    this.root.rightNode = this.createNode("Q", "red", this.tagname);
    this.root.leftNode.leftNode = this.createNode("I", "red", this.tagname);
    this.root.leftNode.leftNode.leftNode = this.createNode("α", "black", this.tagname);
    this.root.leftNode.leftNode.rightNode = this.createNode("β", "black", this.tagname);
    this.root.leftNode.rightNode = this.createNode("γ", "black", this.tagname);
    this.root.rightNode.leftNode = this.createNode("δ", "black", this.tagname);
    this.root.rightNode.rightNode = this.createNode("ε", "black", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.nodeAnimationStep1();
}
RedBlackTree.prototype.nodeAnimationStep1 = function () {
    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Recoloring")
        .each("end", function () {
            treeNode.nodeAnimationStep2();
        });       
}
RedBlackTree.prototype.nodeAnimationStep2 = function () {
    this.root.recolor("red", this.duration , this.duration)
    this.root.leftNode.recolor("black", this.duration * 1.5, this.duration*2 )
    this.root.rightNode.recolor("black", this.duration * 1.5, this.duration*2 )
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("change G to red")
    .delay(this.duration)
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("change P&Q to black")
    .delay(this.duration * 2)

    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("May recurse, G's parent maybe red")
    .delay(this.duration * 3.5)

    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("Here, just recolor G again")
    .delay(this.duration * 5)

    this.root.recolor("black", this.duration * 1.5 , this.duration*5.5)

    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("Now violation is fixed!")
    .delay(this.duration * 8)

    // d3.select("#" + this.tagname + "-label")
    // .transition()
    // .text("Recoloring")
    // .delay(this.duration)
    // .duration(this.duration)
    // .each("end", function () {
    //     treeNode.nodeAnimationStep2();
    // });   
}



RedBlackTree.prototype.nodeAnimation_1 = function () {
    this.root = this.createNode("G", "black", this.tagname);
    this.root.leftNode = this.createNode("P", "red", this.tagname);
    this.root.rightNode = this.createNode("Q", "black", this.tagname);
    this.root.leftNode.leftNode = this.createNode("I", "red", this.tagname);
    this.root.leftNode.leftNode.leftNode = this.createNode("α", "black", this.tagname);
    this.root.leftNode.leftNode.rightNode = this.createNode("β", "black", this.tagname);
    this.root.leftNode.rightNode = this.createNode("γ", "black", this.tagname);
    this.root.rightNode.leftNode = this.createNode("δ", "black", this.tagname);
    this.root.rightNode.rightNode = this.createNode("ε", "black", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.nodeAnimation_1_Step1();
}
RedBlackTree.prototype.nodeAnimation_1_Step1 = function () {
    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("Right rotation")
        .duration(this.duration)
        .each("end", function () {
            treeNode_1.nodeAnimation_1_Step2();
        });       
}
RedBlackTree.prototype.nodeAnimation_1_Step2 = function (){
    g = this.root;
    p = this.root.leftNode;
    q = this.root.rightNode;
    i = this.root.leftNode.leftNode;
    α = this.root.leftNode.leftNode.leftNode;
    β = this.root.leftNode.leftNode.rightNode;
    γ = this.root.leftNode.rightNode;
    δ = this.root.rightNode.leftNode;
    ε = this.root.rightNode.rightNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");
    
    p.moveTo(r * 1.5, - r * 2.9, g, true, this.duration);
    i.moveTo(0, - r * 2.9, p, true, this.duration);
    γ.moveTo(0, - r * 2.9, p, true, this.duration);
    α.moveTo(0, - r * 2.9, i, true, this.duration);
    β.moveTo(0, - r * 2.9, i, true, this.duration);

    d3.select("#circle-" + g.textValue + this.tagname)
    .transition()
    .delay(this.durationSlow)
    .each("end", function () {
        treeNode_1.nodeAnimation_1_Step3();
    });
}

RedBlackTree.prototype.nodeAnimation_1_Step3 = function () {
    g = this.root;
    p = this.root.leftNode;
    q = this.root.rightNode;
    i = this.root.leftNode.leftNode;
    α = this.root.leftNode.leftNode.leftNode;
    β = this.root.leftNode.leftNode.rightNode;
    γ = this.root.leftNode.rightNode;
    δ = this.root.rightNode.leftNode;
    ε = this.root.rightNode.rightNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");
    this.root = p;
    p.rightNode = g;
    g.leftNode = γ;
    

    g.moveTo(r *5, r * 2.9, p, true, this.duration);
    p.moveTo(r * 8, 0, g, true, this.duration);
    γ.moveTo(r * 6.5, r * 2.9 , g, true, this.duration);
    q.moveTo(- r , r * 2.9 , g, true, this.duration);
    δ.moveTo( r * 1.5 , r * 2.9 , q, true, this.duration);
    ε.moveTo(- r * 3, r * 2.9 , q, true, this.duration);
    i.moveTo(r * 10, 0, p, true, this.duration);
    α.moveTo(r * 9.5, 0, i, true, this.duration);
    β.moveTo(r * 10.5, 0, i, true, this.duration);

    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("Recolor")
    .delay(this.duration)
    .duration(this.duration)
    .each("end", function () {
        treeNode_1.nodeAnimation_1_Step4();
    });   

}

RedBlackTree.prototype.nodeAnimation_1_Step4 = function () {
    this.root.recolor("black", this.duration*1.5 , this.duration)
    this.root.rightNode.recolor("red", this.duration * 1.5, this.duration*2.5 )
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("change P(root) to black")
    .delay(this.duration)
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("change G to red")
    .delay(this.duration * 2.5)


    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("Now violation is fixed!")
    .delay(this.duration * 4)
}



//case 3
RedBlackTree.prototype.nodeAnimation_2 = function () {
    this.root = this.createNode("G", "black", this.tagname);
    this.root.leftNode = this.createNode("P", "red", this.tagname);
    this.root.rightNode = this.createNode("Q", "black", this.tagname);
    this.root.leftNode.leftNode = this.createNode("α", "black", this.tagname);
    this.root.leftNode.rightNode= this.createNode("I", "red", this.tagname);
    this.root.leftNode.rightNode.leftNode = this.createNode("β", "black", this.tagname);
    this.root.leftNode.rightNode.rightNode = this.createNode("γ", "black", this.tagname);

    this.treeHeight = this.getHeight(this.root, 1);
    this.draw(false);
    this.duration = 1500;
    this.durationSlow = 1000;
    this.nodeAnimation_2_Step1();
}
RedBlackTree.prototype.nodeAnimation_2_Step1 = function () {
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("Left rotation")
    .duration(this.duration)
    .each("end", function () {
        treeNode_2.nodeAnimation_2_Step2();
    });  
}

RedBlackTree.prototype.nodeAnimation_2_Step2 = function (){
    g = this.root;
    p = this.root.leftNode;
    q = this.root.rightNode;
    α = this.root.leftNode.leftNode;
    i = this.root.leftNode.rightNode;
    β = this.root.leftNode.rightNode.leftNode;
    γ = this.root.leftNode.rightNode.rightNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");
    g.leftNode = i;
    i.leftNode = p;
    i.rightNode = γ;
    p.rightNode = β;
    p.leftNode = α;
    


    i.moveTo(-r , - r * 2.9, g, true, this.duration);
    p.moveTo(- r * 1.5, r * 2.9, i, true, this.duration);
    γ.moveTo(-r, - r * 2.9, i, true, this.duration);
    α.moveTo(-r * 1.5, r * 2.9, p, true, this.duration);
    β.moveTo(-r, 0, p, true, this.duration);
    treeNode_2.nodeAnimation_2_Step3()
}


RedBlackTree.prototype.nodeAnimation_2_Step3 = function () {
    d3.select("#" + this.tagname + "-label")
        .transition()
        .text("It's CASE TWO! Do Right rotation")
        .duration(this.duration)
        .delay(this.duration)
        .each("end", function () {
            treeNode_2.nodeAnimation_2_Step4();
        });       
}


RedBlackTree.prototype.nodeAnimation_2_Step4 = function (){
    g = this.root;
    i = this.root.leftNode;
    q = this.root.rightNode;
    p = this.root.leftNode.leftNode;
    α = this.root.leftNode.leftNode.leftNode;
    β = this.root.leftNode.leftNode.rightNode;
    γ = this.root.leftNode.rightNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");
    
    i.moveTo(0, - r * 2.9, g, true, this.duration);
    p.moveTo(0, - r * 2.9, i, true, this.duration);
    γ.moveTo(0, - r * 2.9, i, true, this.duration);
    α.moveTo(0, - r * 2.9, p, true, this.duration);
    β.moveTo(0, - r * 2.9, p, true, this.duration);

    d3.select("#circle-" + g.textValue + this.tagname)
    .transition()
    .delay(this.durationSlow)
    .each("end", function () {
        treeNode_2.nodeAnimation_2_Step5();
    });
}

RedBlackTree.prototype.nodeAnimation_2_Step5 = function () {
    g = this.root;
    i = this.root.leftNode;
    q = this.root.rightNode;
    p = this.root.leftNode.leftNode;
    α = this.root.leftNode.leftNode.leftNode;
    β = this.root.leftNode.leftNode.rightNode;
    γ = this.root.leftNode.rightNode;
    var r = d3.select("#circle-" + g.textValue + this.tagname).attr("r");
    this.root = i;
    i.rightNode = g;
    g.leftNode = γ;
    


    g.moveTo(r * 7, r * 2.9, i, true, this.duration);
    i.moveTo(r * 7, 0, g, true, this.duration);
    p.moveTo(r * 7, 0, i, true, this.duration);
    γ.moveTo(r * 7, r * 2.9 , g, true, this.duration);
    q.moveTo(0 , r * 2.9 , g, true, this.duration);
    α.moveTo(r * 8, 0, p, true, this.duration);
    β.moveTo(r * 7, 0, p, true, this.duration);

    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("Recolor")
    .delay(this.duration)
    .duration(this.duration)
    .each("end", function () {
        treeNode_2.nodeAnimation_2_Step6();
    });   

}

RedBlackTree.prototype.nodeAnimation_2_Step6 = function () {
    this.root.recolor("black", this.duration*1.5 , this.duration)
    this.root.rightNode.recolor("red", this.duration * 1.5, this.duration*2.5 )
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("change I(root) to black")
    .delay(this.duration)
    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("change G to red")
    .delay(this.duration * 2.5)


    d3.select("#" + this.tagname + "-label")
    .transition()
    .text("Now violation is fixed!")
    .delay(this.duration * 4)
}


RedBlackTree.prototype.getColor = function () {
    return Math.random() > 0.5 ? "black" : "red";
}

