import SimpleHeader from './SimpleHeader';
import VisitsChart from './charts/VisitsChart';
import ScrollChart from './charts/ScrollChart';
import DeviceChart from './charts/DeviceChart';

const Stats = () => {
  return (
    <div>
      <SimpleHeader />

      <main className="flex flex-col gap-5 p-5 bg-white">
  
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 bg-bone rounded-4xl p-6">
            
          </div>
          <div className="flex bg-bone rounded-4xl p-6">
            <ScrollChart />
            <DeviceChart />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 bg-bone rounded-4xl p-6">
            <VisitsChart unique={false} />
          </div>
          <div className="flex-1 bg-bone rounded-4xl p-6">
            <VisitsChart unique={true} />
          </div>
        </div>

      </main>

    </div>
  );
};

export default Stats;
