import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import { useEffect } from 'react';
import pingService from './services/ping';

const App = () => {
  useEffect(() => {
    const pingServer = async () => {
      await pingService.createPing();
    };
    pingServer();

    // sends a hearbeat ping every 30 seconds
    const heartBeatPings = setInterval(async () => {
      await pingService.updateLog({
        type: 'HEARTBEAT',
      });
    }, 30000); 

    // stops the heartbeat ping after 5 minutes
    setTimeout(() => clearInterval(heartBeatPings), 300000);
  }, []);

  return (
    <div>
      <Header/>
      <main> 
        <Home/>
        <About/>
        { /* <Experience/> */}
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;