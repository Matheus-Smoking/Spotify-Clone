export const getTracks = (id) => {
  const accessToken = localStorage.getItem("token");

  const seacrh = `
  https://api.spotify.com/v1/albums/${id}/tracks?limit=50`;
  return (
    fetch(seacrh,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
  )
}