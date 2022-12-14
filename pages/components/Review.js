import styles from '../../styles/component.module.css';
import { BiPhotoAlbum } from 'react-icons/bi';
import { use, useState } from 'react';

/*
    TODO:
    1. input files (done)
    2. change view of added files
    3. media styles
    4. set send form to mail
    5. test it!
*/

export default function Review() {
    const [name, setName] = useState("");
    const [km, setKm] = useState("");
    const [phone, setPhone] = useState("");
    const [year, setYear] = useState("");
    const [brand, setBrand] = useState("");
    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        let arr = [...files];
        arr.push(e.target.files[0].name);
        setFiles(arr);
    }


    return (
        <section id = 'review'>
            <h2>Получите оценку вашего автомобиля</h2>
            <p>Продайте свой автомобиль в любом состоянии с выгодой. Оставьте заявку, мы оценим и предложим стоимость</p>
            <form className={styles.review_form}>
                <div className={styles.review_form_units}>
                    <input 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        required
                    />
                    <label>ФИО</label>
                </div>
                <div className={styles.review_form_units}>
                    <input 
                        type="text" 
                        name="km" 
                        value={km}
                        onChange={(e) => {
                            setKm(e.target.value)
                        }}
                        required
                    />
                    <label>Пробег</label>
                </div>
                <div className={styles.review_form_units}>
                    <input 
                        type="text" 
                        name="phoneNumber"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                        }}
                        required
                    />
                    <label>Номер телефона</label>
                </div>
                <label className={styles.review_form_photo}>
                    <input 
                        type="file" 
                        name="photo" 
                        key="photo"
                        onChange={(e) => {
                            handleChange(e)
                        }}
                        accept="image/*"
                        multiple
                        required 
                    />
                    {
                        files.length === 0 ?
                        <>
                            <BiPhotoAlbum className={styles.review_icon} />
                            <p>Загрузите<br />фотографии</p>
                        </>
                        :
                        <>
                            <div className={styles.form_photos_array}>
                                {files.map(file => 
                                    <p key={file}>{file}</p>
                                )}
                            </div>
                            <p>Нажмите, чтобы добавить фотографии</p>
                        </>
                    }
                </label>
                <div className={styles.review_form_units}>
                    <input 
                        type="text" 
                        name="year" 
                        value={year}
                        onChange={(e) => {
                            setYear(e.target.value)
                        }}
                        required
                    />
                    <label>Год выпуска</label>
                </div>
                <div className={styles.review_form_units}>
                    <input 
                        type="text" 
                        name="brand" 
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value)
                        }}
                        required
                    />
                    <label>Марка</label>
                </div>
                <button type="submit">Отправить</button>
            </form>
            <div className={styles.review_disclaimer}>
                <p>Нажимая кнопку «Отправить» я подтверждаю свое ознакомление с порядком обработки персональных данных и даю свободное и осознанное согласие на их обработку, на получение информации по каналам связи, в том числе в рекламных целях</p>
            </div>
        </section>
    )
};
