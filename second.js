function welcome()  {
    console.log("Welcome to Nodejs");
}

function successful(param1)   {
    console.log("Basic code execution successful"+ param1);
}

// welcome();
// successful();

module.exports = {
    
    starting:welcome,
    success:successful
};