/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node1 = head;
    let node2 = head;
    
    for(let i = 0; i < n; i++) {
        node2 = node2.next;
    }
    
    if(!node2) return head.next;
    
    while(node2.next) {
        node1 = node1.next;
        node2 = node2.next;
    }
    
    node1.next = node1.next.next;
    
    return head;
};