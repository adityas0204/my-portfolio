import SimpleHeader from './SimpleHeader';
import VisitsChart from './charts/VisitsChart';
import ScrollChart from './charts/ScrollChart';
import DeviceChart from './charts/DeviceChart';
import TimeDisplay from './charts/TimeDisplay';
import HoverDisplay from './charts/HoverDisplay';

const Stats = () => {
  return (
    <div>
      <SimpleHeader />

      <main className="flex flex-col gap-5 p-5 bg-white">
  
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col justify-center bg-bone rounded-4xl p-6 text-5xl md:text-9xl font-bold text-center text-browndark font-caesar overflow-hidden">
            <TimeDisplay />
            <HoverDisplay />
          </div>
          <div className="flex flex-col md:flex-row bg-bone rounded-4xl p-6 gap-6">
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
