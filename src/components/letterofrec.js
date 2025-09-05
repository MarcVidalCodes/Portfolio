// src/components/letterofrec.js
import React, { useState, useEffect } from 'react';
import Section from './Section';
import MarkdownHeader from './MarkdownHeader';
import Text from './Text';
import referenceLetter from '../assets/documents/LetterOfRecommendation.pdf';

function ReferenceLetters() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Force refresh when component mounts
  useEffect(() => {
    setRefreshKey(Date.now());
    setIsLoaded(false);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleRefresh = () => {
    setRefreshKey(Date.now());
    setIsLoaded(false);
  };

  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Reference Letters" className="text-3xl md:text-5xl mb-4" />
        <Text className="mb-4">Letters of recommendation from my professional experiences.</Text>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl h-[600px] bg-gray-100 rounded border border-gray-300 relative">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                <div className="text-gray-600">Loading PDF...</div>
              </div>
            )}
            
            <iframe
              key={refreshKey}
              src={`${referenceLetter}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
              width="100%"
              height="100%"
              className="rounded"
              title="Reference Letter"
              onLoad={handleLoad}
              style={{ 
                border: 'none',
                backgroundColor: 'white'
              }}
            />
          </div>
          
          <div className="mt-4 flex space-x-4">
            <button 
              onClick={handleRefresh}
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Reload PDF
            </button>
            <a 
              href={referenceLetter} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
            >
              Open in New Tab
            </a>
            <a 
              href={referenceLetter} 
              download="LetterOfRecommendation.pdf"
              className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default ReferenceLetters;