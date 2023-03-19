import React, { useState } from 'react';
import styles from './styles.module.css';
import findNumberPrime from '../../utils/findNthNumber';

function Home() {
  const [number, setNumber] = useState<number>(0);
  const [UIBlock, setUIBlock] = useState<number>();
  const [nthPrime, setNthPrime] = useState<number>();

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => {
    const start = performance.now();
    const nthPrime = findNumberPrime(number);
    const end = performance.now();
    setNthPrime(nthPrime)
    setUIBlock(end - start)
  }

  return (
    <main className={styles.main}>
      <input placeholder="Number" onChange={handleNumberChange} type="number" />
      <button onClick={onClick}>
        Click
      </button>
      {nthPrime && <span>Resposta: {nthPrime.toLocaleString('pt-BR')}</span>}
      {UIBlock && <span>{UIBlock.toLocaleString('pt-BR')}ms</span>}
    </main>
  );
}

export default Home;
