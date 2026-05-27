import React from "react";

import styles from "./Cp.module.css";

const stats = [
  { n: "1540+", l: "problems" },
  { n: "185+", l: "contests" },
  { n: "10+", l: "onsite" },
  { n: "2", l: "organized" },
];

export default function Cp() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Programming Contests</h1>

        <div className={styles.panel}>
          <p className={styles.intro}>
            Competitive programming background — ICPC, NCPC, and major online
            judges during university.
          </p>

          <div className={styles.statsRow} role="list">
            {stats.map((s) => (
              <span key={s.l} className={styles.statItem} role="listitem">
                <span className={styles.statNum}>{s.n}</span>
                <span className={styles.statLbl}>{s.l}</span>
              </span>
            ))}
          </div>

          <div className={styles.divider} aria-hidden />

          <ul className={styles.list}>
            <li>
              <a
                href="https://www.codechef.com/users/mahim47"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.platform}
              >
                CodeChef
              </a>
              <span className={styles.meta}>
                1916 · 4★ ·
                <a
                  href="https://www.codechef.com/users/mahim47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.handleLink}
                >
                  {" @mahim47"}
                </a>
              </span>
            </li>
            <li>
              <a
                href="https://codeforces.com/profile/Mahim"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.platform}
              >
                Codeforces
              </a>
              <span className={styles.meta}>
                1568 · Specialist ·
                <a
                  href="https://codeforces.com/profile/Mahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.handleLink}
                >
                  {" @Mahim"}
                </a>
              </span>
            </li>
            <li>
              <span className={styles.platformStatic}>ICPC</span>
              <span className={styles.meta}>
                Regional · 3× (2021–24) — JU_NoName, JU_3AngryMen, JU_Metamask
              </span>
            </li>
            <li>
              <span className={styles.platformStatic}>NCPC 2023</span>
              <span className={styles.meta}>National · finalist</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
