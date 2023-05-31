import styles from "./taskContainer.module.css";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskInfo } from "./TaskInfo/TaskInfo";
import { TaskListEmpty } from "./TaskList/TaskListEmpty";

export function TaskContainer() {
	return (
		<main className={styles.container}>
			<TaskForm />
			<TaskInfo />
			<TaskListEmpty />
		</main>
	);
}
