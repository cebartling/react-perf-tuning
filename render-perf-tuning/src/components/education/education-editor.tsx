import { FormLabel, FormPanel, FormRow, HiddenInput, StyledButton, StyledInput } from '../forms';

export const EducationEditor = () => {
  return (
    <FormPanel>
      <HiddenInput id="intent" name="intent" value="education" />
      <FormRow>
        <FormLabel htmlFor="schoolName">School</FormLabel>
        <StyledInput id="schoolName" name="schoolName" />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="degree">Degree</FormLabel>
        <StyledInput id="degree" name="degree" />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="yearStarted">Year started</FormLabel>
        <StyledInput id="yearStarted" name="yearStarted" type="number" step="1" min="1950" max="2024" />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="yearGraduated">Graduation Year</FormLabel>
        <StyledInput id="yearGraduated" name="yearGraduated" type="number" step="1" min="1950" max="2024" />
      </FormRow>
      <FormRow>
        <StyledButton type="submit">Save</StyledButton>
      </FormRow>
    </FormPanel>
  );
};
