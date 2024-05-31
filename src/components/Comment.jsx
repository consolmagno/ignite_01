import { useState } from 'react';

import {Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'


export function Comment({content, ondeleteComment}){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    ondeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });
  }

  return(
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/consolmagno.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Sofia Consolmagno</strong>
              <time title='09 de maio às 15:40' dateTime='2024-05-09 15:40:00'>Publicado há 8 minutos</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}