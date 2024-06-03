import React from 'react';

const Pagination = ({ total, current, onChange }) => {
  const generatePageNumbers = () => {
    let startPage, endPage;
    if (total <= 10) {
      // Less than 10 total pages so show all
      startPage = 1;
      endPage = total;
    } else {
      // More than 10 total pages so calculate start and end pages
      if (current <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (current + 4 >= total) {
        startPage = total - 9;
        endPage = total;
      } else {
        startPage = current - 5;
        endPage = current + 4;
      }
    }

    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    return pages;
  };

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="px-3 py-1 border rounded-l-md"
      >
        &lt;
      </button>
      {generatePageNumbers().map((number) => (
        <button
          key={number}
          onClick={() => onChange(number)}
          className={`px-3 py-1 border ${current === number ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="px-3 py-1 border rounded-r-md"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
