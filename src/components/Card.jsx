import styles from './Card.module.css'
import qrImage from "./../../assets/image-qr-code.png"

export default function Card() {
    return (
        <main className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.cardContent}>
                    <img className={styles.cardImage} src={qrImage} alt="qr code imageS" />

                    <div className={styles.cardTexts}>
                        <h3 className={styles.cardTitle}>Improve your front-end skills by building projects</h3>
                        <p className={styles.cardDescription}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </div>
                </div>
            </div>
        </main>
    )
}