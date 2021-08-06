import React, { useState } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="search-bar ui segment">
      <div>
        <form className="ui form" onSubmit={ }>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={term} onChange={(e) => { setTerm(e.target.value) }} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;