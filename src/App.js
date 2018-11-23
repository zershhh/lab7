import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Rate, Select,Button,message,Layout } from 'antd';
import "antd/dist/antd.css";
import "./index.css";
//import update from 'react-addons-update'; // ES6

const Option = Select.Option;
const success = () => {
  message.success('Successfully Submitted');
};

class App extends Component {
  constructor(props) {
    super(props); 
    
    this.state = {

      students: [
        {name: "Alex", grade: "Freshman", count: -1},
        {name: "Bob", grade: "Junior", count: -1},
        {name: "Carly", grade: "Sophomore", count: -1},
        {name: "Doris", grade:"Senior", count: -1},
        {name: "Eric", grade: "Sophomore", count: -1},

        {name: "Fiona", grade: "Junior", count: -1},
        {name: "George", grade: "Freshman", count: -1},
        {name: "Helen", grade: "Sophomore", count: -1},
        {name: "Ivan", grade:"Senior", count: -1},
        {name: "Jenny", grade:"Freshman", count: -1}
      ],
   
       pickedIndex: null,
       pickedName: null,
       pickedGrade: null,

    }
  }

  pickRandomStudent = () => {
    const students = this.state.students;
    const Seq =[Math.floor(Math.random() * this.state.students.length)] ;
    students[Seq].count+=1;


    this.setState(() => ({
      pickedStudent: this.state.students[Seq],
      students,
    }))
  }


  pickLeastPickedStudent = () => {
    let students = this.state.students;
    let lowest = students[0].count;
    let lowestStudent = 0;
    for (let i = 0; i < students.length; i ++) {
      console.log (lowest);
      console.log (students[i].count);
      if (lowest > students[i].count) {
        
        lowest = students[i].count;
        lowestStudent = i;
        console.log (lowest);
      }
    }

    students[lowestStudent].count ++;


    this.setState(() => ({
      pickedStudent: this.state.students[lowestStudent],
      students,
    }))
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  };
  
  render() {
    return (
      
      <div className="App">
      
        <div id="background">
          <Card style={{ width: 300 }}>

            <Button onClick={this.pickRandomStudent} type="primary">
              Pick a Student
            </Button>
            
            <br/>
            <br/>

            <Button onClick={this.pickLeastPickedStudent} type="primary">
              Pick a Least Picked Student
            </Button>
          </Card>
          <br/>              
          <Card title="Picked Student" bordered={false} style={{ width: 300 }}>
            Name: {this.state.pickedStudent && this.state.pickedStudent.name} <br/>
            Class: {this.state.pickedStudent && this.state.pickedStudent.grade} <br/>
            Times Previously Called: {this.state.pickedStudent && this.state.pickedStudent.count} <br/>
          </Card>
          <br/>
          <Card style={{ width: 300 }}>

            <Select defaultValue="Rating" style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="4">A</Option>
              <Option value="3.7">A-</Option>
              <Option value="3.3">B+</Option>
              <Option value="3">B</Option>
              <Option value="2.7">B-</Option>
              <Option value="2.3">C+</Option>
              <Option value="2">C</Option>
              <Option value="1.7">C-</Option>
              <Option value="1">D</Option>
              <Option value="0">F</Option>
            </Select>

            <Button onClick={success} type="primary">
              Submit Rating
            </Button>

          </Card>

        </div>
      </div>


    );
  }
}

export default App;