import Link from "next/link";
import styles from '../../../styles/component.module.css';

export default function Navbar() {
    return (
       <div className={styles.navbar}>
            <Link href="#review">
                Оценка
            </Link>
            <Link href="#documents">
                Документы
            </Link>
            <Link href="#questions">
                Вопросы
            </Link>
            <Link href="#benefits">
                Преимущества
            </Link>
            <Link href="#feedback">
                Отзывы
            </Link>
       </div>
    )
};
