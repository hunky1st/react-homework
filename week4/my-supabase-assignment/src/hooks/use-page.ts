import { useEffect, useState } from 'react'

export const usePage = () => {
  const getPage = () =>
    new URLSearchParams(window.location.search).get('page') || 'signup'
  const [page, setPage] = useState(getPage())

  useEffect(() => {
    const handlePopState = () => setPage(getPage())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return page
}
