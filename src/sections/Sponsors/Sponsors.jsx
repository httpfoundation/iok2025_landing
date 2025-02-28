import { useMediaQuery } from "@mui/material";
import { Fragment } from "react";
import { StructuredText } from "react-datocms";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import Title from "../../components/Title/Title";
import { useSponsorCategories, useStaticElement } from "../../tools/datoCmsTools";
import "./Sponsors.scss";

const Sponsor = (props) => {
  return (
    <div className={`sponsor ${props.fullWidth ? "w-full" : ""}`}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.image}
          alt={props.name}
          {...props}
          style={{ maxWidth: "100%", objectFit: "contain" }}
        />
      </a>
    </div>
  );
};

const Sponsors = () => {
  const [sponsorText] = useStaticElement("sponsor");
  const underLg = useMediaQuery("@media screen and (max-width: 1200px)");
  const sponsorCategories = useSponsorCategories();

  return (
    <Section container placeholder id="tamogatok">
      <Title>
        Az IOK 2025 <span className="highlight">TÁMOGATÓI</span>
      </Title>
      <Text subtitle>
        <Text description>
          <StructuredText data={sponsorText}></StructuredText>
        </Text>
      </Text>

      {sponsorCategories.map((category, idx) => (
        <Fragment key={idx}>
          <h3 style={{ margin: idx === 0 ? undefined : "80px 0 40px 0" }}>{category?.name}</h3>
          <div className="sponsor-grid main-sponsors">
            {category?.sponsor?.map((sponsor, sponsorIdx) => (
              <Sponsor
                image={sponsor.logo.url}
                link={sponsor.url}
                // fullWidth={
                //   category?.sponsor?.length % (underLg ? 2 : 3) !== 0 &&
                //   sponsorIdx === category?.sponsor?.length - 1
                // }
              />
            ))}
          </div>
        </Fragment>
      ))}
    </Section>
  );
};

export default Sponsors;
