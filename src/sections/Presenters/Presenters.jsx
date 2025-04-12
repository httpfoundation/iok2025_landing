import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import './Presenters.scss';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import Arrow from '../../icons/Arrow';
import { StructuredText } from 'react-datocms';
import { useStaticElement, useAllElements } from '../../tools/datoCmsTools';

const Presenter = (props) => {
  return (
    <div className="presenter-card" style={props.style || {}}>
      <div className="presenter-wrapper">
        <div className="presenter-img" style={{ backgroundImage: "url('" + props.imageUrl + "')" }}>
          <div className={`presenter-square ${props.highlight ? 'highlight' : ''}`}>
            <div className="bg"></div>
            <div className="inner">
              <div className="name">{props.name}</div>
              <div className="title">
                {props.title}, {props.company}
              </div>
            </div>
            <div className="decorator"></div>
          </div>
        </div>
        <div className="presenter-name-mobile">
          <div className="name">{props.name}</div>
          <div className="title">
            {props.title}, {props.company}
          </div>
        </div>
      </div>
    </div>
  );
};

const HighlightedPresenters = (props) => {
  const { presenters } = props;
  return (
    <div className="presenters-grid">
      {presenters
        ?.filter((presenter) => presenter.image)
        .map((presenter, index) => (
          <Presenter
            key={presenter.slug}
            right={index % 2 === 1}
            name={presenter.name}
            highlight={index === 0}
            title={presenter.title}
            company={presenter.company}
            imageUrl={presenter.image.url}
          />
        ))}
    </div>
  );
};

const AllPresenters = (props) => {
  const { presenters } = props;
  return (
    <div className="presenters-grid small">
      {presenters
        ?.filter((presenter) => presenter.image)
        .map((presenter, index) => (
          <Presenter
            key={presenter.slug}
            right={index % 2 === 1}
            name={presenter.name}
            highlight={index === 0}
            title={presenter.title}
            company={presenter.company}
            imageUrl={presenter.image.url}
            style={{ animationDelay: `${index * 0.05}s` }}
          />
        ))}
    </div>
  );
};

const Presenters = (props) => {
  const [presenterText] = useStaticElement('speaker');
  const [allPresenters] = useAllElements('presenters');
  const [showAll, setShowAll] = useState(false);

  return (
    <Section id="eloadok" container placeholder>
      <Title>
        <span className="highlight text-uppercase">Előadóink</span>
      </Title>
      <Text subtitle>
        <StructuredText data={presenterText} />
      </Text>

      {allPresenters && (
        <HighlightedPresenters presenters={allPresenters.filter((s) => s.highlighted)} />
      )}
      <Button bold onClick={() => setShowAll(!showAll)}>
        <Arrow rotation={showAll ? 180 : 0} /> További előadóink{' '}
      </Button>
      {allPresenters && showAll && (
        <AllPresenters presenters={allPresenters.filter((s) => !s.highlighted)} />
      )}
    </Section>
  );
};

export default Presenters;
