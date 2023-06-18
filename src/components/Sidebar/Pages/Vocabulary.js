import React from "react";
import './Vocabulary.css'

function Vocabulary() {
  return (
    <div className="languages flex flex-col h-screen my-2 text-gray-200 
      bg-gray-800 rounded-xl px-8 py-4">
      <div className="header text-4xl font-bold text-center pt-4">
        <span>Your Vocabulary</span>
        <hr className="mt-4 mb-4"></hr>
      </div>
      <div className="wordbank px-2 pb-4 flex-1">
        <table className="table-fixed border border-gray-200 rounded-full">
          <thead className="text-xl border">
            <tr className="known-bank">
              <th class='w-2/4'>Known Words: <span>20,000</span></th>
              <th class='w-2/4'>Unknown Words: <span>500</span></th>
            </tr>
          </thead>
          <tbody className="">
            <tr><td>label1</td><td>value1</td></tr>
            <tr><td>label2</td><td>value2</td></tr>
            <tr><td>label3</td><td>value3</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
            <tr><td>label4</td><td>value4</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vocabulary;
