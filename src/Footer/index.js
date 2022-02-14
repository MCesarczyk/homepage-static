import { MAIL_ADRESS } from "../assets/adresses";
import { thumbnails } from "../assets/thumbnails";
import "./style.css";

const Footer = () => (
    <footer className="footer">
        <h2 className="footer__header">
            <p className="footer__caption">
                CONTACT:
            </p>
            <a className="footer__link" id="contact" href={`mailto:${MAIL_ADRESS}`}>
                {MAIL_ADRESS}
            </a>
        </h2>
        <div className="footer__thumbnailWrapper">
            {thumbnails.map(({ id, testId, icon, url }) => (
                <div className="footer__thumbnail" key={id}>
                    <a data-testid={testId} href={url} target="_blank" rel="noopener noreferrer" >
                        <div className="footer__icon">
                            {icon}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    </footer>
);

export default Footer;