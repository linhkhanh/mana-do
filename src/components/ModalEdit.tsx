import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // modal for editing task
// define modal style
const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '400px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};



const ModalEdit = (props: any) => {
  const modalIsOpen = props.modalIsOpen;
  const closeModal = props.closeModal;
  const task = props.task;
  const onUpdateTodo = props.onUpdateTodo;
  const [content, setContent] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  }

  useEffect(() => {
    setContent(task.content)
  }, [task])

  return (

    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="modal">
          <div>
            <h2 className="edit">
              <svg id="color" enableBackground="new 0 0 24 24" height="50" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m14.25 3h-11.5c-1.52 0-2.75 1.23-2.75 2.75v12.5c0 1.52 1.23 2.75 2.75 2.75h7.38l.22-1.23c.101-.56.36-1.06.761-1.47l1.3-1.3h-8.661c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.18 0 .35.07.48.18l3.27-3.26v-6.67c0-1.52-1.23-2.75-2.75-2.75zm-1 10.75h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75z" fill="#2196f3" /><path d="m12.25 2h-1.1c-.33-1.15-1.39-2-2.65-2s-2.32.85-2.65 2h-1.1c-.41 0-.75.34-.75.75v2c0 .96.79 1.75 1.75 1.75h5.5c.96 0 1.75-.79 1.75-1.75v-2c0-.41-.34-.75-.75-.75z" fill="#1976d2" /><g fill="#fff"><path d="m14 9.75c0 .41-.34.75-.75.75h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75z" /><path d="m14 13c0 .41-.34.75-.75.75h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75z" /><path d="m13.73 15.68-1.32 1.32h-8.66c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.18 0 .35.07.48.18z" /></g><path d="m4 3h-1.25c-1.52 0-2.75 1.23-2.75 2.75v12.5c0 1.52 1.23 2.75 2.75 2.75h5.75v-4h-4.75c-.41 0-.75-.34-.75-.75 0-.41.34-.75.75-.75h4.75v-1.75h-4.75c-.41 0-.75-.34-.75-.75 0-.41.34-.75.75-.75h4.75v-1.75h-4.75c-.41 0-.75-.34-.75-.75 0-.41.34-.75.75-.75h4.75v-2.5h-2.75c-.96 0-1.75-.79-1.75-1.75z" fill="#1d83d4" /><path d="m8.5 0c-1.26 0-2.32.85-2.65 2h-1.1c-.41 0-.75.34-.75.75v.25 1.75c0 .96.79 1.75 1.75 1.75h2.75z" fill="#1667b7" /><path d="m8.5 9h-4.75c-.41 0-.75.34-.75.75 0 .41.34.75.75.75h4.75z" fill="#dedede" /><path d="m8.5 12.25h-4.75c-.41 0-.75.34-.75.75 0 .41.34.75.75.75h4.75z" fill="#dedede" /><path d="m8.5 15.5h-4.75c-.41 0-.75.34-.75.75 0 .41.34.75.75.75h4.75z" fill="#dedede" /><path d="m12.527 24c-.197 0-.389-.078-.53-.22-.173-.173-.251-.419-.208-.661l.53-3.005c.026-.151.1-.291.208-.399l7.425-7.425c.912-.913 1.808-.667 2.298-.177l1.237 1.237c.683.683.683 1.792 0 2.475l-7.425 7.425c-.108.109-.248.182-.4.209l-3.005.529zm3.005-1.28h.01z" fill="#ffc107" /><path d="m21.23 11.675c-.392 0-.833.17-1.278.615l-7.425 7.425c-.108.108-.182.248-.208.399l-.53 3.005c-.043.242.035.488.208.661.008.008.015.015.023.022l10.959-10.96-.73-.73c-.25-.25-.608-.437-1.019-.437z" fill="#dea806" /></svg>
              Edit Task</h2>
            
            <label className="edit-label">Task content:</label>
            <input
              className="Todo__input"
              value={content}
              onChange={handleChange}
            />
          </div>

          <button onClick={closeModal} name="cancel" className="Cancel_btn">Cancel</button>
          <button onClick={() => onUpdateTodo(task.id, content)} name="edit" className="Edit_btn">Edit</button>
        </div>
      </Modal>

    </div>
  );
}

export default ModalEdit;
