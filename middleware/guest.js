export default function () {
  if (window.localStorage.getItem('access_token')) {
    const route = JSON.parse(localStorage.getItem('routes'))[0].url
    window.location = route
  }
}
