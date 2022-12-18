import styles from '../../styles/component.module.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const feedbacks = [
    'Привет я тестовый запрос номер 0. Желаю хорошего дня',
    'Привет я тестовый запрос номер 1. Пиздец как ты меня уже заебал крутить',
    'Привет я тестовый запрос номер 2. Программист ты конечно да',
    'Привет я тестовый запрос номер 3. Поскорее бы отдохнуть',
    'Привет я тестовый запрос номер 4. Скоро новый год',
    'Привет я тестовый запрос номер 5. Это какой-то ужас а не браузерные события',
];

export default function Feedback() {
    return (
        <section id='feedback'>
            <div>
                <h2>Более</h2>
                <h1>100</h1>
                <h2>положительных отзывов</h2>
            </div>
            <AnimatePresence>
                <motion.div className={styles.carousel}>
                        <motion.div className={styles.carousel_item}>
                            <p>{feedbacks[0]}</p>
                        </motion.div>
                </motion.div>
            </AnimatePresence>
            {
                /*
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
            */
            }
        </section>
    )
};
