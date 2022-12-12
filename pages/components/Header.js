import Navbar from './Header/Navbar';
import styles from '../../styles/component.module.css';
import { BiChevronsDown } from 'react-icons/bi';
import { BsTextIndentRight, BsTextIndentLeft, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import Link from "next/link";
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
    open: { x: 0 },
    closed: { x: "100vw" },
}

export default function Header() {
    const [sideBar, setSideBar] = useState(false);

    return (
        <header>
            <Navbar />
            <button className={styles.header_button} onClick={() => setSideBar(true)}>
                <BsTextIndentRight className={styles.header_navbar_icon} />
            </button>
            {
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={ sideBar ? "open" : "closed" }
                    transition={{ ease: "easeIn" }}
                    variants={ variants }
                    className={ styles.sidebar }
                >
                    <div className={styles.top_sidebar}>
                        <div className={styles.sidebar_navigation}>
                            <Link href="#review" onClick={() => setSideBar(false)}>Оценка</Link>
                            <Link href="#documents" onClick={() => setSideBar(false)}>Документы</Link>
                            <Link href="#questions" onClick={() => setSideBar(false)}>Процесс</Link>
                            <Link href="#benefits" onClick={() => setSideBar(false)}>Преимущества</Link>
                            <Link href="#feedback" onClick={() => setSideBar(false)}>Отзывы</Link>
                        </div>
                        <button className={styles.questions_button} onClick={() => setSideBar(false)}>
                            <BsTextIndentLeft className={styles.hide_sidebar_icon} />
                        </button>
                    </div>
                    <div className={styles.bottom_sidebar}>
                        <span>
                            <Link href="https://api.whatsapp.com/send?phone=89324388546">
                                <BsWhatsapp className={styles.sidebar_bottom_icons} />
                            </Link>
                            <Link href="https://telegram.me/de4nny">
                                <BsTelegram className={styles.sidebar_bottom_icons} />
                            </Link>
                        </span>
                        <p>89123456789</p>
                        <p>auto_selection_nn@gmail.com</p>
                    </div>
                </motion.div>
            }
            <h1>СРОЧНЫЙ ВЫКУП АВТО В</h1>
            <h1 className={styles.header_h1_blue}>НИЖНЕМ НОВГОРОДЕ И ОБЛАСТИ</h1>
            <div className={styles.header_icon_flex}>
                <Link href="#review">
                    <BiChevronsDown className={styles.header_icon} />
                </Link>
            </div>
        </header>
    )
};
