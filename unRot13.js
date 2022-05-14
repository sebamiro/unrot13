function unRot13(str) {
  let newStr = "";
  for (let i in str){
    if (/[A-M]/.test(str[i])){
      newStr += String.fromCharCode(str.charCodeAt(i) + 13);
    }
    else if (/[N-Z]/.test(str[i])){
      newStr += String.fromCharCode(str.charCodeAt(i) - 13);
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}
