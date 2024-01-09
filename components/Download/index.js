import styles from './Download.module.css'
import Image from 'next/image';

export default function Download(){
    return (
        <>
            <div className={styles.instagram_download}>
                <div>Get the app.</div>
                <div className={styles.download_image}>
                    <div>
                        <Image
                            src="/images/app_store.png"
                            width={136}
                            height={40}
                            alt='Apple'></Image>

                        <Image
                            src="/images/google_play_store.png"
                            width={136}
                            height={40}
                            alt='Google'></Image>
                    </div>
                </div>
            </div>
        </>
    );
}