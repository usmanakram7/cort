import React, { useEffect } from "react";
import { DeleteCameraThunk, camerasListThunk } from "../../thunks/camera.thunk";
import { useDispatch } from "../../store";
const cross = require("../assets/icons/cross.svg");
const lockImage = require("../../app/assets/images/basket.png");

type Props = {
  id: string;
  handleNotConfirmDelete: () => void;
  handleConfirmDelete: () => void;
};

const HandleCameraConfirmDelete = (props: Props): JSX.Element => {
  //

  const dispatch = useDispatch();

  const handlesConfirmDelete = () => {
    dispatch(DeleteCameraThunk(props.id));
    dispatch(camerasListThunk());
  };

  // useEffect(() => {
  //   console.log("Single Camera", props.id, props.handleConfirmDelete);
  // }, []);

  return (
    <div className="w-full h-screen bg-[#3D4D53]/50 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10">
      <div className="w-[440px] fixed bg-[#fff]  flex p-[20px] items-center flex-col rounded-xl transition-all ease-in duration-1000">
        <div className="float-right w-full">
          <img
            onClick={props.handleNotConfirmDelete}
            className="float-right w-[20px] h-[20px] cursor-pointer"
            src={cross}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img
            src={lockImage}
            alt="reset-password"
            className="w-[166px] m-auto"
          />
          <h1 className="text-[24px] font-semibold color-[#3D4D53] text-center mt-[14px] w-[75%]">
            Are You Sure You Want To Delete this User.
          </h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <button
            onClick={handlesConfirmDelete}
            className="mb-[10px] w-[190px] font-semibold text-base leading-[150%] mt-[24px] text-[#E22828] border border-[#E22828] py-[13px] px-[28px] rounded-lg float-right"
          >
            Yes I'm sure
          </button>
          <button
            onClick={props.handleNotConfirmDelete}
            className="mb-[10px] w-[190px] font-semibold text-base leading-[150%] mt-[24px] text-[#E7E7E7] bg-Maincolor py-[13px] px-[28px] rounded-lg float-right"
          >
            No I'm not sure
          </button>
        </div>
      </div>
    </div>
  );
};
export default HandleCameraConfirmDelete;
