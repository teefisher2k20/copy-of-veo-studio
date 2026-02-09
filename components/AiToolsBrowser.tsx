import React, { useState, useMemo } from 'react';
import { allTools, toolCategories, getToolsByCategory, searchTools, type AiTool, type ToolCategory } from '../types/aiTools';

interface AiToolsBrowserProps {
  onSelectTool: (tool: AiTool) => void;
}

export default function AiToolsBrowser({ onSelectTool }: AiToolsBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    let tools = selectedCategory === 'All' 
      ? allTools 
      : getToolsByCategory(selectedCategory);
    
    if (searchQuery.trim()) {
      tools = searchTools(searchQuery);
    }
    
    return tools;
  }, [selectedCategory, searchQuery]);

  const toolCount = filteredTools.length;

  return (
    <div className="ai-tools-browser">
      <div className="tools-header">
        <h2>AI Content Tools</h2>
        <p className="tools-subtitle">
          Choose from {allTools.length}+ specialized AI tools for content creation
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search tools by name, description, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="clear-search"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <button
          className={selectedCategory === 'All' ? 'category-btn active' : 'category-btn'}
          onClick={() => setSelectedCategory('All')}
        >
          All Tools ({allTools.length})
        </button>
        {toolCategories.map((category) => {
          const categoryTools = getToolsByCategory(category);
          return (
            <button
              key={category}
              className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
              onClick={() => setSelectedCategory(category)}
            >
              {category} ({categoryTools.length})
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="results-info">
        Showing {toolCount} {toolCount === 1 ? 'tool' : 'tools'}
      </div>

      {/* Tools Grid */}
      <div className="tools-grid">
        {filteredTools.length === 0 ? (
          <div className="no-results">
            <p>No tools found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="reset-btn">
              Clear search
            </button>
          </div>
        ) : (
          filteredTools.map((tool) => (
            <div key={tool.slug} className="tool-card">
              <div className="tool-header">
                <h3 className="tool-title">{tool.title}</h3>
                <span className="tool-category">{tool.category}</span>
              </div>
              <p className="tool-description">{tool.description}</p>
              <button 
                onClick={() => onSelectTool(tool)}
                className="use-tool-btn"
              >
                Use This Tool →
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
