import Book from "../../icons/Book";
import Coffee from "../../icons/Coffee";
import Mic from "../../icons/Mic";
import Person from "../../icons/Person";
import "./Overlay.scss";

const Overlay = () => {
  return (
    <div id="overlay">
      <div className="bg bg-1"></div>
      <div className="bg bg-2"></div>
      <div className="container">
        <div className="content">
          <div className="infobox">
            <Mic />
            <div>
              <div className="title">?</div>
              <div className="subtitle">előadás</div>
            </div>
          </div>
          <div className="infobox">
            <Person />
            <div>
              <div className="title">?</div>
              <div className="subtitle">előadó</div>
            </div>
          </div>
          <div className="infobox">
            <Coffee />
            <div>
              <div className="title">250</div>
              <div className="subtitle">helyszíni férőhely</div>
            </div>
          </div>
          <div className="infobox">
            <Book />
            <div>
              <div className="title">1000+</div>
              <div className="subtitle">online férőhely</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;

