

// var ram = 4096;
// var fingirePrint = true;
// var motherBoard = 'intel';

// var laptop = {
//     ram: 4096,
//     motherBoard: 'intel',
//     fingirePrint: true
// }
// console.log(laptop)
// console.log(laptop.ram)
// console.log(laptop.motherBoard)
// console.log(laptop.fingirePrint)

// var carDetails = {
//     ac: true,
//     hybrid: true,
//     model: '2005',
//     brandName: 'cultus',
//     speakrs: {
//         company: 'sony',
//         size: 'medium',
//         frequency: '12000MH',
//         quantity: 2
//     }

// gadgets: ['ac', 'deck', 'lcd', 'nos']
// }
// console.log(carDetails)

// // carDetails.ac = false
// // console.log(carDetails)
// // carDetails.gadgets = ['ac', 'deck', 'lcd', 'nos'];
// // console.log(carDetails.gadgets[2])


// console.log(carDetails.speakrs.frequency)






































// var carDetails = {
//     ac: true,
//     hybrid: true,
//     model: '2005',
//     brandName: 'cultus',
//     speakrs: {
//         company: 'sony',
//         size: 'medium',
//         frequency: '12000MH',
//         quantity: 2
//     },
//     gadgets: ['ac', 'deck', 'lcd', 'nos'],
//     carFunction: function (fuel) {
//         console.log('runs on ' + fuel);;
//     }
// }

// carDetails.carFunction('cng');

// carDetails.carFunction('petrol');















// var cities;


// cities = ['karachi','lahore'];





// var cities = [];
// cities.push('karachi');




// var cities = {};
// console.log(cities)
// cities.population = '40M';
// console.log(cities)
















// var emailEl = document.getElementById('email');
// var passwordEl = document.getElementById('password');
// function signup() {
//     var user = {
//         email: emailEl.value,
//         password: passwordEl.value,

//     }
//     user.rollNumber = undefined;
//     console.log(user);
// }




// var pricePlan1 = {
//     premium: 5000,
//     discount: true,
//     discountsMonts: ['Jan', 'Feb']
// }
// var pricePlan2 = {
//     premium: 5000
// }
// var monthEl = document.getElementById('monthname');
// function checkDiscount(planEl) {
//     console.log(monthEl.value);
//     console.log(planEl.innerHTML);
//     var discountExist;
//     if (planEl.innerHTML === 'Price Plan 1') {
//         discountExist = 'discount' in pricePlan1;
//     }
//     else {
//         discountExist = 'discount' in pricePlan2;
//     }
//     console.log(discountExist)
// }































// var user = {
//     userName: 'haider',
//     roll: 2643,
//     student: true
// }
// console.log(user);

// user.teacher = true;
// delete user.student;
// console.log(user);






























/* Book Example 71*/



var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [2, 7],
    calcAnnual: function (prcentDis) {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] === thisMo) {
                bestPrice = plan1.price * prcentDis;
                break;
            }
        }
        return bestPrice * 12;
    }
};

var discountedValue = plan1.calcAnnual(.8)
console.log(discountedValue);













