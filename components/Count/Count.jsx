import { useState } from "react";
import {
  updateQuantity,
  selectQuantity,
} from "@/components/Features/Slices/calculationSlice";
import { useDispatch } from "react-redux";
function IncDecCounter() {
  const dispatch = useDispatch();
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <div className="input-group inline-flex rounded-full border  ">
          <div class="input-group-prepend">
            <button
              className=" hover:bg-slate-400  w-10 h-10 rounded-full"
              type="button"
              onClick={decNum}
            >
              -
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center inline-flex"
            value={num}
            onChange={handleChange}

            
          />
          <div class="input-group-prepend">
            <button
              className=" hover:bg-slate-400  w-10 h-10 rounded-full"
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
        <div class="">
          <button
            className=" bg-blue-800  text-white  rounded-full border  px-7 text-sm items-center justify-center"
            type="button"
            onClick={() => {
              dispatch(updateQuantity(num));
            }}
          >
            <span>Add&nbsp;{num}</span>
            <span>&nbsp;items to </span>
            <span>cart</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default IncDecCounter;
