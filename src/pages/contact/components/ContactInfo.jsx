import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
    <div className="w-full" >
      <p className="p-2 md:p-4 text-base md:text-xl">Ita Osun Junction 36, Ilode Street, Ile-Ife, Osun State, Nigeria.</p>
      <p className="p-2 md:p-4 text-base md:text-xl">+2348160469636</p>
      <p className="p-2 md:p-4 text-base md:text-xl">officialacmesoftwarelab@gmail.com</p>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com/company/acme-software-lab/" className=" text-base md:text-xl p-2 text-blue-600 hover:scale-110 transition">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/acmesoftwarelaboratory" className="p-2 text-base md:text-xl text-blue-600 hover:scale-110 transition">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/acmesoftwarelab/" className="text-purple-600 p-2 text-base md:text-xl hover:scale-110 transition">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://x.com/acmesoftwarelab" className="text-blue-400 text-base md:text-xl p-2 hover:scale-110 transition">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <div className="mt-4">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v1QPPgTOfhTak46LaPwHowHaEJ%26pid%3DApi&f=1&ipt=f3f0413d465d6e9f5ca6985153d6098e7c46e3d97c29aedc6cf90989cb60a614&ipo=images"
          alt="map"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
