import styles from "./taskList.module.css";
import { TaskType } from "../TaskContainer";
import { Task } from "../Task/Task";

interface TaskListProps {
	taskList: TaskType[];
	deleteTask: (taskId: string) => void;
	markTaskAsFinished: (taskId: string) => void;
	markTaskAsUnfinished: (taskId: string) => void;
}

export function TaskList({
	taskList,
	deleteTask,
	markTaskAsFinished,
	markTaskAsUnfinished,
}: TaskListProps) {
	return (
		<div className={styles.taskListContainer}>
			{taskList.map((task) => (
				<Task
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					markTaskAsFinished={markTaskAsFinished}
					markTaskAsUnfinished={markTaskAsUnfinished}
				/>
			))}
		</div>
	);
}
