'use client';

import styles from './Patent.module.css';

export default function Patent() {
  const patents = [
    {
      id: 1,
      title:
        'Method for Enhancing Wide-Angle Images by Integrating Multiple Fields of View from Different Lenses',
      organization: 'Samsung Research',
      grade: 'A1',
      gradeDate: 'Feb 2025',
      status: 'Filing in progress',
      description:
        'A novel method that combines fields of view from multiple lenses to improve wide-angle image quality. Graded A1 by Samsung Research.',
    },
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Patent</h1>

        <div className={styles.patentsContainer}>
          {patents.map((patent) => (
            <article key={patent.id} className={styles.patentCard}>
              <h3 className={styles.patentTitle}>{patent.title}</h3>
              <p className={styles.patentMeta}>
                <span>{patent.organization}</span>
                <span className={styles.metaSep} aria-hidden>
                  ·
                </span>
                <span>
                  {patent.grade} grade ({patent.gradeDate})
                </span>
                <span className={styles.metaSep} aria-hidden>
                  ·
                </span>
                <span>{patent.status}</span>
              </p>
              <p className={styles.patentDescription}>{patent.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
