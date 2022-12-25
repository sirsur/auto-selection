import styles from '../../styles/component.module.css';
import { useState, useEffect } from 'react';

export default function Comment() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [more, setMore] = useState('');
    const [sent, setSent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            name,
            phoneNumber,
            more
        };

        fetch('/api/comment', {
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
                setName('');
                setPhoneNumber('');
                setMore('');
            }
        });
    };

    useEffect(() => {
        if ((name !== '') && (phoneNumber !== '') && (more !== '') && !sent) {
            document.getElementById('comment_button').disabled = false;
        } else if (((name === '') || (phoneNumber === '') || (more === '')) || sent) {
            document.getElementById('comment_button').disabled = true;
        }
    });

    return (
        <section id='comment'>
            <h2>Оцените работу нашего сервиса</h2>
            <p>Опишите свой опыт работы с нами</p>
            <form className={styles.comment_form} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.comment_form_units}>
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
                <div className={styles.comment_form_units}>
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        value={phoneNumber} 
                        onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}
                        required
                    />
                    <label>Номер телефона</label>
                </div>
                <div className={styles.comment_form_textarea}>
                    <textarea 
                        type="text" 
                        name="more"
                        value={more} 
                        onChange={(e) => {
                            setMore(e.target.value)
                        }}
                        required
                    ></textarea>
                    <label>Расскажите нам больше...</label>
                </div>
                <button id='comment_button' type="submit">Отправить отзыв</button>
            </form>
        </section>
    )
}
