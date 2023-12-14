// JSX = Javascript + XML
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// Será necessario incluir interação nos seguintes elementos dos componentes:
// author: { avatar:url: "", name: "", role: ""}
//publishedAt:Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1664867432842-16ae7a30aabd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwbmVncmF8ZW58MHx8MHx8fDA%3D",
      name: " Raissa Barbosa ",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: " Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis optio doloremque?",
      },
    ],
    publishedAt: new Date("2023-12-12 16:02:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1661255424747-6ee7fd8d86f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwcGVvcGxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: " Bruna Dias Goncalves ",
      role: " Designer UI/UX",
    },
    content: [
      {
        type: "paragraph",
        content: " Fala pessoal 👋",
      },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },

      {
        type: "link",
        content: "devonlane.design",
      },
      {
        type: "paragraph",
        content:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis optio doloremque?",
      },
    ],
    publishedAt: new Date("2023-12-13 12:58:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
