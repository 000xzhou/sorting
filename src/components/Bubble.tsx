import { useEffect, useState } from "react";

const Bubble = (): JSX.Element => {
  const len = 10;
  const [bubble, setBubble] = useState(new Bubble_Sort(len));
  const [loading, setLoading] = useState(false);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    bubble.sort();
    setLoading(true);
  });

  const [curr, setCurr] = useState(0);

  if (!loading) return <div>...loading</div>;

  return (
    <div>
      <button
        onClick={() => {
          setCurr(curr - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setCurr(curr + 1);
        }}
      >
        Next
      </button>

      <div className="arrContainer">
        {bubble.get_history_n(curr).map((num: number, i: number) => (
          <div
            className={
              "square " +
              (i > bubble.get_j(curr) || i < bubble.get_j(curr) - 1
                ? "inactive "
                : "active ") +
              (i !== 0 && i === bubble.get_j(curr) ? "activeR" : "") +
              (i === bubble.get_j(curr) - 1 ? "activeL" : "")
            }
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

class Bubble_Sort {
  list: number[];
  i: number;
  j: number;
  history: number[][][] = []; // 3 x 1 x 1

  constructor(len: number) {
    this.list = Array.from({ length: len }, () =>
      Math.floor(Math.random() * 100)
    );
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

  get_history_n(curr: number): number[] {
    return this.history[curr][0];
  }

  get_j(curr: number): number {
    return this.history[curr][2][0];
  }

  toString(): string {
    return this.list.toString();
  }
}

export default Bubble;
