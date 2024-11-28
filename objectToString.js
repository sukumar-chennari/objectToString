
let obj= {name: "Alice", age: 25}

function objectToQueryString(obj){
    return Object.keys(obj)
    .map(key=>`${key}=${obj[key]}`)
    .join('&')
}
console.log(objectToQueryString(obj))