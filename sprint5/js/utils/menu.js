const menu = () => {
  const ham = document.getElementById('ham')
  const headerMenu = document.getElementById("header-menu")

  ham.addEventListener('click', () => {
    headerMenu.classList.toggle('menu-visible')
  })
}

export default menu 