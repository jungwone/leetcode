/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let node = new ListNode();
    let head = node;
    
    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            node.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            node.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        node = node.next; // 다음으로 이동
    }
    
    if (list1) {
        node.next = list1;
    }
    if (list2) {
        node.next = list2;
    }
		return head.next;
};