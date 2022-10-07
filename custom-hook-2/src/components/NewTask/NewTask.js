import React from 'react'
import useHttpReq from "../hooks/use-http-req";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const httpHandler = useHttpReq({
    url: "https://react-demo-http-97abe-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    method: "POST",
  },
  (body, data) => {
    props.onAddTask({ ...body, id: data?.name });
  }
  );
  const { isLoading, data, error, sendRequest } = httpHandler;
  const addTaskHandler = (createdTask) => {
    sendRequest(createdTask);
  };
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const enterTaskHandler = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-demo-http-97abe-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }

  //     const data = await response.json();

  //     const generatedId = data.name; // firebase-specific => "name" contains generated id
  //     const createdTask = { id: generatedId, text: taskText };

  //     props.onAddTask(createdTask);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  //   setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onAddTask={addTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
