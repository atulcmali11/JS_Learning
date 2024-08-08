let str="umesh bagal";

const vow="aeiou";
//count=0;
result="";

for(let i=0;i<str.length;i++){
    if(vow.includes(str.charAt(i))){
        //count=count+1;
        result=result+str.charAt(i);
    }
}
//console.log(count);
console.log(result.length);
console.log(result);




