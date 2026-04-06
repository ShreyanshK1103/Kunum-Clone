import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setActive(true);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const clearSearch = () => {
    setQuery("");
    setActive(false);
  };

  return (
    <div className="flex flex-col items-center mt-40">
      {/* Search Box */}
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-gray-300/70 backdrop-blur-md rounded-full px-4 py-2 w-[500px] shadow-lg"
      >
        <Search size={18} className="text-gray-700 mr-2" />

        <input
          type="text"
          placeholder="I want to learn..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent flex-1 outline-none text-sm"
        />

        {query && (
          <button type="submit" className="mr-2">
            →
          </button>
        )}

        {active && (
          <button type="button" onClick={clearSearch}>
            <X size={18} />
          </button>
        )}
      </form>
        {active && (
            <div className="mt-6 bg-[#5c2d1f] text-white rounded-2xl p-6 w-[500px]">
            <h2 className="text-lg font-semibold mb-2">kunuminst</h2>

            <div className="space-y-2">
                <p className="cursor-pointer hover:underline">Collabs</p>
                <p className="cursor-pointer hover:underline">Careers</p>
                <p className="cursor-pointer hover:underline">About</p>
            </div>
            </div>
        )}
    </div>
  );
}

export default SearchBar;