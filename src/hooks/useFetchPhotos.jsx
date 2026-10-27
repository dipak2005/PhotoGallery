
import { useState, useEffect } from "react";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=30")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load photos. Please try again.");
        setLoading(false);
      });
  }, []);

  return { photos, loading, error };
}
