function sortOddsBeforeEvens(arr) {
  let odds = arr.filter((num) => num % 2 !== 0);
  let evens = arr.filter((num) => num % 2 === 0);

  odds.sort((a, b) => a - b);
  evens.sort((a, b) => a - b);

  return odds.concat(evens);
}

console.log(sortOddsBeforeEvens([4, 2, 5, 7, 1, 6]));
console.log(sortOddsBeforeEvens([25, 40, 14, 91, 31, 22, 49, 13, 6]));

/* Thinking Process
-ผมเริ่มจากแยกเลขคี่ เลขคู่ออกจากกันก่อน โดยใช ้filter โดยถ้าเป็นเลขคี่จะหาร 2 ไม่ลงตัว (num % 2 ไม่เท่ากับ 0)
ส่วนเลขคู่ก็คือหาร 2 ลงตัว(num % 2 เท่ากับ 0)
-แล้วก็เรียงลำดับเลขคี่และเลขคู่ ใช้ sort เพื่อเรียงจากน้อยไปมาก (a - b)
-สุดท้ายก็รวมเลขคี่และเลขคู่ให้กับมาเป็นarrayเดียวกัน โดยใช้ concat
 */