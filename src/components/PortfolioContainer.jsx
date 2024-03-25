import { Outlet } from 'react-router-dom';
import NavTabs from './NavTabs';

export default function PortfolioContainer() {

  return (
    <div className='min-vh-100 position-relative overflow-x-hidden'>
      <div className="snow_wrap">
        <div className="snow"></div>
      </div>
      <NavTabs />
      <Outlet />
      {/* <main className="mx-3"></main> */}

    </div>
  );
}
