import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./FooterLinks.scss";

const FooterLinks = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <FaFacebookF className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>Let's Talk?</h2>
          <a href="#" className="btn btn-dark">
            Make an enquiry
          </a>
        </div>
      </section>
      <section className="footer-section">
        <div className="container footer"></div>
      </section>
    </>
  );
};

export default FooterLinks;
