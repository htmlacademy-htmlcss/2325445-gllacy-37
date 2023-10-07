// Находим модальное окно
let dialog = document.querySelector('.modal-feedback');
// Находим все кнопки на странице, по которым должно открываться модальное окно
let openButtons = document.querySelectorAll('.open-modal');
// Находим кнопку закрытия модального окна
let closeButton = document.querySelector('.modal-close-button');

if (dialog) {
  // Открытие модального окна по клику на кнопку
  openButtons.forEach(item => {
    item.addEventListener('click', function () {
      dialog.showModal();
    })
  })

  // Закрытие модального окна по клику на кнопку
  closeButton.addEventListener('click', function () {
    dialog.close();
  })

  // Закрытие модального окна по клику на backdrop
  dialog.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      event.currentTarget.close()
    }
  })
}
