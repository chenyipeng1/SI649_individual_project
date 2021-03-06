function Tree(isRedBlack, tagname, canvasWidth, canvasHeight, zoom, desc) {
    this.isRedBlack = isRedBlack;
    this.tagname = tagname;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.zoom = zoom;
    this.desc= desc;
    this.svg = new Canvas(this.tagname, this.canvasWidth, this.canvasHeight, this.desc).getCanvas();
    this.numNodes = 1;
    // this.root = this.createRandomNode("black");
    this.treeHeight = this.getHeight(this.root, 0);
}

Tree.prototype.reset = function () {
    d3.select("#" + this.tagname + "-canvas").remove();
    this.svg = new Canvas(this.tagname, this.canvasWidth, this.canvasHeight).getCanvas();
    // this.root = this.createRandomNode("black");
    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
}

Tree.prototype.createRandomNode = function () {
    var color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    return this.createRandomNode(color);
}

Tree.prototype.createRandomNode = function (color) {
    return this.createNode(this.getRandomNumber(), color);
}

Tree.prototype.createNode = function (value, color, tagname) {
    return new Node(value, color, 0, this.isRedBlack, this.svg, tagname);
}

Tree.prototype.clearCanvas = function () {
    this.svg.text("");
}

Tree.prototype.clear = function () {
    this.clearNodes(this.root);
}

Tree.prototype.clearNodes = function (node) {
    if (node != null) {
        node.alreadyDrawn = false;
        this.clearNodes(node.leftNode);
        this.clearNodes(node.rightNode);
    }
}

Tree.prototype.getNode = function (node, value) {
    if (node != null) {
        if (node.textValue == value) return node;
        var leftResult = this.getNode(node.leftNode, value);
        var rightResult = this.getNode(node.rightNode, value);
        if (leftResult != null) return leftResult;
        if (rightResult != null) return rightResult;
    }
    return null;
}

Tree.prototype.getParentNode = function (node, value) {
    if (node != null) {
        if (node.leftNode != null && node.leftNode.textValue == value) return node;
        if (node.rightNode != null && node.rightNode.textValue == value) return node;

        var leftResult = this.getParentNode(node.leftNode, value);
        var rightResult = this.getParentNode(node.rightNode, value);
        if (leftResult != null) return leftResult;
        if (rightResult != null) return rightResult;
    }
    return null;
}

Tree.prototype.getHeight = function (node, level) {

    if (node == null) return level;

    var leftHeight = this.getHeight(node.leftNode, level + 1);
    var rightHeight = this.getHeight(node.rightNode, level + 1);

    return leftHeight > rightHeight ? leftHeight : rightHeight;
}

Tree.prototype.draw = function (rescale) {

    var width = document.getElementById(this.tagname + "-canvas").clientWidth;
    var r = Math.round(this.zoom * width / 80);
    var x = Math.round(width / 2 - r / 2);
    var y = Math.round(r + r / 3);

    this.drawNode(rescale, null, this.root, x, y, r, this.treeHeight - 1);
}

Tree.prototype.drawNode = function (rescale, parent, node, x, y, r, h) {

    if (node != null) {

        if (rescale) {
            node.rescale(x, y, r, parent);
        }
        else {
            node.draw(x, y, r, parent);
        }
        var width = r * 1.2 * Math.pow(2, h) / 2;
        this.drawNode(rescale, node, node.leftNode, x - width, y + r * 3, r, h - 1);
        this.drawNode(rescale, node, node.rightNode, x + width, y + r * 3, r, h - 1);
    }
}

Tree.prototype.getLeaf = function () {

    var node = this.root;
    while (!node.isLeaf()) {
        if (node.leftNode != null && node.rightNode != null) node = node.leftNode;
        else if (node.rightNode != null) node = node.rightNode;
        else node = node.leftNode;
    }

    return node;
}


/** in a binary tree (not SBT) we can delete by substituting any node **/
Tree.prototype.deleteNode = function (value) {

    if (this.root.textValue == value) return "Root node cannot be deleted";
    var parentNode = this.getParentNode(this.root, value);
    if (parentNode != null) {

        var isLeftNode = parentNode.leftNode != null && parentNode.leftNode.textValue == value;
        var nodeToDelete = isLeftNode ? parentNode.leftNode : parentNode.rightNode;
        nodeToDelete.removeFromCanvas();

        if (nodeToDelete.isLeaf()) {
            if (isLeftNode) parentNode.leftNode = null;
            else parentNode.rightNode = null;
            return "Node deleted";
        }
        var node = nodeToDelete;
        var parentLeafNode = node;
        while (!node.isLeaf()) {
            parentLeafNode = node;
            if (node.leftNode != null && node.rightNode != null) node = node.leftNode;
            else if (node.rightNode != null) node = node.rightNode;
            else node = node.leftNode;
        }

        if (parentLeafNode.textValue == nodeToDelete.textValue) {

            if (isLeftNode) {
                console.log("parentleafleft true");
                node.leftNode = nodeToDelete.rightNode;
                parentNode.leftNode = node;
            }
            else {
                console.log("parentleafleft false");
                node.rightNode = nodeToDelete.rightNode;
                parentNode.rightNode = node;
            }
            return "Node deleted";
        }

        var isParentLeafLeftNode = parentLeafNode.leftNode != null && parentLeafNode.leftNode.textValue == node.textValue;
        if (isParentLeafLeftNode) {
            parentLeafNode.leftNode = null;
        }
        else {
            parentLeafNode.rightNode = null;
        }


        if (isLeftNode) {
            node.leftNode = parentNode.leftNode.leftNode;
            node.rightNode = parentNode.leftNode.rightNode;
            parentNode.leftNode = node;
        }
        else {
            node.leftNode = parentNode.rightNode.leftNode;
            node.rightNode = parentNode.rightNode.rightNode;
            parentNode.rightNode = node;
        }

        return "Node deleted";
    }
    else return "Node not found";
}

Tree.prototype.getOneChildedNode = function (node, value) {

    if (node != null) {

        if (node.hasOneChild()) return node;
    }
}


Tree.prototype.insertRandomNode = function () {
    this.insertNode(this.getRandomNumber());
}

Tree.prototype.insertNode = function (value) {
    var lastNode;
    var node = this.root;
    while (node != null) {
        lastNode = node;
        if (Math.random() > 0.5) node = node.leftNode;
        else node = node.rightNode;
    }

    var color = !this.isRedBlack ? "black" : Math.random() > 0.5 ? "black" : "red";
    var newNode = new Node(value, color, lastNode.level + 1, this.isRedBlack, this.svg);

    if (lastNode.leftNode == null && lastNode.rightNode == null) {
        if (Math.random() > 0.5) lastNode.leftNode = newNode;
        else lastNode.rightNode = newNode;
    }
    else if (lastNode.leftNode == null) {
        lastNode.leftNode = newNode;
    }
    else {
        lastNode.rightNode = newNode;
    }

    this.numNodes++;

    var newHeight = this.getHeight(this.root, 0);
    if (this.treeHeight < newHeight) {
        this.treeHeight = newHeight;
        this.draw(true)
    }
    this.draw(false);
}

Tree.prototype.getRandomNumber = function () {

    var rnd;
    do {
        rnd = Math.round(Math.random() * 99);
    }
    while (this.isPresent(rnd, this.root));
    return rnd;
}

Tree.prototype.isPresent = function (value, node) {
    if (node == null) return false;
    if (node.textValue == value) return true;
    return this.isPresent(value, node.leftNode) || this.isPresent(value, node.rightNode);
}

Tree.prototype.insertNodes = function () {
    var j;
    for (j = 0; j < 1; j++) {
        this.insertNode();
    }
}

Tree.prototype.getColor = function () {
    return "black";
}

Tree.prototype.fillTree = function (levels) {
    this.clearCanvas();
    this.clear();
    this.clearNodes(this.root);
    this.recursiveFillTree(this.root, levels);
    this.treeHeight = this.getHeight(this.root, 0);
    this.draw(false);
}

Tree.prototype.recursiveFillTree = function (node, levels) {

    if (levels == 0) return;

    var left = new Node(this.getRandomNumber(), this.getColor(), 1, this.isRedBlack, this.svg);
    var right = new Node(this.getRandomNumber(), this.getColor(), 1, this.isRedBlack, this.svg);
    node.leftNode = left;
    node.rightNode = right;

    this.recursiveFillTree(node.leftNode, levels -1);
    this.recursiveFillTree(node.rightNode, levels -1);
}