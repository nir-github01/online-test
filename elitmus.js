//Elitmus Test 
//Q. remove vowels and convert Uppercase into lowercase as well print star(*) before consonants

function deleteVowels(str){
    let newStr='';
    let vowels=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(let i=0; i<str.length; i++){
        if(!vowels.includes(str[i])){
            newStr += '*'+str[i]
            newStr=newStr.toLowerCase();
            //console.log(newStr);
        }
    }
   console.log(newStr);
   
}
let str='aaddffggghesjFDSJKRIKDJKDFLKUIWEWYUGGFDMNJVLLURUFHJJKSDJtytytewhgewfhvvaoia';
deleteVowels(str)