// Write here the code challenge solution

function Node(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}
var BST = function (nums) {
  if (nums.length == 0) return null;
  if (nums.length == 1) return new Node(nums[0]);

  let index = Math.floor(nums.length / 2);
  let root = new Node(nums[index]);

  root.left = BST(nums.slice(0, index));
  root.right = BST(nums.slice(index + 1));

  return root;
};

module.exports = {
  Node,
  BST,
};
