import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';

import Logo from './assets/Logo.svg';

export function App() {
  return (
    <main className={styles.body}>
      <header className={styles.top}>
        <img src={Logo} alt=""/>
      </header>

      <div className={styles.task}>
        <input className={styles.addTask} placeholder="Adicione uma nova tarefa"/>
        <button className={styles.addButton}>
          Criar
          <PlusCircle size={18}/>
        </button>
      </div>
    </main>
  )
}
