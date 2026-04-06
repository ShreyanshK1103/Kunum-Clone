import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, X, MoreHorizontal } from "lucide-react";
import { useEffect } from "react";

function SearchBar() {

  const location = useLocation();
  const urlQuery = new URLSearchParams(location.search).get("q") || "";

  const fullText = "I want to learn....";

  const [query, setQuery] = useState(urlQuery);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/about?q=${encodeURIComponent(query)}`);
  };

  const clearSearch = () => {
    setQuery("");
    setActive(false);
  };

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  // For the typing effect in the search bar
  useEffect(() => {
    let i = 0;
    let forward = true;

    const interval = setInterval(() => {
      if (forward) {
        setPlaceholder(fullText.slice(0, i++));
        if (i > fullText.length) forward = false;
      } else {
        setPlaceholder(fullText.slice(0, i--));
        if (i < 0) forward = true;
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-40">
      {/* Search Box */}
      <div className="relative w-[500px]">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-300/70 backdrop-blur-md rounded-full px-4 py-2 w-full shadow-lg gap-2"
        >
          <Search size={18} className="text-gray-700 mr-2" />

          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent flex-1 outline-none text-sm"
          />

          {query && (
            <button type="submit" onClick={handleSearch} className="mr-2 cursor-pointer">
              →
            </button>
          )}

          {/* 3 DOTS BUTTON */}
          <button type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="p-1 rounded-full hover:bg-gray-400/30 transition"
          >
            <MoreHorizontal size={18} />
          </button>

          {active && (
            <button type="button" onClick={clearSearch}>
              <X size={18} />
            </button>
          )}
        </form>

        {/* THE OPENING OF NAV IN SEARCH BAR */}
        {open && (
          <div className="absolute top-full left-0 mt-2 w-full bg-gray-300 text-gray-800 rounded-2xl p-4 shadow-xl">
            <p
              className="cursor-pointer hover:underline"
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
            >
              Home
            </p>

            <p
              className="cursor-pointer hover:underline"
              onClick={() => {
                navigate("/about");
                setOpen(false);
              }}
            >
              About
            </p>

            <p
              className="cursor-pointer hover:underline"
              onClick={() => {
                navigate("/careers");
                setOpen(false);
              }}
            >
              Careers
            </p>
          </div>
        )}
      </div>
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