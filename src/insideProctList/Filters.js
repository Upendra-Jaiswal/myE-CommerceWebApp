import React from "react";

const Filters = ({ handleSort, sortBy }) => {
  const handleChange = (e) => {
    const selectedSort = e.target.value;
    handleSort(selectedSort);
  };

  return (
    <div>
      <h2>Filters</h2>
      <select value={sortBy} onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="popularity">popularity</option>
        <option value="default">default</option>
      </select>
    </div>
  );
};

export default Filters;

// import React from 'react'

// const filter = () => {
//   return (
//     <div>
//         <h1>Filters</h1>
//         <div>
//             from this to that price
//             <br/>
//             sort by
//             relevance
//             low to high
//             high to low
//             popularity

//         </div>
//     </div>
//   )
// }

// export default filter
