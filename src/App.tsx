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

      <div className={styles.content}>
        <div className={styles.status}>
          <div className={styles.createdTask}>
            <span>Tarefas Criadas</span>
            <strong>5</strong>   
          </div>

          <div className={styles.completedTask}>
            <span>Concluídas</span>
            <strong>2 de 5</strong>
          </div> 
        </div>
      </div>
    </main>
  )
}
