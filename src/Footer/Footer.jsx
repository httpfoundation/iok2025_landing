import "./Footer.scss";
//import HttpLogo from '../assets/img/http-white.png'
import Location from "../icons/Location";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
import Web from "../icons/Web";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="links">
          <div className="title">Kapcsolat</div>
          <div className="contact">
            <Location />
            1123 Budapest, Csörsz utca 45.
            <Phone />
            +36 70 614 0168
            <Mail />
            <div>
              <a href="mailto:info@http-alapitvany.hu">info@http-alapitvany.hu</a>
            </div>
            <Web />
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://http-alapitvany.hu">
                http-alapitvany.hu
              </a>
            </div>
          </div>
          <div className="copy">
            &copy; HTTP Alapítvány
            <br />
            Minden jog fenntartva
          </div>
        </div>
        <div className="copyright">
          <div className="links">
            <div style={{ marginBottom: "1rem" }}>
              Infotanár Mentor Program
              <br />
              <Web />{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://itmp.hu">
                itmp.hu
              </a>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              Cisco Hálózati Akadémia
              <br />
              <Web />{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://netacad.hu">
                netacad.hu
              </a>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              Skills IT
              <br />
              <Web />{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://skillsit.hu">
                skillsit.hu
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
