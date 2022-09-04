var images ["https://thumbs.dreamstime.com/b/dad-icon-cartoon-style-dad-icon-cartoon-style-white-background-123080092.jpg","https://t3.ftcdn.net/jpg/02/62/72/10/360_F_262721041_9mNNRQadoz552DN2NTFNbGBHN14K9D58.jpg",
"https://cdn3.vectorstock.com/i/1000x1000/40/87/cartoon-mother-holding-her-son-vector-7404087.jpg","https://cdn2.vectorstock.com/i/1000x1000/25/56/boy-and-her-brother-on-her-back-playing-together-vector-22652556.jpg","https://us.123rf.com/450wm/yupiramos/yupiramos1811/yupiramos181112261/127564781-beautiful-little-girl-character-vector-illustration-design.jpg?ver=6"]

var name = ["Family Book", "Ranbir Singh - Grandfather","Diljeet Singh - Father", "Alia Singh - Mother","Rocky Singh - Brother","Soni Singh - Sister" ]

var age =[60,40,60,25,20] 

age.sort();
age.reverse();

var i = 0;
i++

var updatedImage = image[i];
var updatedName = names[i]
var updatedAge = age[i]

document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
document.getElementById("family_member_age").innerHTML = updatedAge;

var max_number = Math.max.apply(Math,age );
console.log("The highest age is: ",max_number);

var min_number = Math.min.apply(Math, age);
console.log("The lowest age is: ", min_number);