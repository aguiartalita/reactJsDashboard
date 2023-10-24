// JSX = Javascript + XML
import { Post } from "./Post"
import { Header } from "./components/Header"
import { SideBar } from './components/Sidebar'
import styles from './App.module.css'

import "./global.css"


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="João Maria"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, odio unde, maxime nihil sit,perspiciatis officiis laboriosam dicta hic exercitationem laudantium aliquam perferendis ad placeat esse adipisci vitae architecto voluptatem?"
          />
          <Post
            author="Maria João"
            content=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid veritatis voluptas dolores sunt, iste itaque!"
          />
        </main>
      </div>

    </div>
  )
}


