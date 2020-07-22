var i = 0
vart = setInterval(function() {
    console.log('i =', i)
    i++
    if (i === 3){
        clearInterval(t)
    }
}, 1000)