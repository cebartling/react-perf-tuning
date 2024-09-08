import { Person } from '../../schemas';
import { Section, Subsection, SubsectionTitle, Title } from '../structural';

export const EducationCard = ({ person }: { person: Person }) => {
  return (
    <Section role="contentinfo">
      <Title role="heading">Education</Title>
      {person.education &&
        person.education.map((education) => {
          return (
            <Subsection key={education.id}>
              <SubsectionTitle>{education.degree}</SubsectionTitle>
              {/*<SubsectionDetails>*/}
              {/*  {education.school_name}, {education.graduation_year}*/}
              {/*</SubsectionDetails>*/}
            </Subsection>
          );
        })}
    </Section>
  );
};
