const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector("#message-3")
const messagecontainer = document.querySelector(".message-container")



messageOne.textContent = ''

const getTime = time => new Date(2019, 9, 2, time.substring(0, 2), time.substring(3, 5), 0, 0);

messageOne.style.opacity = 0
messageTwo.style.opacity = 0
messageThree.style.opacity = 0
messagecontainer.style.opacity = 0

function changeImage(time) {
    const time1 = '08:00'
    var t1 = new Date(("01/01/2000 " + time));
    var t2 = new Date(("01/01/2000 " + time1));
    if (t1 < t2) {
        console.log('running');
        document.getElementById('mc').style.backgroundImage = 'url("../img/1.jpg")';
    }
    else {
        console.log('dd');
        document.getElementById('mc').style.backgroundImage = 'url("../img/2.jpg")';
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
                messageOne.style.opacity = 1
                messageTwo.style.opacity = 0
                messageThree.style.opacity = 0
                messagecontainer.style.opacity = 1

            }
            else {

                messageOne.textContent = data.location
                messageTwo.textContent = ' OutSide Temperature : ' + data.temperature.outsideTemperature + ' Feels like : ' + data.temperature.feelsLike + " humidity :" + data.temperature.humidity + " wind-speed : " + data.temperature.wind_speed
                messageThree.textContent = " Time : " + data.temperature.time + "  Date: " + data.temperature.date;

                messageOne.style.opacity = 1
                messageTwo.style.opacity = 1
                messageThree.style.opacity = 1
                messagecontainer.style.opacity = 1
                const currentTime = data.temperature.time;
                changeImage(currentTime);
            }

        })
    })

})




