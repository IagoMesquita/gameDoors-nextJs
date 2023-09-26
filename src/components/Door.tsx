import DoorModel from '@/model/doorModel';
import styles from '@/styles/Door.module.css';
import Gift from './Gift';

interface DoorProps {
	value: DoorModel;
	onChange: (newDoor: DoorModel) => void;

}

export default function Door(props: DoorProps) {
	const door = props.value;
	const isDoorSelected = door.isSelected && !door.isOpen ? styles.selected : '';

	function changeSelectedDoor() {
		props.onChange(
			door.changeSelection()
		);

	}

	function open(e: React.MouseEvent) {
		e.stopPropagation();
		props.onChange(door.open());
	}

	const renderDoor = () => (

		<div className={styles.door}>
			<div className={styles.number}>{door.number.toString()}</div>
			<div className={styles.handler} onClick={open}></div>
		</div>


	)


	return (
		<div className={styles.area} onClick={changeSelectedDoor}>
			<div className={`${styles.frame} ${isDoorSelected}`}>
				{door.isClosed ?
					renderDoor() :
					door.haveGift ? <Gift /> : false}
			</div>
			<div className={styles.floor}></div>
		</div>
	)
}
