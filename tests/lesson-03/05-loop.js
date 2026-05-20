// Bài 1: tính tổng từ 1 đến 100
let a = 0;
for(let i = 1; i <= 100; i++){
    a = i + a;
};
console.log(a);

// Bài 2: In bảng cửu chương từ 2 đến 9

// Bài 3: Tạo 1 mảng chứa các số lẻ từ 1 đến 99
for(let i = 1; i <= 99; i++){
   if((i%2)==1){
      console.log(i);
   }
};

//Bài 4: In ra 10 email dựa trên tên người dùng và số thứ tự
for(let i = 1; i <= 10; i++){
   console.log(`user`+i+`@example.com`)
};

//Bài 5: Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho
