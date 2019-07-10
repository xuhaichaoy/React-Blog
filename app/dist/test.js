// function reverseLinkedList(head) {
//   // Start from here.
//   if (!head || !head.next) return head;
//   var p = head;
//   head = reverseLinkedList(p.next);
//   p.next.next = p;
//   p.next = null;
//   return head;
// }

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
    return null;

  while (p.next !== null) {
    q = p.next;
    p.next = q.next;
    q.next = list;
    list = q;
  }
  return list;
}
console.log(reverseLinkedList([1,2,3,4,5]))

function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500);
  };
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
