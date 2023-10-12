import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export function BarChart({data}){
    const [chartDetails,setChartDetails] = useState({labels:[],data:[]})


     const options = {
        responsive: true,
        plugins: {
          legend: false
          
        },
      };

      const chartData = {
        labels:chartDetails.labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: chartDetails.data,
            backgroundColor: 'red',
          }
        ],
      };



      useEffect(()=>{
        const labels = []
        const datas = []

        data.data?.forEach(m=>{
            labels.push(m.label)
            datas.push(m.vote)
          })

          console.log(datas,labels);

          setChartDetails({labels:labels,data:datas})

      },[])

    return (
        <>
        <Bar options={options} data={chartData} />
        </>
    )
}