arr = [1,2,-2,11,7,1]
arr =arr.sort()
console.log(arr)
function compareNumbers(a, b) {
    var result = a - b;
    console.log(result)
    return result    
  }  
var arr = arr.sort(compareNumbers)
console.log(arr)
