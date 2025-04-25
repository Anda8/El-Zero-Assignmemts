let st = "elzero";
// 1
const result = [...st].map((char, i) => i ? char.toLowerCase() : char.toUpperCase()).join('');
console.log(result);
// 2
let re = st.charAt(0).toUpperCase()+ st.slice(1).toLowerCase();
console.log(re);
// 3
re = st[0].toUpperCase() + st.substring(1);
console.log(re);
// 4
re = st[0].toLocaleUpperCase() + st.substr(1);
console.log(re);
// 5
re = [...st][0].toUpperCase() + st.slice(1);
console.log(re);
// 6
re = st.replace(/^./, firstChar => firstChar.toUpperCase());
console.log(re);
// 7
re = [...st].reduce((acc, c, i) => acc + (i ? c : c.toUpperCase()), '');
console.log(re);
// Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"