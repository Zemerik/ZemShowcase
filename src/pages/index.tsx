import Head from "next/head";
import { HomeHero } from "../components/Home";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Testimonials } from "../components/Testimonials";

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Home() {
  return (
    <>
      <Head>
        <title>ZemShowcase - Home</title>
      </Head>
      <ScrollTop />
      <Section>
        <Section>
        <HomeHero />
        </Section>
        <Skills />
        <Testimonials />
        <CardContact />
      </Section>

      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </>
  );
}
