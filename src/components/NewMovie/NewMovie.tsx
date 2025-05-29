import { useState } from 'react';
import { TextField } from '../TextField';

type Movie = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  // Розраховуємо isValid безпосередньо перед використанням
  const isValid =
    title.trim() && imgUrl.trim() && imdbUrl.trim() && imdbId.trim();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAdd({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    });

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');

    setCount(prev => prev + 1);
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Додати фільм</h2>

      <TextField
        name="title"
        label="Назва"
        value={title}
        onChange={setTitle}
        required
      />
      <TextField
        name="description"
        label="Опис"
        value={description}
        onChange={setDescription}
      />
      <TextField
        name="imgUrl"
        label="Посилання на зображення"
        value={imgUrl}
        onChange={setImgUrl}
        required
      />
      <TextField
        name="imdbUrl"
        label="Посилання на Imdb"
        value={imdbUrl}
        onChange={setImdbUrl}
        required
      />
      <TextField
        name="imdbId"
        label="ID на Imdb"
        value={imdbId}
        onChange={setImdbId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isValid}
          >
            Додати
          </button>
        </div>
      </div>
    </form>
  );
};
