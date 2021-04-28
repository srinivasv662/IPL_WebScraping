let name = "A";
let age = 65;


//module.exports ={};

// multiple exports
module.exports.name = name;
module.exports.age = age;

// console.log(module.exports.age);

// {name:"A", age:65}

// single exports
// the module.exports has become string not the object has mentioned above
module.exports = name;