const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector("#message-3")



messageOne.textContent = ''

const getTime = time => new Date(2019, 9, 2, time.substring(0, 2), time.substring(3, 5), 0, 0);


function changeImage(time) {
    const time1 = '08:00'
    var t1 = new Date(("01/01/2000 "+ time));
    var t2 = new Date(("01/01/2000 "+ time1));
    if (t1 < t2) {
        console.log('running');
        document.getElementById('mc').style.backgroundImage = 'url("../img/weather1.jpg")';
    }
    else {
        console.log('dd');
        document.getElementById('mc').style.backgroundImage = 'url("../img/img2.jpeg")';
    }


}
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'


    messageTwo.textContent = ''

    fetch('/wether?adress=' + location).then((res) => {
        res.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error


            }
            else {

                messageOne.textContent = data.location
                messageTwo.textContent = ' OutSide Temperature : ' + data.temperature.outsideTemperature + ' Feels like : ' + data.temperature.feelsLike + " humidity :" + data.temperature.humidity + " wind-speed : " + data.temperature.wind_speed
                messageThree.textContent = " Time : " + data.temperature.time + "  Date: " + data.temperature.date;


                const currentTime = data.temperature.time;
                changeImage(currentTime);
            }

        })
    })
    
})




