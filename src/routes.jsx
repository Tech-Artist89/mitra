import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HeatingServicePage from './pages/HeatingServicePage';
import BathroomRenovationPage from './pages/BathroomRenovationPage';
import InstallationPage from './pages/InstallationPage';
import PageLayout from './components/layout/PageLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'dienstleistungen',
        element: <Services />,
      },
      {
        path: 'kontakt',
        element: <Contact />,
      },
      {
        path: 'heizungsbau',
        element: <HeatingServicePage />,
      },
      {
        path: 'badsanierung',
        element: <BathroomRenovationPage />,
      },
      {
        path: 'installation',
        element: <InstallationPage />,
      },
    ],
  },
]);

export default router;