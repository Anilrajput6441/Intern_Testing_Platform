/* eslint-disable no-unused-vars */
import React from "react";

const Rules = () => {
  return (
    <>
      <div className="rulesHolder w-[100vw] h-[100vh] bg-bgColor flex justify-center items-center">
        <div className="ruleHolder w-[60%] bg-purple pb-6 pl-7 rounded-md">
          <div className="rulesTextHolder flex  flex-col  justify-center">
            <div className="header text-white font-poppins">
              <p className="text-[7vmin] font-extrabold">Rules</p>
            </div>
            <div className="flex flex-col gap-y-5 mt-4 text-[4.45vmin] md:text-[3vmin] text-white">
              <p>
                1.&nbsp;There are a total of 10 questions and each question
                contains 4 options
              </p>
              <p>
                2.&nbsp; Each question carries 10 marks and the total marks in
                100
              </p>
              <p>
                3.&nbsp; The Test is of 100 second duration and a timer will be
                initiated on the start
              </p>
              <p>
                4.&nbsp; No negative marking for wrong answer and 0 marks for an
                unattempted question
              </p>
              <p>5.&nbsp; Cheating and Plagiarism is strictly prohibited</p>
              <p>
                6.&nbsp; Only one attempt is allowed per user so attempt it in a
                serious way
              </p>
              <p>
                7.&nbsp; All the Best for the Test!!! By the Codemap Team 🙂
              </p>
              <div className="holder flex justify-center items-center mt-6">
                <button className="bg-white text-black p-2 w-[25%] rounded-md">
                  Start Test...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;