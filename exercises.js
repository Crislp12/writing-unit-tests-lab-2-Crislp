function octalToDecimal(arr) {
  return arr.split('').map((num,i) => num *(8**(arr.length-i-1))).reduce((x,y)=> x+y ,0)
}

function anagram(word, arr) {
  let newarr =[]
  for (let i = 0; i< arr.length; i++){
    
     let comp = arr[i].split("").sort().join("")
     let str = word.split("").sort().join("")
     
     str == comp ? newarr.push(arr[i]): []
     
 }
 return newarr
}

function triangle(...arr) {
  //Write code here
  return (arr.reduce((x,y) => x + y)) !== 180 || arr.some(x => x === 0) ? "invalid" : false || arr.some(x => x === 90) ? "right" : false || arr.some(x => x > 90) ? "obtuse" : "acute"
}

function fridayThe13ths(year) {
  //Write code here
  let count  = 0
  
  for (let i = 0; i < 12; i++){
    
  let friday = new Date(year, i, 13)

  if ( friday.getDay() === 5 && friday.getDate() ){
    
    count += 1
  }
  }
  return count
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
