import SimpleHeader from './SimpleHeader';
import pingService from '../services/ping';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Visits Over Time',
    },
  },
};

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPings = async () => {
      const response = await pingService.getPings('ip');
      setData(response.data);
    };
    getPings();
  }, []);

  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Daily Visits',
        data: data.map(item => item.count),
        backgroundColor: 'rgb(108, 88, 76)',
        borderWidth: 1,
      }
    ]
  };

  return (
    <div>
      <SimpleHeader />
      <main>
      
        <div>
          {
            data.length > 0 ? (
              <Bar options={options} data={chartData} />
            ) : (
              <p>Chart Loading ...</p>
            )
          }
        </div>

      </main>
    </div>
  );
};

export default Stats;
