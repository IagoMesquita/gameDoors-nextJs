import styles from "@/styles/Card.module.css"

interface BgProps {
	bgcolor?: string;
	children?: any;
}

export default function Card(props: BgProps) {
	return (
		<div
			className={styles.card}
			style={{ backgroundColor: props.bgcolor ?? "#FFF" }}
		>
			{props.children}
		</div>
	)
}
