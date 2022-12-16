import styles from '../../styles/component.module.css';

export default function Benefits() {
    return (
        <section id='benefits'>
            <h2>Почему стоит обратиться именно к нам</h2>
            <div className={styles.benefits_grid}>
                <div className={styles.benefits_time}>
                    <p>Сэкономим ваше время</p>
                </div>
                <div className={styles.benefits_price}>
                    <p>Рассчитаем максимально точную цену</p>
                </div>
                <div className={styles.benefits_safety}>
                    <p>Гарантируем безопасность</p>
                </div>
                <div className={styles.benefits_care}>
                    <p>Возьмем все заботы на себя</p>
                </div>
            </div>
        </section>
    )
};
