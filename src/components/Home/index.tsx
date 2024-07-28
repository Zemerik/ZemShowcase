/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

export function HomeHero() {

  function handleContinue() {
    window.location.href = "https://github.com/Zemerik/ZemShowcase";
  }

  return (
    <Container>
      <Content>
        <HomeText>
          <h1 text-align = "center">
            ZemShowcase
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
                loading='lazy'
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Showcase & Connect'].map(str => str.replace('and', 'e')),
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <ButtonPrimary onClick={handleContinue}>
              <b>Add your Project</b>
              <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
            </ButtonPrimary>
          </div>
        </HomeText>
        <ImgHome>

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dinossauro"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}
