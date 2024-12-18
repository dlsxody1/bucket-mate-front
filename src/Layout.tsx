import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const Layout = () => {
  const pathname = useLocation().pathname;
  const isHeader = pathname === '/' || pathname === '/mypage';
  const isFooter = pathname === '/' || pathname === '/mypage';

  return (
    <div className='max-w-[426px] my-0 mx-auto shadow-lg'>
      {isHeader && <Header />}
      <Outlet />
      {isFooter && <Footer />}
    </div>
  );
};

export default Layout;
