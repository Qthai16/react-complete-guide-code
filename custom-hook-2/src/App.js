import React, { useEffect, useState, useCallback } from "react";
import useHttpReq from "./components/hooks/use-http-req";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const httpHandler = useHttpReq({
    url: "https://react-demo-http-97abe-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    method: "GET",
  });
  const { isLoading, data, error, sendRequest: fetchTasks } = httpHandler;
  useEffect(() => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, [data]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-demo-http-97abe-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchTasks();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
    // fetchTasks();
  }, []);

  const taskAddHandler = (newTask) => {
    // setTasks((prevTasks) => prevTasks.concat(newTask));
    fetchTasks();
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        // loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
