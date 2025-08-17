import React, { useState } from 'react'
import SimpleModal from './SimpleModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <h1>상태 없는 모달 컴포넌트 과제</h1>
      <p>이 버튼을 누르면 모달이 열립니다.</p>

      <button className="btn" onClick={openModal}>
        모달 열기
      </button>

      {isModalOpen && (
        <SimpleModal onClose={closeModal}>
          <h2>확인 필요</h2>
          <p>
            이 모달은 상태가 없습니다. <br />
            보여줄지 말지는 부모 컴포넌트가 결정합니다.
          </p>
          <button className="btn btn-ok" onClick={closeModal}>
            확인
          </button>
        </SimpleModal>
      )}
    </div>
  )
}

export default App
