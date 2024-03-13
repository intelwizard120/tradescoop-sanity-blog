import { useState } from "react";

export default function Pagination({ page, pageCount, onChangePage}) {
  const onChange = e => {
    const num = Number(e.target.value);
    if(num && num >= 1 && num <= pageCount)
      onChangePage(num);
  };

  return (
    <div className="mb-32 flex pagination justify-center items-center text-xl">
      <button disabled={page == 1} onClick={() => onChangePage(1)}>&laquo;</button>
      <button disabled={page == 1} onClick={() => onChangePage(page - 1)}>&lsaquo;</button>
      <input type="text" value={page}/>
      <span>/ {pageCount}</span>
      <button disabled={page == pageCount} onClick={() => onChangePage(page + 1)}>&rsaquo;</button>
      <button disabled={page == pageCount} onClick={() => onChangePage(pageCount)}>&raquo;</button>
    </div>
  )
}