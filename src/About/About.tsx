import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  siteConfig,
  getResumeHref,
} from "@/app/metadata";
import styles from "./About.module.css";

export default function About() {
  const resumeHref = getResumeHref();
  const resumeIsExternal = Boolean(siteConfig.resumeExternalUrl?.trim());

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.row}>
          <div className={styles.leftCol}>
            <div className={styles.profile}>
              <figure className={styles.portrait}>
                <img
                  src="./prof_pic.png"
                  alt="Mahbub Islam Mahim - joining Wayne State University in Fall 2026"
                  className={styles.image}
                />
              </figure>
              <div>
                <h2 className={styles.name}>Mahbub Islam Mahim</h2>
                <h3 className={styles.title}>Incoming Research Fellow</h3>
                <h3 className={styles.company}>
                  <a
                    href="https://wayne.edu/"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Wayne State University · Fall 2026</span>
                  </a>
                </h3>

                <div className={styles.bigIconGroup}>
                  <a
                    href="mailto:mahbubislammahim@gmail.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <i
                      className={`fas fa-envelope ${styles.bigIcon}`}
                      data-tooltip="Email me"
                    />
                  </a>

                  <a
                    href="https://github.com/mahim-samsung"
                    target="_blank"
                    rel="noopener"
                  >
                    <i
                      className={`fab fa-github ${styles.bigIcon}`}
                      data-tooltip="GitHub profile"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mahbub-islam-mahim-4634a5154/"
                    target="_blank"
                    rel="noopener"
                  >
                    <i
                      className={`fab fa-linkedin ${styles.bigIcon}`}
                      data-tooltip="LinkedIn profile"
                    />
                  </a>

                  <a
                    href={resumeHref}
                    {...(resumeIsExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {
                          download: siteConfig.resumePdfFileName,
                        })}
                  >
                    <i
                      className={`fas fa-file-alt ${styles.bigIcon}`}
                      data-tooltip="Resume"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/mahimmahbubislam"
                    target="_blank"
                    rel="noopener"
                  >
                    <i
                      className={`fab fa-facebook ${styles.bigIcon}`}
                      data-tooltip="Facebook profile"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.aboutText}>
              <p className={styles.p}>
                Hi, I'm Mahbub Islam Mahim. In August 2026, I will join{" "}
                <a
                  href="https://wayne.edu/"
                  target="_blank"
                  className={styles.link}
                >
                  Wayne State University
                </a>{" "}
                as a Research Fellow, where I will study trustworthy AI and
                advanced machine learning. Previously, I was a Senior Software
                Engineer at{" "}
                <a
                  href="https://research.samsung.com/srbd"
                  target="_blank"
                  className={styles.link}
                >
                  Samsung Research
                </a>
                , where I built knowledge graph and reasoning systems using the{" "}
                <a
                  href="https://www.oxfordsemantic.tech/rdfox"
                  target="_blank"
                  className={styles.link}
                >
                  RDFox engine
                </a>{" "}
                in collaboration with{" "}
                <a
                  href="https://www.oxfordsemantic.tech/"
                  target="_blank"
                  className={styles.link}
                >
                  Oxford Semantic Technologies
                </a>
                , UK.
              </p>
              <p className={styles.p}>
                I completed my BSc and MSc in Computer Science & Engineering at{" "}
                <a
                  href="https://juniv.edu/"
                  target="_blank"
                  className={styles.link}
                >
                  Jahangirnagar University
                </a>
                , and was awarded the{" "}
                <a
                  href="https://grant.most.gov.bd/en/services/most/nst-fellowship"
                  target="_blank"
                  className={styles.link}
                >
                  National Science and Technology Fellowship
                </a>{" "}
                during my studies. In February 2025, one of my research projects
                at Samsung earned an <b>A1-grade patent</b>, which I’m
                especially proud of.
              </p>
            </div>

            <div className={styles.aboutRow}>
              <div className={styles.interest}>
                <div className={styles.heading}>Interests</div>
                <ul className={styles.interestList}>
                  <li>Trustworthy AI</li>
                  <li>Advanced Machine Learning</li>
                  <li>Generative AI</li>
                  <li>Knowledge Graph & Semantic Reasoning</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
              <div className={styles.education}>
                <div className={styles.heading}>Education</div>
                <div className={styles.educationList}>
                  <div className={styles.educationItem}>
                    <div className={styles.educationHeader}>
                      <i className="fas fa-graduation-cap" />
                      <div className={styles.educationInfo}>
                        <div className={styles.degree}>
                          MSc in Computer Science & Engineering
                        </div>
                        <div className={styles.university}>
                          Jahangirnagar University
                        </div>
                        <div className={styles.year}>2023</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.educationDivider} />

                  <div className={styles.educationItem}>
                    <div className={styles.educationHeader}>
                      <i className="fas fa-graduation-cap" />
                      <div className={styles.educationInfo}>
                        <div className={styles.degree}>
                          BSc in Computer Science & Engineering
                        </div>
                        <div className={styles.university}>
                          Jahangirnagar University
                        </div>
                        <div className={styles.year}>2021</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
