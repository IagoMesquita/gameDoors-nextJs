export default class DoorModel {
  _number: number;
  _haveGift: boolean;
  _isSelected: boolean;
  _isOpen: boolean;

  constructor(
    number: number,
    haveGift = false,
    isSelected = false,
    isOpen = false
  ) {
    this._number = number;
    this._haveGift = haveGift;
    this._isSelected = isSelected;
    this._isOpen = isOpen;
  }

  get number(): number {
    return this._number;
  }

  get haveGift(): boolean {
    return this._haveGift;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  get isClosed(): boolean {
    return !this.isOpen;
  }

  deselected() {
    const isSelected = false;

    return new DoorModel(this.number, this.haveGift, isSelected, this.isOpen);
  }

  changeSelection() {
    const isSelected = !this.isSelected;

    return new DoorModel(this.number, this.haveGift, isSelected, this.isOpen);
  }

  open() {
    const isOpen = true;

    return new DoorModel(this.number, this.haveGift, this.isSelected, isOpen);
  }

 
}
