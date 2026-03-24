import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { siteConfig, formatSiteLastUpdated } from "@/app/metadata";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <div className={styles.profile}>
              <img
                src="./prof_pic.png"
                alt="Mahbub Islam Mahim - Software Engineer at Samsung Research"
                className={styles.image}
              />
              <div>
                <h2 className={styles.name}>Mahbub Islam Mahim</h2>
                <h3 className={styles.title}>Software Engineer</h3>
                <h3 className={styles.company}>
                  <a
                    href="https://research.samsung.com/srbd"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Samsung R&D Institute Bangladesh</span>
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
                    href="/Mahbub_Islam_Mahim_Resume.pdf"
                    download="Mahbub_Islam_Mahim_Resume.pdf"
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
                <p className={styles.lastUpdated}>
                  <time dateTime={siteConfig.lastUpdated}>
                    Last updated {formatSiteLastUpdated(siteConfig.lastUpdated)}
                  </time>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.aboutText}>
              <p className={styles.p}>
                Hi, I’m Mahbub Islam Mahim, a Software Engineer at{" "}
                <a
                  href="https://research.samsung.com/srbd"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  Samsung Research
                </a>
                , where I work on knowledge graphs and reasoning systems,
                developing a Knowledge Graph build tool using the{" "}
                <a
                  href="https://www.oxfordsemantic.tech/rdfox"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  RDFox engine
                </a>{" "}
                in collaboration with{" "}
                <a
                  href="https://www.oxfordsemantic.tech/"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  Oxford Semantic Technologies
                </a>{" "}
                , UK.
              </p>
              <br />
              <p className={styles.p}>
                I completed my BSc and MSc in Computer Science & Engineering at{" "}
                <a
                  href="https://juniv.edu/"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  Jahangirnagar University
                </a>
                , and was awarded the{" "}
                <a
                  href="https://grant.most.gov.bd/en/services/most/nst-fellowship"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  National Science and Technology Fellowship
                </a>{" "}
                during my studies. In February 2025, one of my research projects
                at Samsung earned an <b>A1-grade patent</b>, which I’m
                especially proud of.
              </p>
              <br />
              <br />
            </div>

            <div className={styles.aboutRow}>
              <div className={styles.interest}>
                <div className={styles.heading}>Interests</div>
                <div className={styles.interestList}>
                  <div className={styles.interestItem}>
                    <i className="fas fa-brain" />
                    <span>Advanced Machine Learning</span>
                  </div>
                  <div className={styles.interestItem}>
                    <i className="fas fa-robot" />
                    <span>Generative AI</span>
                  </div>
                  <div className={styles.interestItem}>
                    <i className="fas fa-shield-alt" />
                    <span>Trustworthy and efficient AI</span>
                  </div>
                  <div className={styles.interestItem}>
                    <i className="fas fa-project-diagram" />
                    <span>Knowledge graph, Semantic reasoning</span>
                  </div>
                  <div className={styles.interestItem}>
                    <i className="fas fa-code" />
                    <span>Software Engineering</span>
                  </div>
                </div>
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
                    <div className={styles.gpa}>CGPA: 3.83/4.00</div>
                  </div>

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
                    <div className={styles.gpa}>CGPA: 3.69/4.00</div>
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
