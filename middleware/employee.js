export default function () {
  const role = JSON.parse(window.localStorage.getItem('role'))
  if (role !== 'Empleado') {
    window.location = '/login'
  }
}
