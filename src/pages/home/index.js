import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class Home extends Component { 

  componentDidMount() {

    if(window.location.search == '') return;
    // const url = window.location.search.split("&")
    const access = window.location.search.replace('?code=','')
    console.log(access);
    
    const data = {
      grant_type: "authorization_code",
      code: access,
      redirect_uri:"http://localhost:3000/"
    }

    fetch('https://accounts.spotify.com/api/token',{
      method: 'POST',
      body:JSON.stringify({data }),
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded;',
        'Authorization':'Basic MzM2ZTc3YmZhZWJjNDMwMjljNWUwODZkNmE1ZjE5MTY6NmY1OTFmMTg5OWE0NDdmYmJkMjllN2NiMWY1NWU3YjE='
      }
    })    
    .then(res => res.json())
    .then(res => console.log(res))
  }

  login(){
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=336e77bfaebc43029c5e086d6a5f1916&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email'
  }


  render() {
    return (
      <div>
        <p onClick={() => this.login()} >login</p>
      </div>
    )
  }
}

export default Home; 