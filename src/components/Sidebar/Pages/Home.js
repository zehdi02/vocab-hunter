import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  // const { user } = useAuth0();

  return (
    <div className="HOME flex flex-col h-screen my-2 text-gray-200 bg-gray-800 rounded-xl px-8 py-4">
      <div className="welcome text-6xl font-bold text-center pt-4">
        {/* Commented out to avoid error when trying to set
            /home as root path '/'
            Welcome, {user.nickname}! */}
        Welcome!
      </div>
      <div className="intro-guide-tips px-2 py-4 flex-1 flex flex-col">

        <div className="intro">
          <div className="my-2 text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-xl font-normal">
            <p>
              Hi! Welcome to Vocab-Hunter
            </p>
          </div>
          <span className="font-bold text-4xl">What is Vocab-Hunter?</span>
          <div className="my-2 text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-xl font-normal">
            <p>
              Vocab-Hunter is a language learning web application that
            </p>
          </div>
        </div>

        <div className="guide">
          <span className="font-bold text-4xl">How to use Vocab-Hunter?</span>
          <div className="my-2 text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-xl font-normal">
            <p>
              Vocab-Hunter is fairly easy to navigate and use so that you can start gaining some
              fruitful language learning gains!
            </p>
          </div>
        </div>

        <div className="tips">
          <span className="font-bold text-4xl">Tips</span>
          <div className="my-2 text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-xl font-normal">
            <p>
              Here are some tips that could help your language learning more fun and comprehensible, and also make the most of Vocab-Hunter
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
