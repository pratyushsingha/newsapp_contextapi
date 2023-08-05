import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const News = () => {

    const { loading, posts } = useContext(AppContext)

    return (
        <>
            {loading ? (<Spinner />) : (
                posts.length === 0 ? (<p>No posts available</p>) : (
                    <Card />
                )
            )}
        </>
    )
}

export default News
