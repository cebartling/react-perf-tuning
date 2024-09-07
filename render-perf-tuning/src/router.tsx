import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
import ErrorPage from './pages/error-page.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
