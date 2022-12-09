import styles from '../../styles/component.module.css';
import { GrContactInfo, GrDocument, GrKey, GrDocumentUser } from 'react-icons/gr';

export default function Documents() {
    return (
        <section id = 'documents' className={styles.doc_section}>
            <h2 className={styles.doc_h2}>Необходимые документы</h2>
            <div className={styles.doc_table}>
                <div className={styles.doc_rect}>
                    <GrDocument className={styles.doc_icons} />
                    <p>Паспорт транспортного средства (ПТС)</p>
                </div>
                <div className={styles.doc_rect}>
                    <GrDocumentUser className={styles.doc_icons} />
                    <p>Свидетельство о регистрации (СТС)</p>
                </div>
                <div className={styles.doc_rect}>
                    <GrKey className={styles.doc_icons} />
                    <p>Ключи от транспортного средства</p>
                </div>
                <div className={styles.doc_rect}>
                    <GrContactInfo className={styles.doc_icons} />
                    <p>Паспорт собственника</p>
                </div>
            </div>
        </section>
    )
};
