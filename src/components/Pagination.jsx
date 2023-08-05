import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const { page, totalpages, prevPage, nextPage } = useContext(AppContext)


    return (
        <>
            {page} of {totalpages}

            {page > 1 &&
                <button onClick={() => prevPage()} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    previous
                </button>
            }

            {page < totalpages &&
                <button onClick={()=> nextPage()} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Next
                </button>
            }
        </>
    )
}

export default Pagination
