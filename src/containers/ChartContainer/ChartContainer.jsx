import { ChartComp } from '../../components/Chart/Chart'
import {top10Desc} from '../../constants/top-10-desc'
import { allPie } from '../../constants/all-pie-chart'
import {top10Ascending} from '../../constants/top-10-ascending'
import { TableComponent } from '../../components/Table/Table'

export function ChartContainer(){
    return (
        <>
        <div className="graph-container">
            <ChartComp data={top10Desc}></ChartComp>
            <ChartComp data={top10Ascending}></ChartComp>
            <ChartComp data={allPie}></ChartComp>
            <div >
            <TableComponent></TableComponent>
            </div>

        </div>
        </>
    )
}