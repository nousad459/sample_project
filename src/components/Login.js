import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './Login.css';

export default class Login extends Component {

  login()
  {

    //console.warn("state",this.state)
    const uri = 'http://127.0.0.1:8000/api/login';
    let h = new Headers();
    h.append('Accept','application/json');
    let req = new Request(uri,{
      method: 'POST',
      headers: h,
      mode: 'cors'
    });

    fetch(req)
    .then( (response)=> {
      if(response.ok){
        response.header('Access-Control-Allow-Origin', "*");
        response.header('Access-Control-Allow-Headers', "*");

        return response.json();
      }
      else{
        throw new Error('Bad http stuff');
      }
    })
    .then( (jsonData)=>{
      console.log(jsonData)
    })
    .catch( (err)=>{
      console.log('Error:', err.message);
    })
    //alert('ehllo')
  }
  //const [startDate, setStartDate] = useState(new Date());
  render() {
    return (
      <div className="main">

        <Grid>
          <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} />
          <br /><br />
          <input type="text" onChange={(e) => { this.setState({ password: e.target.value }) }} />
          <br /><br />
          <button onClick={() => this.login()}>Login</button>
        </Grid>
      </div>
    )
  }
}
