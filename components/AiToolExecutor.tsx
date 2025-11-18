import React, { useState } from 'react';
// import { GoogleGenerativeAI } from '@google/genai'; // Removed: No exported member
import type { AiTool } from '../types/aiTools';

interface AiToolExecutorProps {
  tool: AiTool;
  apiKey: string;
  onBack: () => void;
}

export default function AiToolExecutor({ tool, apiKey, onBack }: AiToolExecutorProps) {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      setError('Please enter some input to generate content.');
      return;
    }

    if (!apiKey) {
      setError('API key is required. Please set your Google API key in settings.');
      return;
    }

    setIsGenerating(true);
    setError('');
    setResult('');

    try {
      // TODO: Integrate Gemini API here. The GoogleGenerativeAI class is not available in @google/genai.
      // Example:
      // const response = await fetchGeminiContent(apiKey, tool.systemPrompt, userInput);
      // setResult(response);
      throw new Error('Gemini API integration not implemented.');
    } catch (err) {
      console.error('Generation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert('Copied to clipboard!');
    }
  };

  const handleClear = () => {
    setUserInput('');
    setResult('');
    setError('');
  };

  return (
    <div className="ai-tool-executor">
      {/* Header */}
      <div className="executor-header">
        <button onClick={onBack} className="back-btn" aria-label="Back to tools">
          ← Back
        </button>
        <div className="tool-info">
          <h2>{tool.title}</h2>
          <p className="tool-category-badge">{tool.category}</p>
        </div>
        <p className="tool-description-full">{tool.description}</p>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <label htmlFor="user-input" className="input-label">
          Your Input
        </label>
        <textarea
          id="user-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your content, topic, or requirements here..."
          className="input-textarea"
          rows={6}
          disabled={isGenerating}
        />
        
        <div className="action-buttons">
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !userInput.trim()}
            className="generate-btn"
          >
            {isGenerating ? (
              <>
                <span className="spinner"></span>
                Generating...
              </>
            ) : (
              'Generate Content'
            )}
          </button>
          <button
            onClick={handleClear}
            disabled={isGenerating}
            className="clear-btn"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}
      </div>

      {/* Result Section */}
      {result && (
        <div className="result-section">
          <div className="result-header">
            <label className="result-label">Generated Content</label>
            <button onClick={handleCopyResult} className="copy-btn">
              📋 Copy
            </button>
          </div>
          <div className="result-content">
            <pre className="result-text">{result}</pre>
          </div>
        </div>
      )}

      {/* System Prompt Info (Collapsible) */}
      <details className="system-prompt-details">
        <summary className="system-prompt-summary">
          View System Prompt
        </summary>
        <pre className="system-prompt-text">{tool.systemPrompt}</pre>
      </details>
    </div>
  );
}
