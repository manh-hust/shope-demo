import { useState } from 'react'

function PostFiltersForm({onSubmit}){

    const [searchTerm, setSearchTerm] = useState('')

    function handleSearchTermChange(e){
        setSearchTerm(e.target.value)
        
        if(!onSubmit) return

        const formVal = {
            searchTerm: e.target.value
        }
        onSubmit(formVal)
    }

    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    )
}

export default PostFiltersForm;