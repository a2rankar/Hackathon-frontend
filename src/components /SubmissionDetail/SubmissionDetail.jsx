import './SubmissionDetail.module.scss';

export const SubmissionDetail = () => {
    const { id } = useParams();
    const [submission, setSubmission] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://f51d-178-217-174-187.ngrok-free.app/api/Submissions/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Не удалось получить детали');
          return res.json();
        })
        .then(data => setSubmission(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, [id]);
  
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div className="error">Ошибка: {error}</div>;
  
    return (
      <div className="submission-detail">
        <h2>{submission.title || 'Без заголовка'}</h2>
        <p>{submission.description || 'Нет описания'}</p>
      </div>
    );
  };