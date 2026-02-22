import pingService from '../../../services/ping';
import RangeForm from './RangeForm';
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

const VisitsChart = ({ unique }) => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState('7');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPings = async () => {
      setLoading(true);
      try {
        const response = await pingService.getPings('ip', dateRange, unique);
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch pings', error);
      }
      setLoading(false);
    };
    getPings();
  }, [dateRange, unique]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${unique ? 'Unique Visitors' : 'Visits'} Over Time`,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgb(108, 88, 76)',
          drawBorder: false,
        },
        ticks: {
          precision: 0
        }
      }
    }
  };

  const filterItems = [{value: '7', text: '7 Days'}, {value: '14', text: '14 Days'}, {value: '30', text: '30 Days'}, {value: '6', text: '6 Months'}];
  const handleRangeChange = event => {
    setDateRange(event.target.value);
  };

  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: unique ? 'Unique Visitors' : (dateRange === '6' ? 'Monthly Visits' : 'Daily Visits'),
        data: data.map(item => item.count),
        backgroundColor: 'rgb(173, 193, 120)',
      }
    ]
  };

  return (
    <>
      {
        <div className='flex flex-col items-center gap-4 p-4 rounded-4xl bg-bone'>
          <div className={`w-full overflow-x-auto transition-opacity duration-200 ${loading ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <div className="h-[300px] min-w-[600px] md:h-auto md:min-w-full">
              <Bar options={options} data={chartData} />
            </div>
          </div>
          <div className="w-full flex justify-center mt-2">
            <RangeForm handleRangeChange={handleRangeChange} items={filterItems} disabled={loading} />
          </div>
        </div>
      }
    </>
  );
};

export default VisitsChart;