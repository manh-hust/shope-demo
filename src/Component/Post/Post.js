import './post.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ThreeDots from '../Loading/ThreeDots'


function Post(){

    const dispatch = useDispatch()
    const {post, fillter, totalRow} = useSelector(state => state.post)
    const totalPages = Math.ceil(totalRow / fillter._limit)
    const _page = fillter._page
    const isLoading = false
    useEffect(() => {
        fetch(`https://js-post-api.herokuapp.com/api/posts?_limit=${fillter._limit}&_page=${fillter._page}`)
        .then(res => res.json())
        .then(post =>{
            dispatch({
                type: 'FETCH_API_POST',
                payload: post.data
            })
            dispatch({
                type: 'GET_TOTAL_PAGE',
                payload: post.pagination._totalRows
            })
        })
    },[fillter])


    function handlePageChangeNext(page){
        dispatch({
            type: 'NEXT_PAGE',
            payload: page
        })
    }
    function handlePageChangePrev(page){
        dispatch({
            type: 'PREV_PAGE',
            payload: page
        })
    }

    return (
        <>
        <h1>List Post</h1>
        { isLoading ?
        (<ul className="list">
            {post.map(post => (
                <li key={post.id} className="list-item">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </li>
            ))}
        </ul>) : (<ThreeDots typeLoading="ThreeDots"/>)
        }
        <div className="pagination">
        <button
            disabled={_page <= 1}
            onClick = {() => handlePageChangePrev(_page - 1)}
        >
            Prev
        </button>
        {_page === 1 ? false : <span> ... </span>}
        <button 
            style={{
                color: '#fff',
                backgroundColor: '#333'
            }}
        >
            {_page}
        </button>
        {_page === totalPages ? false : <span> ... </span>}
        <button
            disabled={_page >= totalPages}
            onClick = {() => handlePageChangeNext(_page + 1)}
        >
            Next
        </button>
    </div>
    </>
    )
}

export default Post