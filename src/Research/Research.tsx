'use client';

import styles from './Research.module.css';

type Publication = {
  id: number;
  title: string;
  venue: string;
  type: string;
  description: string;
  link: string;
  publishedDate: string;
  overviewImage: string;
  overviewAlt: string;
  figurePdf?: string;
  hidden?: boolean;
};

export default function Research() {
  const publications: Publication[] = [
    {
      id: 4,
      title:
        'Segmentation Strategies for Long-Code Authorship Detection: Balancing Context Coverage and Computational Efficiency',
      venue: 'JU Journal of Electronics and Computer Science, Vol. 17, 2026',
      type: 'Journal article',
      description:
        'Compares truncation, multi-view cropping, and sliding-window classification for authorship detection in long source code. The study shows that broader context coverage improves performance while multi-view classification offers a strong efficiency trade-off.',
      link: 'https://ecs.ju-journal.org/jujecs/article/view/63',
      publishedDate: '2026-08-25',
      overviewImage: '/publications/code-authorship-segmentation.svg',
      overviewAlt: 'Overview of segmentation strategies for long-code authorship detection',
    },
    {
      id: 1,
      title:
        'Divide and Conquer: A Two-Stage Cascaded Framework with K-Fold Ensembling for Multi-Label Bangla Hate Speech Classification',
      venue: 'BLP-2025 Workshop (ACL Anthology)',
      type: 'Conference paper',
      description:
        'Champion of the BLP-2025 shared task; received the <strong>Best Paper Award</strong>. Two-stage cascaded model with k-fold ensembling for multi-label Bangla hate speech.',
      link: 'https://aclanthology.org/2025.banglalp-1.39/',
      publishedDate: '2025-12-01',
      overviewImage: '/publications/flow_chart_method-blp.png',
      overviewAlt: 'Overview figure for the BLP-2025 hate speech classification paper',
      figurePdf: '/publications/flow_chart_method-blp.pdf',
    },
    {
      id: 2,
      title: 'Optimizing the Fine‑Tuning Process of Large Language Models',
      venue: 'JU Journal of Electronics and Computer Science, Vol. 16, 2025',
      type: 'Journal article',
      description:
        'Compares memory-efficient QLoRA-style fine-tuning on LLaMA-2 7B (CodeAlpaca-20k), reducing GPU memory from 112 GB to 10.8 GB with comparable performance.',
      link: 'https://ecs.ju-journal.org/jujecs/article/view/38',
      publishedDate: '2025-07-03',
      overviewImage: '/publications/llm-optimized-fine-tuning.png',
      overviewAlt: 'Overview figure for the LLM fine-tuning journal article',
      hidden: true,
    },
    {
      id: 3,
      title: 'Enhancing Wide‑Angle Image Using Narrow‑Angle View of the Same Scene',
      venue: 'arXiv:2504.09455, April 2025',
      type: 'Preprint',
      description:
        'GAN-based fusion of wide- and narrow-angle views with attention to recover detail in wide-angle images.',
      link: 'https://arxiv.org/abs/2504.09455',
      publishedDate: '2025-04-13',
      overviewImage: '/publications/wide-angle-model-arch.png',
      overviewAlt: 'Overview figure for the wide-angle image enhancement preprint',
    },
  ];

  const visiblePublications = publications.filter(
    (publication) => !publication.hidden
  );

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Research & Publications</h1>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Research Publications',
              description: 'Research publications and academic papers by Mahbub Islam Mahim',
              itemListElement: visiblePublications.map((pub, index) => ({
                '@type': 'ScholarlyArticle',
                position: index + 1,
                name: pub.title,
                description: pub.description.replace(/<[^>]*>/g, ''),
                url: pub.link,
                publisher: {
                  '@type': 'Organization',
                  name: pub.venue,
                },
                datePublished: pub.publishedDate,
                author: {
                  '@type': 'Person',
                  name: 'Mahbub Islam Mahim',
                },
              })),
            }),
          }}
        />

        <div className={styles.publicationsCard}>
          {visiblePublications.map((publication, index) => (
            <div key={publication.id}>
              {index > 0 && <div className={styles.divider} aria-hidden />}
              <article className={styles.publicationItem}>
                <div className={styles.overview}>
                  <img
                    src={publication.overviewImage}
                    alt={publication.overviewAlt}
                    className={styles.overviewImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.publicationTitle}>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {publication.title}
                    </a>
                  </h3>
                  <p className={styles.publicationMeta}>
                    <span>{publication.venue}</span>
                    <span className={styles.metaSep} aria-hidden>
                      ·
                    </span>
                    <span>{publication.type}</span>
                  </p>
                  <p
                    className={styles.publicationDescription}
                    dangerouslySetInnerHTML={{ __html: publication.description }}
                  />
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.paperLink}
                  >
                    View paper
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
