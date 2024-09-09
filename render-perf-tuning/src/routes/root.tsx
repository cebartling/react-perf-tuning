import { Page, Title } from '../components';
import { Link } from 'react-router-dom';

export function Root() {
  return (
    <Page>
      <Title>Root</Title>
      <ul>
        <li>
          <Link to="/example1">Example 1</Link>
        </li>
      </ul>
    </Page>
  );
}
