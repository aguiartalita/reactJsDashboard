import styles from "./Sidebar.module.css";
import editProfile from "../assets/edit-profile.svg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <img
        src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=40"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/87323173?v=4" />
        <strong> Talita Aguiar </strong>
        <span> Web Developer</span>
      </div>

      <footer>
        <a href="#" className={styles.buttonProfile}>
          <PencilLine size={15} />
          Editar Seu Perfil
        </a>
      </footer>
    </aside>
  );
}
