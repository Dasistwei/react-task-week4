import React, { useState, useEffect } from "react";
function Pagination({ products, setPaginateProducts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 每頁顯示筆數
  // 計算總頁數
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // 當前頁數的資料
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = products.slice(startIndex, startIndex + itemsPerPage);
    setPaginateProducts(selectedData);
  }, [products, currentPage]);
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            上一頁
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            下一頁
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
