import { ActionFunctionArgs } from 'react-router-dom';

export async function example1Action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData);

  return { ok: true };
}
