//----------------------------------closure in javascript--------------------------------------
function addNum(a){
    return function (b){
        return function (c){
            return (a+b+c)
        }
    }
}
const additionOfNums = addNum(3)(2)(1)
console.log(additionOfNums)

