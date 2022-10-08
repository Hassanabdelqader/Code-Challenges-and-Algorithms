// Write here the code challenge solution

function Node(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

var Tree = function (preorder, inorder) {
  const recursive = function (preorder, inorder) {
    if (inorder.length === 0) return null;

    let left, right;
    let Value = preorder.shift();

    const root = new Node(Value);

    left = inorder.slice(0, inorder.indexOf(Value));
    right = inorder.slice(inorder.indexOf(Value) + 1);

    root.left = recursive(preorder, left);
    root.right = recursive(preorder, right);

    return root;
  };

  return recursive(preorder, inorder);
};

module.exports = Tree;
