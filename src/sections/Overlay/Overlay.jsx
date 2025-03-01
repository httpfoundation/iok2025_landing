import Book from "../../icons/Book";
import Coffee from "../../icons/Coffee";
import Mic from "../../icons/Mic";
import Person from "../../icons/Person";
import { useStaticElement } from "../../tools/datoCmsTools";
import "./Overlay.scss";

const Overlay = () => {
  const [statistics] = useStaticElement("statistics", false);
  if (!statistics) return null;

  return (
    <div id="overlay">
      <div className="bg bg-1"></div>
      <div className="bg bg-2"></div>
      <div className="container">
        <div className="content">
          <div className="infobox">
            <Mic />
            <div>
              <div className="title">{statistics.talks}</div>
              <div className="subtitle">előadás</div>
            </div>
          </div>
          <div className="infobox">
            <Person />
            <div>
              <div className="title">{statistics.speakers}</div>
              <div className="subtitle">előadó</div>
            </div>
          </div>
          <div className="infobox">
            <Coffee />
            <div>
              <div className="title">{statistics.onsiteSize}</div>
              <div className="subtitle">helyszíni férőhely</div>
            </div>
          </div>
          <div className="infobox">
            <Book />
            <div>
              <div className="title">{statistics.onlineSize}</div>
              <div className="subtitle">online férőhely</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;

