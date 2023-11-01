import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Booking = Loadable(lazy(() => import('pages/components-overview/Booking')));
const Builder = Loadable(lazy(() => import('pages/components-overview/Builder')));
const PropertyType = Loadable(lazy(() => import('pages/components-overview/PropertyType')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const UnitCatergory=Loadable(lazy(()=> import ('pages/components-overview/UnitCatergory')))
const Projects =Loadable(lazy(()=> import('pages/components-overview/ProjectData')))
const Units=Loadable(lazy(()=>import("pages/components-overview/Units.js")))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'builder',
      element: <Builder />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'property',
      element: <PropertyType />
    },
    {
      path: 'booking',
      element: <Booking />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path:'unitcategory',
      element:<UnitCatergory/>
    },
    {
      path:'projectdata',
      element:<Projects/>
    },
    {
      path:'units',
      element:<Units/>
    }
  ]
};

export default MainRoutes;
