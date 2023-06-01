import styles from "./task.module.css";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { TaskType } from "../TaskContainer";

interface TaskProps {
	task: TaskType;
	deleteTask: (taskId: string) => void;
	markTaskAsFinished: (taskId: string) => void;
	markTaskAsUnfinished: (taskId: string) => void;
}

export function Task({
	task,
	deleteTask,
	markTaskAsFinished,
	markTaskAsUnfinished,
}: TaskProps) {
	function handleOnClickTrash() {
		deleteTask(task.id);
	}

	function handleOnClickCircle() {
		markTaskAsFinished(task.id);
	}

	function handleOnClickCheck() {
		markTaskAsUnfinished(task.id);
	}

	return (
		<div className={styles.task}>
			{task.finished ? (
				<a
					onClick={handleOnClickCheck}
					className={styles.checkContainer}
				>
					<CheckCircle size={24} weight="fill" />
				</a>
			) : (
				<a
					onClick={handleOnClickCircle}
					className={styles.circleContainer}
				>
					<Circle size={24} />
				</a>
			)}

			<p className={task.finished ? styles.finished : ""}>{task.name}</p>
			<a onClick={handleOnClickTrash} className={styles.trashContainer}>
				<Trash size={16} />
			</a>
		</div>
	);
}
