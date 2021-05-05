export default function () {
  if (!window.localStorage.getItem('access_token')) {
    window.location = '/login'
  }
}
