import { useState } from 'react'
import classes from './SearchLocation.module.css'



const ShowData = (props) => {

    let x = <p>ENTER VALID DATA</p>

    if (props.location !== '') {
        x = <div>
            <h3>{props.location}</h3>

            <hr />
            <p>place : {props.data.place}</p>

            <div className={classes.fullData}>

                <h4>Temparature   :   {props.data.temparature}</h4>
                <h4>FeelsLike   :   {props.data.feelsLike}</h4>
                <h4>Humidity   :   {props.data.humidity}</h4>
                <h4>WindSpeed   :   {props.data.wind_speed}</h4>
                <h4>Date   :   {props.data.date}</h4>
                <h4>Time   :   {props.data.time}</h4>
            </div>
        </div>
    }






    return (
        <div>
            {x}
        </div>
    )
}

export default ShowData;