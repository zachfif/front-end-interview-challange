import React, {useState, useEffect} from 'react';
import './App.css';
import {Form, Button, Table} from 'react-bootstrap'
import userData from './users.json'
import ReactDOM from 'react-dom';


function App() {
  const [numUsers, setNumUsers] = useState(0)
  const [display, setDisplay] = useState(false)


const handleSubmit = (submit) => {
  submit.preventDefault()
  const formData = new FormData(submit.target),
      formDataObj = Object.fromEntries(formData.entries())
  let users = formDataObj["numUsers"]
  if (typeof users === "string") {

    setNumUsers(parseInt(users))
  }
}

useEffect(() => {
  if (numUsers > 0){
    setDisplay(true)
  }
  console.log(userData)
}, [numUsers])

return (
  <div className="App container">
      <h1>Query Users</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>How many users would you like to search? </Form.Label>
          <br/>
          <Form.Control type="number" name="numUsers" placeholder="Enter Number (Max 10)" min={1} max={10}  />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
  
      <br/>
      <br/>
    
      {numUsers > 0 && display && (<div className={"container"}>
        <Table striped hover id="user_table">
        <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>MinPasswordLength</th>
          <th>Location</th>
          <th>InUse</th>
        </tr>
        </thead>
        <tbody>
        {numUsers > 0 && userData.slice(0, numUsers).map((item, index) => {
          return (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.role}</td>
                <td>{item.minPasswordLength}</td>
                <td>{item.location}</td>
                <td>{item.inUse ? "true": "false"}</td>
              </tr>
          )
        })}
        </tbody>
      </Table>
        </div>)}

</div>
);
}


ReactDOM.render(<App/>, document.getElementById('App'));
export default App;


/*class Data extends React.Component {
  render() {
      return (
          <table id="users">
              <thead>
                  <tr>
                      <th>Username</th>
                      <th>Role</th>
                      <th>MinPasswordLength</th>
                      <th>Location</th>
                      <th>In Use</th>
                  </tr>
              </thead>
              <tbody>
                  {this.props.App && this.props.App.map(App => {
                      return <tr>
                          <td>{App.state.username}</td>
                          <td>{App.state.role}</td>
                          <td>{App.state.minPasswordLength}</td>
                          <td>{App.state.location}</td>
                          <td>{App.state.inUse}</td>
                      </tr>
                  })}
              </tbody>
          </table>
      );
  }
}*/



/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      role: '',
      minPasswordLength: '',
      location: '',
      inUse: ''
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {

     const url = 'https://fairestdb.p.rapidapi.com/userlist/userlist';
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fc75034c0fmsh0d7396a6b82fcebp1af7fdjsn3fe7e5fca42c',
        'X-RapidAPI-Host': 'fairestdb.p.rapidapi.com',
        'Content-type': 'application/json'
      }
    };
    
    fetch(url, options)
	   .then(res => res.json())
	   .then(json => console.log(json))
	   .catch(err => console.error('error:' + err));
  
  }

*/
  /*fetch(url, options)
	   .then(res => res.json())
	   .then(json => console.log(json))
     .then(jsonResponse => {
      if (jsonResponse.users) {
        return jsonResponse.users.map(users =>({
          username: users.username,
          role: users.role,
          minPasswordLength: users.minPasswordLength,
          location: users.location,
          inUse: users.inUse
        }));
      }
     });
  };*/


    /*const api_url = 'https://fairestdb.p.rapidapi.com/userlist/userlist';

    async function getApi(url) {
      const response = await fetch(url);
      var data = await response.json();
      console.log(data);
      if (response) {
        hideLoader();
      }
      show(data);
    }
    getApi(api_url);

    function hideLoader() {
      document.getElementById('loading').style.display = 'none';  
    }

    function show(data) {
      let tab = 
      `<tr>
        <th>Username</th>
        <th>Role</th>
        <th>MinPasswordLength</th>
        <th>Location</th>
        <th>InUse</th>
      </tr>`;

      for (let r of data.list) {
        tab += `<tr> 
        <td>${r.name} </td>
        <td>${r.office}</td>
        <td>${r.position}</td> 
        <td>${r.salary}</td>          
    </tr>`;
        }
        document.getElementById("users").innerHTML = tab;
      }
    }*/



   

  /*const url = 'https://fairestdb.p.rapidapi.com/userlist/userlist';    

  const InputEvent = document.querySelector('#input');
  const submit = document.querySelector('#button');
  const responseFeild = document.querySelector('#table')

 const getData = async () => {
    const numberQuery = InputEvent.value;
    const endPoint = `${url}${numberQuery}`;  
   
  try {
    const response = await fetch('https://fairestdb.p.rapidapi.com/userlist/userlist?api_key=fc75034c0fmsh0d7396a6b82fcebp1af7fdjsn3fe7e5fca42c')
    const json = await response.json()
      if (response.ok) {
        return response.json();
      }
    console.log(json.url);
    
    } 
    catch (error) {
      console.log("Request Failed");
    }
  }
 };*/

/*async function run() {
  async function getData () {
      const response = await fetch('https://fairestdb.p.rapidapi.com/userlist/userlist?api_key=fc75034c0fmsh0d7396a6b82fcebp1af7fdjsn3fe7e5fca42c');
      JSON = await response.JSON();
      return(json);
  }
  users = await getUsers();
  console.log(users);
}
run(); */



 /* create(e) {
    // POST
    e.preventDefault();

const url = 'https://fairestdb.p.rapidapi.com/userlist/userlist';

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'fc75034c0fmsh0d7396a6b82fcebp1af7fdjsn3fe7e5fca42c',
    'X-RapidAPI-Host': 'fairestdb.p.rapidapi.com'
  },
  body: '{"username":"","role":"","minPasswordLength":"","location":"","inUse":""}'
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
  }

  update(e) {
    //  PUT
    e.preventDefault();

const url = 'https://fairestdb.p.rapidapi.com/userlist/userlist';

const options = {
  method: 'PUT',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'fc75034c0fmsh0d7396a6b82fcebp1af7fdjsn3fe7e5fca42c',
    'X-RapidAPI-Host': 'fairestdb.p.rapidapi.com'
  },
  body: '{"username":"","role":"","minPasswordLength":"","location":"","inUse":true}'
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

  }

  delete(e) {
    // - DELETE
    e.preventDefault();
    
const url = 'https://fairestdb.p.rapidapi.com/userlist/userlist/_id/%7Bentity-id%7D';

const options = {
  method: 'DELETE',
  headers: {
    'X-RapidAPI-Key': 'fc75034c0fmsh0d7396a6b82fcebp1af7fdjsn3fe7e5fca42c',
    'X-RapidAPI-Host': 'fairestdb.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
  }

  handleChange(componentDidMount) {
    this.props.onChange(this.state)
  }
/*
 $('#bt').click(function () {
    $.getJSON('./users.json', function (data) {

      var arrItems = [];
      $.each(data, function (index, value) {
        arrItems.push(value);
      });
      
      var col = [];
      for (var i = 0; i < arrItems.length; i++) {
        for (var key in arrItems[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }

      var table = document.createElement("table");

      var tr = table.insertRow(-1);

      for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
      }

      for (var i = 0; i < arrItems.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = arrItems[i][col[j]];
        }
      }

      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    });
  });*/

/*  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1 className="display-5 text-center">How Many Users Would You Like to Query?</h1>
              <form className="d-flex flex-column">
                <label htmlFor="name">
                  Number of Users (Max 10)
                  <input
                    name="number"
                    id="bt"
                    type="number"
                    className="form-control"
                    value={this.state.number}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    min={1}
                    max={10}
                  
                    />
                </label>
                <button className="btn btn-outline-primary " type='button' onClick={(e) => this.componentDidMount()}>
                  Submit
                </button>
              </form>
              <Data data={this.state.data} />
            </div>
          </div>
        </div>
    );
  }
}*/
