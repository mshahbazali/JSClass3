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
