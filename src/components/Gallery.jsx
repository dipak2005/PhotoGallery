
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import useFetchPhotos from "../hooks/useFetchPhotos";

import PhotoCard from "../components/PhotoCard";
import SearchBar from "../components/SearchBar";
import { favoritesReducer } from "../reducers/favouriteReducer";


export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [],
    () => {
      try {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearchChange = useCallback((value) => {
    setSearch(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    const query = search.trim().toLowerCase();

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    );
  }, [photos, search]);

  const toggleFavorite = useCallback((id) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: id,
    });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center gap-3">
        <div
          className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"
          role="status"
          aria-label="Loading photos"
        />
        <p className="text-gray-600">Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <p role="alert" className="py-12 text-center text-red-600">
        {error}
      </p>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <SearchBar
          search={search}
          onSearchChange={handleSearchChange}
        />
      </div>

      {filteredPhotos.length === 0 ? (
        <p className="py-12 text-center text-gray-500">
          No photos found for "{search}".
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.includes(photo.id)}
              onToggleFavorite={() => toggleFavorite(photo.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
