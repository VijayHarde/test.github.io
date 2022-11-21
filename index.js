let input = "my name is abc";
// ym eman si cba
array = [];
temp = "";
for(let i = 0;i<=input.length;i++){
    if(input[i] == " " || i == input.length){
        array.push(temp);
        temp = "";
    }else {
        temp = temp + input[i];
    }
}
console.log(array)

function reverseString(string)  {
    let strn = "";
    for(let i = string.length -1 ; i>=0;i--){
        strn =  strn + string[i];
    }
    return strn;
}
let answer = "";
 for(let i of array){
    console.log(i)
    answer += reverseString(i) + " ";
 }

 console.log(answer)