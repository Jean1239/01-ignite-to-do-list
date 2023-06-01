import styles from "./taskForm.module.css";
import { useForm } from "react-hook-form";

interface TaskFormData {
	taskName: string;
}

interface TaskFormProps {
	addTaskToList: (taskName: string) => void;
}

export function TaskForm({ addTaskToList }: TaskFormProps) {
	function createTask({ taskName }: TaskFormData) {
		addTaskToList(taskName);
	}

	const { register, handleSubmit } = useForm<TaskFormData>();

	return (
		<form onSubmit={handleSubmit(createTask)} className={styles.taskForm}>
			<input
				className={styles.filled}
				placeholder={"Adicione uma nova tarefa"}
				type="text"
				{...register("taskName", { required: true })}
			/>
			<button type="submit">
				<strong>Criar</strong> <span>+</span>
			</button>
		</form>
	);
}
