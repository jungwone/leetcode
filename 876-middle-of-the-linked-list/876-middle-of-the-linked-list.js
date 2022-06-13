/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 1;
    let node = head;
    
    while(node.next) {
        count++;
        node = node.next;
    }
    
    count = Math.floor(count/2);
    while(count--) {
        head = head.next;
    }
    
    return head;
};