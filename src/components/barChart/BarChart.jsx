import React from 'react'
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
import "./barChart.css"

ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


function BarChart() {
  const option = {
    responsive: false,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Modular Bar Chart",
      },
    },
  };
  
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Product A",
        data: [ 20, 30, 40, 50],
        backgroundColor: "green",
      },
      {
        // label:'Product B',
        data:[15,20,25,40],
        backgroundColor:'red'
      },
    ],
  };


  return (
    <div >
      <Bar data={data} />
    </div>
  )
}

export default BarChart