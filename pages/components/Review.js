import styles from '../../styles/component.module.css';
import { BiPhotoAlbum } from 'react-icons/bi';

export default function Review() {
    return (
        <section id = 'review'>
            <h2>Получите оценку вашего автомобиля</h2>
            <p>Продайте свой автомобиль в любом состоянии с выгодой. Оставьте заявку, мы оценим и предложим стоимость</p>
            <form className={styles.review_form}>
                <input type="text" name="name" placeholder="ФИО" />
                <input type="text" name="km" placeholder="Пробег" />
                <input type="tel" name="phoneNumber" placeholder="Номер телефона" />
                <label className={styles.review_form_photo}>
                    <input type="file" name="photo" placeholder="Загрузите фотографии" />
                    <BiPhotoAlbum className={styles.review_icon} />
                    <p>Загрузите фотографии</p>
                </label>
                <input type="text" name="year" placeholder="Год выпуска" />
                <input type="text" name="brand" placeholder="Марка" />
                <button type="submit">Отправить</button>
            </form>
            <p className={styles.review_disclaimer}>Нажимая кнопку «Отправить» я подтверждаю свое ознакомление с порядком обработки персональных данных и даю свободное и осознанное согласие на их обработку, на получение информации по каналам связи, в том числе в рекламных целях</p>
        </section>
    )
};
