// src/FormComponent.jsx
import { useState } from 'react';

const FormComponent = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setShortenedUrl(null);

    const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/shorten`;

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
        mode: 'cors',
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }

      const data = await response.json();

      if (!data.shortUrl) {
        throw new Error('No shortUrl in response');
      }

      setShortenedUrl(data.shortUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl)
        .then(() => {
          alert('Shortened URL copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy:', err);
          alert('Failed to copy URL');
        });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <div className="bg-[#000000] rounded-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] p-6">
        <h2 className="text-[#9333ea] text-2xl text-center uppercase tracking-wider mb-6">
          URL Shortener
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter URL to shorten (e.g., https://example.com)"
            required
            className="w-full p-3 border-2 border-[#9333ea] rounded-md bg-[#1a1a1a] text-white 
            focus:outline-none focus:border-[#c084fc] focus:ring-2 focus:ring-[#c084fc]/50 
            placeholder-gray-600 transition-all duration-300"
          />

          <button 
            type="submit"
            className="p-3 bg-[#9333ea] text-white font-bold rounded-md 
            hover:bg-[#c084fc] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(147,51,234,0.4)] 
            transition-all duration-300"
          >
            Shorten URL
          </button>
        </form>

        {(shortenedUrl || error) && (
          <div className="mt-6 p-4 bg-[#1a1a1a] rounded-md border border-[#9333ea] 
          animate-[pulse_1s_ease-in-out_infinite]">
            {error ? (
              <div className="text-center">
                <p className="text-red-500 mb-2">{error}</p>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white bg-[#9333ea] py-2 px-4 rounded-md 
                  hover:bg-[#c084fc] transition-all duration-300 break-all text-center"
                >
                  {shortenedUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className="p-2 bg-[#9333ea] text-white rounded-md 
                  hover:bg-[#c084fc] transition-all duration-300 cursor-pointer"
                  title="Copy to clipboard"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;