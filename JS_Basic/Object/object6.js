//character count from string


const str='maafgfxaacvbnamm';
let cnt=0;

const obj={};
for(let i=0;i<str.length;i++){

    if(obj[str[i]]){
        obj[str[i]]=obj[str[i]]+1;

    }else{
        obj[str[i]]=1;
    }

}
console.log(obj);





