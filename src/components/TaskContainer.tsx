import styles from "./taskContainer.module.css";
import clippboard from "../assets/Clipboard.svg";

export function TaskContainer() {
	return (
		<div className={styles.container}>
			<div className={styles.taskInputContainer}>
				<input placeholder={"Adicione uma nova tarefa"} type="text" />
				<button type="button">
					<strong>Criar</strong> <span>+</span>
				</button>
			</div>
			<div className={styles.tasksBody}>
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
				<div className={styles.tasksListEmpty}>
					<img src={clippboard} alt="" />
					<div>
						<strong>Você ainda não tem tarefas cadastradas</strong>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</div>
				</div>
			</div>
		</div>
	);
}
