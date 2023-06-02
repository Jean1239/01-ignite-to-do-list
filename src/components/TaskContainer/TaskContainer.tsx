import styles from "./taskContainer.module.css";
import { useEffect, useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskInfo } from "../TaskInfo/TaskInfo";
import { TaskList } from "../TaskList/TaskList";
import { TaskListEmpty } from "../TaskListEmpty/TaskListEmpty";

export interface TaskType {
	id: string;
	name: string;
	finished?: boolean;
}

export function TaskContainer() {
	const [taskList, setTaskList] = useState(() => {
		const taskListString = localStorage.getItem("@to-do-list:task-list");
		if (taskListString) {
			return JSON.parse(taskListString) as TaskType[];
		}
		return [] as TaskType[];
	});

	useEffect(() => {
		localStorage.setItem("@to-do-list:task-list", JSON.stringify(taskList));
	}, [taskList]);

	function addTaskToList(taskName: string) {
		const task = { id: new Date().toISOString(), name: taskName };
		setTaskList((state) => [...state, task]);
	}

	function deleteTask(taskId: string) {
		setTaskList((state) =>
			state.filter((task) => {
				if (task.id === taskId) {
					return false;
				}
				return true;
			})
		);
	}

	function markTaskAsFinished(taskId: string) {
		setTaskList((state) =>
			state.map((task) => {
				if (task.id === taskId) {
					task.finished = true;
					return task;
				}
				return task;
			})
		);
	}

	function markTaskAsUnfinished(taskId: string) {
		setTaskList((state) =>
			state.map((task) => {
				if (task.id === taskId) {
					task.finished = false;
					return task;
				}
				return task;
			})
		);
	}

	return (
		<main className={styles.container}>
			<TaskForm addTaskToList={addTaskToList} />
			<TaskInfo taskList={taskList} />
			{taskList.length === 0 ? (
				<TaskListEmpty />
			) : (
				<TaskList
					taskList={taskList}
					deleteTask={deleteTask}
					markTaskAsFinished={markTaskAsFinished}
					markTaskAsUnfinished={markTaskAsUnfinished}
				/>
			)}
		</main>
	);
}
