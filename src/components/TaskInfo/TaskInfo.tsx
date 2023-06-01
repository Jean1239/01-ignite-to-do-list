import { TaskType } from "../TaskContainer";
import styles from "./taskInfo.module.css";

interface TaskInfoProps {
	taskList: TaskType[];
}

export function TaskInfo({ taskList }: TaskInfoProps) {
	const totalTasks = taskList.length;
	const completedTasks = taskList.reduce((total, task) => {
		if (task.finished) {
			return total + 1;
		}
		return total;
	}, 0);

	return (
		<div className={styles.tasksInfo}>
			<div className={styles.createdTasksContainer}>
				<strong>Tarefas Criadas</strong>
				<span>{taskList.length}</span>
			</div>
			<div className={styles.completedTasksContainer}>
				<strong>Concluídas</strong>
				<span>
					{totalTasks === 0
						? 0
						: `${completedTasks} de ${totalTasks}`}
				</span>
			</div>
		</div>
	);
}
