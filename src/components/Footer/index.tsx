import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiInstagram, FiX} from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Made with 💖 by  <a href = "https://github.com/Zemerik" target = "_blank">Hemang Yadav</a>
      </h4>
      <div className="links">
        <Link
          href={'https://github.com/Zemerik'}
          target="_blank"
          aria-label="Link para o Github">

          <FiGithub />

        </Link>
        <Link
          href={'https://www.linkedin.com/in/zemerik/'}
          target="_blank"
          aria-label="Link para o Linkedin">

          <FiLinkedin />

        </Link>

        <Link 
           href={'https://www.instagram.com/Zemerik_Insta'}
           target="_blank" 
           aria-label="Instagram">
            
          <FiInstagram />
          
        </Link>

        <Link
          href={'https://x.com/Zemerik_X'}
          target="_blank"
          aria-label='x'>

        <FiX />

        </Link>
      </div>
    </FooterContainer>
  );
}
