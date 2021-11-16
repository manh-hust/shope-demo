import './post.css';
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { Container, Row, Col, Card, CardText, CardTitle } from 'reactstrap';
import { fetchApiPost, getTotalPage, nextPage, prevPage} from '../../Store/Action.Creator';

function Post(){

    const dispatch = useDispatch()
    const {post, fillter, totalRow} = useSelector(state => state.post)
    const totalPages = Math.ceil(totalRow / fillter._limit)
    const _page = fillter._page
    const fetchPagination = useCallback(() =>{
        fetch(`https://js-post-api.herokuapp.com/api/posts?_limit=${fillter._limit}&_page=${fillter._page}`)
        .then(res => res.json())
        .then(post =>{
            dispatch(fetchApiPost(post.data))
            dispatch(getTotalPage(post.pagination._totalRows))
        })
    },[dispatch, fillter])

    useEffect(() => {
        fetchPagination();
        
    },[fetchPagination])

    function handlePageChangeNext(page){
        dispatch(nextPage(page))
    }
    function handlePageChangePrev(page){
        dispatch(prevPage(page))
    }

    return (
        <Container>
            <h1 className="m-5 mt-3">List Post</h1>
            <Row >
                {post.map(post => (
                    <Col  
                    xl="3"
                    lg="4"
                    md="6"
                    sm="12"
                    key={post.id}
                    className="mb-3"
                    >
                        <Card body>
                            <CardTitle tag="h5">
                                {post.title}
                            </CardTitle>
                            <CardText>
                                {post.description}
                            </CardText>
                        </Card>
                    </Col>
                ))}
            </Row>
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
        </Container>
    )
}

export default Post