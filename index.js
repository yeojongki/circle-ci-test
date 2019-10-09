const fs = require('fs-extra')
const p1 = require('./package/project1')
const p2 = require('./package/project2')

console.log(fs.readJSONSync('./package.json'))
console.log(p1, p2)
