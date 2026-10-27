
export default function PhotoCard({
  photo,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
      <img
        src={`https://picsum.photos/id/${photo.id}/600/400`}
        alt={`Photo by ${photo.author}`}
        className="h-56 w-full object-cover"
        loading="lazy"
      />

      <div className="flex items-center justify-between gap-3 p-4">
        <p className="truncate font-medium text-gray-800">
          {photo.author}
        </p>

        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          aria-pressed={isFavorite}
          className={`shrink-0 rounded-full p-2 text-2xl transition ${
            isFavorite
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </article>
  );
}
