// Q1
// var date = new Date();
// document.write(date);

// Q2
// var date = new Date();
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert("Current Month is" + " " + month[date.getMonth()]);

// Q3
// var date = new Date();
// var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// alert("Today Is" + " " + day[date.getDay()].slice(0, 3));

// Q4
// var date = new Date();
// var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// if (day === day[date.getDay(0 || 6)]) {
//     alert("Its Fun Day");
// } else(alert("Today Is" + " " + day[date.getDay()]));

// Q5
// var date = new Date();
// if (date < 16) {
//     alert("First fifteen days of the month ")
// }
// else if(date > 15) {
//     alert("Last days of the month ")
// }

// Q6 
// var date = new Date();
// var currentDate = new Date("01/01/2015");
// var time = date.getTime() - currentDate.getTime();
// var last = time/ 1000;
// document.write(last);

// Q7 
// var date = new Date();
// var hour = date.getHours()
// if(hour <= 12){
//     alert("it pm")
// }
// else if(hour >= 13){
//     alert("it am")
// }

// Q8 
// var date = new Date("Dec 31 2020");
// document.write("Later Date" + " " + date);

// Q9 padding
// var date = new Date(6,18,2015);
// var ramdan = new Date(18,1,2021);
// var days = Math.abs(date / ramdan)
// document.write(days)

// Q10
// var customerName = prompt("Enter Your Name");
// var currentMonth = prompt("Enter Your Current Month");
// var numberUnits = prompt("Enter Your Units");
// var chargesUnit = prompt("Enter Your Unit Charges");
// var amount = prompt("Enter Your Amount");
// var lastPayment = prompt("Enter Your Last Payment");
// var payble = prompt("Enter Your Gross Amount Payable");
// document.write("Customer Name" + " " + customerName + "<br>" + "Current Month" + " " + currentMonth + "<br>" + "Number of Unit" + " " + numberUnits + "<br>" + "Charges Per Unit" + " " + chargesUnit + "<br>" + "Total Amount"  + " " + amount + "<br>" + "Last Payment" + " " + lastPayment + "<br>" + "Account Payble" + " " + payble)


// Q11


// var a = new Date();
// var b = new Date();
// var c = a.getHours();
// b.setHours(c-1);
// document.write("Current Date : "+ a + "<br />");
// document.write("1 hour ago, It was "+b);

// Q12

// var a = new Date();
// var b = new Date();
// var c = b.getFullYear();
// b.setFullYear(c-100);
// alert(b);

// Q13

// var a = prompt("Enter your birth date","January 1,2021");
// var b = new Date();
// var c = new Date(a);
// var d = b.getTime()-c.getTime();
// var e = d/(1000*60*60*24*365);
// var f = Math.round(e);
// var g = c.getFullYear();
// document.write("Your age is : "+ f + "<br /> Your birthyear is "+g);


// Q14

// function date(){
//     var a = new Date();
//     document.write(a)
// }
// date();


// Q15
// function userName(){
//     var firstName = prompt("Enter your First name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     alert("Hello Dear " + fullName);
// }
// userName();

// Q16
// function add(){
//         var firstNum = +prompt("Enter First Number");
//         var lastNum = +prompt("Enter last Number");
//         var sum = firstNum+lastNum;
//         return sum;
// }

// alert(add());

// Q17

// function compute(firstNumber,secondNumber,operation){
//    if(operation === '+'){
//     alert(firstNumber + secondNumber);
// }else if(operation === '-'){
//     alert(firstNumber - secondNumber);
// }else if(operation === '*'){
//     alert(firstNumber * secondNumber);
// }else if(operation === '/'){
//     alert(firstNumber / secondNumber);
// }else if(operation === '%'){
//     alert(firstNumber % secondNumber);
// }
// }

// compute(+prompt("Enter the First Number"),+prompt("Enter the First Number"),prompt("What you want"))


// Q18

// function  square(a){
//     alert(a*a);
// }
// square(prompt("Enter the number"));


// Q19
// function counting(){
//     var a = +prompt("Enter the First Number")
//     var b = +prompt("Enter the Last Number")
//     for(var i = a; i<=b; i++ ){
//     document.write(i + "<br />")
// }
// }
// counting();

// Q20
// var base = +prompt("ENter the base");
// var perpendicular = +prompt("ENter the perpendicular");
// var hypotenuse = (base*base)+(perpendicular*perpendicular);
// function hypoSquare(){
// var a = hypotenuse;
// var b = Math.sqrt(a)
// alert(b);
// }
// hypoSquare();

// Q21
// var a = +prompt("Enter width");
// function area(width,height){
// document.write("Area of rectangle is "+width*height);
// }
// area(a,+prompt("Enter the height"));


// Q22
//     function uppercase(x){
//   var a = x.split(' ');
//   var b = [];
//   for(var i = 0; i < a.length; i++){
//       b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
//   }
//   return b.join(' ');
// }
// document.write("Example String : "+"the quick brown fox" + " <br />");
// document.write("Example Output : "+uppercase("the quick brown fox"));


// Q23
// function longestWord(a){
//   var b = a.match(/\w[a-z]{0,}/gi);
//   var c = b[0];
//   for(var i = 1 ; i < b.length ; i++)
//   {
//     if(c.length < b[i].length)
//     {
//     c = b[i];
//     } 
//   }
//   return c;
// }
// console.log(longestWord('Web Development Tutorial'));

// Q24
// functioncount(para, letter) 
// {
//  var a = 0;
//  for (var i = 0; i < para.length; i++){
//     if (para.charAt(i) == letter) {
//       a += 1;
//       }
//   }
//   return a;
// }
// alert(count(prompt("ENter first"),prompt("Enter second")));



// Q25

// function calcCircumference(){
//     var radius = 30;
//     circumference = 2*(3.14)*(radius);
//     document.write("The circumference is "+circumference+"<br />");
// }
// function calcArea(){
//     var r = 30;
//     var area = (3.14)*(r*r);
//     document.write("The area is "+area);
// }
// calcCircumference();
// calcArea();
