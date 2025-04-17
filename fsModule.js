const fs = require('fs');

fs.writeFile('example.ts',"this is a example file", (err)=>{
    if(err){
        console.error("Error writing file", err);
    }
    else{
        console.log("File written successfully");
        fs.readFile('example.ts','utf8',(err,data)=>{
            if(err){
                console.log("Error reading file", err);
            }
            else{
                console.log("File content:", data);
            }
        })
    }
})

// fs.rename('example.ts','example1.ts',(err)=>{   
//     if(err){
//         console.log("Error renaming file", err);
//     }
//     else{
//         console.log("File renamed successfully");
//     }
// })

fs.appendFile('example1.ts', 'This is appended text', (err) => {
    if (err) {
        console.error("Error appending to file", err);
    } else {
        console.log("Text appended successfully");
    }
})

fs.unlink('example1.ts', (err) => {
    if (err) {
        console.error("Error deleting file", err);
    } else {
        console.log("File deleted successfully");
    }
})