export const URL = 'http://localhost:5000/'

export const usePost = async (endPoint, credentials) => {
  const init = {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'application/json'
    }
  }
  return await(await fetch(URL + endPoint, init)).json()
}
