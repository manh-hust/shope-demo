import Post from './Component/Post/Post';
import { useState, useEffect } from 'react';
import Pagination from './Component/Pagination';
import PostFiltersForm from './Component/PostFiltersForm/'
import ThreeDots from './Component/Loading/ThreeDots'

function App() {

  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11
  })

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })

  useEffect(() =>{
    const newPages = filters
    fetch(`https://js-post-api.herokuapp.com/api/posts?_limit=${newPages._limit}&_page=${newPages._page}`)
    .then(response => response.json())
    .then(posts => {
      setPost(posts.data)
      setPagination(posts.pagination)
      setLoading(true)
    }
    )
    .catch(() => {
      console.log('Data error !')
    });

  }, [filters])

  function handlePageChange(newPage) {
  setFilters({
    ...filters,
    _page: newPage
  })
  setLoading(false)
}

  function handleFiltersChange(newFilters) {
}


  return ( 
    <div style={{padding: 40}}>
      <h1>Easy Frontend List</h1>
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
      <PostFiltersForm onSubmit={handleFiltersChange}/>
      {
        loading ? <Post posts={post || []}/> : <ThreeDots typeLoading="ThreeDots"/>
     }
     
    </div>
  );
}

export default App;



