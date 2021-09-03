const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n) {
    const shower = document.getElementById('body')
    const value = document.createElement('h4')
    value.innerText = n.toString();
    shower.appendChild(value)

}

function kata1() {

    const calc = document.getElementById('kata1')
    let result = []
    for (let i = 1; i <= 25; i++) {
        result.push(i)
    }
    showResults(result)
    return result

}

function kata2() {
    const calc = document.getElementById('kata2')
    let result = []
    for (let i = 25; i >= 1; i--) {
        result.push(i)
    }
    showResults(result)
    return result
}

function kata3() {
    const calc = document.getElementById('kata3')

    let result = []
    for (let i = -1; i >= -25; i--) {
        result.push(i)
    }

    showResults(result)
    return result
}


function kata4() {
    const calc = document.getElementById('kata4')

    let result = []
    for (let i = -25; i <= -1; i++) {
        result.push(i)
    }

    showResults(result)
    return result
}

function kata5() {
    const calc = document.getElementById('kata5')

    let result = []
    for (let i = 25; i >= -25; i--) {
        if (i % 2 != 0) {
            result.push(i)
        }

    }

    showResults(result)
    return result
}

function kata6() {
    const calc = document.getElementById('kata6')

    let result = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            result.push(i)
        }

    }

    showResults(result)
    return result
}

function kata7() {
    const calc = document.getElementById('kata7')

    let result = []
    for (let i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            result.push(i)
        }

    }

    showResults(result)
    return result
}

function kata8() {
    const calc = document.getElementById('kata8')

    let result = []
    for (let i = 100; i > 0; i--) {
        if (i % 7 == 0 || i % 3 == 0) {
            result.push(i)
        }

    }

    showResults(result)
    return result
}

function kata9() {
    const calc = document.getElementById('kata9')

    let result = []
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 2 != 0) {
            result.push(i)
        }

    }

    showResults(result)
    return result
}

function kata10() {
    const calc = document.getElementById('kata10')

    let result = []

    result = sampleArray


    showResults(result)
    return result
}

function kata11() {
    const calc = document.getElementById('kata11')

    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            result.push(sampleArray[i])
        }

    }

    showResults(result)
    return result
}

function kata12() {
    const calc = document.getElementById('kata12')

    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 != 0) {
            result.push(sampleArray[i])
        }

    }

    showResults(result)
    return result
}

function kata13() {
    const calc = document.getElementById('kata13')

    let result = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0) {
            result.push(sampleArray[i])
        }

    }

    showResults(result)
    return result
}

function kata14() {
    const calc = document.getElementById('kata14')

    let result = []

    for (let i = 0; i < sampleArray.length; i++) {

        sampleArray[i] *= sampleArray[i]
        result.push(sampleArray[i])

    }

    showResults(result)
    return result
}

function kata15() {
    const calc = document.getElementById('kata15')

    let result = []
    let receiver = 0
    for (let i = 1; i <= 20; i++) {
        receiver += i
        result.push(receiver)

    }

    showResults(result)
    return result
}

function kata16() {
    const calc = document.getElementById('kata16')

    let result = []
    let receiver = 0
    for (let i = 0; i < sampleArray.length; i++) {

        receiver += sampleArray[i]
        result.push(receiver)

    }

    showResults(result)
    return result
}

function kata17() {
    const calc = document.getElementById('kata17')

    let result = Infinity

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < result) {
            result = sampleArray[i]
        }
    }

    showResults(result)
    return result
}

function kata18() {
    const calc = document.getElementById('kata18')

    let result = 0

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > result) {
            result = sampleArray[i]
        }
    }

    showResults(result)
    return result
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    const calc = document.getElementById('kata19')

    for (let i = 1; i <= 20; i++) {
        const rectangle = document.createElement('div')
        rectangle.style.width = "100px"
        rectangle.style.height = "20px"
        rectangle.style.backgroundColor = "grey";
        rectangle.style.margin = "10px"
        calc.appendChild(rectangle)
    }

}

function kataBonus2() {
    const calc = document.getElementById('kata20')
    let boxSize = 105
    for (let i = 1; i <= 20; i++) {
        const rectangle = document.createElement('div')
        rectangle.style.width = boxSize + "px"
        boxSize += 5
        rectangle.style.height = "20px"
        rectangle.style.backgroundColor = "grey";
        rectangle.style.margin = "0px 0px 10px 0px"
        rectangle.style.padding = "0"
        calc.appendChild(rectangle)
    }
}

function kataBonus3() {
    const calc = document.getElementById('kata21')
    let boxSize = 0
    for (let i = 0; i < sampleArray.length; i++) {
        const rectangle = document.createElement('div')
        rectangle.style.width = sampleArray[i] + "px"
        rectangle.style.height = "20px"
        rectangle.style.backgroundColor = "grey";
        rectangle.style.margin = "10px"
        calc.appendChild(rectangle)
    }

}

function kataBonus4() {
    const calc = document.getElementById('kata22')
    let boxSize = 0
    for (let i = 1; i <= sampleArray.length; i++) {

        const rectangle = document.createElement('div')
        if (i % 2 != 0) {
            rectangle.style.backgroundColor = "red";
        } else {
            rectangle.style.backgroundColor = "grey";
        }
        rectangle.style.width = sampleArray[i] + "px"
        rectangle.style.height = "20px"

        rectangle.style.margin = "10px"
        calc.appendChild(rectangle)
    }
}

function kataBonus5() {
    const calc = document.getElementById('kata23')
    let boxSize = 0
    for (let i = 0; i < sampleArray.length; i++) {

        const rectangle = document.createElement('div')
        if (sampleArray[i] % 2 == 0) {
            rectangle.style.backgroundColor = "red";
        } else {
            rectangle.style.backgroundColor = "grey";
        }
        rectangle.style.width = sampleArray[i] + "px"
        rectangle.style.height = "20px"

        rectangle.style.margin = "10px"
        calc.appendChild(rectangle)
    }
}