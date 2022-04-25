const fs = require('fs');

function read(path)
{
    fs.readdir(path, (err, data) =>{
        if(err) {
            console.log(err);
        }
        else    {
            for(let element of data){
                let c = `./File/${element}`
                console.log(c);
                readFile(c);
            }
        }
    })    
}

function readFile(path)
{
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(err)
        console.log(err)
        else{
            console.log(data);
        }
    })
}

module.exports  =   {
    read
};