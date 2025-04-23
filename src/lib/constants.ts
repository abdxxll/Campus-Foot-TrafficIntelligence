export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const CONFIDENCE_COLORS = {
  high: 'bg-green-100 text-green-900',
  medium: 'bg-yellow-100 text-yellow-900',
  low: 'bg-red-100 text-red-900',
};

export const CATEGORY_COLORS = {
  traffic: 'bg-blue-100 text-blue-900',
  patterns: 'bg-purple-100 text-purple-900',
  zones: 'bg-green-100 text-green-900',
  anomalies: 'bg-red-100 text-red-900',
  transitions: 'bg-orange-100 text-orange-900',
} as const;

export const CONTAINER_CLASS = 'container mx-auto px-4';