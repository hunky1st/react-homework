export const navigate = (page: string) => {
  window.history.pushState(null, '', `?page=${page}`)

  window.dispatchEvent(new PopStateEvent('popstate'))
}
