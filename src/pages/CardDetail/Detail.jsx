import style from './style.module.css'
import {MapComponent} from "../../components/Map/MapComponent"
import { ChartContainer } from '../../containers/ChartContainer/ChartContainer'

export function Detail(){
    return(
        <>
        <div className='card-stats-container row' >

                    <div className="col-12 col-md-8 p-2  ">
                        <MapComponent></MapComponent>
                    </div>
                    <div className="col-12 col-md-4 p-2 h-100">
                       <ChartContainer></ChartContainer>
                    </div>
                    </div>

        </>
    )
}