import { useEffect, useState } from "react";

const Bubble = (): JSX.Element => {
  const len = 10;
  const [bubble, setBubble] = useState(new Bubble_Sort(len));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bubble.sort();
    setLoading(true);
  }, [bubble]);

  const [swap, setSwap] = useState(true);
  const [curr, setCurr] = useState(0);
  // const [direction, setDirection] = useState("right");
  const [rightStyle, setRightStyle] = useState("");
  const [leftStyle, setLeftStyle] = useState("");

  if (!loading) return <div>...loading</div>;

  const handlePrev = () => {
    if (curr > 0) {
      setCurr(curr - 1);
      if (swap) {
        setRightStyle("activeRB");
        setLeftStyle("activeLB");
      }
    }
  };

  const handleNext = () => {
    setCurr(curr + 1);
    // setSwap();
    if (swap) {
      setRightStyle("activeR");
      setLeftStyle("activeL");
    }
  };

  //todo: function that controls next and back click (as it needs to display the same bubble 2 times.)
  // todo: first time is to target the curr index. 2nd click is to swap. So the front end don't look weird.
  // Maybe you got better idea or got no idea what i'm talking about.

  const getClassNames = (index: number) => {
    let classNames = "square ";
    const j = bubble.get_j(curr);
    if (index > j || index < j - 1) {
      classNames += "inactive ";
    } else {
      classNames += "active ";
    }
    if (index === j) {
      classNames += rightStyle;
    }
    if (index === j - 1) {
      classNames += leftStyle;
    }
    return classNames;
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={curr <= 0}>
        Prev
      </button>

      <button onClick={handleNext}>Next</button>

      <div className="arrContainer">
        {bubble.get_history_n(curr).map((num: number, i: number) => (
          <div key={i} className={getClassNames(i)}>
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

  isSwap(): boolean {
    return this.swap;
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
