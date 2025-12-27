export default function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center px-6 justify-between">
      <h1 className="text-xl font-semibold">My App</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome User</span>
      </div>
    </header>
  );
}
