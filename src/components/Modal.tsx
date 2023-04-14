import {Dispatch, ReactElement, SetStateAction, useContext, useState} from "react";
//import { AcknowledgementContext } from "./AcknowledgementContext";
import TestAgree from "./TestAgree";
//import AgreementContext from "./AgreementContext";

type Props = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

//const [acknowledged, setAcknowledged] = useContext(AcknowledgementContext);
//const agreed = useContext(AgreementContext);

const Modal = ({ isOpen, setOpen }: Props) => {

  //const [_, setAcknowledged] = useContext(AcknowledgementContext);
  const [isValid, setValid] = useState(false);

  return <>
    {isOpen && 
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center p-10 bg-black bg-opacity-25 z-40">
        <div className="bg-white p-10 rounded-lg max-w-2xl z-50 relative overflow-y-scroll">
          <div className="absolute top-3 right-3 bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition-all cursor-pointer"
            onClick={() => setOpen(false)}>
            <img src="https://iconape.com/wp-content/png_logo_vector/cross-2.png" alt="close" className="w-3 h-3" onClick={() => setOpen(false)} />
          </div>
          <div className="font-bold text-2xl">Acknowledgement</div>
          <div className="mt-5 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos hic perspiciatis itaque quo, ullam corporis? Quia possimus rem earum id?</div>

          <label>
            <input 
              type="checkbox" 
              className="mt-5" 
              onChange={(e) => {
                e.target.checked ? setValid(true) : setValid(false);
            }}
            />
            I have read and agreed
          </label>
          <div className="mt-5 space-x-3">
            <button 
              onClick={() => {
                //setAcknowledged(true); 
                console.log("should setOpen to false and agreed to true...");
                //agreed.setAgreed = true;
                setOpen(false);
              }}
              className="text-white py-2 px-5 rounded-md text-[16px] bg-green-500 hover:bg-green-600 transition-all"
              disabled={!isValid}>
                Accept
            </button>
          <TestAgree />
          </div>

        </div>
      </div>}
  </>
}

export default Modal