import { ActionFunctionArgs } from 'react-router-dom';

async function createNewEducation(formData: FormData) {
  const schoolName = formData.get('schoolName');
  const yearStarted = formData.get('yearStarted');
  const yearGraduated = formData.get('yearGraduated');
  const degree = formData.get('degree');
  console.log('CREATE NEW EDUCATION::schoolName', schoolName);
  console.log('CREATE NEW EDUCATION::yearStarted', yearStarted);
  console.log('CREATE NEW EDUCATION::yearGraduated', yearGraduated);
  console.log('CREATE NEW EDUCATION::degree', degree);
}

export async function example1Action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');
  console.log('FORM DATA::intent', intent);
  switch (intent) {
    case 'education':
      await createNewEducation(formData);
      break;
    default:
      console.log('DEFAULT');
  }

  return { ok: true };
}
