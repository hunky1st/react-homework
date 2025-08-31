import './App.css'
import Card from './Card'

const DUMMY_USERS = [
  { id: 'u1', name: '이형민', job: '개발자' },
  { id: 'u2', name: '피카츄', job: '전기쥐' },
  { id: 'u3', name: '마리오', job: '배관공' },
  { id: 'u4', name: '링크', job: '용사' },
]

function App() {
  return (
    <div>
      <h1>카드 검색 리스트 UI</h1>

      <div className="search-form">
        <input type="search" placeholder="이름으로 검색..." />
        <button>검색</button>
      </div>

      <ul className="card-list">
        {DUMMY_USERS.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}

export default App
