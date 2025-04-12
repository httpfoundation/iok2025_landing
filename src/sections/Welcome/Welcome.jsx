import { useEffect, useMemo, useState } from 'react';
import { StructuredText } from 'react-datocms';
import { motion } from 'framer-motion';
import WelcomeImage from '../../assets/img/welcome-img-2025-veszprem.png';
import WelcomeImageMobile from '../../assets/img/welcome-img-2025-veszprem-small.png';
import Bubble from '../../components/Bubble/Bubble';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import Calendar from '../../icons/Calendar';
import Location from '../../icons/Location';
import Ticket from '../../icons/Ticket';
import { useStaticElement } from '../../tools/datoCmsTools';
import './Welcome.scss';

const Overview = (props) => {
  return (
    <div className="overview">
      <OverviewItem>
        <Calendar />
        {props.date.toLocaleDateString('hu-HU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          weekday: 'long',
        })}
      </OverviewItem>
      <OverviewItem>
        <Location />
        (Veszprém) || (Online)
      </OverviewItem>
    </div>
  );
};

const OverviewItem = (props) => <div className="overview-item">{props.children}</div>;

const calculateCountdown = (target) => {
  const current = new Date();
  const diff = Math.max(Math.round((target - current) / 1000), 0); // seconds
  const days = Math.floor(diff / (24 * 60 * 60));
  const hours = Math.floor((diff - days * 24 * 60 * 60) / (60 * 60));
  const minutes = Math.floor((diff - days * 24 * 60 * 60 - hours * 60 * 60) / 60);
  return { days, hours, minutes };
};

const Welcome = () => {
  const target = useMemo(() => new Date('2025-03-29T09:30:00'), []);
  const [countdown, setCountdown] = useState({});
  const [welcomeText] = useStaticElement('welcome');
  useEffect(() => {
    setCountdown(calculateCountdown(target));
    const interval = window.setInterval(() => {
      setCountdown(calculateCountdown(target));
    }, 1 * 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <Section container placeholder id="welcome">
      <div className="row">
        <div className="col-md-6 col-12">
          {/* <div className="bubbles">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <Bubble title={countdown.days} subtitle="nap" corners={["bottom-left"]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Bubble title={countdown.hours} subtitle="óra" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Bubble title={countdown.minutes} subtitle="perc" corners={["top-left"]} />
            </motion.div>
          </div> */}
          <div className="countdown">
            <div className="triangle"></div>
            <div className="countdown-item">
              <div className="number">{countdown.days}</div>
              <div className="unit">nap</div>
            </div>
            <div className="triangle"></div>
            <div className="countdown-item">
              <div className="number">{countdown.hours}</div>
              <div className="unit">óra</div>
            </div>
            <div className="triangle"></div>
            <div className="countdown-item">
              <div className="number">{countdown.minutes}</div>
              <div className="unit">perc</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Overview date={target} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <img src={WelcomeImageMobile} alt="IOK 2025" className="welcome-image-mobile" />
            <div className="welcome-image-mobile-spacer"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1>
              Informatikai Oktatási Konferencia <span className="highlight">2025</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
          >
            <StructuredText data={welcomeText} />
          </motion.div>
          <div className="buttons">
            {/*<motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
            >
              <Button secondary bold>
                További információ
              </Button>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.53 }}
            >
              <Button href="#regisztracio" bold>
                <Ticket />
                Regisztráció
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 4,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 3.5, ease: [0.25, 0.1, 0.25, 1] },
          x: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
        }}
      >
        <img src={WelcomeImage} alt="" className="welcome-image" />
        <img src={WelcomeImageMobile} alt="" className="welcome-image-small" />
      </motion.div>
    </Section>
  );
};

export default Welcome;
