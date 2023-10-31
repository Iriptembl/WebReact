import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ destinations }) => {
  const destinationNames = destinations.map((destination) => destination.name);
  const chartData = destinations.map((destination) => destination.chart);

  const data = {
    labels: destinationNames,
    datasets: [
      {
        label: "Tourist Count",
        data: chartData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Tourist Count",
        },
      },
    },
  };

  return (
    <div>
      <h2>Tourism Data</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
