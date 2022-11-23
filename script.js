const inputRange = document.getElementById('inputRange')
const buttonDiscount = document.getElementById('buttonDiscount')

const changeRange = () => {
    let views = document.getElementById('views')
    let valuePerMonth = document.getElementById('value-per-month')

    const value = inputRange.value

    const valueAsNumber = Number(value)

    inputRange.style.backgroundImage = `linear-gradient(to  right, hsl(174, 77%, 80%) 0% ${valueAsNumber}%, hsl(224, 65%, 95%) ${valueAsNumber}%)`

    if(valueAsNumber >= 0 && valueAsNumber <= 20) {
        views.innerText = '10K'
        valuePerMonth.innerText = '8$'
    } else if(valueAsNumber >= 21 && valueAsNumber <= 40) {
        views.innerText = '50K'
        valuePerMonth.innerText = '12$'
    } else if(valueAsNumber >= 41 && valueAsNumber <= 60) {
        views.innerText = '100K'
        valuePerMonth.innerText = '16$'
    } else if(valueAsNumber >= 61 && valueAsNumber <= 80) {
        views.innerText = '500K'
        valuePerMonth.innerText = '24$'
    } else if(valueAsNumber >= 81) {
        views.innerText = '100K'
        valuePerMonth.innerText = '36$'
    }

    if(buttonDiscount.checked) {
        const textContent = valuePerMonth.textContent
        const no$ = textContent.replace('$', '')
        const valueOfTheTag = Number(no$)

        const discout = (valueOfTheTag * 12) * (25/100)
        const totalForYear = valueOfTheTag * 12 - discout
        const total = totalForYear / 12

        valuePerMonth.innerText = `${total.toString()}$`
    }
}

changeRange()

inputRange.addEventListener('change', changeRange)
buttonDiscount.addEventListener('change', changeRange)