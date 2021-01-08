import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  Table,
  UncontrolledTooltip,
  Progress
} from "reactstrap"


import axios from 'axios';

export default class BelajarTableList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    const { persons = [] } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <Card>
        <CardHeader>
          <CardTitle>User 2020</CardTitle>
        </CardHeader>
          <Table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {persons.length ? 
              persons.map(person => (
                <tr>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.username}</td>
                  <td>{person.email}</td>
                </tr>
              ))
              : 
              (<tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>)
            }
            </tbody>
          </Table>
          
          </Card>
        </header>
      </div>
    );
  }
}

