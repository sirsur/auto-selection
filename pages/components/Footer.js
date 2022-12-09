import styles from '../../styles/component.module.css';
import { BsTelegram, BsWhatsapp, BsTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer>
            <p>Оценка</p>
            <p>Документы</p>
            <p>Процесс</p>
            <p>Преимущества</p>
            <p>Отзывы</p>
            <span>
                <BsTelephoneFill className={styles.footer_icons} />
                <p>89123456789</p>
            </span>
            <span>
               <BsFillEnvelopeFill className={styles.footer_icons} />
               <p>auto_selection_nn@gmail.com</p> 
            </span>
            <BsWhatsapp className={styles.footer_icons} />
            <BsTelegram className={styles.footer_icons} />
        </footer>
    )
}
