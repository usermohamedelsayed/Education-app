"use client";
import { dataQuestions } from "../../data";
export default function Questions() {
  const toggleQuestion = (e: { target: any }) => {
    let el = e.target.parentElement;
    if (el.classList.contains("close")) {
      [...el.parentElement.querySelectorAll(".span")].map(
        (span) => (span.innerText = "+")
      );
      [...el.parentElement.children].map((box: any) => {
        box.classList.add("close");
        box.style.height = "70px";
      });
      el.classList.remove("close");
      el.querySelector(".span").innerText = "-";
      return (el.style.height = el.scrollHeight + "px");
    } else {
      el.classList.add("close");
      el.querySelector(".span").innerText = "+";
      return (el.style.height = "70px");
    }
  };
  return (
    <div className="relative z-10">
      <div className="container mx-auto pb-10 px-3 pt-14">
        <h2 className="text-2xl text-center mb-5 leading-relaxed">
          frequently asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          {dataQuestions.map((item) => (
            <div
              key={item.id}
              className="close bg-bgSubPrimary duration-200 h-[70px] overflow-hidden"
            >
              <div
                className={`group relative flex items-center gap-[10px]
                px-[10px] md:px-[15px] py-[15px]
                h-[70px] border-b-[1px] border-solid
                border-crBorer select-none cursor-pointer`}
                onClick={toggleQuestion}
              >
                <span
                  className={`
                    absolute bg-crPrimary left-[50%] translate-x-[-50%]
                    translate-y-[-50%] bottom-0 w-0 h-[2px] 
                    group-hover:w-full duration-300
                    pointer-events-none
                    `}
                ></span>
                <span className="span text-[20px] pointer-events-none">+</span>
                <span className="sm:text-[13px] pointer-events-none">
                  {item.title}
                </span>
              </div>
              <p className="p-[15px] text-[13px] leading-6 text-crTextMuted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
