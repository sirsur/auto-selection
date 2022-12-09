import styles from '../../styles/component.module.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { useState } from 'react';

export default function Questions() {
    const [current, setCurrent] = useState(0);

    return (
        <section>
            <h2>Вопросы и ответы по выкупу авто</h2>
            <div>
                <span className={styles.questions_rect}>
                    <p>Не уверен, что вы купите такой автомобиль, как у меня</p>
                    {
                        current !== 0 && current === 1 ?
                        <button className={styles.questions_button} onClick={() => setCurrent(0)}>
                            <BsChevronUp className={styles.questions_icons} />
                        </button>
                        :
                        <button className={styles.questions_button} onClick={() => setCurrent(1)}>
                            <BsChevronDown className={styles.questions_icons} />
                        </button>
                    }
                </span>
                {
                    current === 1 &&
                    <div>
                        тест вопрос 1
                    </div>
                }
                <span>
                    <p>Будут ли какие-то дополнительные расходы?</p>
                    {
                        current !== 0 && current === 2 ?
                        <button className={styles.questions_button} onClick={() => setCurrent(0)}>
                            <BsChevronUp className={styles.questions_icons} />
                        </button>
                        :
                        <button className={styles.questions_button} onClick={() => setCurrent(2)}>
                            <BsChevronDown className={styles.questions_icons} />
                        </button>
                    }
                </span>
                {
                    current === 2 && 
                    <div>
                        тест вопрос 2
                    </div>
                }
                <span>
                    <p>Как вы оцениваете машину? </p>
                    {
                        current !== 0 && current === 3 ?
                        <button className={styles.questions_button} onClick={() => setCurrent(0)}>
                            <BsChevronUp className={styles.questions_icons} />
                        </button>
                        :
                        <button className={styles.questions_button} onClick={() => setCurrent(3)}>
                            <BsChevronDown className={styles.questions_icons} />
                        </button>
                    }
                </span>
                {
                    current === 3 && 
                    <div>
                        тест вопрос 3
                    </div>
                }
                <span>
                    <p>Что будет происходить с автомобилем после выкупа?</p>
                    {
                        current !== 0 && current === 4 ?
                        <button className={styles.questions_button} onClick={() => setCurrent(0)}>
                            <BsChevronUp className={styles.questions_icons} />
                        </button>
                        :
                        <button className={styles.questions_button} onClick={() => setCurrent(4)}>
                            <BsChevronDown className={styles.questions_icons} />
                        </button>
                    }
                </span>
                {
                    current === 4 && 
                    <div>
                        тест вопрос 4
                    </div>
                }
                <span>
                    <p>У меня остался еще вопрос</p>
                    {
                        current !== 0 && current === 5 ?
                        <button className={styles.questions_button} onClick={() => setCurrent(0)}>
                            <BsChevronUp className={styles.questions_icons} />
                        </button>
                        :
                        <button className={styles.questions_button} onClick={() => setCurrent(5)}>
                            <BsChevronDown className={styles.questions_icons} />
                        </button>
                    }
                </span>
                {
                    current === 5 && 
                    <div>
                        тест вопрос 5
                    </div>
                }
            </div>
        </section>
    )
};
