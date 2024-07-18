function largestNumber(nums) {
  let strNums = nums.map((num) => num.toString());

  strNums.sort(function (a, b) {
    if (a + b > b + a) {
      return -1;
    } else {
      return 1;
    }
  });

  let result = strNums.join("");

  return result;
}

console.log(largestNumber([10, 2, 13, 7]));
console.log(largestNumber([21, 36, 8, 45]));


/* Thinking Process
- ผมใช้ map เพื่อแปลงตัวเลขทั้งหมดในอาเรย์ให้เป็น string ก่อน
- จากนั้นใช้ sort เพื่อเรียงจากมากไปน้อย ปรียบเทียบว่า a + b หรือ b + a อันไหนให้ค่าที่มากกว่ากัน
  ถ้า a+b มากกว่า b+a ก็จะให้ a มาก่อน แต่ถ้าไม่ใช่ก็จะให้ a ไปอยู่หลัง 
- สุดท้ายก็ใช้ join รวม string เข้าหากัน
 */
