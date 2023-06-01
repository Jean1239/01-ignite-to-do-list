import styles from "./taskList.module.css";
import { TaskType } from "../TaskContainer/TaskContainer";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

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
	function handleOnClickTrash(taskId: string) {
		deleteTask(taskId);
	}

	function handleOnClickCircle(taskId: string) {
		markTaskAsFinished(taskId);
	}

	function handleOnClickCheck(taskId: string) {
		markTaskAsUnfinished(taskId);
	}

	return (
		<div className={styles.taskListContainer}>
			{taskList.map((task) => (
				<div key={task.id} className={styles.task}>
					{task.finished ? (
						<a
							onClick={() => handleOnClickCheck(task.id)}
							className={styles.checkContainer}
						>
							<CheckCircle size={24} weight="fill" />
						</a>
					) : (
						<a
							onClick={() => handleOnClickCircle(task.id)}
							className={styles.circleContainer}
						>
							<Circle size={24} />
						</a>
					)}

					<p className={task.finished ? styles.finished : ""}>
						{task.name}
					</p>
					<a
						onClick={() => handleOnClickTrash(task.id)}
						className={styles.trashContainer}
					>
						<Trash size={16} />
					</a>
				</div>
			))}
		</div>
	);
}
