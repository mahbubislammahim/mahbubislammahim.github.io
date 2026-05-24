import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Experience</h1>

        <div className={styles.card}>
          {/* Wayne State University */}
          <div className={styles.companyGroup}>
            <div className={styles.companyHeader}>
              <div className={styles.companyIcon}>
                <img src="./WSU.png" alt="Wayne State University" className={styles.companyLogo} />
              </div>
              <div className={styles.companyInfo}>
                <h2 className={styles.companyName}>Wayne State University</h2>
                <span className={styles.companyDuration}>Starting Aug 2026 · <a href="https://gradschool.wayne.edu/students/funding/fellowships#rumble" target="_blank" rel="noopener noreferrer" className={styles.link}>Rumble Fellow</a></span>
              </div>
            </div>

            <div className={styles.rolesContainer}>
              <div className={styles.roleItem}>
                <div className={styles.roleConnector}>
                  <div className={styles.roleDot} />
                  <div className={styles.roleLine} />
                </div>
                <div className={styles.roleContent}>
                  <div className={styles.roleHeader}>
                    <h3 className={styles.roleTitle}>Research Fellow</h3>
                    <span className={styles.roleDuration}>Starting Aug 2026</span>
                  </div>
                  <p className={styles.roleDescription}>
                    Will conduct research in the <a href="https://sites.google.com/view/mlpa/mainpage" target="_blank" rel="noopener noreferrer" className={styles.link}>Trustworthy AI Lab</a>, focusing on
                    developing reliable and interpretable AI systems. Advised by
                    <a href="https://dongxiaozhu.github.io/index.html" target="_blank" rel="noopener noreferrer" className={styles.link}> Prof. Dongxiao Zhu</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Samsung R&D Institute Bangladesh */}
          <div className={styles.companyGroup}>
            <div className={styles.companyHeader}>
              <div className={styles.companyIcon}>
                <img src="./samsung-logo.svg" alt="Samsung" className={styles.companyLogo} />
              </div>
              <div className={styles.companyInfo}>
                <h2 className={styles.companyName}>
                  Samsung R&D Institute Bangladesh
                </h2>
                <span className={styles.companyDuration}>
                  Apr 2023 – Jul 2026 · 3 yrs 4 mos
                </span>
              </div>
            </div>

            <div className={styles.rolesContainer}>
              <div className={styles.roleItem}>
                <div className={styles.roleConnector}>
                  <div className={styles.roleDot} />
                  <div className={styles.roleLine} />
                </div>
                <div className={styles.roleContent}>
                  <div className={styles.roleHeader}>
                    <h3 className={styles.roleTitle}>
                      Senior Software Engineer
                    </h3>
                    <span className={styles.roleDuration}>
                      Apr 2025 – Jul 2026
                    </span>
                  </div>
                  <p className={styles.roleDescription}>
                    Led the development of a key module within Samsung's
                    knowledge graph platform in collaboration with Oxford Semantic
                    Technologies, leveraging RDFox's reasoning engine to power
                    enterprise AI applications.
                  </p>
                </div>
              </div>

              <div className={styles.roleItem}>
                <div className={styles.roleConnector}>
                  <div className={styles.roleDot} />
                </div>
                <div className={styles.roleContent}>
                  <div className={styles.roleHeader}>
                    <h3 className={styles.roleTitle}>Software Engineer</h3>
                    <span className={styles.roleDuration}>
                      Apr 2023 – Mar 2025
                    </span>
                  </div>
                  <p className={styles.roleDescription}>
                    Built semantic knowledge graph tools and reasoning systems as
                    part of Samsung's integrated AI ecosystem, contributing to
                    the development of an A1-grade patented technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
