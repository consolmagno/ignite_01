import { Post } from "./components/Post"
import {Header} from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/consolmagno.png',
      name: 'Sofia Consolmagno',
      role: 'Ui/Ux'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'paragraph', content: 'Acesse e deixe seu feedback 👉'},
      {type: 'link', content: 'devonlane.design'}, 
    ],
    publishedAt: new Date('2024-05-23 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Sofia Consolmagno',
      role: 'Ui/Ux'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      {type: 'paragraph', content: 'Acesse e deixe seu feedback 👉'},
      {type: 'link', content: 'devonlane.design'}, 
    ],
    publishedAt: new Date('2024-05-27 06:00:00')
  },
];

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
