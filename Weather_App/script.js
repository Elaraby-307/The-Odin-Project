const inp_location = document.getElementById('location')
const get_result = document.getElementById('btn')
const form = document.querySelector('form')
let result = document.createElement('p')
let transform = document.createElement('button')
let curr_temp;

function to_fahrenheit(temp){
    return ((temp * 9/5) + 32).toFixed(2)
}


function to_celisious(temp){
    return ((temp - 32) * 5/9).toFixed(2)
}


get_result.addEventListener('click', element => {
    if(inp_location.value === undefined){
        throw new Error("location value can't be undefined")
    }
    element.preventDefault();
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inp_location.value}?key=CP7RZYL9E9XFVTHFKAVUDKE24`)
    .then( 

        (response) => response.json()
        
    ).then(
        (data) => {
            console.log(data.currentConditions.temp)
            temp = data.currentConditions.temp
            result.innerHTML = `Temp of ${inp_location.value} is <span style="color: red; font-size: 25px;">${data.currentConditions.temp}</span>`
            form.appendChild(result)
            transform.textContent = 'To Celsius'
            form.appendChild(transform)
        }
    ).catch(
        (error) => console.log(error)
    )
})








transform.addEventListener('click', element => {
    element.preventDefault()
    if(transform.textContent === 'To Celsius'){
        result.innerHTML = `Temp of ${inp_location.value} is <span style="color: red; font-size: 25px;">${to_celisious(temp)}</span>`
        transform.textContent = 'To Fahrenheit'
    }else if(transform.textContent === 'To Fahrenheit'){
        result.innerHTML = `Temp of ${inp_location.value} is <span style="color: red; font-size: 25px;">${to_fahrenheit(temp)}</span>`
        transform.textContent = 'To Celsius'
    }
})

