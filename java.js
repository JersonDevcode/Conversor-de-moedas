const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin =0.0000049

const convertvalues = () => {
    const inputReais = document.getElementById('input-real').value
    const realvaluetext = document.getElementById('real-value-text')
    const currencyvaluetext = document.getElementById('currency-value-text')

    realvaluetext.innerHTML = inputReais

    realvaluetext.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dolar Americano") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === "Bitcoin") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais * bitcoin)
    }

}


changeCurrency = () => {
    const currencyname = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-Img')
    if (select.value === 'US$ Dolar Americano') {
        currencyname.innerHTML = 'Dólar Americano'
        currencyImg.src = "./assets/Estados Unidos.svg"
    }

    if (select.value === '€ Euro') {
        currencyname.innerHTML = 'Euro'
        currencyImg.src = "./assets/Euro.svg"
    }

    if (select.value === 'Bitcoin') {
        currencyname.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/Bitcoin.svg"
    }
    convertvalues ()
}



button.addEventListener('click', convertvalues)
select.addEventListener('change', changeCurrency)