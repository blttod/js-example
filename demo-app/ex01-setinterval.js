var i = 0
vart = setInterval(function() {
    console.log('i =', i)
    i++
    if (i === 10){
        console.log('done')
        clearInterval(t)
    }
}, 1000)