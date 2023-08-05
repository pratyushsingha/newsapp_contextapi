import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalpages, setTotalpages] = useState(null)

    async function fetchNews() {
        setLoading(true)
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`
        try {
            const result = await fetch(url)
            const data = await result.json()
            console.log(data.totalPages)
            setPage(data.page)
            setPosts(data.posts)
            setTotalpages(data.totalPages)

        }
        catch (err) {
            alert('error in fetching data: ', err)
            setPage(page)
            setPosts([])
            setTotalpages(null)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchNews()
    }, [])

    const prevPage = () => {
        setPage(page - 1)
        fetchNews()
    }

    const nextPage = () => {
        setPage(page + 1)
        fetchNews()
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalpages,
        setTotalpages,
        fetchNews,
        prevPage,
        nextPage
    }

    return <AppContext.Provider value={value}>
        {children}
    </ AppContext.Provider>

}


