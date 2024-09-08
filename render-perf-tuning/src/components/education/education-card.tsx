import { Person } from '../../schemas';
import { Section, Subsection, SubsectionTitle, Title, Toolbar } from '../structural';
import React from 'react';

export const EducationCard = ({ person }: { person: Person }) => {
  function handleOnClickAddButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log('Add button clicked', event);
  }

  return (
    <Section role="contentinfo">
      <Title role="heading">Education</Title>
      <Toolbar handleOnClickAddButton={handleOnClickAddButton} />
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
