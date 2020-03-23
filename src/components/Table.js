import React, { Component } from 'react'
import { Grid, Col, Image, Button } from 'react-bootstrap';
import { prototype } from 'react-bootstrap/lib/Accordion';
//import './Login.css';

export default class Table extends Component {
  constructor()  {
    super();
    this.state = {
      search: ''
    };

  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)},()=>{
      console.log("serach",this.state.search)
    });
  }


  render() {
    const data = [
      {
        "id": 0,
        "name": "Vernon Dunham",
        "company": "Qualcore",
        "email": "vernon.dunham@qualcore.com"
      }, {
        "id": 1,
        "name": "Dori Neal",
        "company": "Sunopia",
        "email": "dori.neal@sunopia.com"
      }, {
        "id": 2,
        "name": "Rico Muldoon",
        "company": "Airconix",
        "email": "rico.muldoon@airconix.com"
      }, {
        "id": 3,
        "name": "Jason Neal",
        "company": "Qualcore",
        "email": "jason.neal@qualcore.com"
      }, {
        "id": 4,
        "name": "Rico Pettey",
        "company": "Thermolock",
        "email": "rico.pettey@thermolock.com"
      }, {
        "id": 5,
        "name": "Raymond Seabury",
        "company": "Airconix",
        "email": "raymond.seabury@airconix.com"
      }, {
        "id": 6,
        "name": "Dori Pettey",
        "company": "Hivemind",
        "email": "dori.pettey@hivemind.com"
      }, {
        "id": 7,
        "name": "Vernon Neal",
        "company": "Qualcore",
        "email": "vernon.neal@qualcore.com"
      }, {
        "id": 8,
        "name": "Jason Neal",
        "company": "Qualcore",
        "email": "jason.neal@qualcore.com"
      }, {
        "id": 9,
        "name": "Vernon Muldoon",
        "company": "Airconix",
        "email": "vernon.muldoon@airconix.com"
      }, {
        "id": 10,
        "name": "Vernon Seabury",
        "company": "Hivemind",
        "email": "vernon.seabury@hivemind.com"
      }, {
        "id": 11,
        "name": "Dori Neal",
        "company": "Airconix",
        "email": "dori.neal@airconix.com"
      }, {
        "id": 12,
        "name": "Raymond Pettey",
        "company": "Airconix",
        "email": "raymond.pettey@airconix.com"
      }, {
        "id": 13,
        "name": "Rico Muldoon",
        "company": "Qualcore",
        "email": "rico.muldoon@qualcore.com"
      }, {
        "id": 14,
        "name": "Vernon Seabury",
        "company": "Sunopia",
        "email": "vernon.seabury@sunopia.com"
      }, {
        "id": 15,
        "name": "Rico Pettey",
        "company": "Airconix",
        "email": "rico.pettey@airconix.com"
      }, {
        "id": 16,
        "name": "Jason Dunham",
        "company": "Sunopia",
        "email": "jason.dunham@sunopia.com"
      }, {
        "id": 17,
        "name": "Vernon Neal",
        "company": "Qualcore",
        "email": "vernon.neal@qualcore.com"
      }, {
        "id": 18,
        "name": "Jason Pettey",
        "company": "Thermolock",
        "email": "jason.pettey@thermolock.com"
      }, {
        "id": 19,
        "name": "Vernon Dunham",
        "company": "Thermolock",
        "email": "vernon.dunham@thermolock.com"
      }, {
        "id": 20,
        "name": "Nousad Ali",
        "company": "Chetu India",
        "email": "nousad.ali@thermolock.com"
      }
    ];
    var i = 1;
    //console.log(data)

    let fiterData =  data.filter(
      (product) =>{
                      return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      } 
    )
    //console.log("filetr",fiterData)
    return (

    

      <div className="main">
      <input name="search" style={{alignSelf: 'flex-end'}} type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search"/>
        <Grid>
          
          <table className="table table-hover">
            <thead>
              <tr>
                <td>S.N.</td>
                {/* <td>ID</td> */}
                <td>Name</td>
                <td>Company</td>
                <td>Email</td>
                <td width="200px">Actions</td>
              </tr>
            </thead>
            <tbody>
              {fiterData.map(product => (
                <tr key={product.id}>
                  <td>{i++}</td>
                  {/* <td>{product.id}</td> */}
                  <td>{product.name}</td>
                  <td>{product.company}</td>
                  <td>{product.email}</td>
                  <td>
                    <Button style={{backgroundColor:'red'}}>Add</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
      </div>
    )
  }
}
