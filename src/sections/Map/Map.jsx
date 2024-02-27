import Section from "../../components/Section/Section"
import "./Map.scss"
import Title from "../../components/Title/Title"
import Text from "../../components/Text/Text"
import { useStaticElement } from '../../tools/datoCmsTools'
import { StructuredText  } from "react-datocms"


const Map = () => {
	const [mapText1] = useStaticElement("map1") 
	const [mapText2] = useStaticElement("map2") 
	return <Section id="helyszin" container placeholder>
		<Title>Konferencia <span className="highlight">HELYSZÍN</span></Title>
		<Text description><StructuredText data={mapText1}></StructuredText></Text>
		<iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6413.205368685531!2d19.053899606489917!3d47.48171717259506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc536fe8b11f%3A0xbc1392d97a0fd14b!2sBudapest%20University%20of%20Technology%20and%20Economics!5e0!3m2!1sen!2shu!4v1709024399159!5m2!1sen!2shu"
        width="800"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
		<Text description><StructuredText data={mapText2}></StructuredText></Text>
	</Section>
}

export default Map