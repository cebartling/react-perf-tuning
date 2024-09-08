import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages';
import { example1Loader } from './loaders';
import { example1Action } from './actions';
import { Example1, Root } from './routes';

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
    action: example1Action,
    errorElement: <ErrorPage />,
  },
]);
