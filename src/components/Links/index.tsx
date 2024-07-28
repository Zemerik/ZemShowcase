import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
        <Link href={'https://github.com/Zemerik'}>
          <a target="_blank" aria-label="Link para o Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/zemerik'}>
          <a target="_blank" aria-label="Link para o Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
