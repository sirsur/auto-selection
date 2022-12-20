import styles from '../../styles/component.module.css';
import { BiPhotoAlbum } from 'react-icons/bi';
import { useState } from 'react';

/*
    TODO:
    1. style image input after adding and deleting files
    2. change view of added files 
    3. media styles
    4. add images to form
    5. bug in deleting file
    6. bug after delete and input file is empty
*/

export default function Review() {
    const [email, setEmail] = useState("");
    const [km, setKm] = useState("");
    const [phone, setPhone] = useState("");
    const [year, setYear] = useState("");
    const [brand, setBrand] = useState("");
    const [files, setFiles] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const MAX_COUNT = 5;

    const handleChange = (e) => {
        let arr = [...files];
        arr.push(e.target.files[0].name);
        if (arr.length > MAX_COUNT) {
            alert(`Нельзя загружать больше, чем ${MAX_COUNT} файлов`);
            return;
        }
        if (arr.length === MAX_COUNT) {
            setIsDisabled(true);
        }
        setFiles(arr);
    };

    const handleDelete = (file) => {
        setFiles(
            files.filter(a =>
                a !== file
            )
        );
        if (files.length < MAX_COUNT) {
            setIsDisabled(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            email,
            km,
            phone,
            year,
            brand,
            files
        };

        fetch('/api/review', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!');
                setEmail('');
                setKm('');
                setBrand('');
                setPhone('');
                setYear('');
                setFiles([]);
            }
        });
    };

    return (
        <section id = 'review'>
            <h2>Получите оценку вашего автомобиля</h2>
            <p className={styles.review_p}>Продайте свой автомобиль в любом состоянии с выгодой. Оставьте заявку, мы оценим и предложим стоимость</p>
            <form className={styles.review_form} onSubmit={(e) => handleSubmit(e)} >
                <div className={styles.review_form_units}>
                    <input 
                        type="text" 
                        name="email" 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                    />
                    <label>Почта</label>
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
                        disabled={isDisabled}
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
                                {files?.map(file => 
                                    <span className={styles.form_files_span} key={file}>
                                        <p>{file}</p>
                                        <button onClick={() => handleDelete(file)}>
                                            x
                                        </button>
                                    </span>
                                )}
                            </div>
                            { 
                                files.length <= (MAX_COUNT - 1) && 
                                <p>Нажмите, чтобы добавить фотографии</p>
                            }
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
                    <label>Марка и модель</label>
                </div>
                {((email !== '') && (km != '') && (phone !== '') && (year !== '') && (brand !== '')) ?
                    <button type='submit'>Отправить</button>
                :
                    <button type='submit' disabled>Отправить</button>
                }
            </form>
            <div className={styles.review_disclaimer}>
                <p className={styles.disclaimer}>Нажимая кнопку «Отправить» я подтверждаю свое ознакомление с порядком обработки персональных данных и даю свободное и осознанное согласие на их обработку, на получение информации по каналам связи, в том числе в рекламных целях</p>
            </div>
        </section>
    )
};
