import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './AuthoritiesList.module.scss';

export default function AuthoritiesList() {
  const [authorities, setAuthorities] = useState([]);
  const [query, setQuery] = useState('');

  const fetchAuthorities = async () => {
    const skip = 0;
    const count = 10;

    try {
      const res = await fetch(
        `https://f51d-178-217-174-187.ngrok-free.app/api/Authorities?skip=${skip}&count=${count}&query=${encodeURIComponent(query)}`,
        { credentials: 'include' }
      );
      const data = await res.json();
      setAuthorities(data);
    } catch (err) {
      console.error('Ошибка при загрузке органов:', err);
      setAuthorities([]);
    }
  };

  useEffect(() => {
    fetchAuthorities();
  }, []);

  useEffect(() => {
    if (query.length >= 2 || query === '') {
      fetchAuthorities();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.authorities}>
        <h2>Список органов</h2>
        <input
          type="text"
          placeholder="Поиск..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <ul className={styles.list}>
          {authorities.length > 0 ? (
            authorities.map((auth) => (
              <li key={auth.id} className={styles.item}>
                {auth.title || 'Без названия'}
              </li>
            ))
          ) : (
            <li className={styles.item}>Ничего не найдено</li>
          )}
        </ul>
      </div>
    </div>
  );
}
