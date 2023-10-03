import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';

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

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task 
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
        />
  ))} 
    </div>
  );

}

export default App;
