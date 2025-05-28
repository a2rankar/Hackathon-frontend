import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubmissionsList.module.scss';

const SubmissionsList = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://f51d-178-217-174-187.ngrok-free.app/api/Submissions?skip=0&count=10')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch submissions');
        return res.json();
      })
      .then(data => setSubmissions(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Жалобы и обращения</h2>
      {submissions.length === 0 ? (
        <p className={styles.empty}>Нет данных.</p>
      ) : (
        <ul className={styles.items}>
          {submissions.map(sub => (
            <li key={sub.id} className={styles.item}>
              <Link to={`/submission/${sub.id}`} className={styles.link}>
                {sub.title || 'Без заголовка'}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubmissionsList;
