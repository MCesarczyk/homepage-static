import { MAIL_ADRESS } from "../assets/adresses";
import "./style.css";

const Footer = () => (
    <div className="footer__wrapper">
        <h2 className="footer__header">
            <p className="footer__caption">
                CONTACT:
            </p>
            <a className="footer__link" id="contact" href={`mailto:${MAIL_ADRESS}`}>
                {MAIL_ADRESS}
            </a>
        </h2>
        <p className="footer__paragraph">
            I'm open to new challenging tasks, so when you need website or Single Page Application to launch, feel free to talk to me.
        </p>
    </div>
);

export default Footer;