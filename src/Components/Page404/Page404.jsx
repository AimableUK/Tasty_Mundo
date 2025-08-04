import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4 relative">
      <div className="perspective-container">
        <div className="floating-box relative w-64 h-64 md:w-80 md:h-80">
          <div className="front absolute w-full h-full bg-gray-800 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg">
            <div className="text-9xl font-bold text-primaryColor mb-2 glow">
              404
            </div>
            <div className="text-xl font-semibold text-blue-200">
              Page Not Found
            </div>
            <p className="text-gray-400 text-center mt-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="mt-6 px-6 py-2 bg-primaryColor hover:bg-blue-500 rounded-full text-white font-medium transition-all transform hover:scale-105"
            >
              Back Home
            </Link>
          </div>

          <div className="back absolute w-full h-full bg-gray-800 border-2 border-blue-400 rounded-lg"></div>
          <div className="right absolute w-10 h-full bg-blue-600/50 left-full origin-left rounded-r-lg"></div>
          <div className="left absolute w-10 h-full bg-blue-600/50 right-full origin-right rounded-l-lg"></div>
          <div className="top absolute w-full h-10 bg-blue-600/30 bottom-full origin-bottom rounded-t-lg"></div>
          <div className="bottom absolute w-full h-10 bg-blue-600/30 top-full origin-top rounded-b-lg"></div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
          style={{
            top: "20%",
            left: "15%",
            animation: "particle 8s linear infinite",
          }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-blue-500 rounded-full opacity-20"
          style={{
            top: "60%",
            left: "25%",
            animation: "particle 10s linear infinite",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-25"
          style={{
            top: "30%",
            left: "80%",
            animation: "particle 12s linear infinite",
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-15"
          style={{
            top: "80%",
            left: "70%",
            animation: "particle 9s linear infinite",
            animationDelay: "3s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Page404;
