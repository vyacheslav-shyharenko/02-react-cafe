import styles from './App.module.scss';

function App({ props }: { props: string }) {
  return (
    <>
      <h1 className={styles['app']}>**_**</h1>
      {props}
    </>
  );
}

export default App;
