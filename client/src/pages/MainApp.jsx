import Header from './Header';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import { useEffect } from 'react';
import pingService from '../services/ping';

const MainApp = () => {
  useEffect(() => {
    const pingServer = async () => {
      await pingService.createPing();
    };
    pingServer();

    // sends a hearbeat ping every 30 seconds
    const heartBeatPings = setInterval(async () => {
      await pingService.updatePing({
        type: 'HEARTBEAT',
      });
    }, 30000);

    // stops the heartbeat ping after 5 minutes
    setTimeout(() => clearInterval(heartBeatPings), 300000);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        {/* <Experience/> */}
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default MainApp;
