import { useState, useEffect } from 'react';
import { Insight } from '@/types';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Chip } from '@/components/ui/chip';
import { CONFIDENCE_COLORS } from '@/lib/constants';
import { Multiline } from './Multiline';

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
          <div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              ← Back to gallery
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left side - Visualization */}
              <div>
                <div className="flex items-center mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = insights.findIndex(i => i.id === selectedInsight.id);
                      const prevInsight = insights[currentIndex - 1];
                      if (prevInsight) {
                        setSelectedInsightId(prevInsight.id);
                      }
                    }}
                    disabled={insights.findIndex(i => i.id === selectedInsight.id) === 0}
                  >
                    <ChevronLeftIcon className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-4 border h-full">
                  <img
                    src={selectedInsight.visualization.imageUrl}
                    alt={selectedInsight.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Right side - Analysis */}
              <div>
                <div className="flex justify-end mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = insights.findIndex(i => i.id === selectedInsight.id);
                      const nextInsight = insights[currentIndex + 1];
                      if (nextInsight) {
                        setSelectedInsightId(nextInsight.id);
                      }
                    }}
                    disabled={insights.findIndex(i => i.id === selectedInsight.id) === insights.length - 1}
                  >
                    Next
                    <ChevronRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-6 border h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold">{selectedInsight.title}</h2>
                      <Chip
                        variant="outline"
                        className={cn(
                          'text-xs',
                          CONFIDENCE_COLORS[selectedInsight.confidence]
                        )}
                      >
                        {selectedInsight.confidence.charAt(0).toUpperCase() + selectedInsight.confidence.slice(1)} Confidence
                      </Chip>
                    </div>
                    <p className="text-muted-foreground">{selectedInsight.description}</p>
                    
                    <Tabs defaultValue="takeaway" className="w-full">
                      <TabsList className="grid grid-cols-4 p-2">
                        <TabsTrigger value="takeaway">Takeaway</TabsTrigger>
                        <TabsTrigger value="action">Action</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="data">Data</TabsTrigger>
                      </TabsList>
                      <div className="mt-4 space-y-4">
                        <TabsContent value="takeaway">
                          <h4 className="text-sm font-medium mb-2">Key Takeaway</h4>
                          <Multiline text={selectedInsight.keyTakeaway} />
                        </TabsContent>
                        <TabsContent value="action">
                          <h4 className="text-sm font-medium mb-2">Recommended Action</h4>
                          <Multiline text={selectedInsight.recommendedAction} />
                        </TabsContent>
                        <TabsContent value="details">
                          <h4 className="text-sm font-medium mb-2">Detailed Analysis</h4>
                          <Multiline text={selectedInsight.details} />
                        </TabsContent>
                        <TabsContent value="data">
                          <h4 className="text-sm font-medium mb-2">Visualization Data</h4>
                          <p className="text-sm text-muted-foreground">
                            Type: {selectedInsight.visualization.type.charAt(0).toUpperCase() + selectedInsight.visualization.type.slice(1)} Chart
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {selectedInsight.description}
                          </p>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}