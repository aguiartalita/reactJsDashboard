import styles from './Sidebar.module.css'
import editProfile from '../assets/edit-profile.svg'


export function SideBar() {
    return (
        <aside className={styles.SideBar}>
            <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=40" />
            <div className={styles.profile}>
                <strong> Maria João </strong>
                <span> Web Developer</span>
            </div>

            <footer>
                <button className={styles.buttonProfile}>
                    <img src={editProfile} alt="pen" /> Editar Seu Perfil</button>
            </footer>
        </aside>

    );
}