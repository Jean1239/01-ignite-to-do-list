import styles from "./taskListEmpty.module.css";
import clippboard from "../../assets/Clipboard.svg";

export function TaskListEmpty() {
	return (
		<div className={styles.tasksListEmpty}>
			<img src={clippboard} alt="" />
			<div>
				<strong>Você ainda não tem tarefas cadastradas</strong>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</div>
	);
}
