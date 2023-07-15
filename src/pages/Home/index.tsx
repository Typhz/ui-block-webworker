import React, { useState } from 'react';
import styles from './styles.module.css';

function Home() {
  const [number, setNumber] = useState<number>(0);
  const [UIBlock, setUIBlock] = useState<number>();
  const [nthPrime, setNthPrime] = useState<number>();

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => {
    const start = performance.now();
    const worker = new Worker(new URL('../../workers/nth-worker.ts', import.meta.url), { type: 'module' });
    worker.postMessage(number);
    worker.onmessage = (event) => {
      setNthPrime(event.data);
      worker.terminate();
    };
    const end = performance.now();
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
