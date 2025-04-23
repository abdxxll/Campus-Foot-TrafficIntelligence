export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  dateUploaded: string;
  views: number;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  visualization: {
    type: 'image' | 'gif';
    imageUrl: string;
  };
  keyTakeaway: string;
  recommendedAction: string;
  confidence: 'high' | 'medium' | 'low';
  details: string;
  category: 'traffic' | 'patterns' | 'zones' | 'anomalies' | 'transitions';
}

export interface InsightState {
  videoId: string | null;
  status: 'idle' | 'loading' | 'success' | 'error';
  insights: Insight[];
  selectedInsightId: string | null;
  error?: string;
}