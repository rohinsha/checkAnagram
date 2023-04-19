//str1=listeni;
//str2=silenti;

//mapObj1={l:0,i:1,s:2,t:3,e:4,n:5};
//mapObj2={l:0,i:1,s:2,t:3,e:4,n:5};

// algo
// 1)first make two map Object and store their frequencies;
// 2)and then run another for in to iterate the object and check if both have same frequencies for each letter
function checkForAnagram(str1, str2) {
  let mapObj1 = {};
  let mapObj2 = {};
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (!mapObj1[str1[i]]) mapObj1[str1[i]] = 0;
    if (!mapObj2[str2[i]]) mapObj2[str2[i]] = 0;
    mapObj1[str1[i]] += 1;
    mapObj2[str2[i]] += 1;
  }
  for (let ind in mapObj1) {
    if (mapObj1[ind] === mapObj2[ind]) {
      return "anagram exists";
    } else {
      return "Not an anagram";
    }
  }
  // console.log(mapObj1);
  // console.log(mapObj2);
}

console.log(checkForAnagram("silsensti", "slistesni"));
