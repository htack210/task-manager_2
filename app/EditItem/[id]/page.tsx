"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const tid = params.id;
  const [task, setTask] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { updateThisTask } = useGlobalState();

  useEffect(() => {
    fetch(`/api/tasks/${tid}`)
      .then((res) => res.json())
      .then((task) => {
        setTask(task);
        setLoading(false);
        setTitle(task.title);
        setDescription(task.description);
        setDate(task.date);
        setCompleted(task.isCompleted);
        setImportant(task.isImportant);
      });
  }, []);

  if (isLoading) return toast.success("Loading...");
  if (!task) return "No task data";

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   updateTask(task);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask = {
      id: tid,
      title: title,
      description: description,
      date: date,
      isCompleted: completed,
      isImportant: important,
    };

    updateThisTask(updatedTask);
  };

  return (
    <>
      <div className="flex justify-center flex-row m-auto">
        <form
          onSubmit={handleSubmit}
          className="task-form bg-neutral-700 rounded-2xl border-2 border-gray-600 p-4 w-96"
        >
          <h1 className="text-3xl text-center">Edit Task</h1>
          <p className="text-xs text-center"> {tid}</p>
          {/* Title */}
          <div className="mb-4 w-full">
            <label htmlFor="title">Title</label>
            <input
              className="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm text-black focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
              type="text"
              id="title"
              value={title}
              name="title"
              onChange={handleChange("title")}
              placeholder="Title here."
            />
          </div>

          {/* Description */}
          <div className="mb-4 w-full">
            <label htmlFor="description">Description</label>
            <textarea
              className="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm text-black focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
              id="description"
              value={description}
              onChange={handleChange("description")}
              name="description"
              rows={4}
              placeholder="Description here."
            ></textarea>
          </div>

          {/* Date */}
          <div className="mb-4 w-full">
            <label htmlFor="date">Date</label>
            <input
              className="w-40 block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm text-black focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
              type="date"
              id="date"
              value={date}
              name="date"
              onChange={handleChange("date")}
            />
          </div>

          {/* Completed */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="completed"
              className="ms-1 mr-2 text-base font-medium text-white dark:text-gray-300 hover:cursor-pointer"
            >
              Completed
            </label>
            <input
              className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
              type="checkbox"
              id="completed"
              checked={completed}
              value={completed.toString()}
              name="completed"
              onChange={handleChange("completed")}
            />
          </div>

          {/* isImportant */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="important"
              className="ms-1 mr-2 text-base font-medium text-white dark:text-gray-300 hover:cursor-pointer"
            >
              Important
            </label>
            <input
              className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-500 dark:ring-offset-gray-700 focus:ring-1 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
              type="checkbox"
              id="important"
              checked={important}
              value={important.toString()}
              name="important"
              onChange={handleChange("important")}
            />
          </div>
          <div>
            <button
              // onClick={() => {
              //   updateTask(task);
              // }}
              type="submit"
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
