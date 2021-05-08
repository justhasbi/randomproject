const fs = require('fs')

const readableStream = fs.createReadStream('./articles.txt', {
    highWaterMark: 10
})

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`)
    } catch (error) {
        console.log(error);
    }
})

readableStream.on('end', () => {
    console.log('DONE!')
})