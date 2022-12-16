import styles from '../../styles/component.module.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { useState } from 'react';

export default function Questions() {
    const [current, setCurrent] = useState(0);

    return (
        <section id = 'questions'>
            <h2>Вопросы и ответы по выкупу авто</h2>
            <div className={styles.all_questions}>
                {
                    current !== 0 && current === 1 ?
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(0)}>
                            <span className={styles.questions_rect}>
                                <p>Не уверен, что вы купите такой автомобиль, как у меня</p>
                                <div>
                                    <BsChevronUp className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                    :
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(1)}>
                            <span className={styles.questions_rect}>
                                <p>Не уверен, что вы купите такой автомобиль, как у меня</p>
                                <div>
                                    <BsChevronDown className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                }
                {
                    current === 1 &&
                    <div className={styles.answers}> 
                        <p>Мы выкупаем абсолютно любые машины. Легковые, грузовые, коммерческие. Даже мотоциклы и скутеры. Любых марок и моделей. Год выпуска, пробег, состояние не имеют значения.Мы работаем и с проблемными автомобилями: в кредите, со штрафами, в аресте, без документов или с запретом на регистрацию.Работаем с физическими и юридическими лицами.Если все еще сомневаетесь – просто оставьте заявку, мы обсудим ваш индивидуальный случай.</p>
                    </div>
                }
                {
                    current !== 0 && current === 2 ?
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(0)}>
                            <span className={styles.questions_rect}>
                                <p>Будут ли какие-то дополнительные расходы?</p>
                                <div>
                                    <BsChevronUp className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                    :
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(2)}>
                            <span className={styles.questions_rect}>
                                <p>Будут ли какие-то дополнительные расходы?</p>
                                <div>
                                    <BsChevronDown className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                }
                {
                    current === 2 && 
                    <div className={styles.answers}>
                        <p>Для вас будет бесплатно все: оценка авто, юридическая проверка, осмотр, диагностика, оформление сделки, переоформление машины в ГИБДД. Если вас не устроят условия, вы в любой момент можете отказаться. И даже в этом случае вы ничего не платите. Даже если оценка уже проведена и составлен договор.</p>
                    </div>
                }
                {
                    current !== 0 && current === 3 ?
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(0)}>
                            <span className={styles.questions_rect}>
                                <p>Как вы оцениваете машину?</p>
                                <div>
                                    <BsChevronUp className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                    :
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(3)}>
                            <span className={styles.questions_rect}>
                                <p>Как вы оцениваете машину?</p>
                                <div>
                                    <BsChevronDown className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                }
                {
                    current === 3 && 
                    <div className={styles.answers}>
                        <p>Наш специалист приедет на место и осмотрит автомобиль.Мы прекрасно понимаем, какая высокая конкуренция на этом рынке. Мы знаем, сколько за каждую машину предложат наши конкуренты, автосалоны и Trade In.Мы хотим сделать самое выгодное предложение, чтобы вы продали свой автомобиль именно нам.</p>
                    </div>
                }
                {
                    current !== 0 && current === 4 ?
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(0)}>
                            <span className={styles.questions_rect}>
                            <p>Что будет происходить с автомобилем после выкупа?</p>
                                <div>
                                    <BsChevronUp className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                    :
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(4)}>
                            <span className={styles.questions_rect}>
                            <p>Что будет происходить с автомобилем после выкупа?</p>
                                <div>
                                    <BsChevronDown className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                }
                {
                    current === 4 && 
                    <div className={styles.answers}>
                        <p>Автомобили потом продаются дилерам, автосалонам или частным покупателям. Иногда после ремонта. Мы не дезинформируем покупателей о состоянии автомобиля. Все сделки проходят чисто. У вас на руках остается договор купли-продажи, который имеет юридическую силу.</p>
                    </div>
                }
                {
                    current !== 0 && current === 5 ?
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(0)}>
                            <span className={styles.questions_rect}>
                            <p>У меня остался еще вопрос</p>
                                <div>
                                    <BsChevronUp className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                    :
                    <div className={styles.button_flex}>
                        <button onClick={() => setCurrent(5)}>
                            <span className={styles.questions_rect}>
                            <p>У меня остался еще вопрос</p>
                                <div>
                                    <BsChevronDown className={styles.questions_icons} />
                                </div>
                            </span>
                        </button>
                    </div>
                }
                {
                    current === 5 && 
                    <div className={styles.answers}>
                        <p>Мы с удовольствием на него ответим. Просто свяжитесь с нами любым удобным способом. Мы работаем круглосуточно.</p>
                    </div>
                }
            </div>
        </section>
    )
};
