import { useState, useEffect } from 'react';
import { VideoSelector } from '@/components/video/VideoSelector';
import { VisualizationWorkspace } from '@/components/insights/VisualizationWorkspace';
import { mockInsights } from '@/data/insights';
import { InsightState } from '@/types';

export function Analyzer() {
  const [state, setState] = useState<InsightState>({
    videoId: null,
    status: 'idle',
    insights: [],
    selectedInsightId: null
  });

  const handleSelectVideo = (videoId: string) => {
    setState(prev => ({
      ...prev,
      videoId,
      status: 'idle',
      insights: [],
      selectedInsightId: null
    }));
  };

  const handleGenerateInsights = () => {
    if (!state.videoId) return;
    
    setState(prev => ({
      ...prev,
      status: 'loading'
    }));
    
    // Simulate loading time
    setTimeout(() => {
      const insights = state.videoId ? mockInsights[state.videoId] || [] : [];
      
      setState(prev => ({
        ...prev,
        status: 'success',
        insights,
        selectedInsightId: insights.length > 0 ? insights[0].id : null
      }));
    }, 1500);
  };

  // Auto-generate insights if video is selected
  useEffect(() => {
    if (state.videoId && state.status === 'idle') {
      handleGenerateInsights();
    }
  }, [state.videoId]);

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-y-auto">
      <div className="p-6 flex-shrink-0">
        <VideoSelector
          selectedVideoId={state.videoId}
          onSelectVideo={handleSelectVideo}
          onGenerateInsights={handleGenerateInsights}
          isLoading={state.status === 'loading'}
        />
      </div>
      
      <div className="flex-1 p-6">
        <VisualizationWorkspace
          insights={state.insights}
        />
      </div>
    </div>
  );
}