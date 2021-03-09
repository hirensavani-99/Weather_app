const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


messageOne.textContent = ''

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/wether?adress=' + location).then((res) => {
        res.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
                
            }
            else {
                
                messageOne.textContent = data.location
                messageTwo.textContent = 'OutSide Temperature : ' + data.temperature.outsideTemperature + '  Feels like : '+data.temperature.feelsLike
                
                }

        })
    })
})