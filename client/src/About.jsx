// src/AboutComponent.jsx (updated with URL shortener context)
const AboutComponent = () => {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <div className="bg-[#000000] rounded-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] p-6">
          <h1 className="text-[#9333ea] text-3xl mb-4 text-center">About This Project</h1>
          
          <div className="text-white space-y-4">
            <div>
              <h2 className="text-[#9333ea] text-xl mb-2">Project Info</h2>
              <p>
                This is a URL shortening application built with React and Vite. 
                Users can input a long URL, which is sent to a backend service 
                via a POST request to /shorten, and receive a shortened URL in response.
                The app uses Tailwind CSS for styling with a dark theme and purple accents.
              </p>
            </div>
            
            <div>
              <h2 className="text-[#9333ea] text-xl mb-2">About Me</h2>
              <p>
                I'm a developer who enjoys building practical web tools. 
                This URL shortener showcases my skills in React, API integration, 
                and creating user-friendly interfaces with Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutComponent;    