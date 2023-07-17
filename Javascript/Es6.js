// let arr=[1,2,3,4,5]
// let initialValue=0;
// let result =arr.reduce(
//     (acc,item) => {
//        return acc+item
//     },initialValue
// )
// console.log(result)
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue1= 10;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue1
// );

// console.log(sumWithInitial);

8
// const num=[1,2,3,4]
// num=num;
// console.log(num[1]=45)
// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 3,
//     2: 4,
//     3: 5,
//   };
//   console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// const obj={
//     name:"hari",
//     age:20,
//     no:3
// }
// console.log(obj['age'])
// let arr=[1,3,4,5]
// for (let i in arr){
//     console.log(i)
// }
// const array =[1,2,3,4,5,6,7,8,9]
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const arr=[ { name: "Angelina Jolie", member: true },
// { name: "Eric Jones", member: false },
// { name: "Paris Hilton", member: true },
// { name: "Kayne West", member: false },
// { name: "Bob Ziroll", member: true }]
   


// function peopleWhoBelongToTheIlluminati(arr){
//        return arr.filter(item => item.member==true)
//   }

//   let result =peopleWhoBelongToTheIlluminati(arr)
//   console.log(result)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// let filteringVoters =voters.filter((data)=> data.voted == true)
// let initialValue=0;
// let result=filteringVoters.reduce((acc,item)=> acc+1,initialValue)
// console.log(result)

// unsolved
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// for(let i in wishlist){
//     var prices =0
//     prices +=wishlist[i].price
// }
// console.log(prices)
 
// let arr =["john", "JACOB", "jinGleHeimer", "schmidt"]
//  function capitilize(arr){
//      let filterArray= arr.map((item) => item.charAt(0).toUpperCase() +item.slice(1))
//      return filterArray
//  }
//  let result =capitilize(arr)
//  console.log(result)
// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "David", scores: [100, 100, 100] }
//   ];

//   function findAvg(data){
//    let result= data.map((item)=> {
//         let i=0;
//         let scores=item.scores
//         let total=scores.reduce((acc,item)=> acc+item,i) 
//         let tscores=total/3
//         return {name:item.name, avg:tscores}
//     })
//     return result
//   }
//   let value=findAvg(students)
//   console.log(value)
//  for (let i in students){
//     students[i].avg= value[i].avg
//  }
// console.log(students)
// let result =true
// let promise = new Promise(function(resolve, reject) {    
//   if(result){
//     resolve("aaa")
//   }else{
//     reject("sorry")
//   }
// }).then( (a)=> {console.log(a)})
// .catch((a)=> {console.log(a)})

