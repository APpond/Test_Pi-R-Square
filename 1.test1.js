function sumOfTwoInArray(arr, target) {
  let numSet = new Set();
  for (let num of arr) {
    let complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 8));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 12));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 18));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 20));

/* Thinking Process
-ผมสร้าง numSet เพื่อเก็บตัวเลขที่เราเจอใน array 
-ใช้ลูป for เพื่อวนผ่านทุกตัวเลขในอาเรย์
โดยผมกำหนด complement = target - num ซึ่งถ้าใน numSet มีตัวเลขที่ = complement แล้ว 
นั่นแปลว่าเจอตัวเลขสองตัวที่บวกกันได้ target แล้ว ก็จะคืนค่า true
แต่ถ้า numSet ยังไม่มีค่าของ complement ก็จะเพิ่มตัวเลขนั้น เข้าไปใน numSet
ถ้าลูปทั้งหมดจบลงโดยที่ไม่เจอตัวเลขสองตัวที่บวกกันได้ target ก็จะคืนค่า false
*/
