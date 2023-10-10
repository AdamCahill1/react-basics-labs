import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", description:"Tidy all the bedrooms", deadline: "Today", done: false },
      { id: 4, title: "Wash Car", description:"Power wash and hoover the car", deadline: "Today", done: false },
      { id: 5, title: "Shopping", description:"Pick up stuff from the shop", deadline: "Friday", done: false },
    ]
  })

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
  })



  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  }

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.description = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
  } 

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }



  return (    
    <div className="container">
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx = {{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>
      
      {taskState.tasks.map((task, index) => (              
        <Task 
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask = {() => deleteHandler(index)}
        />
      ))} 
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
    
  );

}

export default App;
