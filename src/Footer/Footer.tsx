import styles from './Footer.module.css';
import { siteConfig, formatSiteLastUpdated } from '@/app/metadata';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <p className={styles.copyright}>
            © {currentYear} Mahbub Islam Mahim. All rights reserved.
          </p>
          <p className={styles.lastUpdated}>
            <time dateTime={siteConfig.lastUpdated}>
              Last updated {formatSiteLastUpdated(siteConfig.lastUpdated)}
            </time>
          </p>
        </div>
      </div>
    </footer>
  );
}
