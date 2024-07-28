/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo, DiscordLogo } from 'phosphor-react'

const calendy = process.env.NEXT_PUBLIC_CALENDLY_URL;

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contact Form
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
      Showcase & Connect with Developers
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <DiscordLogo size={22} color="#00fffb" /> Discord Server{' '}
            </h4>
            <Link href="https://discord.com/invite/UF9KsmuGbr" target="_blank">

              <span>invite/UF9KsmuGbr</span>

            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:ZemerikY@gmail.com" target="_blank">

              <span>ZemerikY@gmail.com</span>

            </Link>
          </div>
          
        </ContactContent>
        <Form />
          <iframe
            src={calendy}
            width="100%"
            height="800px"
            frameBorder="0"
            title="Calendly"
          ></iframe>     
      </ContainerContact>
    </Section>
  );
}
