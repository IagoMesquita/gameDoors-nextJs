'use client'
import Door from "@/components/Door";
import { createArrayDoors, updateDoors } from "@/functions/createArrayDoors";
import DoorModel from "@/model/doorModel";
import { useEffect, useState } from "react";
import styles from "@/styles/Game.module.css"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {

	const router = useRouter();


	const [isValide, setIsValide] = useState<boolean>();
	const [doors, setDoors] = useState<DoorModel[]>([]);

	useEffect(() => {
		const numberDoors = router.query.numberDoors;
		const haveGift = router.query.haveGift;
		const valideDoors = +numberDoors! >= 3 && +numberDoors! <= 100;
		const valideHaveGift = +haveGift! >= 1 && +haveGift! <= +numberDoors!;

		setIsValide(valideDoors && valideHaveGift);

	}, [doors, router.query])


	useEffect(() => {
		const numberDoors = router.query.numberDoors;
		const haveGift = router.query.haveGift;
		setDoors(createArrayDoors(+numberDoors!, +haveGift!));
	}, [router.query]);

	function renderDoors() {
		return doors.map((door: DoorModel) => {
			return <Door
				key={door.number}
				value={door} onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
			/>
		});
	}


	return (
		<div className={styles.game}>
			<div className={styles.doors}>
				{ isValide ? renderDoors() : <h1>Valores Inválidos!!</h1>}
			</div>
			<div className={styles.bottons}>
				<Link href={'/'}>
					<button>Reiniciar Jogo</button>
				</Link>
			</div>
		</div>

	)
}
