import styles from '../../styles/component.module.css';
import { BsTelegram, BsWhatsapp, BsTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer_links}>
                <Link href="#review">Оценка</Link>
                <Link href="#documents">Документы</Link>
                <Link href="#questions">Процесс</Link>
            </div>
            <div className={styles.centering_grid}>
                <Link href="#benefits">Преимущества</Link>
                <Link href="#feedback">Отзывы</Link>
            </div>
            <div className={styles.centering_grid_media}>
                <span>
                    <BsTelephoneFill className={styles.footer_icons} />
                    <p>89873937976</p>
                </span>
                <span>
                   <BsFillEnvelopeFill className={styles.footer_icons} />
                   <p>auto.selection.nn@mail.ru</p> 
                </span>
            </div>
            <div className={styles.footer_media}>
                <Link href="https://api.whatsapp.com/send?phone=89873937976">
                    <BsWhatsapp className={styles.footer_icons_link} />
                </Link>
                <Link href="https://telegram.me/misterkrabZZZ">
                    <BsTelegram className={styles.footer_icons_link} />
                </Link>
            </div>
        </footer>
    )
}
