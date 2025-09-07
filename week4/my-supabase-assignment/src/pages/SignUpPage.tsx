import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { supabase } from '../lib/supabase'

type Inputs = {
  username: string
  email: string
  bio: string
  password_1: string
}

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    console.log('제출된 폼 데이터:', formData)
    toast.info('회원가입 요청 중...')

    // 할일: signUp 성공 후 반환된 user.id로 profiles 테이블에 insert 로직 구현 필요.
    // Supabase 비동기 API를 연속으로 호출하고 응답을 처리하는 부분에서 막혔습니다.

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password_1,
      options: {
        data: {
          username: formData.username,
          bio: formData.bio,
        },
      },
    })

    if (authError) {
      toast.error(`인증 오류: ${authError.message}`)
      return
    }

    // if (authData.user) {
    //   // 이 부분에 profiles 테이블 insert 로직을 추가해야 함
    // }

    console.log('Supabase 인증 응답:', authData)
  }

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            {...register('username', { required: '이름을 입력해주세요.' })}
          />
          {errors.username && (
            <p style={{ color: 'red' }}>{errors.username.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: '이메일을 입력해주세요.' })}
          />
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="bio">자기소개</label>
          <input id="bio" {...register('bio')} />
        </div>
        <div>
          <label htmlFor="password_1">비밀번호</label>
          <input
            id="password_1"
            type="password"
            {...register('password_1', {
              required: '비밀번호를 입력해주세요.',
              minLength: { value: 6, message: '6자 이상 입력해주세요.' },
            })}
          />
          {errors.password_1 && (
            <p style={{ color: 'red' }}>{errors.password_1.message}</p>
          )}
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  )
}
