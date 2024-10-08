import http from 'node:http'
import { Transform } from 'node:stream'


class InverseNumberStream extends Transform {
    _transform(chunck, encoding, callback){
        const transformed = Number(chunck.toString()) * -1
        console.log(transformed)
        callback (null, Buffer.from(String(transformed)))
    }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunck of req) {
        buffers.push(chunck)
    }    

    const FullStreamContent = Buffer.concat(buffers).toString()

    console.log(FullStreamContent)

    return res.end(FullStreamContent)

    // return req
    //     .pipe(new InverseNumberStream)
    //     .pipe(res)
})

server.listen(3334)