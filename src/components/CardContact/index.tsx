import Link from 'next/link'
import Image from 'next/image'
import { ButtonAlt, Section } from '../../styles/styles'
import { CardContactContainer, CardContactContent } from './styles'
import { Pen, TelegramLogo } from 'phosphor-react'

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className='ellipse'> 
        <Image
          width={330}
          height={410} 
          src="/vectors/circles.svg"
          alt="circles"
        />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>Let's Collaborate</h2>
            <p>
              ZemShowcase is <b>100%</b> Open Source and any contributions made from the community are welcomed and appreciated. If you would like to contribute, you can check out our <a href = "https://github.com/Zemerik/ZemShowcase" target = "_blank">Github Repository!
              </a>
            </p>
          </div>

          <div className="contact">
            <Image 
              width={480} 
              height={500} 
              src="/contact.svg" 
              alt="imagem de contato" 
            />
          </div>
        </CardContactContent>

        <Link href={'/contact'} legacyBehavior>
          <ButtonAlt>
            Contact Us{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
        <Link href="https://repo-rater.eddiehub.org/rate?owner=Zemerik&name=ZemShowcase" target = "_blank" legacyBehavior>
          <ButtonAlt style={{
            marginTop: '1rem',
          }}>
            Rate us{' '}
            <Pen
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  );
}
