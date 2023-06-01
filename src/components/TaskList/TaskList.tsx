import styles from "./taskList.module.css";
import { TaskType } from "../TaskContainer";
import { Task } from "../Task/Task";

interface TaskListProps {
	taskList: TaskType[];
}

export function TaskList({ taskList }: TaskListProps) {
	return (
		<div className={styles.taskListContainer}>
			{taskList.map((task) => (
				<Task key={task.name} taskName={task.name} />
			))}
		</div>
	);
}
