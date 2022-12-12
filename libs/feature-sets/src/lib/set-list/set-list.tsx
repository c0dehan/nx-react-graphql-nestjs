/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSetListQuery } from '@nx-react-graphql-nestjs/data-access';
import styles from './set-list.module.scss';

/* eslint-disable-next-line */
export interface SetListProps {}

export function SetList(props: SetListProps) {
  const { loading, error, data } = useSetListQuery();

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error:</p>;

  return (
    <ul className={styles.setList}>
      {/* @ts-ignore */}
      {data?.allSets?.map(({ id, year, name, numParts }) => (
        <li key={id}>
          {year} - <strong>{name}</strong> ({numParts} parts)
        </li>
      ))}
    </ul>
  );
}

export default SetList;
