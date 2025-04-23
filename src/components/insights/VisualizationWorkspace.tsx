import { useState, useEffect } from 'react';
import { VisualizationGallery } from './VisualizationGallery';
import { InsightPane } from './InsightPane';
import { Insight } from '@/types';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useMediaQuery } from '@/hooks/use-media-query';
import { BREAKPOINTS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VisualizationWorkspaceProps {
  insights: Insight[];
  className?: string;
}

export function VisualizationWorkspace({ insights, className }: VisualizationWorkspaceProps) {
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);

  useEffect(() => {
    if (insights.length > 0 && !insights.some(i => i.id === selectedInsightId)) {
      setSelectedInsightId(null);
      setIsExpanded(false);
    }
  }, [insights, selectedInsightId]);

  const selectedInsight = selectedInsightId 
    ? insights.find(i => i.id === selectedInsightId) || null 
    : null;

  const handleSelectInsight = (insightId: string) => {
    setSelectedInsightId(insightId);
    setIsExpanded(true);
  };

  if (insights.length === 0) {
    return (
      <div className={className}>
        <div className="text-center p-12 border border-dashed rounded-lg">
          <p className="text-xl font-medium mb-2">No Insights Available</p>
          <p className="text-muted-foreground">
            Select a video and generate insights to see visualizations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {!isExpanded ? (
        <VisualizationGallery
          insights={insights}
          selectedInsightId={selectedInsightId}
          onSelectInsight={handleSelectInsight}
          className="w-full"
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{selectedInsight?.title}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(false)}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Visualization */}
            <div className="lg:col-span-2 bg-card rounded-lg overflow-hidden">
              {selectedInsight && (
                <img
                  src={selectedInsight.visualization.imageUrl}
                  alt={selectedInsight.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Insight Details */}
            <div className="lg:col-span-1">
              <InsightPane
                insight={selectedInsight}
                insights={insights}
                onNavigate={(id) => {
                  setSelectedInsightId(id);
                  setIsExpanded(true);
                }}
                className="h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}