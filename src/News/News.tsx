"use client";

import { useMemo, useState } from "react";
import styles from "./News.module.css";

const MAX_VISIBLE = 5;

type NewsItem = {
  id: number;
  date: string;
  dateTime: string;
  text: string;
  link?: string;
  linkLabel?: string;
  external?: boolean;
  highlight?: string;
};

const newsItems: NewsItem[] = [
  {
    id: 17,
    date: "Aug 25, 2026",
    dateTime: "2026-08-25",
    text: "Published a journal article on segmentation strategies for long-code authorship detection in Volume 17 of the JU Journal of Electronics and Computer Science.",
    highlight: "Published a journal article",
    link: "https://ecs.ju-journal.org/jujecs/article/view/63",
    linkLabel: "View article",
    external: true,
  },
  {
    id: 16,
    date: "Aug 2026",
    dateTime: "2026-08",
    text: "Started my PhD at Wayne State University and joined the Trustworthy AI Lab as a Research Fellow, researching trustworthy AI for healthcare and medical imaging.",
    highlight: "Trustworthy AI Lab",
    link: "https://sites.google.com/view/mlpa/mainpage",
    linkLabel: "Visit the lab",
    external: true,
  },
  {
    id: 1,
    date: "May 2026",
    dateTime: "2026-05",
    text: "Awarded the Rumble Fellowship to pursue PhD at Wayne State University beginning in Fall 2026.",
    highlight: "Rumble Fellowship",
    link: "https://gradschool.wayne.edu/students/funding/fellowships#rumble",
    linkLabel: "Rumble Fellowship",
    external: true,
  },
  {
    id: 2,
    date: "Dec 2025",
    dateTime: "2025-12",
    text: "Champion of the BLP-2025 shared task and received the Best Paper Award (ACL Anthology) for Bangla hate speech classification.",
    highlight: "Best Paper Award",
    link: "https://aclanthology.org/2025.banglalp-1.39/",
    linkLabel: "View paper",
    external: true,
  },
  {
    id: 3,
    date: "Jul-Aug 2025",
    dateTime: "2025-08",
    text: "Recognized as Icon Engineer at Samsung for outstanding performance (Jul-Aug 2025).",
    highlight: "Icon Engineer",
    link: "https://drive.google.com/file/d/1ij6drvPjrX5SbFpcowwE8CELS8IJ3dNW/view?usp=sharing",
    linkLabel: "View certificate",
    external: true,
  },
  {
    id: 9,
    date: "2025",
    dateTime: "2025-06",
    text: "Published journal article on optimizing LLM fine-tuning with QLoRA in JU Journal of Electronics and Computer Science.",
    link: "https://ecs.ju-journal.org/jujecs/article/view/38",
    linkLabel: "View article",
    external: true,
  },
  {
    id: 4,
    date: "Apr 2025",
    dateTime: "2025-04",
    text: "Promoted to Senior Software Engineer at Samsung R&D Institute Bangladesh.",
    highlight: "Senior Software Engineer",
    link: "#experience",
    linkLabel: "Experience",
  },
  {
    id: 5,
    date: "Apr 2025",
    dateTime: "2025-04",
    text: "Released arXiv preprint on enhancing wide-angle images using narrow-angle views of the same scene.",
    link: "https://arxiv.org/abs/2504.09455",
    linkLabel: "View preprint",
    external: true,
  },
  {
    id: 6,
    date: "Apr 2025",
    dateTime: "2025-04",
    text: "Conducted a patent strategy session at Samsung SRBD, sharing the A1 patent journey with engineers.",
    link: "#activities",
    linkLabel: "Activities",
  },
  {
    id: 7,
    date: "Mar 2025",
    dateTime: "2025-03",
    text: "Business visit to Oxford Semantic Technologies, UK for project planning and technical discussions.",
    link: "#activities",
    linkLabel: "Activities",
  },
  {
    id: 8,
    date: "Feb 2025",
    dateTime: "2025-02",
    text: "Wide-angle image enhancement patent graded A1 by Samsung Research.",
    highlight: "A1",
    link: "#patent",
    linkLabel: "Patent",
  },
  {
    id: 10,
    date: "Nov-Dec 2024",
    dateTime: "2024-12",
    text: "Recognized as Icon Engineer at Samsung for outstanding performance (Nov-Dec 2024).",
    highlight: "Icon Engineer",
    link: "https://drive.google.com/file/d/1llMk7BYPFn99UENl2npVpzJQYkP_ty7j/view?usp=sharing",
    linkLabel: "View certificate",
    external: true,
  },
  {
    id: 11,
    date: "2024",
    dateTime: "2024-06",
    text: "Received Recognition in Innovation at Samsung for research and engineering contributions.",
    highlight: "Recognition in Innovation",
    link: "https://drive.google.com/file/d/1bqoWcE3ArrV-YnThYtcsP0KZBrQ_djWQ/view?usp=sharing",
    linkLabel: "View certificate",
    external: true,
  },
  {
    id: 12,
    date: "Aug 2023",
    dateTime: "2023-08",
    text: "Earned Samsung Professional Software Coding Certification.",
    link: "https://drive.google.com/file/d/1KENS-TVmoFbjA9Uu9H743KIt-DgV9Gan/view?usp=sharing",
    linkLabel: "View certificate",
    external: true,
  },
  {
    id: 14,
    date: "Apr 2023",
    dateTime: "2023-04",
    text: "Joined Samsung R&D Institute Bangladesh as Software Engineer.",
    linkLabel: "Experience",
  },
  {
    id: 13,
    date: "2023",
    dateTime: "2023-06",
    text: "Completed MSc in Computer Science & Engineering from Jahangirnagar University.",
    link: "https://juniv.edu/",
    linkLabel: "Jahangirnagar University",
    external: true,
  },
  {
    id: 15,
    date: "2021",
    dateTime: "2021-06",
    text: "Completed BSc in Computer Science & Engineering from Jahangirnagar University.",
    link: "https://juniv.edu/",
    linkLabel: "Jahangirnagar University",
    external: true,
  },
];

type NewsYearGroup = {
  year: string;
  items: NewsItem[];
};

function getYear(dateTime: string): string {
  return dateTime.slice(0, 4);
}

function groupByYear(items: NewsItem[]): NewsYearGroup[] {
  const groups: NewsYearGroup[] = [];

  for (const item of items) {
    const year = getYear(item.dateTime);
    const lastGroup = groups[groups.length - 1];

    if (lastGroup?.year === year) {
      lastGroup.items.push(item);
    } else {
      groups.push({ year, items: [item] });
    }
  }

  return groups;
}

function renderText(text: string, highlight?: string) {
  if (!highlight || !text.includes(highlight)) {
    return text;
  }

  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <strong className={styles.emphasis}>{highlight}</strong>
      {after}
    </>
  );
}

export default function News() {
  const [expanded, setExpanded] = useState(false);
  const hasOverflow = newsItems.length > MAX_VISIBLE;
  const hiddenCount = newsItems.length - MAX_VISIBLE;
  const visibleItems = expanded ? newsItems : newsItems.slice(0, MAX_VISIBLE);
  const yearGroups = useMemo(() => groupByYear(visibleItems), [visibleItems]);

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2 className={styles.title}>News & Updates</h2>

        <div className={styles.card}>
          <div className={styles.list}>
            {yearGroups.map((group) => (
              <div key={group.year} className={styles.yearGroup}>
                <div className={styles.yearLabel}>{group.year}</div>
                <ul className={styles.yearItems}>
                  {group.items.map((item) => (
                    <li key={item.id} className={styles.item}>
                      <div className={styles.content}>
                        <p className={styles.text}>
                          {renderText(item.text, item.highlight)}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            className={styles.link}
                            {...(item.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {item.linkLabel ?? "Learn more"}
                          </a>
                        )}
                      </div>
                      <time
                        className={styles.itemDate}
                        dateTime={item.dateTime}
                      >
                        {item.date}
                      </time>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {hasOverflow && (
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded
                ? "Show less"
                : `Show ${hiddenCount} older update${hiddenCount === 1 ? "" : "s"}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
