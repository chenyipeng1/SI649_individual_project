$(document).ready(function () {
  draw_init();
  myFunction6();
  myFunction7();
  myFunction8();
});

var tree;
var treeRotate;
var treeRecolar;
var treeLeaf;
var treeLeaf_1;
var treeLeaf_2;
var treeNode;
var treeNode_1;
var treeNode_2;



function draw_init(){
tree = new RedBlackTree("#chart1", "60%", "200px", 3);
tree = new RedBlackTree("#chart2", "60%", "300px", 3);
}
function myFunction1(){
  $("#chart1").empty();
  tree = new RedBlackTree("#chart1", "60%", "200px", 3, "Wrong, have green node");
  tree.plot_chart1();
}
function myFunction2(){
  $("#chart1").empty();
  tree = new RedBlackTree("#chart1", "60%", "200px", 3, "Wrong, root need to be black");
  tree.plot_chart2();
}
function myFunction3(){
  $("#chart1").empty();
  tree = new RedBlackTree("#chart1", "60%", "200px", 3, "Wrong, red node can't have red children");
  tree.plot_chart3();
}
function myFunction4(){
  $("#chart1").empty();
  tree = new RedBlackTree("#chart1", "60%", "200px", 3, "Wrong, different black-node for 2's path");
  tree.plot_chart4();
}
function myFunction5(){
  $("#chart2").empty();
  tree = new RedBlackTree("#chart2", "60%", "300px", 3);
  tree.plot_chart5();
}
function myFunction6(){
  $("#chart3").empty();
  tree = new RedBlackTree("#chart3", "80%", "190px", 2, "Wrong, break path rule");
  tree.plot_chart6();
}
function myFunction7(){
  $("#chart4").empty();
  tree = new RedBlackTree("#chart4", "80%", "170px", 2, "Right, pass every test");
  tree.plot_chart7();
}
function myFunction8(){
  $("#chart5").empty();
  tree = new RedBlackTree("#chart5", "80%", "170px", 2, "Wrong, break red rule");
  tree.plot_chart8();
}
function myFunction9(){
  $("recolor").empty();
  treeRecolar = new RedBlackTree("recolor", "100%", "300px", 2);
  treeRecolar.reset();
  treeRecolar.plot_recolor();
}
function myFunction10(){
  $("rotate").empty();
  treeRotate = new RedBlackTree("rotate", "100%", "300px", 2);
  treeRotate.reset();
  treeRotate.rotateAnimation();
}
function myFunction11(){
  $("leaf_case").empty();
  treeLeaf = new RedBlackTree("leaf_case", "100%", "300px", 2);
  treeLeaf.reset();
  treeLeaf.leafAnimation();
}
function myFunction12(){
  $("leaf_case").empty();
  treeLeaf_1 = new RedBlackTree("leaf_case", "100%", "300px", 2);
  treeLeaf_1.reset();
  treeLeaf_1.leafAnimation_1();
}
function myFunction13(){
  $("leaf_case").empty();
  treeLeaf_2 = new RedBlackTree("leaf_case", "100%", "300px", 2);
  treeLeaf_2.reset();
  treeLeaf_2.leafAnimation_2();
}

function myFunction14(){
  $("inner_case").empty();
  treeNode = new RedBlackTree("inner_case", "100%", "400px", 2);
  treeNode.reset();
  treeNode.nodeAnimation();
}
function myFunction15(){
  $("inner_case").empty();
  treeNode_1 = new RedBlackTree("inner_case", "100%", "400px", 2);
  treeNode_1.reset();
  treeNode_1.nodeAnimation_1();
}
function myFunction16(){
  $("inner_case").empty();
  treeNode_2 = new RedBlackTree("inner_case", "100%", "400px", 2);
  treeNode_2.reset();
  treeNode_2.nodeAnimation_2();
}






