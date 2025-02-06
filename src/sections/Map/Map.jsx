import { StructuredText } from "react-datocms";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { useStaticElement } from "../../tools/datoCmsTools";
import "./Map.scss";

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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.494302532671!2d17.905660246875886!3d47.089379633031335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47699a693492be33%3A0xb041338ca1ff6cf9!2sPannon%20Egyetem%20M%C5%B1szaki%20Informatikai%20Kar!5e0!3m2!1sen!2shu!4v1738837248549!5m2!1sen!2shu"
        width="800"
        height="450"
        style={{ border: 0, maxWidth: "100%" }}
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

