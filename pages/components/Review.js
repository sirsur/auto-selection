import styles from '../../styles/component.module.css';
import { BiPhotoAlbum } from 'react-icons/bi';
import { useState, useEffect } from 'react';

export default function Review() {
    const [email, setEmail] = useState("");
    const [km, setKm] = useState("");
    const [phone, setPhone] = useState("");
    const [year, setYear] = useState("");
    const [brand, setBrand] = useState("");
    const [files, setFiles] = useState([]);
    const [filesTitles, setFilesTitles] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [sent, setSent] = useState(false);
 
    const MAX_COUNT = 5;

    const handleChange = (e) => {
        let arrTitles = [...filesTitles];
        arrTitles.push(e.target.files[0].name);
        setFilesTitles(arrTitles);

        const file = e.target.files[0];
        let reader = new FileReader();
        let arr = [...files];
        reader.onloadend = () => {
            arr.push(reader.result);
            setFiles(arr);
        };
        reader.readAsDataURL(file);

        e.target.value = '';
    };

    const handleDelete = (file) => {
        const index = filesTitles.indexOf(file);
        let arr = [...files];
        let arrTitles = [...filesTitles];
        arr.splice(index, 1);
        arrTitles.splice(index, 1);
        setFiles(arr);
        setFilesTitles(arrTitles);
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

        setSent(true);

        fetch('/api/review', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
                setEmail('');
                setKm('');
                setBrand('');
                setPhone('');
                setYear('');
                setFiles([]);
                setFilesTitles([]);
                setSent(false);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    useEffect(() => {
        (files.length === 0) ?
            document.getElementById('review_file').style.border = 'dashed #ADACAC'
        :
            document.getElementById('review_file').style.border = 'dashed #0080B7';

        (filesTitles.length === MAX_COUNT) ?
            setIsDisabled(true)
        :
            setIsDisabled(false);

        (files.length === 0) ?
            document.getElementById('files_list').style.display = 'none'
        :
            document.getElementById('files_list').style.display = 'block';

        if ((email !== '') && (km != '') && (phone !== '') && (year !== '') && (brand !== '') && !(sent)) {
            document.getElementById('button').disabled = false;
        } else if (!((email !== '') && (km != '') && (phone !== '') && (year !== '') && (brand !== '')) && (sent)) {
            document.getElementById('button').disabled = true;
        }

        console.log(sent);
    });

    return (
        <section id = 'review'>
            <h2>Получите оценку вашего автомобиля</h2>
            <p className={styles.review_p}>Продайте свой автомобиль в любом состоянии с выгодой. Оставьте заявку, мы оценим и предложим стоимость. Также вы можете связаться с нами по номеру телефона <b>89873937976</b> или <b>89913937457</b></p>
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
                <label id='review_file' className={styles.review_form_photo}>
                    <input 
                        type="file" 
                        name="photo" 
                        key="photo"
                        onChange={(e) => {
                            handleChange(e)
                        }}
                        accept="image/*"
                        multiple
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
                            { 
                                (files.length <= (MAX_COUNT - 1)) ?
                                <p>Нажмите, чтобы<br />добавить<br />фотографии</p>
                                :
                                <p>Вы добавили<br />максимальное<br />количество<br />фотографий</p>
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
                <button id='button' type='submit'>Отправить</button>
            </form>
            <div className={styles.review_disclaimer}>
                <p className={styles.disclaimer}>Нажимая кнопку «Отправить» я подтверждаю свое ознакомление с порядком обработки персональных данных и даю свободное и осознанное согласие на их обработку, на получение информации по каналам связи, в том числе в рекламных целях</p>
            </div>
            <div id='files_list' className={styles.form_photos_array}>
                {filesTitles?.map((file, index) => 
                    <span className={styles.form_files_span} key={index}>
                        <p>{file}</p>
                        <button onClick={() => handleDelete(file)}>
                            x
                        </button>
                    </span>
                )}
            </div>
        </section>
    )
};
