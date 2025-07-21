export default function PropertyBadges({ verified, isNew }) {
  return (
    <div className="flex flex-wrap gap-2">
      {verified && (
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
          Verified
        </span>
      )}
      {isNew && (
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
          New
        </span>
      )}
    </div>
  );
}
