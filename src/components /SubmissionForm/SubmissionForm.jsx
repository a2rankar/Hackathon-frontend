import React, { useState } from 'react';
import styles from './SubmissionForm.module.scss';
import axios from 'axios';

const SubmissionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
    };

    try {
      const response = await axios.post('https://f51d-178-217-174-187.ngrok-free.app/api/Submissions', {
      payload,
      headers: {
        'Content-Type': 'application/json',
      },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Ошибка ${response.status}: ${errorText}`);
      }

      setResult('Жалоба успешно отправлена!');
      setTitle('');
      setDescription('');
    } catch (error) {
      setResult(`Ошибка при отправке: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Отправить жалобу</h2>

        <label className={styles.label}>
            Заголовок:
            <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={styles.input}
            required
            />
        </label>

        <label className={styles.label}>
            Описание:
            <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={styles.textarea}
            required
            />
        </label>

        <button type="submit" className={styles.button}>Отправить</button>

        {result && <p className={styles.result}>{result}</p>}
        </form>
    </div>
  );
};

export default SubmissionForm;
