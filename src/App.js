import { useEffect,useState } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Component/Posts';
import Pagination from './Component/Pagination';

const App=()=> {
const[posts, setPosts]=useState([])
const[loading,setLoading]=useState(false)
const[curretPage,setCurrentPage]=useState(1)
const[postperpage,setPostPerPage]=useState(10)

useEffect(()=>{
const FetchPost=async()=>{
  setLoading(true);
  const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
  setPosts(res.data)
  setLoading(false)
}
FetchPost()
},[])

//get Current post
const indexOfLastPost=curretPage *postperpage;
const indexOffirstPost=indexOfLastPost-postperpage;
const currentPost=posts.slice(indexOffirstPost,indexOfLastPost);

//get Pagenumber
const paginate=(pageNumber)=> setCurrentPage(pageNumber);

return (
    <div className="Container mt-5">
      <div className='text-primary mb-3'>My Pagination Project</div>
      <Posts posts={currentPost} loading={loading}/>
      <Pagination postperpage={postperpage}totalposts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
