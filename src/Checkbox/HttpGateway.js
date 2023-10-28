export default class HttpGateway {
  apiUrl = 'https://example.com'

  async post(path, requestDto) {
    let response
    try {
      response = await fetch(`${this.apiUrl}/${path}`, {
        method: 'POST',
        body: JSON.stringify(requestDto)
      })
    } catch (e) {}

    return response?.json()
  }
}
