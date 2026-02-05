import SimpleHeader from './SimpleHeader';
import VisitsChart from './charts/VisitsChart';

const Stats = () => {
  return (
    <div>
      <SimpleHeader />
      <main className='bg-bone'>
        <div className='grid grid-cols-2 grid-rows-2 p-3'>
          <div>placeholder</div>
          <VisitsChart />
        </div>
      </main>
    </div>
  );
};

export default Stats;
