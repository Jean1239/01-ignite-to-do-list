import styles from "./taskInfo.module.css";

export function TaskInfo() {
	return (
		<div className={styles.tasksInfo}>
			<div className={styles.createdTasksContainer}>
				<strong>Tarefas Criadas</strong>
				<span>0</span>
			</div>
			<div className={styles.completedTasksContainer}>
				<strong>Concluídas</strong>
				<span>0</span>
			</div>
		</div>
	);
}
