import styles from '../../styles/component.module.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const feedbacks = [
    'Привет я тестовый запрос номер 0. Желаю хорошего дня',
    'Привет я тестовый запрос номер 1. Пиздец как ты меня уже заебал крутить',
    'Привет я тестовый запрос номер 2. Программист ты конечно да',
    'Привет я тестовый запрос номер 3. Поскорее бы отдохнуть',
    'Привет я тестовый запрос номер 4. Скоро новый год',
    'Привет я тестовый запрос номер 5. Это какой-то ужас а не браузерные события',
];

export default function Feedback() {
    const [prevPrevSlide, setPrevPrevSlide] = useState(feedbacks[feedbacks.length - 1]);
    const [prevSlide, setPrevSlide] = useState(feedbacks[0]);
    const [curSlide, setCurSlide] = useState(feedbacks[1]);
    const [nextSlide, setNextSlide] = useState(feedbacks[2]);

    let q = feedbacks.length - 2;
    let i = feedbacks.length - 1;
    let j = 0;
    let k = 1;

    /*
        короче есть несколько варинатов:
            - сделать аналог таймаута через промисы
            - промисифицировать таймаут и добавить веб воркер для неактивных страниц
            - втупую впихать пять дивов которые вечно будут крутиться между собой (последний вариант и самый конченный)
            - попытаться еще посмотреть через framer motion мб что-то упускаю
            - сделать один див и его прокручивать и во время прокручивания 
                менять значение через framer motion
                пример есть в теге AnimatePresence
    /*

    /*async function delay(ms) {
        return new Promise((resolve, _)  => {
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
                end = new Date().getTime();
            }
            resolve("Success");
        });
    };
    function generator() {
        delay(6000).then(() => {
            setPrevPrevSlide(feedbacks[q]);
            setPrevSlide(feedbacks[i]);
            setCurSlide(feedbacks[j]);
            setNextSlide(feedbacks[k]);
            if (q > 0) {
                k = j;
                j = i;
                i = q;
                q--;
            } else if (q === 0) {
                q = feedbacks.length - 1;
                i = 0;
                j = 1;
                k = 2;
            }
            generator();
        });
    };

    useEffect(() => {
        delay(5000).then(() => {
            generator();
        });
    }, []);*/

    return (
        <section className={styles.feedback_section}>
            <div>
                <h2 className={styles.feedback_h2}>Более</h2>
                <h1 className={styles.feedback_h1}>100</h1>
                <h2 className={styles.feedback_h2}>положительных отзывов</h2>
            </div>
            <motion.div
                className={styles.carousel}
                animate={{ y: '37vh' }}
                transition={{ delay: 5, repeat: Infinity, duration: 1, repeatDelay: 5 }}
            >
                <div className={styles.carousel_item_prev_prev}>
                    { prevPrevSlide }
                </div>
                <motion.div 
                    className={styles.carousel_item_prev}
                    animate={{ filter: 'blur(0px)' }}
                    transition={{ delay: 5, repeat: Infinity, duration: 1, repeatDelay: 5 }}
                >
                    { prevSlide }
                </motion.div>
                <motion.div 
                    className={styles.carousel_item_cur}
                    animate={{ filter: 'blur(7px)' }}
                    transition={{ delay: 5, repeat: Infinity, duration: 1, repeatDelay: 5 }}
                >
                    { curSlide }
                </motion.div>
                <div className={styles.carousel_item_next}>
                    { nextSlide }
                </div>
            </motion.div>
        </section>
    )
};
