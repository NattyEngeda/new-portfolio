import React from 'react'

const Modal = props => {
  const closeModal = (e) => {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 overflow-auto">
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="bg-white w-70p max-w-md h-70p rounded-lg p-4 border-2 border-black"
          onClick={e => e.stopPropagation()}
        >
          <span
            className="text-gray-600 text-2xl font-bold absolute top-4 right-4 cursor-pointer"
            onClick={closeModal}
          >&times;</span>
        </div>
      </div>
    </div>
  )
}

export default Modal;