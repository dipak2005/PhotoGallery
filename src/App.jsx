
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-400">
            Photo Gallery
          </h1>
          <p className="mt-2 text-gray-600">
            Discover photos and save your favorites.
          </p>
        </header>

        <Gallery />
      </div>
    </main>
  );
}
