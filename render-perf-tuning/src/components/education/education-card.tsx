import { Person } from '../../schemas';
import { Section, Subsection, SubsectionDetails, SubsectionTitle, Title, Toolbar } from '../structural';
import React from 'react';
import { EducationEditor } from './education-editor.tsx';

export const EducationCard = ({ person }: { person: Person }) => {
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);

  function handleOnClickAddButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsEditorOpen(true);
  }

  return (
    <Section role="contentinfo">
      <Title role="heading">Education</Title>
      <Toolbar handleOnClickAddButton={handleOnClickAddButton} disabled={isEditorOpen} />
      {isEditorOpen && <EducationEditor />}
      {person.education &&
        person.education.map((education) => {
          return (
            <Subsection key={education.id}>
              <SubsectionTitle>{education.schoolName}</SubsectionTitle>
              <SubsectionDetails>
                {education.yearStarted} - {education.yearGraduated}
              </SubsectionDetails>
              <SubsectionDetails>{education.degree}</SubsectionDetails>
            </Subsection>
          );
        })}
    </Section>
  );
};
