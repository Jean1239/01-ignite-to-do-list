import styles from "./taskForm.module.css";

export function TaskForm() {
	return (
		<form className={styles.taskForm}>
			<input
				className={styles.filled}
				placeholder={"Adicione uma nova tarefa"}
				type="text"
			/>
			<button type="submit">
				<strong>Criar</strong> <span>+</span>
			</button>
		</form>
	);
}
