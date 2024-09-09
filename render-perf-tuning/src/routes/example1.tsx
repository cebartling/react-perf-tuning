import { Form, useLoaderData } from 'react-router-dom';
import { Example1LoaderData } from '../loaders';
import { DemographicsCard, EducationCard, Page } from '../components';

function Example1() {
  const { person } = useLoaderData() as Example1LoaderData;

  return (
    <Form method="post" action="/example1">
      <Page>
        <DemographicsCard person={person} key={`demographics-${person.id}`} />
        <EducationCard person={person} key={`education-${person.id}`} />
      </Page>
    </Form>
  );
}

Example1.whyDidYouRender = true;

export { Example1 };
