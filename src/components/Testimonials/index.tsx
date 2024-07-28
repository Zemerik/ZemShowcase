import React, { useEffect, useState } from 'react';
import { ChatCenteredText } from 'phosphor-react';
import { Container, Title } from '../../styles/styles';
import Link from 'next/link'
import Image from 'next/image'
import { ButtonAlt, Section } from '../../styles/styles'
import { Heart } from 'phosphor-react'

const testimonial = process.env.NEXT_PUBLIC_TESTIMONIAL_URL;

export function Testimonials() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 768);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Title>
        Help Us Improve
        <span>
          <ChatCenteredText />Feedback
        </span>
      </Title>

<Link href="https://testimonial.to/zemshowcase" legacyBehavior>
          <ButtonAlt style={{
            marginTop: '1rem',
          }}>
            Write your Testimonial{' '}
            <Heart
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
    </Container>
  );
}

export default Testimonials;
