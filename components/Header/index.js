import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <Image
          src="/images/logo-sjms-lateral.jpg"
          alt="BrasilAPI Logo"
          width="286"
          height="93"
        />
        <div className={styles.ctas}>
          <a href="/docs" className={styles.button}>
            Documentação
          </a>
        </div>
      </div>
    </header>
  );
}
