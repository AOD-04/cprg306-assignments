import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-6 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
