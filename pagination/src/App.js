


import { useState } from 'react';
import './App.css';
import { getUsers, getLength } from './api/user';
import Table from './components/table';
import Pagination from './components/pagination';
import SelectLimit from './components/selectLimit';


function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  //Math.ceil(user.length/limit)
  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }
  function handlePageChange(value) {
    if (value === "&laquo;" || value === "...") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    }
    else if (value === "&sraquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === "...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }
  return (
    <div className="container">
      <Table users={getUsers(page, limit)} />
      <div className='pagination-container' >

        <SelectLimit onLimitChange={setLimit} />
      </div>
      <Pagination totalPage={totalPage} page={pageNo} limit={limit} siblings={1} onPageChange={handlePageChange} />

    </div>
  );
}

export default App;
