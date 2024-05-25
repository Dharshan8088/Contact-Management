import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useCovidData } from '../hooks/useCovidData';
import { ChartData, ChartOptions } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph= () => {
  const { historicalData } = useCovidData();
  const chartRef = useRef<ChartJS<'line'>>(null);

  
  useEffect(() => {
    if (chartRef.current && historicalData.data) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(75, 192, 192, 0.4)');
      gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [historicalData]);

  if (historicalData.isLoading) return <div>Loading...</div>;
  if (historicalData.isError) return <div>Error loading data</div>;

  const data: ChartData<'line'> = {
    labels: Object.keys(historicalData.data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(historicalData.data.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'COVID-19 Cases Over Time',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="h-64 w-full bg-gray-100 p-4 rounded-md shadow-md">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineGraph;
