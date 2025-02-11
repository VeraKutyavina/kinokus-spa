import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useCreateMovieMutation } from 'connections/mutations/movies';

import { Button } from 'components/shared/atoms/Button';

import { FormContainer, Input, Textarea, Title } from './styled';

const FROM_DEFAULT_VALUES = {
  name: '',
  description: '',
  annotation: '',
  durationInMinutes: '',
  releaseDate: '',
};

export const CreateFilmForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(FROM_DEFAULT_VALUES);
  const onSuccess = () => {
    setForm(FROM_DEFAULT_VALUES);
    setIsSubmitting(false);
  };

  const { createMovie } = useCreateMovieMutation({ onSuccess });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    createMovie({ ...form, durationInMinutes: Number(form?.durationInMinutes) });
  };

  return (
    <FormContainer>
      <Title>Создать фильм</Title>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Название фильма"
          value={form.name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <Textarea
          name="description"
          placeholder="Описание"
          value={form.description}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <Textarea
          name="annotation"
          placeholder="Аннотация"
          value={form.annotation}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <Input
          type="number"
          name="durationInMinutes"
          placeholder="Длительность (минуты)"
          value={form.durationInMinutes}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <Input type="date" name="releaseDate" value={form.releaseDate} onChange={handleChange} />
        <Button
          isLoading={isSubmitting}
          disabled={isSubmitting}
          $width="100%"
          shape="rounded"
          type="submit"
        >
          Создать фильм
        </Button>
      </form>
    </FormContainer>
  );
};
