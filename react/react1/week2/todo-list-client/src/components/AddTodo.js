import React, { useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Timer from "./Timer";

export default function AddTodo() {
  const { handleAdd } = useContext(TodoContext);
  const inputRef = useRef(null);
  return (
    <>
      <p className="text-center my-8 text-gray-700 text-xl  font-bold">
        You have used {<Timer />} seconds on this Website
      </p>

      <form
        className="my-4"
        onSubmit={() => handleAdd({ description: inputRef.current.value })}
      >
        <div className="flex items-center">
          <input
            type="text"
            name="todo"
            id="todo"
            className="flex-1 appearance-none border-2 border-gray-200 rounded py-2 px-4 mr-2
            leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Add a new Todo"
            ref={inputRef}
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}
