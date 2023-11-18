
import "./style.css";

const Footer = () => { // Creating the linked icons for the footer of the webpage, that are able to send the user to my github and linked page.
  return (
    <footer>
      <a 
        href="https://www.linkedin.com/in/anja-kristoffersen-6ab210290/"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          src="/linnk.png"
          alt="linkedin icon"
          width="50pmx"
        />
      </a>
    
      <a href="https://github.com/anjakrist" 
      target="_blank" rel="noreferrer">
        <img
          src="/github.png"
          width = "50 pmx"
          alt="GitHub-icon"
        />
      </a>
    </footer>
  );
};
 
export default Footer;
