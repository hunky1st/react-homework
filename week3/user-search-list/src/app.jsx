import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'

const DUMMY_USERS = [
  { id: 'u1', name: '이형민', job: '개발자' },
  { id: 'u2', name: '피카츄', job: '전기쥐' },
  { id: 'u3', name: '마리오', job: '배관공' },
  { id: 'u4', name: '링크', job: '용사' },
]

function App() {
  const initialQuery =
    new URLSearchParams(window.location.search).get('query') || ''

  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    const url = new URL(window.location)
    url.searchParams.set('query', query)
    window.history.pushState({}, '', url)
  }, [query])

  useEffect(() => {
    const handlePopState = () => {
      const newQuery =
        new URLSearchParams(window.location.search).get('query') || ''
      setQuery(newQuery)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredUsers = DUMMY_USERS.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h1>카드 검색 리스트 UI</h1>
      <div className="search-form">
        <input
          type="search"
          placeholder="이름으로 검색..."
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      <ul className="card-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <Card key={user.id} user={user} />)
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ul>
    </div>
  )
}

export default App
