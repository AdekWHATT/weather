import classes from './Main.module.css'
import City from './City/City';
import CelsFar from './CelsFar/CelsFar';
import Wind from './Wind/Wind';
import Pressure from './Pressure/Pressure';
import Humidity from './Humidity/Humidity';
import ChanseOfRain from './ChanseOfRain/ChanseOfRain';
import Temp from './Temp/Temp';
const Main = props => {
    return(
          <div className={classes.container}>
              <City
              getWeather={props.getWeather}
              city={props.city}/>
              <CelsFar/>
              <Wind/>
              <Pressure/>
            <Humidity/>
            <ChanseOfRain/>
            <Temp
            temp={props.temp}/>
</div>
    )
} 
export default Main;