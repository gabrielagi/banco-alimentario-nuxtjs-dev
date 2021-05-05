export default function () {
  const role = JSON.parse(window.localStorage.getItem('role'))
  if (role !== 'Donante') {
    window.location = '/login'
  }
}
