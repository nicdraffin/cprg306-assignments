import ItemList from './item-list';

export default function Page() {
  return (
    <main>
        <h1 className='flex text-4xl py-6 justify-center'>Shopping List</h1>
      <ItemList />
    </main>
  );
}