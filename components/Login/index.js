import styles from './Login.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
    return (
        <>
            <div className={styles.login_container}>
                <div>
                    <Image
                        src="/images/instagram_logo.png"
                        width={175}
                        height={70}
                        alt='Instagram Logo'></Image>
                </div>
                <div>
                    <form action="" className={styles.login_form}>
                        <input id='login' name="login" placeholder="Phone number, username, or email"></input>
                        <input id='password' name="password" placeholder="Password"></input>
                        <button className={styles.loginButton}>Log in</button>
                    </form>
                </div>
                <div className={styles.box}>
                    <div className={styles.line}><hr></hr></div>
                    <div>OR</div>
                    <div className={styles.line}><hr></hr></div>
                </div>
                <div className={styles.facebook}>
                <Image
                        src="/images/facebook.png"
                        width={20}
                        height={20}
                        alt='Instagram Logo'></Image><Link href="/">Log in with Facebook</Link>
                </div>
                <div className={styles.forgot_password}>
<Link href="/">
    Forgot password
</Link>
                </div>
            </div>
        </>
    )
}