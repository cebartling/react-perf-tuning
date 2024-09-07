export async function example1Loader() {
  const person = { id: crypto.randomUUID(), name: 'John Doe', age: 25 };
  return { person };
}
