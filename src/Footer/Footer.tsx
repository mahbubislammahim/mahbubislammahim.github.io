import styles from './Footer.module.css';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/mahim-samsung" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/mahbub-islam-mahim-4634a5154/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <LinkedIn />
          </a>
          <a href="mailto:mahbubislammahim@gmail.com" className={styles.iconLink}>
            <Email />
          </a>
        </div>
        <p className={styles.copyright}>
          © {currentYear} Mahbub Islam Mahim. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 