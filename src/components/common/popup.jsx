import React from "react";
import Svgs from "svgs";

const Popup = ({ z, open, close, removeClose, heading, children, size, onclose, noanimation, header }) => {
  return (
    <>
      {open ? (
        <div
          className={`fixed inset-0 h-[100vh] w-[100vw] ${z ? z : "z-[4444]"
            } flex justify-center items-center`}
        >
          <div
            className="bg-[#000000CC] absolute inset-0 z-[1]"
          ></div>
          <div
            className={`relative overflow-hidden bg-white shadow-2xl rounded-md ${size == "md"
              ? "lg:w-[45vw] xl:w-[40vw]"
              : size == "lg"
                ? "lg:w-[65vw]"
                : size == "xl"
                  ? "lg:w-[90vw]"
                  : "lg:w-[50vw]"
              } w-[90vw] z-[2] ${!noanimation && 'slide-in-elliptic-top-fwd'}`}
          >
            {header && <div className="sticky top-0 bg-white z-[22]">
              <div className="flex items-center gap-4 justify-between">
                <h1
                  className={`${size == "md" ? "p-[1rem]" : "p-[1.2rem]"
                    } normal-case font-semibold text-xl text-left pr-[4.15rem]`}
                >
                  {heading ? heading : "Add prop heading"}
                </h1>
                {!removeClose &&
                  <div
                    className="px-[1rem] py-[1rem] cursor-pointer"
                    onClick={() => {
                      close(false);
                      onclose();
                    }}
                  >
                    <Svgs.Close />
                  </div>
                }
              </div>
              <hr />
            </div>}
            <div className="p-[1.2rem] pb-[1.5rem] overflow-y-auto overflow-x-hidden scroll-hidden lg:max-h-[75vh] max-h-[65vh]">
              {children ? children : "Add prop children!"}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Popup.defaultProps = {
  close: () => { },
  open: true,
  header: true,
  children: <></>,
  onclose: () => { },
  removeClose: false
};

export default Popup;
