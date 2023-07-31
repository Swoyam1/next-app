import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Built by Swoyam</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} className={styles.icon} height={15} alt='swoyam dev fb'></Image>
        <Image src="/2.png" width={15} className={styles.icon} height={15} alt='swoyam dev insta'></Image>
        <Image src="/3.png" width={15} className={styles.icon} height={15} alt='swoyam dev twitter'></Image>
        <Image src="/4.png" width={15} className={styles.icon} height={15} alt='swoyam dev youtube'></Image>
      </div>
    </div>
  )
}

export default Footer;