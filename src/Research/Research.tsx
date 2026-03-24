'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Research.module.css';

export default function Research() {
  const publications = [
    {
      id: 1,
      title: "Divide and Conquer: A Two-Stage Cascaded Framework with K-Fold Ensembling for Multi-Label Bangla Hate Speech Classification",
      conference: "Proceedings of the Second Workshop on Bangla Language Processing (BLP-2025), ACL Anthology",
      type: "Conference Paper",
      description: "Published at BLP-2025 (ACL Anthology). Designed a two-stage cascaded framework with k-fold ensembling for multi-label Bangla hate speech classification, becoming champion of the shared-task and receiving the <strong>Best Paper Award</strong>.",
      link: "https://aclanthology.org/2025.banglalp-1.39/",
      iconClass: "fas fa-award",
    },
    {
      id: 2,
      title: "Optimizing the Fine‑Tuning Process of Large Language Models",
      conference: "Jahangirnagar University Journal of Electronics and Computer Science, Vol.16, June 2025",
      type: "Journal Article",
      description: "A comprehensive comparison of a memory-efficient fine-tuning method that combines quantization and LoRA on LLaMA-2 7B using the CodeAlpaca-20k dataset, reducing GPU memory usage from 112 GB to 10.8 GB without sacrificing performance, thereby enabling low-resource LLM deployment in real-world applications such as coding assistants.",
      link: "https://ecs.ju-journal.org/jujecs/article/view/38",
      iconClass: "fas fa-book",
    },
    {
      id: 3,
      title: "Enhancing Wide‑Angle Image Using Narrow‑Angle View of the Same Scene",
      conference: "arXiv preprint arXiv:2504.09455, April 2025",
      type: "Preprint",
      description: "Developed a GAN-based approach to enhance wide-angle images by fusing fine details from co-captured narrow-angle views, leveraging attention-based feature integration to improve visual fidelity.",
      link: "https://arxiv.org/abs/2504.09455",
      iconClass: "fas fa-file-alt",
    },
 
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Research & Publications
        </h1>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Research Publications",
              "description": "Research publications and academic papers by Mahbub Islam Mahim",
              "itemListElement": publications.map((pub, index) => ({
                "@type": "ScholarlyArticle",
                "position": index + 1,
                "name": pub.title,
                "description": pub.description.replace(/<[^>]*>/g, ''), // Remove HTML tags
                "url": pub.link,
                "publisher": {
                  "@type": "Organization",
                  "name": pub.conference
                },
                "datePublished": "2025",
                "author": {
                  "@type": "Person",
                  "name": "Mahbub Islam Mahim"
                }
              }))
            })
          }}
        />
        
        <div className={styles.publicationsContainer}>
          {publications.map((publication) => (
            <a 
              key={publication.id} 
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.publicationCard}
            >
              <div className={styles.publicationHeader}>
                <i
                  className={`${styles.publicationIcon} ${publication.iconClass}`}
                  aria-hidden
                />
                <h3 className={styles.publicationTitle}>
                  {publication.title}
                </h3>
              </div>
              
              <div className={styles.publicationMeta}>
                <span className={styles.conference}>{publication.conference}</span>
                <span className={styles.type}>• {publication.type}</span>
              </div>
              
              <p 
                className={styles.publicationDescription}
                dangerouslySetInnerHTML={{ __html: publication.description }}
              />
              
              <div className={styles.viewPaperLink}>
                View Paper
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
