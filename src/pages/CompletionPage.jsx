import React from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import useStore from "../hooks/useStore";

const CompletionPage = () => {
  const navigate = useNavigate();
  const { completionStore } = useStore();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Thank You !
          </h1>
          <p>Thank you for submitting the form. Please see the data below:</p>
          {completionStore.submittedForm.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <label className="font-bold text-sm">{data.label}:</label>
              <span>{data.value}</span>
            </div>
          ))}
          <div
            className="inline-flex items-center px-4 py-2 !mt-10 text-white bg-blue-500 hover:bg-blue-700 rounded focus:outline-none focus:ring"
            onClick={() => {
              navigate("/");
              completionStore.setSubmittedForm([]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm font-medium">Return</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(CompletionPage);
