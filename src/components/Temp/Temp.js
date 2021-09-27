import classes from '../Main.module.css'
import sun from '../../img/sun.png'
const Temp = props => {
    return (
        <div className={classes.c}>
            <div className={classes.c_temp}>{props.temp}</div>
            <div className={classes.c_img}>
             <img src={sun}/>
             </div>
               <div className={classes.c_valueWeather}>
                Преимущественно солнечно
            </div>
        </div>
    )
}
export default Temp;