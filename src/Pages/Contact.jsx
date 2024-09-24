import "./Contact.css";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";


const Contact = () => {

  return (
    <div className="main">
      <div className="main-second">
        <div className="txt-div">
          <h2>CONTACT ME</h2>
        </div>
        <div className="icons">
        <div className="twitter"> Twitter <BsTwitterX />        </div>
        
        <div className="linkedIn"> LikedIn  <ImLinkedin /> </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
