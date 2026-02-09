import React, { useState } from 'react';
import AiToolsBrowser from './AiToolsBrowser';
import AiToolExecutor from './AiToolExecutor';
import type { AiTool } from '../types/aiTools';

interface AiToolsPageProps {
  apiKey: string;
}

export default function AiToolsPage({ apiKey }: AiToolsPageProps) {
  const [selectedTool, setSelectedTool] = useState<AiTool | null>(null);

  return (
    <div className="ai-tools-page">
      {selectedTool ? (
        <AiToolExecutor
          tool={selectedTool}
          apiKey={apiKey}
          onBack={() => setSelectedTool(null)}
        />
      ) : (
        <AiToolsBrowser onSelectTool={setSelectedTool} />
      )}
    </div>
  );
}
