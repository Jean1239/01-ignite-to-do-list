import styles from "./task.module.css";
import check from "../../assets/check.svg";
import trash from "../../assets/trash.svg";

interface TaskProps {
	taskName: string;
}

export function Task({ taskName }: TaskProps) {
	return (
		<div className={styles.task}>
			<img src={check} alt="" />
			<p>{taskName}</p>
			<img className={styles.delete} src={trash} alt="" />
		</div>
	);
}
