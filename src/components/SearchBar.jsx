
export default function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="search"
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search by author name..."
      aria-label="Search photos by author"
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    />
  );
}
