export default function () {
  const role = JSON.parse(window.localStorage.getItem('role'))
  if (role !== 'Voluntario') {
    window.location = '/login'
  }
}
