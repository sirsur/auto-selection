import styles from '../../styles/component.module.css';

export default function Comment() {
    return (
        <section>
            <h2>Оцените работу нашего сервиса</h2>
            <p>Опишите свой опыт работы с нами</p>
            <form className={styles.comment_grid}>
                <input type="text" name="name" placeholder="ФИО"  />
                <input type="tel" name="phoneNumber" placeholder="Номер телефона" />
                <input className={styles.input_more} type="text" name="more" placeholder="Расскажите нам больше..." />
                <button type="submit">Отправить отзыв</button>
            </form>
        </section>
    )
}
