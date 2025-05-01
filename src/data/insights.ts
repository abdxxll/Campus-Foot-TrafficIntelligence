import { Insight } from '@/types';

export const mockInsights: Record<string, Insight[]> = {
  'hayden-lawn': [
    {
      "id": "foot-traffic",
      "title": "Foot Traffic Analysis",
      "description": "Heatmap derived from two weeks of video analytics showing pedestrian density across the main courtyard.",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/foot_traffic_heatmap.png"
      },
      "keyTakeaway": "Key findings:• 70% of movement funnels through:  - South walkway  - Central staircase/seating zone• Midday (11 AM – 2 PM) sees the highest spike in activity",
      "recommendedAction": "Recommendations:• Prioritize pop-up events, signage, and kiosks along:  - South walkway  - Base of main staircase• Schedule cleaning/maintenance for low-traffic windows (early morning/late evening)",
      "confidence": "high",
      "details": "Details:• Hotspots (red zones):  - Lower pedestrian promenade  - Central stair landing  - Entrance points to adjacent buildings• Lawn interior shows minimal engagement• Commuters prefer hard-surface paths and shaded seating• Prime real-estate for marketing activations and resource allocation",
      "category": "traffic"
    },
    {
      "id": "zone-engagement-scoreboard",
      "title": "Zone Engagement Scoreboard", 
      "description": "Engagement metrics for different zones based on footfall, dwell time, and repeat visits",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/zone_engagement_scoreboard.jpg"
      },
      "keyTakeaway": "Key findings:• Highest engagement: Central Patio and Lower Path• Moderate engagement: Upper Walkway and Grass Area",
      "recommendedAction": "Recommendations:• Leverage high-engagement zones for key activities• Enhance low-engagement areas",
      "confidence": "high",
      "details": "Details:• Lower Path (81) and Central Patio (20) have the highest engagement scores• Scores are based on:  - Footfall  - Dwell time  - Repeat visits• Upper Walkway and Grass Area show moderate engagement",
      "category": "zones"
    },
    {
      "id": "movement-patterns",
      "title": "Directional Movement Trends",
      "description": "Line chart tracking the average X and Y positions of all detected pedestrians across ~400 video frames (≈ 15 min sample).",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/movement_patterns.png"
      },
      "keyTakeaway": "Key findings:• Traffic migrates steadily toward east-side exits after first 250 frames• Sharp positional spike between frames 300-375 (≈ last 5 min)",
      "recommendedAction": "Recommendations:• Deploy mobile signage/brand ambassadors near eastern egress points during class-change windows• Adjust custodial/security staffing to that corridor to smooth flow and capture engagement",
      "confidence": "medium",
      "details": "Details:• X- (blue) and Y-axis (orange) means remain centered (0.4-0.6 norm.) for first half, indicating dispersed occupancy• Sustained rise in X and volatile Y in latter half signals crowd shift and faster throughput toward east pathway• Likely a bell transition or scheduled break",
      "category": "patterns"
    },
    {
      "id": "zone-clusters",
      "title": "Spatial Zone Clustering",
      "description": "Scatter plot of 4 machine-learned pedestrian clusters (zones 0-3) based on positional data from a two-week camera feed.",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/zones.png"
      },
      "keyTakeaway": "Key findings:• Zone 2 (teal, ~45% of points) and Zone 1 (blue, ~25%) dominate overall presence• Zone 3 (yellow) shows lighter but consistent activity• Zone 0 (purple) is a narrow transit strip with episodic surges",
      "recommendedAction": "Recommendations:• Focus high-impact marketing (digital screens, QR-code posters, sampling tables) in Zones 2 & 1• Experiment with pop-up attractions or shade/seating in Zone 3• Maintain Zone 0 as a clear egress path—use ground decals or directional prompts instead of bulky assets",
      "confidence": "high",
      "details": "Details:• DBSCAN clustering over 12k detections:  - Zone 2: broad footprint spans central upper walkway  - Zone 1: mid-level patio stair route  - Zone 3: upper terrace edge—predictable flow  - Zone 0: lower path and entrance ramp—high velocity, limited dwell",
      "category": "zones"
    },
    {
      "id": "crowd-anomalies",
      "title": "Crowd Anomaly Alerts",
      "description": "Scatter plot highlighting out-of-norm crowd density spikes (blue) and irregular movement bursts (red) detected across ~400 video frames.",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/anomalies_visualization.png"
      },
      "keyTakeaway": "Key findings:• Five movement jolts (frames ≈ 15, 150, 205, 345, 385)• Ten density surges (frames ≈ 65-175 & 265-395)• Reveal episodic crowd clustering unaligned with typical flow patterns",
      "recommendedAction": "Recommendations:• Set automated notifications for future spikes• Deploy on-call staff or campus police during anomaly windows• Investigate root causes (pop-up events, obstruction, safety issues)• Adjust signage or routing to redistribute flow",
      "confidence": "medium",
      "details": "Details:• Density anomalies (value ≥2): sudden crowd build-ups—likely spontaneous gatherings or bottlenecks• Movement anomalies (value ≤1): erratic trajectories—may signal running, congestion avoidance, or incidents• Correlate timestamps with class schedules and event calendars to clarify triggers",
      "category": "anomalies"
    },
    {
      "id": "zone-transitions",
      "title": "Inter-Zone Traffic Flow",
      "description": "Network diagram showing the most frequent pedestrian transitions between the four detected zones (edge width ∝ transition count).",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/transitions_network.png"
      },
      "keyTakeaway": "Key findings:• Traffic forms a dominant loop: Zone 1 → Zone 2 → Zone 3 and back (~75% of all movements)• Zone 0 receives minimal inbound or outbound flow",
      "recommendedAction": "Recommendations:• Create a branded 'engagement corridor' along the 1-2-3 loop (pop-up activations, digital displays, wayfinding cues)• Treat Zone 0 as a fast-track egress—keep clear and use unobtrusive floor decals",
      "confidence": "high",
      "details": "Details:• Edge thickness: Zone 1→2 and 2→3 are the heaviest transitions• Students progress north-east through the courtyard before dispersing• Sparse connectivity to Zone 0 confirms it as a peripheral shortcut",
      "category": "transitions"
    },
    {
      "id": "zone-density",
      "title": "Temporal Density Heatmap",
      "description": "Heatmap illustrating head-count per zone (0-3) across ~400 sequential frames (~15-min observation). Darker reds = higher crowd density.",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/density_heatmap.png"
      },
      "keyTakeaway": "Key findings:• Three clear surges:  1. Early burst in Zone 0 (frames 0-45)  2. Lunch-hour apex in Zones 2-3 (frames 160-210)  3. Secondary uptick in Zones 2-3 (frames 260-290)• Zone 1 remains low throughout",
      "recommendedAction": "Recommendations:• Deploy custodial/security staff to Zone 0 for morning rush• Concentrate pop-up marketing and food-truck rotations in Zones 2-3 (11 AM-1 PM)• Leave Zone 1 largely un-instrumented or experiment with small draws",
      "confidence": "medium",
      "details": "Details:• Peak density: ≈11 people per frame in Zones 2-3 during lunch (double the baseline)• Zone 0's brief spike aligns with initial ingress (class start)• Zone 1: <3 people in >90% of frames (low-value for high-touch activations)",
      "category": "traffic"
    },
    {
      "id": "density-timeseries",
      "title": "Zone Density Time-Series",
      "description": "Line chart tracking head-count in each zone (0-3) across roughly 400 video frames (~15 min).",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/density_timeseries.png"
      },
      "keyTakeaway": "Key findings:• Three distinct waves:  1. Opening rush in Zones 0-1 (frames 0-50)  2. Lunch-hour spike in Zones 2-3 (frames 160-190; Zone 3 tops at 11 people)  3. Secondary afternoon build-up in Zones 2-3 (frames 250-290)",
      "recommendedAction": "Recommendations:• Deploy custodial/security to Zone 0 for morning ingress• Schedule food-trucks, info booths, and digital ads in Zones 2-3 (11 AM-1 PM)• Prep a lighter activation round ~1:30-2 PM to capture the follow-up wave",
      "confidence": "medium",
      "details": "Details:• Zone 0: earliest peak (10) but quickly stabilizes ≤4 (fast-moving traffic)• Zones 2-3: highest counts and sustain moderate flow (ideal for longer dwell marketing)• Zone 1: remains flat (<5) after first 80 frames (limited value for resource-intensive activations)",
      "category": "patterns"
    },
    {
      "id": "transition-probabilities",
      "title": "Zone Transition Probability Matrix",
      "description": "Heatmap illustrating the likelihood of pedestrians moving from one zone to another (rows = origin, columns = destination). Values range 0 – 0.31.",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/transitions_heatmap.png"
      },
      "keyTakeaway": "Key findings:• Zone 3 is the primary magnet:  - Every zone has a ≥ 0.26 chance of sending traffic there  - Zone 3 retains the highest self-loop (0.31)",
      "recommendedAction": "Recommendations:• Anchor marquee activations in Zone 3• Place directional teasers in Zones 1 & 2 (29% of traffic flows to Zone 3)• Maintain swift-move signage in Zone 0 to minimize congestion while still pointing toward Zone 3 attractions",
      "confidence": "high",
      "details": "Details:• Probabilities above 0.28 (warmest cells) highlight dominant flows:  - 1 → 3 (0.29)  - 2 → 3 (0.29)  - 3 → 3 self-dwell (0.31)• Zone 0: more balanced dispersal (remains a transit path, not a retention zone)",
      "category": "transitions"
    },
    {
      "id": "hdbscan-clusters",
      "title": "Pedestrian Hot-Zone Clusters",
      "description": "HDBSCAN-derived clusters (5) of all person detections overlaid on the courtyard image to reveal natural congregation zones.",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/cluster_visualization.png"
      },
      "keyTakeaway": "Key findings:• Cluster 3 (orange, lower promenade): ≈ 60% of detections• Cluster 2 (green, upper walkway): ≈ 20%• Cluster 1 (blue, central patio): ≈ 15%• Remaining clusters: negligible outliers",
      "recommendedAction": "Recommendations:• Prioritize premium marketing on lower promenade (Cluster 3) with rotating activations• Install directional prompts on upper walkway (Cluster 2) steering students toward patio booths• Use patio zone (Cluster 1) for seated engagement pop-ups (surveys, club sign-ups)• Ignore outlier Clusters 0 and 4 for resource-intensive efforts",
      "confidence": "high",
      "details": "Details:• HDBSCAN on ~12k detections segmented foot traffic into five spatial bands• Orange cluster: main transit corridor, highest point density (campus 'highway')• Green: secondary flow paralleling main path• Blue: sheltered seating area (ideal for dwell-based activations)• Purple/red: <5% of detections (sporadic/anomalous presence)",
      "category": "patterns"
    },
    {
      "id": "dwell-time",
      "title": "Student Dwell-Time Hotspots",
      "description": "Heatmap overlay indicating where students spend the longest time (red/yellow) versus quick pass-through zones (blue/none).",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/dwell_time_visualization.png"
      },
      "keyTakeaway": "Key findings:• Two micro-hubs dominate dwell behavior:  1. Shaded upper walkway corner beside Building A  2. Tree-lined seating nook at southwest entrance• Together account for >80% of total linger time",
      "recommendedAction": "Recommendations:• Install branded café-style seating or interactive kiosks at these hotspots to monetize idle minutes• Deploy QR-code surveys or promo signage there rather than along through-traffic paths",
      "confidence": "medium",
      "details": "Details:• Normalized dwell scores peak at 1.0 on upper walkway landing, tapering sharply beyond ~10m radius• Lower corner hotspot aligns with fixed benches/foliage (comfort drives dwell)• Central plaza shows negligible lingering (large static installations would underperform)",
      "category": "zones"
    },
    {
      "id": "traffic-flow",
      "title": "Pedestrian Flow Overlay",
      "description": "Vector-field overlay mapping the dominant walking directions and merging points across the courtyard.",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/flow_diagram_overlay.png"
      },
      "keyTakeaway": "Key findings:• Foot traffic behaves like a bidirectional 'river':  - West-to-east current along lower promenade carries bulk of movement  - Lighter counter-flow tracks elevated walkway and feeds back into main path near central tower",
      "recommendedAction": "Recommendations:• Orient signage, booth fronts, and digital screens to face eastbound walkers on lower path• Place wayfinding prompts on upper walkway to steer students toward patio activations• Keep mid-promenade clear of bulky setups to avoid disrupting primary flow",
      "confidence": "high",
      "details": "Details:• Arrow density highlights three convergence nodes:  1. Southwest entrance  2. Patio staircase landing  3. East exit• Streams merge and slow at these choke points (ideal for quick-hit marketing)• Lateral arrows across lawn are sparse (grass is a visual buffer, not a transit route)",
      "category": "traffic"
    }
  ]
};