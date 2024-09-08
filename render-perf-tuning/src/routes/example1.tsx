import { useLoaderData } from 'react-router-dom';
import { Example1LoaderData } from '../loaders/example1-loader.ts';
import { DemographicsCard, EducationCard, Page } from '../components';

export default function Example1() {
  const { person } = useLoaderData() as Example1LoaderData;

  return (
    <Page>
      <DemographicsCard person={person} key={person.id} />
      <EducationCard person={person} key={person.id} />
    </Page>
  );
}
