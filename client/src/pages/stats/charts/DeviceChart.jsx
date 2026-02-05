import pingService from '../../../services/ping';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Device Split',
    },
  },
};

const DeviceChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPings = async () => {
      try {
        const response = await pingService.getPings('device');
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch pings', error);
      }
    };
    getPings();
  }, []);

  const chartData = {
    labels: data.map(item => item.device),
    datasets: [{
      label: '# of Times Section Visited',
      data: data.map(item => item.count),
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
    }]
  };

  return (
    <div>
      <Doughnut options={options} data={chartData} />
    </div>
  );
};

export default DeviceChart;