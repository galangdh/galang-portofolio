import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h3 className="text-2xl mx-auto font-bold">GALANG.DH</h3>
        </div>
        <div className="m-8 flex items-center justify-between gap-4 text-2xl">
          <a href="https://github.com/galang.dh" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/galang-dharma-putra-32b966356" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/galang.dh" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/628987689393" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
    </nav>
  );
}

export default Navbar
