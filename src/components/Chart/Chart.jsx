import style from './style.module.css'

import { BarChart } from './BarChart';
import { PieChart } from './PieChart';


export function ChartComp({data}){

   

    return (
        <div>
            <h6>{data.title}</h6>
        <div className={style["chart"] + ' d-flex justify-content-center' + ' mt-1'}>
                {data?.type === 'chart-bar' && <BarChart data={data}></BarChart>}
                {data.type === 'chart-pie' && 
                <div className='d-flex justify-content-center w-75'>
                    <PieChart data={data}></PieChart>
                </div>
                }
        </div>
        </div>
    )
}