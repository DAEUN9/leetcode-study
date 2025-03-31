// Brute Force (Array Sorting) - Good for smaller cases
// 🕒 Time Complexity: O(N log N), where N is the total number of nodes
// 🗂️ Space Complexity: O(N)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const nums = [];

  // ┌──────────────────────────────────────────────────────────────────┐
  // │ Step 1: Extract values from all linked lists                     │
  // │ We traverse each linked list and push node values into 'nums'.   │
  // │ This flattens the K lists into a single array.                   │
  // └──────────────────────────────────────────────────────────────────┘
  for (let list of lists) {
    while (list) {
      nums.push(list.val);
      list = list.next;
    }
  }

  // ┌──────────────────────────────────────────────────────────────────┐
  // │ Step 2: Sort the values                                          │
  // │ JavaScript's default sort is lexicographical, so we use a custom │
  // │ comparator to sort numbers correctly in ascending order.         │
  // └──────────────────────────────────────────────────────────────────┘
  nums.sort((a, b) => a - b);

  // ┌──────────────────────────────────────────────────────────────────┐
  // │ Step 3: Create a new sorted linked list                          │
  // │ Initialize a dummy node, then iterate through the sorted array.  │
  // │ For each value, create a new ListNode and append it to the list. │
  // └──────────────────────────────────────────────────────────────────┘
  let dummy = new ListNode(-1);
  let current = dummy;

  for (num of nums) {
    current.next = new ListNode(num);
    current = current.next;
  }

  // ┌──────────────────────────────────────────────────────────────────┐
  // │ Step 4: Return the merged list                                   │
  // │ We return dummy.next since dummy is a placeholder.               │
  // └──────────────────────────────────────────────────────────────────┘
  return dummy.next;
};

/**
 * ┌──────────────────────────────────────────────────────────────────┐
 * │ Time & Space Complexity                                          │
 * ├──────────────────────────────────────────────────────────────────┤
 * │ Operation             │ Complexity                               │
 * ├──────────────────────────────────────────────────────────────────┤
 * │ Extracting values     │ O(N) - N is the total number of nodes    │
 * │ Sorting values        │ O(N log N) - JavaScript's sort uses Timsort │
 * │ Building linked list  │ O(N) - Iterates through sorted array     │
 * ├──────────────────────────────────────────────────────────────────┤
 * │ Overall Time Complexity │ O(N log N)                             │
 * ├──────────────────────────────────────────────────────────────────┤
 * │ Space Complexity      │ O(N) - Storing all node values in array  │
 * └──────────────────────────────────────────────────────────────────┘
 */
