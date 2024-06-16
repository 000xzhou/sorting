const Bubble = (): JSX.Element => {
  const len = 10;
  const x = new Bubble_Sort(len);
  x.sort();
  const history = x.get_history();
  console.log(history.length);
  return <div>
    {history.map(([arr, i, j]) => <div>{
      arr.toString() + " " + i + " " + j
      }</div>)}
  </div>;
};

class Bubble_Sort {
  list: number[];
  i: number;
  j: number;
  history: number[][][] = []; // 3 x 1 x 1

  constructor(len: number) {
    this.list = Array.from({length: len}, () => Math.floor(Math.random() * 100));
    this.i = 0;
    this.j = 0;
  }

  next(): number[] {
    if (this.i == this.list.length - 1) {
      return [];
    }
    if (this.j == this.list.length - this.i - 1) {
      this.i += 1;
      this.j = 0;
      return this.next();
    }
    this.history.push([this.list.slice(), [this.i], [this.j]]);
    if (this.list[this.j] > this.list[this.j + 1]) {
      const temp = this.list[this.j];
      this.list[this.j] = this.list[this.j + 1];
      this.list[this.j + 1] = temp;
    }
    this.j += 1;
    return this.list;
  }

  sort(): number[] {
    for (; this.i < this.list.length; this.i++) {
      for (this.j = 0; this.j < this.list.length - this.i - 1; this.j++) {
        this.history.push([this.list.slice(), [this.i], [this.j]]);
        if (this.list[this.j] > this.list[this.j + 1]) {
          const temp = this.list[this.j];
          this.list[this.j] = this.list[this.j + 1];
          this.list[this.j + 1] = temp;
        }
      }
    }
    return this.list;
  }

  isSorted(): boolean {
    for (let i = 0; i < this.list.length - 1; i++) {
      if (this.list[i] > this.list[i + 1]) {
        return false;
      }
    }
    return true;
  }

  get_history(): number[][][] {
    return this.history;
  }

  toString(): string {
    return this.list.toString();
  }
}

export default Bubble;
