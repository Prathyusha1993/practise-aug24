// Given a string, Check if the characters of the given string can be rearranged to form a palindrome. 

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed
    }
    
    palindrome('madam'); // ababc, ababcd
    palindrome('racecar');
    
    function palindrome(str) {
    let length = str.length - 1;
    for(let i=0;i<str.length; i++){
    
    if(str[i] !== str[length - i]){  //m === m, a===
    return false;
    } 
    }
    return true;
    }
    
    //abccba - abc cba
    //aabccbaa - aabc cbaa
    
    
    function checkPalindromePermutation(str) {
      const charCount = new Map();
      for (const char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
          charCount.set(char, (charCount.get(char) || 0) + 1);
        }
      }
    
      let oddCount = 0;
      for (const count of charCount.values()) {
        if (count % 2 !== 0) oddCount++;
        if (oddCount > 1) return false;
      }
    
      return true;
    }
    
    console.log(checkPalindromePermutation("Tact Coa")); // true
    console.log(checkPalindromePermutation("abcd")); // false