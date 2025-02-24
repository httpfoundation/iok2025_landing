import { useEffect, useMemo, useState } from "react";
import { StructuredText } from "react-datocms";
import Fade from "react-reveal/Fade";
import WelcomeImage from "../../assets/img/welcome-img-2025-veszprem.png";
import Bubble from "../../components/Bubble/Bubble";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import Calendar from "../../icons/Calendar";
import Location from "../../icons/Location";
import Ticket from "../../icons/Ticket";
import { useStaticElement } from "../../tools/datoCmsTools";
import "./Welcome.scss";

const Overview = (props) => {
  return (
    <div className="overview">
      <OverviewItem>
        <Calendar />
        {props.date.toLocaleDateString("hu-HU", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
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
  const target = useMemo(() => new Date("2025-03-29T09:30:00"), []);
  const [countdown, setCountdown] = useState({});
  const [welcomeText] = useStaticElement("welcome");
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
            <Fade left delay={200}>
              <Bubble title={countdown.days} subtitle="nap" corners={["bottom-left"]} />
            </Fade>
            <Fade left delay={100}>
              <Bubble title={countdown.hours} subtitle="óra" />
            </Fade>
            <Fade left delay={0}>
              <Bubble title={countdown.minutes} subtitle="perc" corners={["top-left"]} />
            </Fade>
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
          <Fade top delay={300}>
            <Overview date={target} />
          </Fade>
          <Fade left delay={350}>
            <img
              src={WelcomeImage}
              alt="IOK 2025"
              className="welcome-image-mobile"
              style={{ marginTop: "-80px" }}
            />
          </Fade>
          <Fade top delay={400}>
            <h1>
              Informatikai Oktatási Konferencia <span className="highlight">2025</span>
            </h1>
          </Fade>
          <Fade top delay={440}>
            <StructuredText data={welcomeText} />
          </Fade>
          <div className="buttons">
            {/*<Fade top delay={480}>
                            <Button secondary bold>
                                További információ
                            </Button>
                        </Fade> */}
            <Fade top delay={530}>
              <Button href="#regisztracio" bold>
                <Ticket />
                Regisztráció
              </Button>
            </Fade>
          </div>
        </div>
      </div>
      <Fade right duration={1300}>
        <img src={WelcomeImage} alt="" className="welcome-image" />
      </Fade>
    </Section>
  );
};

export default Welcome;

