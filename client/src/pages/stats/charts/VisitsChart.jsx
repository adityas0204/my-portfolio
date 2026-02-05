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
      }
    }
  }
};

const VisitsChart = () => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState('7')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPings = async () => {
      setLoading(true)
      try {
        const response = await pingService.getPings('ip', dateRange);
        setData(response.data)
      } catch (error) {
        console.error('Failed to fetch pings', error)
      }
      setLoading(false)
    };
    getPings();
  }, [dateRange]);

  const filterItems = [{value: '7', text: '7 Days'}, {value: '14', text: '14 Days'}, {value: '30', text: '30 Days'}, {value: '6', text: '6 Months'}]
  const handleRangeChange = event => {
    setDateRange(event.target.value)
  }

  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Daily Visits',
        data: data.map(item => item.count),
        backgroundColor: 'rgb(173, 193, 120)',
      }
    ]
  };

  return (
    <>
      {
        <div className='flex flex-col items-center gap-4'>
          <div className={`w-full transition-opacity duration-200 ${loading ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <Bar options={options} data={chartData} />
          </div>
          <RangeForm handleRangeChange={handleRangeChange} items={filterItems} disabled={loading} />
        </div>
      }
    </>
  )
}

export default VisitsChart