import Link from 'next/link'
import styles from './Footer.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Footer() {
    return (
        <>
            <footer className={`${styles.footer_container} ${inter.className}`}>
                <div >
                    <div className={styles.footer_link}><Link href="/">Meta</Link></div>
                    <div className={styles.footer_link}><Link href="/">About</Link></div>
                    <div className={styles.footer_link}><Link href="/">Blog</Link></div>
                    <div className={styles.footer_link}><Link href="/">Jobs</Link></div>
                    <div className={styles.footer_link}><Link href="/">Help</Link></div>
                    <div className={styles.footer_link}><Link href="/">API</Link></div>
                    <div className={styles.footer_link}><Link href="/">Privacy</Link></div>
                    <div className={styles.footer_link}><Link href="/">Terms</Link></div>
                    <div className={styles.footer_link}><Link href="/">Locations</Link></div>
                    <div className={styles.footer_link}><Link href="/">Instagram Life</Link></div>
                    <div className={styles.footer_link}><Link href="/">Threads</Link></div>
                    <div className={styles.footer_link}><Link href="/">Contact Uploading & Non-Users</Link></div>
                    <div className={styles.footer_link}><Link href="/">Meta Verified</Link></div>
                </div>
                <div>
                    <div>
                        <select>
                            <option>English - Us</option>
                            <option>English - En</option>
                        </select>
                    </div>
                    <div>
                        &copy; 2024 Instagrm from Meta
                    </div>
                </div>
            </footer>
        </>
    );
}