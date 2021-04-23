import axios from 'axios'
import React, { useState } from 'react'
import classes from './SearchLocation.module.css'
import ShowData from './showData'


const SearchLocation = () => {
    const [location, setlocation] = useState('')

    const [data, setdata] = useState({
        place: 'opole',
        temparature: 0,
        feelsLike: 0,
        humidity: 0,
        wind_speed: 0,
        date: '',
        time: '',
    })



    const formChangeHandler = (event) => {
        setlocation(event.target.value)


    }
    const OnformSubmission = (event) => {
        event.preventDefault()
        axios('http://localhost:5000/wether?adress=' + location)
            .then((res) =>

                setdata((prevState) => {
                    return {
                        
                        place: res.data.location,
                        temparature: res.data.temperature.outsideTemperature,
                        feelsLike: res.data.temperature.feelsLike,
                        humidity: res.data.temperature.humidity,
                        wind_speed: res.data.temperature.wind_speed,
                        date: res.data.temperature.date,
                        time: res.data.temperature.time

                    }
                })



            )
            .catch((e) => console.log(e))


       
    }

    return (
        <div>
            <form onSubmit={OnformSubmission} className={classes.formcl}>
                <label>Use this site to get your weather</label>
                <div className={classes.infield}>

                    <input type="text" placeholder="Enter Location" onChange={formChangeHandler} />
                    <button type="submit">Enter</button>
                </div>

            </form>

            <ShowData data={data} location={location} />


        </div>


    )
}

export default SearchLocation;