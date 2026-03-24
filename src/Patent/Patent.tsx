'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Patent.module.css';

export default function Patent() {
  const patents = [
    {
      id: 1,
      title: "Method for Enhancing Wide-Angle Images by Integrating Multiple Fields of View from Different Lenses",
      patentNumber: "Samsung Research Patent",
      status: "filing",
      filingDate: "Ongoing",
      grantDate: "TBD",
      description: "A novel method that enhances wide-angle images by integrating multiple fields of view from different lenses, providing superior image quality and expanded visual coverage. This innovation was graded A1 by Samsung Research on February 20, 2025, representing the highest level of technical excellence and commercial potential.",
      link: "#",
    }
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Patent
        </h1>
        
        <div className={styles.patentsContainer}>
          {patents.map((patent) => (
            <div key={patent.id} className={styles.patentCard}>
              <div className={styles.patentHeader}>
                <div className={styles.patentSeal} aria-hidden>
                  <i className={`fas fa-file-contract ${styles.patentSealIcon}`} />
                </div>
                <h3 className={styles.patentTitle}>
                  {patent.title}
                </h3>
              </div>
              
              <div className={styles.patentMeta}>
                <div className={styles.patentInfo}>
                  {/* <span className={styles.patentNumber}>{patent.patentNumber}</span> */}
                  <span className={`${styles.status} ${styles[patent.status]}`}>
                    A1 Grade
                  </span>
                </div>
                <div className={styles.patentDates}>
                  <span className={styles.filingDate}>Filing Date: {patent.filingDate}</span>
                  <span className={styles.grantDate}>Organization: Samsung Research</span>
                </div>
              </div>
              
              <p className={styles.patentDescription}>
                {patent.description}
              </p>
              
              {/* <a href={patent.link} className={styles.viewPatentLink}>
                View Patent Details
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
