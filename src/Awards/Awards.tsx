'use client';

import styles from './Awards.module.css';

export default function Awards() {
  const awards = [
    {
      id: 1,
      icon: "🏆",
      title: "Best Paper Award",
      period: "Dec 2025",
      organization: "BLP-2025 (ACL Anthology)",
      color: "gold",
      certificateLink: "https://drive.google.com/file/d/1p9GzMcidLKjRpMSxoiUXQHxjY0sKD_-Z/view?usp=sharing"
    },
    {
      id: 2,
      icon: "⭐",
      title: "Icon Engineer",
      period: "Jul-Aug 2025",
      organization: "Samsung",
      color: "orange",
    },
    {
      id: 3,
      icon: "🏅",
      title: "Icon Engineer",
      period: "Nov-Dec 2024",
      organization: "Samsung",
      color: "blue",
      certificateLink: "https://drive.google.com/file/d/1llMk7BYPFn99UENl2npVpzJQYkP_ty7j/view?usp=sharing"
    },
    {
      id: 4,
      icon: "💡",
      title: "Recognition in Innovation",
      period: "2024",
      organization: "Samsung",
      color: "red",
      certificateLink: "https://drive.google.com/file/d/1bqoWcE3ArrV-YnThYtcsP0KZBrQ_djWQ/view?usp=sharing"
    },
    {
      id: 5,
      icon: "💻",
      title: "Professional Software Coding Certification",
      period: "Aug 2023",
      organization: "Samsung",
      color: "teal",
      certificateLink: "https://drive.google.com/file/d/1KENS-TVmoFbjA9Uu9H743KIt-DgV9Gan/view?usp=sharing"
    },
    {
      id: 6,
      icon: "🥉",
      title: "Bronze Medal",
      period: "2021",
      organization: "UPC",
      color: "purple",
      certificateLink: "https://drive.google.com/file/d/1ur9ckfuTOwEAyg-0fRZGI7_zouBiuw_F/view?usp=sharing"
    },
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Awards & Recognition
        </h1>
        
        <div className={styles.awardsContainer}>
          {awards.map((award) => (
            <div 
              key={award.id} 
              className={`${styles.awardItem} ${styles[award.color]} ${award.certificateLink ? styles.clickable : ''}`}
              onClick={() => award.certificateLink && window.open(award.certificateLink, '_blank')}
              style={{ cursor: award.certificateLink ? 'pointer' : 'default' }}
            >
              <span className={styles.awardIcon}>{award.icon}</span>
              <div className={styles.awardContent}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <div className={styles.awardMeta}>
                  <span className={styles.period}>{award.period}</span>
                  <span className={styles.organization}>{award.organization}</span>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
