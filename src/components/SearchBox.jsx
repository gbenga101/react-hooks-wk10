import { useState, useEffect, useRef } from 'react';

function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  // Incremented directly in the component body (not inside useEffect) so it
  // reflects every render. Mutating a ref like this does NOT itself trigger
  // a re-render - only setState calls (like setSearchText below) do.
  renderCount.current += 1;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Search Box</h2>
      <input
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Type to search..."
      />
      <p>You typed: {searchText}</p>
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default SearchBox;
