import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CameraIcon, MapIcon, TargetIcon, ZapIcon, ShieldIcon, ClockIcon } from 'lucide-react';
import { CONTAINER_CLASS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface HomeProps {
  onStartAnalyzing: () => void;
}

export function Home({ onStartAnalyzing }: HomeProps) {
  const analyzerRef = useRef<HTMLDivElement>(null);

  const scrollToAnalyzer = () => {
    analyzerRef.current?.scrollIntoView({ behavior: 'smooth' });
    onStartAnalyzing();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className={cn(CONTAINER_CLASS, "text-center")}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Campus Foot-Traffic
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-2">
              Intelligence
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mx-auto max-w-2xl mb-8">
            Pinpoint where and when students gather so you can place pop-ups, signage, and events exactly where they'll get noticed.
          </p>
          <p className="text-lg text-muted-foreground mx-auto max-w-3xl mb-8">
            Our computer-vision platform turns ordinary security-camera feeds into spatial analytics—revealing zone density, dwell time, and movement flows—so your marketing dollars land in the busiest spots, not the blind spots.
          </p>
          <Button onClick={scrollToAnalyzer} size="lg" className="animate-pulse">
            Start Optimising
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/40">
        <div className={CONTAINER_CLASS}>
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <CameraIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Connect a Camera</h3>
              <p className="text-muted-foreground">
                Link an existing live feed or upload a short clip of any campus location.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <MapIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI Maps Foot Traffic</h3>
              <p className="text-muted-foreground">
                Our models detect people, cluster zones, and track flows & dwell time—no manual tagging needed.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <TargetIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Act on Insights</h3>
              <p className="text-muted-foreground">
                Interactive dashboards flag high-value zones and recommend best times & spots for booths, signs, and activations.
              </p>
            </div>
          </div>

          {/* Support Micro-copy / Badges */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3 bg-card p-4 rounded-lg">
              <ZapIcon className="h-5 w-5 text-primary" />
              <p className="text-sm">Boost engagement by up to 2× with data-backed booth placement</p>
            </div>
            <div className="flex items-center gap-3 bg-card p-4 rounded-lg">
              <CameraIcon className="h-5 w-5 text-primary" />
              <p className="text-sm">Zero hardware swap – works with your current IP cameras</p>
            </div>
            <div className="flex items-center gap-3 bg-card p-4 rounded-lg">
              <ShieldIcon className="h-5 w-5 text-primary" />
              <p className="text-sm">Privacy safe – no facial recognition, only anonymised counts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analyzer Reference Point */}
      <div ref={analyzerRef} />
    </div>
  );
}