/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    return mergeTree(root1, root2)
};

function mergeTree(tree1, tree2) {
    if(!tree1) return tree2;
    if(!tree2) return tree1;

    tree1.val += tree2.val;
    tree1.left = mergeTree(tree1.left, tree2.left);
    tree1.right = mergeTree(tree1.right, tree2.right);
    
    return tree1;
}