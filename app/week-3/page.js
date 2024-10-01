import ItemList from './props/item-list';

export default function Page() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}
