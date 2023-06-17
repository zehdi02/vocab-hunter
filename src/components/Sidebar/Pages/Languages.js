import React from "react";
import './Languages.css'

function Languages() {
  return (
    <div className="languages flex flex-col h-max my-2 text-gray-200 
      bg-gray-800 rounded-xl px-8 py-4">
      <div className="header text-4xl font-bold text-center pt-4">
        <span>Languages</span>
        <hr className="mt-4 mb-4"></hr>
        <div className="lang-set flex">
          <div className="current-lang flex">
            <span className="text-2xl ml-4 px-2">Current Language:</span>
            <a className="flex ml-4 px-2" href="#">
              <img className="w-2/12 rounded-lg hover:brightness-75" src='https://flagicons.lipis.dev/flags/4x3/us.svg' />
            </a>
          </div>
          <div className="translation-lang flex">
            <span className="text-2xl ml-4 px-2">Translation Language:</span>
            <a className="flex ml-4 px-2" href="#">
              <img className="w-2/12 rounded-lg hover:brightness-75" src='https://flagicons.lipis.dev/flags/4x3/us.svg' />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-guide-tips px-2 py-4 flex-1 flex flex-col">

        <div className="languages">
          <div className="my-2 text-gray-200 bg-gray-700 rounded-lg p-6 text-md font-normal">
            <div className="lang-flags grid grid-cols-4 gap-6">
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/us.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/es.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/fr.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/de.svg' /></a>

              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/cn.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/jp.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/it.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/ru.svg' /></a>

              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/kr.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/pt.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/sa.svg' /></a>
              <a href="#"><img src='https://flagicons.lipis.dev/flags/4x3/nl.svg' /></a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Languages;
