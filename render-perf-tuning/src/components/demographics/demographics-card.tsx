import { Person } from '../../schemas';
import { Section, Title } from '../structural';

export const DemographicsCard = ({ person }: { person: Person }) => {
  return (
    <Section role="contentinfo">
      <Title role="heading">
        {person.first_name} {person.last_name}
      </Title>
    </Section>
  );
};
