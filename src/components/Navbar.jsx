import { useRole } from '../context/RoleContext';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const { role, updateRole } = useRole();

  const toggleRole = () => {
    updateRole(role === 'user' ? 'admin' : 'user');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Role-Based Website</div>
      <div className={styles.roleToggle}>
        <span>Current Role: {role}</span>
        <button onClick={toggleRole}>
          Switch to {role === 'user' ? 'Admin' : 'User'}
        </button>
      </div>
    </nav>
  );
}
