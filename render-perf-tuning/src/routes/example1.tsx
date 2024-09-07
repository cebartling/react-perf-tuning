import { useLoaderData } from 'react-router-dom';
import { Person } from '../schemas/person.ts';

export default function Example1() {
  const {
    person: { id, name, age },
  } = useLoaderData() as { person: Person };

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input type="hidden" name="id" value={id} />
        <label>
          Name:
          <input type="text" name="name" value={name} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={age} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
