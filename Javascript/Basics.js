// Program to reverse a arr

// let arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']
// reverseArr =arr.reverser()
// console.log(reverseArr)

//Program to find whether atleast one element are similar in different sorted arrays
// let arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
// let arr2 = [7, 13, 25, 46, 58, 70, 84]
// function findSimilarElement(arr1,arr2){
//     var count=0;
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr[j]){
//                 console.log("Yes found")
//                 break;
//                 count++
//             }
//         }
//     }
//     if(count==0){
//         console.log("Not found")
//     }
// }

//program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.

// function findStrictlyinc(arr) {
//   let i = 0;
//   let j = 1;
//   while (arr.length > j) {
//     if (arr[i] + 1 == arr[j]) {
//       i++;
//       j++;
//     } else {
//       break;
//     }
//   }
//   if (i < arr.length - 1) {
//     console.log("Not");
//   } else {
//     console.log("yes");
//   }
// }
// findStrictlyinc([1, 2, 3, 4, 5]);
// findStrictlyinc([1, 2, 3, 3, 5]);

// JavaScript function to convert an amount to coins.
// function findcoins(arr,amount){
//     let count=0;
//     let i=0;
//     let coinsArr=[]
//     let index=0;
//     while(amount>count &&i<arr.length){
//        if(amount-count>=arr[i]){
//             count +=arr[i]
//             coinsArr[index++] =arr[i];
//         }else{
//              i++
//         }
//         i++
//     }
//     console.log(coinsArr)
// }
// findcoins([25,10,5,2,1],46)

//formatting the numbers to human readable form with correct suffix like 1 to 1st, 2 to 2nd, 3 to 3rd and 4 to 4th. 

// function formattingNum(arr){
//     let index=0;
//     let formatArr=[];
//     for(let i=0;i<arr.length;i++){
//         let findLastDigit=arr[i]%10
//         if(findLastDigit==1){
//             formatArr.push(arr[i]+"st")
//         }
//         else if(findLastDigit==2){
//             formatArr.push(arr[i]+"nd")
//         }
//         else if(findLastDigit==3){
//             formatArr.push(arr[i]+"rd")
//         }
//         else{
//             formatArr.push(arr[i]+"th")
//         }
//     }
//     console.log(formatArr)
// }
//  formattingNum([1,2,3,4,5,5])


//The program should replace all 'a' with '4', 'e' with '3', 'i' with '1', 'o' with '0' and 's' with '5'
//  function convertToEncode(str){
//         strClone=str.split('')
//         for(let i=0;i<strClone.length;i++){
//             if(strClone[i]=='a'){
//                 strclone[i]='4'
//             }
//             if(strClone[i]=='e'){
//                 strClone[i]='3'
//             }
//             if(strClone[i]=='i'){
//                 strClone[i]='1'
//             }
//             if(strClone[i]=='o'){
//                 strClone[i]='0'
//             }
//             if(strClone[i]=='s'){
//                 strClone[i]='5'
//             }
//         } 
//         console.log(strClone.toString())
//  }
//  convertToEncode("This is for testing purpose")


// program to find how many vowels are there in the sentence
// function countVowels(str){
//     strClone=str.split('')
//     let index=0;
//     for(let i=0;i<strClone.length;i++){
//         if(strClone[i]=='a' || 'e' ||'i' ||'o'||'u'){
//             count++
//         }
//     }
//     console.log(count)
// }

// program which accepts a string as input and swap the case of each character
// function convertLowercase(str){
//     strClone=str.split(' ')
//     for(let i=0;i<strClone.length;i++){
//         for(let j=0;j<strClone[i];j++){
//             if(j=0){
//                 strClone[i].chatAt(0)=strClone[i].charAt(0).toLowerCase()
//             }else{
//                 strClone[i].chatAt(j)=strClone[i].charAt(j).toUpperCase()
//             }
//         }
//     }
//     console.log(strClone.toString())

// }
// convertLowercase("This Is For Testing Purpose")

//next
// function swap(str){
//     let result=""
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i) == str.charAt(i).toUpperCase()){
//             result+=str.charAt(i).toLowerCase()
//         }
//         if(str.charAt(i) == str.charAt(i).toLowerCase()){
//             result+=str.charAt(i).toUpperCase()
//         }
//     }
//     console.log(result)
// }
// swap("This Is For Testing Purpose")

//Reverse all the words which are of odd length. The even length words are not changed
function rev(str){
    strClone=str.split(' ')
    console.log(strClone)
    var finalout=""
    for(let i=0;i<strClone;i++){
        count=strClone[i].length
        if(count%2==1){
            result=""
            for(let k=strClone[i].length;k>strClone[i].length;k--){
                result+=strClone.chatAt(i)
                console.log(result)
            }
            
            finalout +=result
        }
        finalout +=strClone[i]
    }
    console.log(finalout)
}
rev("This iss aaa testi purpo")