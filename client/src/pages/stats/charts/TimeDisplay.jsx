import pingService from '../../../services/ping';
import SeamlessMarquee from './SeamlessMarquee';
import { useEffect, useState } from 'react';

const AverageDisplayText = () => {
  const [data, setData] = useState(-1);

  useEffect(() => {
    const getPings = async () => {
      try {
        const response = await pingService.getPings('time');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch pings', error);
      }
    };
    getPings();
  }, []);

  const formattedData = data === -1 ? 'Loading... ' : `Average Duration: ${data}`;

  return (
    <SeamlessMarquee text={formattedData} />
  )
}

export default AverageDisplayText;