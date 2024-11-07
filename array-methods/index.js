const userArray = ["mohamed","farid","yassin", "foad"];
const userIdArray = [1,2,2,8,3,4]

const arrayToConcat = [11.5,30.2]

const mappedArray  = userIdArray.map(el => {
    return el * 2
})
// result : [2,4,6,8]
console.log(mappedArray)


const filtredArray =  userIdArray.filter(el => el > 1)
//result : [2,2,8,3,4]
console.log(filtredArray)


const findedUser = userArray.find(el => el = "mohamed")
//result : mohamed
console.log(findedUser)


userIdArray.sort((a,b)=> b - a);
//result : [8,4,3,2,2,1]
console.log(userIdArray)


const concatenedArray =  userIdArray.concat(arrayToConcat);
//or with spead operators
const concatenedArrayWithES6 =  [...userIdArray, ...arrayToConcat]
//result [1,2,2,8,3,4, 11.5,30.2]
console.log(concatenedArray)

