import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import './Sponsors.scss'
import { useSponsorCategories, useStaticElement } from '../../tools/datoCmsTools'
import { StructuredText  } from "react-datocms"
import { Fragment } from "react"

const Sponsor = (props) => {
	return (
		<div className="sponsor">
			<a href={props.link} target="_blank" rel="noopener noreferrer"  >
					<img src={props.image} alt={props.name} {...props}/>
			</a>
		</div>
	)
}

const Sponsors = () => {
	const [sponsorText] = useStaticElement("sponsor") 
	const sponsorCategories = useSponsorCategories()

	return <Section container placeholder id="tamogatok">
		<Title>Az IOK 2024 <span className="highlight">TÁMOGATÓI</span></Title>
		<Text subtitle>
			<Text description><StructuredText data={sponsorText}></StructuredText></Text>
		</Text>

		{sponsorCategories.map((category, idx) => (
			<Fragment key={idx}>
				<h3 style={{ margin: idx === 0 ? undefined : '60px 0 40px 0' }}>{category?.name}</h3>
				<div className="sponsor-grid main-sponsors">
					{category?.sponsor?.map(sponsor => <Sponsor image={sponsor.logo.url} link={sponsor.url} />)}
				</div>
			</Fragment>	
		))}
	</Section>
}

export default Sponsors