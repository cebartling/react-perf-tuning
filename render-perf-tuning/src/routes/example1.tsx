import { Form, useLoaderData } from 'react-router-dom';
import { Example1LoaderData } from '../loaders';
import { DemographicsCard, EducationCard, Page } from '../components';

export function Example1() {
  const { person } = useLoaderData() as Example1LoaderData;

  return (
    <Page>
      <Form method="post" action="/example1">
        <DemographicsCard person={person} key={person.id} />
        <EducationCard person={person} key={person.id} />
      </Form>
    </Page>
  );
}
