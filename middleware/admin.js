export default function () {
  const role = JSON.parse(window.localStorage.getItem('role'))
  if (role !== 'Administrador') {
    window.location = '/login'
  }
}
