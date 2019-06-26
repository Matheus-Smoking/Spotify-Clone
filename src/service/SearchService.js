export const getSearch = (seacrh) => {
  const accessToken = localStorage.getItem("token");
  const url = `https://api.spotify.com/v1/search?q=${seacrh}&type=album&limit=20`;
  return (
    fetch(url,
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