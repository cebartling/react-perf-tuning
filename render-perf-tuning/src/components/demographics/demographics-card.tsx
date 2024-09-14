import { Person } from '../../schemas';
import { Section, Title } from '../structural';

export const DemographicsCard = ({ person }: { person: Person }) => {
  return (
    <Section role="contentinfo">
      <Title role="heading">
        {person.firstName} {person.lastName}
      </Title>
    </Section>
  );
};
