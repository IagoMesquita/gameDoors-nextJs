import DoorModel from "@/model/doorModel";

export function createArrayDoors(qtde: number, doorWithGift: number): DoorModel[] {
  return Array.from({length: qtde}, (_, i) => {
    const number = i + 1;
    const havePresent = number === doorWithGift;
    return new DoorModel(number, havePresent);
  })
}

export function updateDoors(doors: DoorModel[],changeDoor: DoorModel): DoorModel[]{
  return doors.map((currentDoor) => {
    const igualAModificada = currentDoor.number === changeDoor.number;

    if(igualAModificada) {
      return changeDoor;
    } else {
      return changeDoor.isOpen ? currentDoor : currentDoor.deselected();
    }
  })  
}