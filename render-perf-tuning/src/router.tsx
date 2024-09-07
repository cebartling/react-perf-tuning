import { createBrowserRouter } from 'react-router-dom';
import Example1 from './routes/example1.tsx';
import ErrorPage from './pages/error-page.tsx';
import Root from './routes/root.tsx';
import { example1Loader } from './loaders/example1-loader.ts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/example1',
    element: <Example1 />,
    loader: example1Loader,
    errorElement: <ErrorPage />,
  },
]);
