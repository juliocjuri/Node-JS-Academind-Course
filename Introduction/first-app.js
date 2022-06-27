console.log("This will be executed through Node")

const fs = require('fs') //fs means "file system"

fs.writeFileSync('Hello.txt', 'This is a created file')