import React from "react";

function Settings() {
  return (
    <div className="settings flex flex-col h-screen my-2 text-gray-200 
      bg-gray-800 rounded-xl px-8 py-4">
      <div className="header text-4xl font-bold text-center pt-4">
        <span>Settings</span>
        <hr className="mt-4 mb-4"></hr>
      </div>
      <div className="intro-guide-tips px-2 py-4 flex-1 flex flex-col">

        <div className="set-cols">
          <div className="h-max text-gray-200 bg-gray-700 rounded-lg p-6 
            text-lg font-normal">
            <div className="lang-flags font-medium text-center grid grid-cols-3 gap-6">

              <div className="col-1">
                <div className="set-font-style">
                  <span>Font style:</span>

                  <button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown radio <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                  <div id="dropdownRadioBgHover" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
                      <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="default-radio-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default radio</label>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input checked id="default-radio-5" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="default-radio-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
                        </div>
                      </li>
                      <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input id="default-radio-6" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="default-radio-6" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default radio</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className="col-2">
                <div className="set-font-size">
                  <span>Font size:</span>
                  <input className="mx-2 rounded-md text-gray-800 pl-2"
                    type="number" id="quantity" name="quantity" min="8" max="64" />
                </div>
              </div>

              <div className="col-3">
                <div className="set-font-color">
                  <span>Font color:</span>
                  <div class="flex justify-center space-x-2">
                    <input id="nativeColorPicker1" type="color" value="#6590D5" />
                    <button
                      id="burronNativeColor"
                      type="button"
                      class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                      Button
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Settings;
