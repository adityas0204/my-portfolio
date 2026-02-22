import pingService from '../../../services/ping';
import SeamlessMarquee from './SeamlessMarquee';
import { useEffect, useState } from 'react';

const TimeDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getPings = async () => {
      try {
        const response = await pingService.getPings('hover');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch pings', error);
      }
    };
    getPings();
  }, []);

  console.log(data)

  const formattedData = data === null ? 
                        'Loading... ' : 
                        `Average Hovers: ${data.averageHovers} Total Hovers: ${data.totalHovers}`;

  return (
    <SeamlessMarquee text={formattedData} />
  )
}

export default TimeDisplay;