function reverseLinkedList(head) {
  // Start from here.
  if (!head || !head.next) return head;
  var p = head;
  head = reverseLinkedList(p.next);
  p.next.next = p;
  p.next = null;
  return head;
}

function rotateMitrix(mitrix) {
  let arr = mitrix;
  let key = arr[0].length - 1;
  var res = [];
  while (key >= 0) {
    var array = [];
    for (let i = 0; i < arr.length; i++) {
      array.unshift(arr[i][key]);
    }
    key--;
    res.unshift(array);
  }
  return res;
}
rotateMitrix([[1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], [4, 5, 6, 7, 8, 9]]);

function reverseLinkedList(head) {
  // Start from here.
  var list = head;
  var p = list;
  var q = null;

  if (p === null)
    //做个判断啊！！非常傻的一个错呜呜呜
    return null;

  while (p.next !== null) {
    q = p.next;
    p.next = q.next;
    q.next = list;
    list = q;
  }
  return list;
  // head -> 1 -> 2 -> 3 -> 4
  // list
  // p       
  //         q 
  //         2    list 
  //         2    1    3    4 
   
}
