"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Activities.module.css";

interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[];
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Patent Experience Sharing Session at SRBD",
    date: "April 15, 2025",
    description:
      "Conducted a session on patent strategy in front of engineers at SRBD, specifically sharing my A1 patent journey experience. Demonstrated the complete process from ideation to patent filing, including best practices for intellectual property protection and strategies for successful patent applications.",
    images: ["./IMG_1493.jpg"],
  },
  {
    id: 2,
    title: "Business Trip to Oxford, UK",
    date: "March 2025",
    description:
      "Visited Oxford Semantic Technologies, UK for project planning and technical discussions. Met with the team to align on project goals and timelines.",
    images: [
      "./20A92FD5-7473-4FD2-A8CE-004FE067586C_1_105_c.jpeg",
      "./1A6CE931-16B7-41D3-A3C1-AFADEDF8AFB2_1_105_c.jpeg",
      "./B4D924D6-EEB0-45F6-AF6B-19A734447A16_1_105_c.jpeg",
      "./EFC7FFC2-070E-4216-A20F-2B06964BD2CB_1_105_c.jpeg",
      "./504BCFC9-DD02-4356-91F3-EF559681764F_1_105_c.jpeg",
      "./9EB286FC-0E0A-40A3-8B00-F81F8796ABED_1_105_c.jpeg",
      "./7ACE9258-40E5-4028-98B1-1BC26B249DC5_1_105_c.jpeg",
    ],
  },
  {
    id: 3,
    title: "Exploring London: A Glimpse of the City",
    date: "March 2025",
    description:
      "Took some time to explore the vibrant city of London during my UK visit. Experienced the rich history, iconic landmarks, and diverse culture of one of the world's most dynamic cities.",
    images: [
      "./ABD7AB55-E7C5-4D06-B121-2537BF0D4257_1_105_c.jpeg",
      "./A91AC935-5E8B-452B-A026-B6457B0A5434_1_105_c.jpeg",
    ],
  },
];

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTabLeftArrow, setShowTabLeftArrow] = useState(false);
  const [showTabRightArrow, setShowTabRightArrow] = useState(false);
  const tabBarRef = useRef<HTMLDivElement | null>(null);
  const mediaColumnRef = useRef<HTMLDivElement | null>(null);

  const currentActivity = activities[currentIndex];
  const hasMultipleImages = currentActivity.images.length > 1;
  const tabBarScrollable = showTabLeftArrow || showTabRightArrow;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    const tabBar = tabBarRef.current;
    if (!tabBar) return;

    const updateTabArrows = () => {
      const maxScrollLeft = tabBar.scrollWidth - tabBar.clientWidth;
      setShowTabLeftArrow(tabBar.scrollLeft > 2);
      setShowTabRightArrow(tabBar.scrollLeft < maxScrollLeft - 2);
    };

    updateTabArrows();
    tabBar.addEventListener("scroll", updateTabArrows);
    window.addEventListener("resize", updateTabArrows);

    return () => {
      tabBar.removeEventListener("scroll", updateTabArrows);
      window.removeEventListener("resize", updateTabArrows);
    };
  }, []);

  const focusMediaColumn = () => {
    mediaColumnRef.current?.focus();
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentActivity.images.length - 1 : prev - 1
    );
    focusMediaColumn();
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentActivity.images.length - 1 ? 0 : prev + 1
    );
    focusMediaColumn();
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
    focusMediaColumn();
  };

  const handleMediaKeyDown = (event: React.KeyboardEvent) => {
    if (!hasMultipleImages) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPreviousImage();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextImage();
    }
  };

  const scrollTabs = (direction: "left" | "right") => {
    const tabBar = tabBarRef.current;
    if (!tabBar) return;
    const delta = direction === "left" ? -260 : 260;
    tabBar.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Activities</h1>

        <p className={styles.subtitle}>
          Work, travel, and moments that shaped my journey.
        </p>

        <section className={styles.card}>
          <div className={styles.tabBarWrap}>
            {showTabLeftArrow && (
              <button
                type="button"
                className={`${styles.tabScrollButton} ${styles.tabScrollLeft}`}
                onClick={() => scrollTabs("left")}
                aria-label="Scroll activities left"
              >
                ‹
              </button>
            )}

            <div
              ref={tabBarRef}
              className={`${styles.tabBar} ${
                tabBarScrollable ? styles.tabBarScrollable : styles.tabBarFill
              }`}
              role="tablist"
              aria-label="Select activity"
            >
              {activities.map((activity, index) => (
                <button
                  key={activity.id}
                  type="button"
                  role="tab"
                  id={`activity-tab-${activity.id}`}
                  aria-selected={index === currentIndex}
                  aria-controls="activity-panel"
                  className={`${styles.activityTab} ${index === currentIndex ? styles.activeTab : ""}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className={styles.tabTitle}>{activity.title}</span>
                  <span className={styles.tabDate}>{activity.date}</span>
                </button>
              ))}
            </div>

            {showTabRightArrow && (
              <button
                type="button"
                className={`${styles.tabScrollButton} ${styles.tabScrollRight}`}
                onClick={() => scrollTabs("right")}
                aria-label="Scroll activities right"
              >
                ›
              </button>
            )}
          </div>

          <div
            id="activity-panel"
            role="tabpanel"
            aria-labelledby={`activity-tab-${currentActivity.id}`}
            className={styles.activityPanel}
          >
            <div
              ref={mediaColumnRef}
              className={styles.mediaColumn}
              tabIndex={hasMultipleImages ? 0 : undefined}
              onMouseEnter={focusMediaColumn}
              onKeyDown={handleMediaKeyDown}
            >
              <div
                id={`activity-carousel-${currentActivity.id}`}
                className={styles.carousel}
              >
                <div className={styles.carouselInner}>
                  <div
                    className={styles.carouselTrack}
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {currentActivity.images.map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className={styles.carouselItem}
                      >
                        <img
                          src={image}
                          alt={`${currentActivity.title} — photo ${index + 1}`}
                          className={styles.carouselImage}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {hasMultipleImages && (
                  <>
                    <button
                      type="button"
                      className={`${styles.carouselControl} ${styles.carouselControlPrev}`}
                      onClick={goToPreviousImage}
                      aria-label="Previous slide"
                      data-slide="prev"
                    >
                      <span
                        className={styles.carouselControlIcon}
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className={`${styles.carouselControl} ${styles.carouselControlNext}`}
                      onClick={goToNextImage}
                      aria-label="Next slide"
                      data-slide="next"
                    >
                      <span
                        className={styles.carouselControlIcon}
                        aria-hidden="true"
                      />
                    </button>

                    <ol className={styles.carouselIndicators}>
                      {currentActivity.images.map((_, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            className={
                              index === currentImageIndex
                                ? styles.carouselIndicatorActive
                                : undefined
                            }
                            onClick={() => selectImage(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={
                              index === currentImageIndex ? "true" : undefined
                            }
                          />
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </div>

              {hasMultipleImages && (
                <div
                  className={styles.thumbRow}
                  role="list"
                  aria-label="Activity images"
                >
                  {currentActivity.images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      role="listitem"
                      className={`${styles.thumbBtn} ${index === currentImageIndex ? styles.activeThumb : ""}`}
                      onClick={() => selectImage(index)}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt=""
                        className={styles.thumbImage}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <article className={styles.contentColumn}>
              <h2 className={styles.activityTitle}>{currentActivity.title}</h2>
              <p className={styles.activityDate}>{currentActivity.date}</p>
              <p className={styles.activityDescription}>
                {currentActivity.description}
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
