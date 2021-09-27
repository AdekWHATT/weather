import classes from '../Main.module.css'
import loc from '../../img/location.png'
const City = props => {
    return (
        <div className={classes.a}>

            <div className={classes.a_city}>{props.city}</div>

            <div className={classes.a__smena}>
                Сменить город
            </div>
            <div className={classes.a_location}><img src={loc} />
                Мое местоположение</div>
        </div>
    )
}
export default City;