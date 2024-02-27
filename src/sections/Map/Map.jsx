import Section from "../../components/Section/Section";
import "./Map.scss";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import { useStaticElement } from "../../tools/datoCmsTools";
import { StructuredText } from "react-datocms";

const Map = () => {
  const [mapText1] = useStaticElement("map1");
  const [mapText2] = useStaticElement("map2");
  return (
    <Section id="helyszin" container placeholder>
      <Title>
        Konferencia <span className="highlight">HELYSZÍN</span>
      </Title>
      <Text description>
        <StructuredText data={mapText1}></StructuredText>
      </Text>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5393.522374925251!2d19.058809000000004!3d47.475083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddaa3514e031%3A0x22ab4283e147d415!2sBME%20Q%20Building!5e0!3m2!1sen!2shu!4v1709043471452!5m2!1sen!2shu"
        width="800"
        height="450"
        style={{ border: 0, maxWidth: '100%' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Text description>
        <StructuredText data={mapText2}></StructuredText>
      </Text>
    </Section>
  );
};

export default Map;
