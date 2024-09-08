import { ErrorResponse, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i>{error.statusText}</i>
    </div>
  );
}
