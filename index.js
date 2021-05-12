class Formatter {
  static capitalize(str){
    let new_str = str[0].toUpperCase() + str.substr(1,str.length);
    return new_str
  }
  
  
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  
  static titleize(string) {
    let words = string.split(' ');
    for (let n = 0; n < words.length; n++) {
      if(words[n]!=="the" && words[n]!=="a"&& words[n]!=="an"&& words[n]!=="but" && words[n]!=="of" && words[n]!=="for"&& words[n]!=="at"&& words[n]!=="by"&& words[n]!=="from" ){
        words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
      }
    }
    return words.join(' ');
  }
}