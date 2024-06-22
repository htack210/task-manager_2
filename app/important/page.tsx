"use client";

import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

function page() {
  const { importantTasks } = useGlobalState();
  return (
    <Tasks
      title="Important Tasks [To do, or not to do!]"
      tasks={importantTasks}
    />
  );
}

export default page;
