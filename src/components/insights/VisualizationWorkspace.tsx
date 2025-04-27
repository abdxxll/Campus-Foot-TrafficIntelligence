import { useState, useEffect } from 'react';
import { Insight } from '@/types';
import { cn } from '@/lib/utils';

interface VisualizationWorkspaceProps {
  insights: Insight[];
  className?: string;
}

export function VisualizationWorkspace({ insights, className }: VisualizationWorkspaceProps) {
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (insights.length > 0 && !insights.some(i => i.id === selectedInsightId)) {
      setSelectedInsightId(null);
      setIsExpanded(false);
    }
  }, [insights, selectedInsightId]);

  const selectedInsight = selectedInsightId 
    ? insights.find(i => i.id === selectedInsightId) || null 
    : null;

  const handleSelectInsight = (id: string) => {
    setSelectedInsightId(id);
    setIsExpanded(true);
  };

  if (insights.length === 0) {
    return (
      <div className={className}>
        <div className="text-center p-12 border border-dashed rounded-lg">
          <p className="text-xl font-medium mb-2">No Insights Available</p>
          <p className="text-muted-foreground">Generate insights to see visualizations here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {!isExpanded ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="cursor-pointer"
              onClick={() => handleSelectInsight(insight.id)}
            >
              <img
                src={insight.visualization.imageUrl}
                alt={insight.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-2 font-medium">{insight.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        selectedInsight && (
          <div className="space-y-4">
            <button
              onClick={() => setIsExpanded(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to gallery
            </button>
            <div className="space-y-6">
              <img
                src={selectedInsight.visualization.imageUrl}
                alt={selectedInsight.title}
                className="w-full max-h-[600px] object-contain rounded-lg"
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{selectedInsight.title}</h2>
                <p className="text-muted-foreground">{selectedInsight.description}</p>
                <div className="space-y-2">
                  <h3 className="font-medium">Key Takeaway</h3>
                  <p>{selectedInsight.keyTakeaway}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Recommended Action</h3>
                  <p>{selectedInsight.recommendedAction}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Details</h3>
                  <p>{selectedInsight.details}</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}