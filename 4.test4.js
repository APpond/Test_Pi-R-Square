function sumOfPrimes(n) {
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfPrimes(10))
console.log(sumOfPrimes(59))

/* Thinking Process
- ผมสร้างตัวแปร sum และกำหนดค่าเริ่มต้น = 0 เพื่อเก็บผลรวมของจำนวนเฉพาะ
- ใช้ลูป for เพื่อวนผ่านตัวเลขตั้งแต่ 2 จนถึง n 
- ผมจะเช็คว่า i เป็นจำนวนเฉพาะไหม ผมสร้างตัวแปร isPrime และให้เป็น true แล้วก็สร้างลูปย่อยในลูปหลักอีกทีนึง 
  โดยลองหาร i ตั้งแต่2 จนถึง j โดยที่ต้องไม่ลงตัว ( i % j ไม่เท่ากับ 0)  ถ้าเท่ากับ 0 แสดงว่าไม่ใช่จำนวนเฉพาะ isPrime ก็เป็น false และออกจากลูปด้วย break  
  แล้วถ้าเป็นจำนวนเฉพาะมันก็จะถูกบวกไปใน sum 
 */