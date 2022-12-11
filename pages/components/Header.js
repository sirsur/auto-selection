import Navbar from './Header/Navbar';
import styles from '../../styles/component.module.css';
import { BiChevronsDown } from 'react-icons/bi';
import { BsTextRight } from 'react-icons/bs';
import Link from "next/link";

/*
    TODO: 
        1. specify div for icon
        2. media styles
*/

export default function Header() {
    return (
        <header>
            <Navbar />
            <BsTextRight className={styles.header_navbar_icon} />
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
