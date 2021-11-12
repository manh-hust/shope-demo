
function Pagination({pagination, onPageChange}){

    const {_page, _limit, _totalRows} = pagination; 
    const totalPages = Math.ceil(_totalRows / _limit)

    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage);
        }

    }


    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick = {() => handlePageChange(_page - 1)}
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
                onClick = {() => handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;