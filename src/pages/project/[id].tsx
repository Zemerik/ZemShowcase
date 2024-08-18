"use client";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../../types/Project";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Footer } from "../../components/Footer";

import * as S from "../../styles/project";
import { ButtonAlt, ButtonSecondary, Title } from "../../styles/styles";
import { ArrowLeft, ChatCenteredText } from "phosphor-react";
import { FaBlog, FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { getProject, getProjects } from "../../data/projects";
import Error from "../404";
import { useRouter } from "next/router";

export default function Projeto() {
  const [project, setProject] = useState<Project | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const url = router.query.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject(url);
      setProject(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return project ? (
    <>
      <Head>
        <title>{`${project.title} | ZemShowcase`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.img} />
        <meta property="og:image:secure_url" content={project.img} />
        <meta name="twitter:image" content={project.img} />
        <meta name="twitter:image:src" content={project.img} />
      </Head>

      <S.ProjectContainer>
        <S.Banner>
          <img
            className="bannerUrl"
            style={{ marginTop: "5rem" }}
            src={project.banner}
            alt={project.title}
          />
          <div className="bannerContainer">
            <div className="bannerContent">
              <img src={project.icon} alt={project.title} />
              <div>
                <h1>{project.title}</h1>
                <p>{project.type}</p>
              </div>
            </div>

            <div className="link">
              <Link href={project.web} target="_blank">
                <ButtonAlt>
                  Website <BsGlobe size={15} />
                </ButtonAlt>
              </Link>
              <Link href={project.github} target="_blank">
                <ButtonAlt>
                  Repository <FaGithub size={17} />
                </ButtonAlt>
              </Link>
              <Link href={project.blog} target="_blank">
                <ButtonAlt>
                  Blog <FaBlog size={17} />
                </ButtonAlt>
              </Link>
            </div>
          </div>
        </S.Banner>

        <S.DescriptionProject>
          <Title>
            Project
            <span>
              <ChatCenteredText /> Description
            </span>
          </Title>
          <div className="description">
            <p style={{ textAlign: "justify" }}>{project.description}</p>
          </div>
        </S.DescriptionProject>

        <S.Tags>
          <S.TagsContainer>
            {project.tech &&
              project.tech.map((tech) => (
                <S.TagsContent key={tech.id} color={tech.color}>
                  <div
                    className="card-icon"
                    style={{
                      backgroundColor: `rgba(${tech.rgb}, .1)`,
                      border: `1px solid ${tech.color}`,
                    }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3>{tech.name}</h3>
                </S.TagsContent>
              ))}
          </S.TagsContainer>
        </S.Tags>

        <Link href="/#projects" legacyBehavior>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: "-0.2rem" }}
                weight="bold"
                size={18}
              />{" "}
              Back
            </a>
          </ButtonSecondary>
        </Link>
      </S.ProjectContainer>

      <Footer />
    </>
  ) : loading ? (
    <p>Loading</p>
  ) : (
    <Error></Error>
  );
}