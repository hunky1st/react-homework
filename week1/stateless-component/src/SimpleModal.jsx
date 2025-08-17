import React from 'react'

function SimpleModal({ onClose, children }) {
  return (
    <>
      <div
        className="modal-backdrop"
        onClick={onClose}
        role="button"
        tabIndex="0"
        aria-label="모달 닫기"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClose()
        }}
      />
      <div className="modal-base" role="dialog" aria-modal="true">
        <button
          className="modal-base__btn-close btn"
          type="button"
          aria-label="닫기"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </>
  )
}

export default SimpleModal
