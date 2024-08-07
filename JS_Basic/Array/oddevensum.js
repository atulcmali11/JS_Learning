
const a=[1,2,3,4,5];
let sum=0;
for(let i=0;i<a.length;i++){
    if(a[i]%2==1)
     sum=sum+a[i];

}
console.log(sum);
const sqr=a.map(ele=>ele*ele);
console.log(sqr);
