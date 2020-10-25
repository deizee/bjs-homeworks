// ================= Задача 1 =================
console.clear();

const weapons = [
    new Knife(), 
    new Staff(), 
    new Axe(), 
    new StormStaff(), 
    new LongBow(), 
    new Bow()
];
//console.log(weapons);

function getNames() {
    return weapons.map(weapon => weapon.name);
}
//console.log(getNames());

function getCountReliableWeapons(durability) {
    return weapons.filter(weapon => weapon.durability > durability).length;
}
//console.log(getCountReliableWeapons(250));

function hasReliableWeapons(durability) {
 return weapons.some(weapon => weapon.durability > durability)
}
//console.log(hasReliableWeapons(800));

function getReliableWeaponsNames(durability) {
 return weapons.filter(weapon => weapon.durability > durability).map(weap => weap.name)
}
//console.log(getReliableWeaponsNames(300));

function getTotalDamage() {
    return weapons.reduce((totalDamage, weapon) => totalDamage += weapon.attack, 0)
}
//console.log(getTotalDamage());

// -------- Необязательный пункт --------
function getValuestCountToSumValues(arr, sum) {
    let index = 0;
    arr.reduce((acc, curEl, i) => {
        acc += curEl;
        if (acc < sum) {
            index = i + 2;
        }
        return acc;
    }, 0)
    return index;
}
//console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10));


// ================= Задача 2 =================
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return (arr1.length === arr1.length && arr2.every((el, i) => el === arr1[i]));
}

//console.log(compareArrays([8, 9], [6])); // false, разные значения
//console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
//console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
//console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
//console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true


function memorize(fn, limit) {
    let memory = [];
    let counter = 0;
    
    return function func(...args) {
        counter++;
        let element = memory.find( el => compareArrays(el.args, args) );

        if (element) {
            return element.result;
        }

        const result = fn(...args);
        if (counter > limit) {
            memory.shift();
        }
        memory.push({args, result});
        return result;
    }
}

const mSum = memorize(sum, 5);

//console.log(sum(3, 4));
// console.log(mSum(3, 4));
// console.log(mSum(1, 3));
// console.log(mSum(3, 4));


const arr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

function testCase(testFunction, timer) {
    console.time(timer);
    for (let i = 0; i < 10; i++) {
           arr.forEach(el => testFunction(...el) );
    }
    console.timeEnd(timer);
}

testCase(sum, 'Счетчик1');   // время работы 50 секунд
testCase(mSum, 'Счетчик2');  // время работы 0,5 секунд