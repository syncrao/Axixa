let ary = [
    {catagory:"book", name:"yeh yaad", price:600},
    {catagory:"ele", name:"tv", price:600},
    {catagory:"auto", name:"tesla", price:600},
    {catagory:"book", name:"aur bhi", price:600},
    {catagory:"ele", name:"mobile", price:600},
    {catagory:"auto", name:"maruti", price:600},
    {catagory:"book", name:"kya kare", price:600},
    {catagory:"ele", name:"watch", price:600},
    {catagory:"auto", name:"tata", price:600}
]

let obj = {}

for (let i = 0; i < ary.length; i++) { 
    if (!obj[ary[i].catagory]) { 
        obj[ary[i].catagory] = []; 
    }
    obj[ary[i].catagory] = [...obj[ary[i].catagory],{name:ary[i].name, price:ary[i].price}]
}


console.log(obj);
