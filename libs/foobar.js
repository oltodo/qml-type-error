function barfoo() {
    return Promise.resolve('Hello World!')
}

async function foobar() {
    const msg = await barfoo()
    console.log(msg)
}

module.exports = foobar