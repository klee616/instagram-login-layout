import styles from './Register.module.css'
import Link from 'next/link'

export default function Register() {
    return (
        <>
            <div className={styles.instagram_register}>
                Don't have an account? <Link href="/" className={styles.register_link} >Sign up</Link>
            </div>
        </>
    )
}