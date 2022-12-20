import styles from '../../styles/component.module.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from "@material-ui/core";

const feedbacks = [
    'Очень доволен, что при продаже автомобиля обратился именно к вам. Оперативно приехали, сделали фотографии, реально оценили техническое состояние. Помогли продать Toyota Camry в кратчайшие сроки.',
    'Продавала авто после ДТП. Все быстро оформили. А главное дали отличную цену. Спасибо большое.',
    'Решила продать свой форд. Среди множества конкурентов, данная компания предложила больше всех. Осталась довольна сотрудничеством и рекомендую другим автовладельцам.',
    'Работают оперативно! Нужны были деньги предложил свое авто. Рассчитали в тот же день и помогли продать как можно быстрее.',
    'Продал ребятам свой автомобиль, нужны были срочно деньги, автосалоны предлагали только обмен на новый авто, а тут все быстро, от звонка до написания договора меньше часа и я довольный с деньгами, советую.',
    'Парень, который работал со мной - молодец, работает четко! Самое главное вежливый и доброжелательный. Расчет сразу без задержки!',
];

const variants = {
    desktop: {
        y: ['calc(0*37vh)', 'calc(1*37vh)', 'calc(2*37vh)', 'calc(3*37vh)', 'calc(4*37vh)', 'calc(5*37vh)', 'calc(6*37vh)']
    },
    tablet: {
        x: ['calc(0*63vw)', 'calc(1*63vw)', 'calc(2*63vw)', 'calc(3*63vw)', 'calc(4*63vw)', 'calc(5*63vw)', 'calc(6*63vw)'],
        y: [0, 0, 0, 0, 0, 0, 0]
    },
    mobile: {
        x: ['calc(0*67vw)', 'calc(1*67vw)', 'calc(2*67vw)', 'calc(3*67vw)', 'calc(4*67vw)', 'calc(5*67vw)', 'calc(6*67vw)'],
        y: [0, 0, 0, 0, 0, 0, 0]
    }
}

export default function Feedback() {
    let isDesktop = useMediaQuery("(max-width:1024px)");
    let isMobile = useMediaQuery("(max-width:750px)");

    return (
        <section id='feedback'>
            <div>
                <h2>Более</h2>
                <h1>100</h1>
                <h2>положительных отзывов</h2>
            </div>
            <motion.div 
                className={styles.carousel} 
                animate={
                    isMobile ? "mobile" : (isDesktop ? "tablet" : "desktop")
                }
                transition={{ 
                    repeat: Infinity, 
                    ease: "backInOut",
                    duration: 40
                }}
                variants={variants}
            >
                <motion.div 
                    className={ styles.carousel_item }
                >
                    <p>{feedbacks[feedbacks.length - 2]}</p>
                </motion.div>
                <motion.div 
                    className={ styles.carousel_item }
                >
                    <p>{feedbacks[feedbacks.length - 1]}</p>
                </motion.div>
                {feedbacks?.map((feedback, index) => 
                    <motion.div 
                        key={ index }
                        className={ styles.carousel_item }
                    >
                        <p>{feedback}</p>
                    </motion.div>
                )}
                <motion.div 
                    className={ styles.carousel_item }
                >
                    <p>{feedbacks[0]}</p>
                </motion.div>
            </motion.div>
        </section>
    )
};
