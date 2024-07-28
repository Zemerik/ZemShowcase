import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projects from "../data/projects";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [query, setQuery] = useState("");

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>ZemShowcase - Projects</title>
        <meta
          name="description"
          content="ZemShowcase, Showcase, Developer Projects, Projects, ReactJS, NextJS"
        />
        <meta property="og:title" content="ZemShowcase - Projects" />
        <meta
          property="og:description"
          content="ZemShowcase, Showcase, Developer Projects, Projects, ReactJS, NextJS"
        />
      </Head>

      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          <br />
          Projects
          <span>
            <HiOutlineDesktopComputer />
          </span>
        </T.Title>
        <T.Description>
          Showcase & Connect with Developers
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Search by project name</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Type here..."
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Project not found 🙁</h3>
            )}

            {projectFilter.map((project) => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        style={{ borderRadius: "20px" }}
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>
                        <div className="tags">
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <T.ButtonAlternatives>
                          View Project
                          <ArrowRight
                            style={{
                              marginBottom: "-0.1rem",
                            }}
                            weight="bold"
                            size={16}
                          />
                        </T.ButtonAlternatives>
                      </Link>
                    </div>
                  </S.ProjectsItem>
                </>
              );
            })}

            
          </S.ProjectsContent>
        </S.ProjectsContainer>
      </T.Section>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </>
  );
}