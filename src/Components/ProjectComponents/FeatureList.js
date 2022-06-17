import React from "react";

const FeatureList = ({ feature }) => {
  return (
    <div>
      <div className="">
        <ul className=" rounded-lg max-w-sm text-gray-900">
          <li className="px-6 flex my-2 items-center py-2 border-b border-l text-white border-orange-500 w-full rounded-t-lg">
            <span className="mr-2">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="arrow-alt-circle-right"
                className="w-7 h-7"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                ></path>
              </svg>
            </span>
            {feature}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureList;
