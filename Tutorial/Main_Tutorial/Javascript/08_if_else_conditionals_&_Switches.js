console.log('This is tutorial 8');
const age = 128;
const doesDrive = false;
// const vari = 34;

// if we will going to use const age= '65'; then this is string but also we can check this by
// if (age==65);
// but if you want to compare both type or value then you have to write '==='
// if (age===65) then it will be false because in if condition 65 is integer
// if (age!=19){
//     console.log('Age is not 19')
// }

// if(age !== 65){ // ->this is if value and type are not matching
//     console.log('Age is not 65')
// }

// we can use esle if as well like c,c++

// else{
//     console.log('Age is not 19')
// }

// if (typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }

// else{
//     console.log('Vari is not defined');
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// console.log(age==45? 'Age is 45': 'Age is not 45'); //->tornary operator 

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}         
