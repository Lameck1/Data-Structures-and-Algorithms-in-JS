class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!(node instanceof Node)) {
      throw new Error('Next node must be a member of the Node class');
    }
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}

module.exports = Node;

// const vanillaNode = new Node('Vanilla');
// const strawberryNode = new Node('Berry Tasty');
// const coconutNode = new Node('Coconuts for Coconut');

// vanillaNode.setNextNode(strawberryNode);
// strawberryNode.setNextNode(coconutNode);

// let currentNode = vanillaNode;

// while (currentNode !== null) {
//   console.log(currentNode.data);
//   currentNode = currentNode.next;
// }

module.export =  Node;