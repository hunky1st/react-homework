import { usePage } from './hooks/use-page'
import ProfilePage from './pages/ProfilePage'
import SignInPage from './pages/signInPage'
import SignUpPage from './pages/signUpPage'
import { navigate } from './utils/Maps'

function App() {
  const page = usePage()

  return (
    <div>
      <nav>
        <button onClick={() => navigate('signup')}>회원가입</button>
        <button onClick={() => navigate('signin')}>로그인</button>
        <button onClick={() => navigate('profile')}>프로필</button>
      </nav>

      {page === 'signup' && <SignUpPage />}
      {page === 'signin' && <SignInPage />}
      {page === 'profile' && <ProfilePage />}
    </div>
  )
}

export default App
