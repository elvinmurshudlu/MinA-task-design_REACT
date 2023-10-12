import React ,{useEffect,useState}from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({data}){
    const [chartDetails,setChartDetails] = useState({labels:[],data:[]})


     const options = {
        responsive: true,
        plugins: {
          legend: false
          
        },
      };

      const chartData = {
        labels: chartDetails.labels,
        datasets: [
          {
            label: '# of Votes',
            data: chartDetails.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
            
            borderWidth: 1,
          },
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
                <Pie data={chartData} />;
        </>
    )
}