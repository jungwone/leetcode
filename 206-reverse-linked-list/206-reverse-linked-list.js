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

var reverseList = function(head) {
    if(!head || !head.next) return head;
    let reverse = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reverse;
}


/* 반복문 솔루션
var reverseList = function(head) {
    let prev = null;
    let current = new ListNode();
    
    while(current != null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};
*/
