/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  useAddSetMutation,
  SetListDocument,
} from '@nx-react-graphql-nestjs/data-access';
import { ChangeEvent, useState } from 'react';
import styles from './set-form.module.scss';

/* eslint-disable-next-line */
export interface SetFormProps {}

export function SetForm(props: SetFormProps) {
  const [name, setName] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [numParts, setNumParts] = useState<number>(1000);

  const [addSetMutation, mutationResult] = useAddSetMutation({
    variables: { name, year, numParts },
    // @ts-ignore
    update(cache, { data: { addSet } }) {
      // @ts-ignore
      const { allSets } = cache.readQuery({ query: SetListDocument });
      cache.writeQuery({
        query: SetListDocument,
        data: { allSets: [...allSets, ...addSet] },
      });
    },
  });

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSetMutation();
    setName('');
    setYear('');
    setNumParts(1000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.setForm}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={year}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setYear(event.target.value)
          }
        />
      </label>
      <label>
        NumParts:
        <input
          type="text"
          name="numParts"
          value={numParts}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNumParts(+event.target.value)
          }
        />
      </label>
      <button type="submit">Create set set</button>
    </form>
  );
}

export default SetForm;
