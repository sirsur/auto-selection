import Navbar from './Header/Navbar';
import styles from '../../styles/component.module.css';
import { BiChevronsDown } from 'react-icons/bi';

/*
    TODO: specify div for icon
*/

export default function Header() {
    return (
        <header>
            <div className={styles.header_div}>
                <Navbar />
                <h1>СРОЧНЫЙ ВЫКУП АВТО В</h1>
                <h1 className={styles.header_h1_blue}>НИЖНЕМ НОВГОРОДЕ И ОБЛАСТИ</h1>
            </div>
            <div className={styles.header_icon_flex}>
                <BiChevronsDown className={styles.header_icon} />
            </div>
        </header>
    )
};
