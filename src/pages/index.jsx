import { useRole } from '../context/RoleContext';
import Navbar from '../components/Navbar';
import UserDashboard from '../components/UserDashboard';
import AdminDashboard from '../components/AdminDashboard';

export default function Home() {
  const { role } = useRole();

  return (
    <div>
      <Navbar />
      <main>
        {role === 'user' ? <UserDashboard /> : <AdminDashboard />}
      </main>
    </div>
  );
}
