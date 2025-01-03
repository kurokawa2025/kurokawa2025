// ボタンとモーダルの関連付け
const openButtons = document.querySelectorAll('.openModal');
const closeButtons = document.querySelectorAll('.closeModal');
const modals = document.querySelectorAll('.modal');

// モーダルを開く処理
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modal;
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.remove('hidden');
    }
  });
});

// モーダルを閉じる処理
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.classList.add('hidden');
  });
});

// 背景クリックでモーダルを閉じる処理
modals.forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
});

