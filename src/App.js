// import logo from './logo.svg';
import React from "react";
import "./App.css";
import List from "./components/list/List";
import Button from "./components/button/Button";
import CustomInput from "./components/customInput/CustomInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newTask: ''
    };
    this.clickAddTask = this.clickAddTask.bind(this);
    this.getNewTask = this.getNewTask.bind(this);

  }

  getNewTask(e){
    this.setState({
      newTask: e.target.value
    })
  }

  clickAddTask() {
    const { list, newTask } = this.state;
    this.setState({
      list: [...list, newTask],
      newTask: ''
    });
  }

  render() {
    const { list, newTask } = this.state;
    return (
      <div className="App">
        <List list={list} />
        <div>
          <CustomInput type={'text'} value={newTask} change={this.getNewTask}/>
          <Button btnName={"add"} clickAddTask={this.clickAddTask} />
        </div>
      </div>
    );
  }
}

export default App;