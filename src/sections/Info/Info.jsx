import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import Bubble from "../../components/Bubble/Bubble";
import "./Info.scss";
import LightBulb from "../../icons/LightBulb";
import Networking from "../../icons/Networking";
import Star from "../../icons/Star";
import Tools from "../../icons/Tools";
import { StructuredText } from "react-datocms";
import { useStaticElement } from "../../tools/datoCmsTools";

const Info = () => {
  const [infoText1] = useStaticElement("info1");
  const [infoText2] = useStaticElement("info2");

  return (
    <Section container placeholder id="info-section">
      <Title>
        Legyünk ismét <span className="highlight">EGYÜTT</span>!
      </Title>
      <Text subtitle>
        <StructuredText data={infoText1} />
      </Text>

      <div className="row">
        <div className="col-md-6 col-12">
          <div className="squares">
            <div className="square blue large">
              <div className="inner">
                <div className="square-icon">
                  <LightBulb />
                </div>
                <div className="square-title">Inspiráció</div>
              </div>
            </div>
            <div className="square">
              <div className="inner">
                <div className="square-title">Közösségi kapcsolatok</div>
              </div>
            </div>
            <div className="square">
              <div className="inner">
                <div className="square-title">Versenyképes oktatás</div>
              </div>
            </div>
            <div className="square purple">
              <div className="inner">
                <div className="square-title">Piacképes tudás</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <Title subtitle>Töltődj fel a legfrissebb információkkal!</Title>
          <Text>
            <StructuredText data={infoText2} />
          </Text>
        </div>
      </div>
    </Section>
  );
};

export default Info;
