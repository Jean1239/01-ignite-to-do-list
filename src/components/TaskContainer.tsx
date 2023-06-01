import { useState } from "react";
import styles from "./taskContainer.module.css";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskInfo } from "./TaskInfo/TaskInfo";
import { TaskList } from "./TaskList/TaskList";
import { TaskListEmpty } from "./TaskList/TaskListEmpty";

export interface TaskType {
	name: string;
}

export function TaskContainer() {
	const [taskList, setTaskList] = useState([] as TaskType[]);

	function addTaskToList(task: TaskType) {
		setTaskList((state) => [...state, task]);
	}

	return (
		<main className={styles.container}>
			<TaskForm addTaskToList={addTaskToList} />
			<TaskInfo />
			{taskList.length === 0 ? (
				<TaskListEmpty />
			) : (
				<TaskList taskList={taskList} />
			)}
		</main>
	);
}
