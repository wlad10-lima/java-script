
const convertbutton = document.querySelector(".convert-button"); //nome que precisa colocar na class do button
const currencySelect= document.querySelector(".currency-select")

function convertValues(){
    
  const inputCurrencyValue =  document.querySelector(".input-currency").value;

    const currencyvaluetoconvert=document.querySelector(".currency-value-to-converter")//valor em real
    const currencyvaluetoconverted=document.querySelector(".currency-value")//outras moedas
    const dolarToday=5.2;
    const euroToday=6.2

    if(currencySelect.value=='dolar'){//se o select tiver selecionado o valor do dólar entra aqui
        currencyvaluetoconverted.innerHTML= new Intl.NumberFormat("en-US",{

            style:"currency",
            currency:"USD",



        
    
        }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value=='euro'){//se o select tiver selecionado o valor do euro entra aqui
        currencyvaluetoconverted.innerHTML= new Intl.NumberFormat(de-DE,{
            style:"currency",
            currency:"EUR"
    }).format(inputCurrencyValue/euroToday)
  
}

currencyvaluetoconvert.innerHTML= new Intl.NumberFormat("pt-Br",{

    style:"currency",
    currency:"BRL"
}).format( inputCurrencyValue)  
}

function changecurrency() {

        const currencyname=document.getElemenBYLD("currencyname")
const currencyimage=document.querySelector(".currency-img")

        if (currencySelect.value==dolar) {
            currencyname.innerHTML="dolar americano"
        currencyimage.src="./assets/dolar.png"
        }
      if (currencySelect.value==euro) {
            currencyname.innerHTML="Euro"
            currencyimage.src="./assets/euro.png"
}

convertValues() 
}
convertbutton.addEventListener("change", changecurrency)

convertbutton.addEventListener("click", convertValues)