/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    
    if(root.left) root.left.next = root.right;
    if(root.right && root.next) root.right.next = root.next.left; // 부모가 다른데 같은 레벨이 있는 녀석들도 이어줘야 함.
    
    connect(root.left);
    connect(root.right);
    
    return root;
};

