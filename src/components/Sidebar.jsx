import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://plus.unsplash.com/premium_photo-1686262005318-f3a711a95a65?q=50&w=500"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/consolmagno.png"/>
        <strong> Sofia Consolmagno</strong>
        <span>Engenheira Eletrônica</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}