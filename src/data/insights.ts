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
      "keyTakeaway": "Roughly 70 % of all movement funnels through the south walkway and the central staircase/­seating zone, with midday (11 AM – 2 PM) seeing the highest spike in activity.",
      "recommendedAction": "Prioritize pop-up events, promotional signage, and temporary kiosks along the south walkway and at the base of the main staircase to maximize impressions; schedule cleaning and maintenance for low-traffic windows (early morning/late evening).",
      "confidence": "high",
      "details": "Hotspots (red zones) cluster along the lower pedestrian promenade, the central stair landing, and entrance points to adjacent buildings, while the lawn interior shows minimal engagement. This pattern suggests commuters prefer hard-surface paths and shaded seating, offering prime real-estate for marketing activations and resource allocation.",
      "category": "traffic"
    },
    {
      "id": "zone-engagement-scoreboard",
      "title": "Zone Engagement Scoreboard", 
      "description": "Engagement metrics for different zones based on footfall, dwell time, and repeat visits",
      "visualization": {
        type: 'image',
        imageUrl: '/allviz/zone_engagement_scoreboard.jpg'
      },
      keyTakeaway: 'Central Patio and Lower Path areas have the highest engagement scores',
      recommendedAction: 'Leverage high-engagement zones for key activities and enhance low-engagement areas',
      confidence: 'high',
      details: 'The engagement scoreboard shows that the Lower Path (81) and Central Patio (20) areas receive the highest engagement scores, calculated as a combination of footfall, dwell time, and repeat visits. The Upper Walkway and Grass Area show moderate engagement levels.',
      category: 'zones'
    },
    {
      "id": "movement-patterns",
      "title": "Directional Movement Trends",
      "description": "Line chart tracking the average X and Y positions of all detected pedestrians across ~400 video frames (≈ 15 min sample).",
      "visualization": {
        "type": "image",
        "imageUrl": "/allviz/movement_patterns.png"
      },
      "keyTakeaway": "Traffic migrates steadily toward the east-side exits after the first 250 frames, with a sharp positional spike between frames 300-375 (≈ last 5 min).",
      "recommendedAction": "Deploy mobile signage or brand ambassadors near eastern egress points during class-change windows; adjust custodial and security staffing to that corridor to smooth flow and capture engagement.",
      "confidence": "medium",
      "details": "Both X- (blue) and Y-axis (orange) means remain centred (0.4-0.6 norm.) for the first half of the window, indicating dispersed occupancy. A sustained rise in X coupled with more volatile Y values in the latter half signals a crowd shift and faster throughput toward the east pathway—likely a bell transition or scheduled break.",
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
      "keyTakeaway": "Zone 2 (teal, ~45 % of points) and Zone 1 (blue, ~25 %) dominate overall presence, confirming them as the primary congregation corridors; Zone 3 (yellow) shows lighter but consistent activity, while Zone 0 (purple) is a narrow transit strip with episodic surges.",
      "recommendedAction": "Focus high-impact marketing (digital screens, QR-code posters, sampling tables) in Zones 2 & 1; experiment with pop-up attractions or shade/seating in Zone 3 to convert pass-throughs into dwellers; maintain Zone 0 as a clear egress path—use ground decals or directional prompts instead of bulky assets.",
      "confidence": "high",
      "details": "DBSCAN clustering over 12 k detections: Zone 2's broad footprint spans the central upper walkway, explaining its density. Zone 1 represents the mid-level patio stair route. Zone 3 sits along the upper terrace edge—lower counts but predictable flow suited for targeted, time-boxed activations. Zone 0 traces the lower path and entrance ramp, indicating high velocity movement with limited dwell potential.",
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
      "keyTakeaway": "Five movement jolts (frames ≈ 15, 150, 205, 345, 385) and ten density surges (frames ≈ 65-175 & 265-395) reveal episodic crowd clustering unaligned with typical flow patterns.",
      "recommendedAction": "Set automated notifications for future spikes; deploy on-call staff or campus police during anomaly windows; investigate root causes (pop-up events, obstruction, safety issues) and adjust signage or routing to redistribute flow.",
      "confidence": "medium",
      "details": "Density anomalies (value ≥2) correspond to sudden crowd build-ups—likely spontaneous gatherings or bottlenecks. Movement anomalies (value ≤1) indicate erratic trajectories that may signal running, congestion avoidance, or potential incidents. Correlating these timestamps with class schedules and event calendars will clarify triggers and support proactive planning.",
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
      "keyTakeaway": "Traffic forms a dominant loop: Zone 1 → Zone 2 → Zone 3 and back, accounting for ~75 % of all movements, while Zone 0 receives minimal inbound or outbound flow.",
      "recommendedAction": "Create a branded 'engagement corridor' along the 1-2-3 loop (pop-up activations, digital displays, wayfinding cues); treat Zone 0 purely as a fast-track egress—keep it clear and consider unobtrusive floor decals rather than booths.",
      "confidence": "high",
      "details": "Edge thickness reveals Zone 1→2 and 2→3 as the heaviest transitions, indicating students naturally progress north-east through the courtyard before dispersing. Sparse connectivity to Zone 0 confirms it is chiefly a peripheral shortcut, unsuitable for high- dwell marketing assets.",
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
      "keyTakeaway": "Three clear surges: ➊ early burst in Zone 0 (frames 0-45), ➋ lunch-hour apex in Zones 2-3 (frames 160-210), ➌ secondary uptick in the same zones around frames 260-290; Zone 1 remains low throughout.",
      "recommendedAction": "Deploy custodial/security staff to Zone 0 for morning rush; concentrate pop-up marketing and food-truck rotations in Zones 2-3 between 11 AM-1 PM; leave Zone 1 largely un-instrumented or experiment with small draws to test lift.",
      "confidence": "medium",
      "details": "Peak density hits ≈11 people per frame in Zones 2-3 during lunch, double the baseline. Zone 0's brief spike aligns with initial ingress (class start). Zone 1 shows <3 people in >90 % of frames, confirming it as low-value real estate for high-touch activations.",
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
      "keyTakeaway": "Three distinct waves emerge: ① opening rush in Zones 0-1 (frames 0-50), ② lunch-hour spike peaking in Zones 2-3 (frames 160-190; Zone 3 tops at 11 people), ③ secondary afternoon build-up again centred on Zones 2-3 (frames 250-290).",
      "recommendedAction": "Deploy custodial/security to Zone 0 for morning ingress; schedule food-trucks, info booths and digital ads in Zones 2-3 from 11 AM-1 PM; prep a lighter activation round ~1:30-2 PM to capture the follow-up wave.",
      "confidence": "medium",
      "details": "Zone 0 hits the day's earliest peak (10) but quickly stabilises ≤4, indicating fast-moving traffic. Zones 2-3 not only hit the highest counts but sustain moderate flow throughout—ideal for longer dwell marketing. Zone 1 remains flat (<5) after the first 80 frames, suggesting limited value for resource-intensive activations.",
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
      "keyTakeaway": "Zone 3 is the primary magnet: every zone has a ≥ 0.26 chance of sending traffic there, and Zone 3 retains the highest self-loop (0.31).",
      "recommendedAction": "Anchor marquee activations in Zone 3; place directional teasers in Zones 1 & 2 (where 29 % of traffic flows to Zone 3) to funnel students toward partnered vendors or events; maintain swift-move signage in Zone 0 to minimise congestion while still pointing toward Zone 3 attractions.",
      "confidence": "high",
      "details": "Probabilities above 0.28 (warmest cells) highlight dominant flows: 1 → 3 (0.29), 2 → 3 (0.29), and 3 → 3 self-dwell (0.31). Zone 0 shows more balanced dispersal, indicating it remains a transit path rather than a retention zone.",
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
      "keyTakeaway": "Cluster 3 (orange) along the lower promenade accounts for ≈ 60 % of detections, Cluster 2 (green) on the upper walkway ≈ 20 %, and Cluster 1 (blue) in the central patio ≈ 15 %; the remaining clusters are negligible outliers.",
      "recommendedAction": "Prioritise premium marketing real-estate on the lower promenade (Cluster 3) with rotating activations; install directional prompts on the upper walkway (Cluster 2) steering students toward patio booths; use the patio zone (Cluster 1) for seated engagement pop-ups (surveys, club sign-ups). Ignore outlier Cluster 0 and Cluster 4 for resource-intensive efforts.",
      "confidence": "high",
      "details": "HDBSCAN on ~12 k detections segmented foot traffic into five spatial bands. The elongated orange cluster traces the main transit corridor and shows the highest point density, confirming it as the campus 'highway'. Green points form a secondary flow paralleling the main path, while blue points highlight a sheltered seating area ideal for dwell-based activations. Purple and red clusters register < 5 % of detections, indicating sporadic or anomalous presence.",
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
      "keyTakeaway": "Two micro-hubs dominate dwell behaviour: ① the shaded upper walkway corner beside Building A and ② the tree-lined seating nook at the southwest entrance—together accounting for > 80 % of total linger time.",
      "recommendedAction": "Install branded café-style seating or interactive kiosks at these hotspots to monetise idle minutes; deploy QR-code surveys or promo signage there rather than along through-traffic paths.",
      "confidence": "medium",
      "details": "Normalised dwell scores peak at 1.0 on the upper walkway landing, tapering sharply beyond a ~10 m radius, indicating students pause mainly for shade and vantage. The lower corner hotspot aligns with fixed benches and foliage, suggesting comfort drives dwell; the vast central plaza shows negligible lingering, so large static installations would underperform there.",
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
      "keyTakeaway": "Foot traffic behaves like a bidirectional 'river': the west-to-east current along the lower promenade carries the bulk of movement, while a lighter counter-flow tracks the elevated walkway and feeds back into the main path near the central tower.",
      "recommendedAction": "Orient signage, booth fronts, and digital screens to face eastbound walkers on the lower path; place wayfinding prompts on the upper walkway to steer students toward patio activations; keep mid-promenade clear of bulky setups to avoid disrupting the primary flow.",
      "confidence": "high",
      "details": "Arrow density highlights three convergence nodes—(1) southwest entrance, (2) patio staircase landing, and (3) east exit—where streams merge and slow. These choke points present ideal spots for quick-hit marketing (flyer hand-outs, QR-code stands) but require congestion-aware layouts. Lateral arrows across the lawn are sparse, confirming the grass as a visual buffer rather than a transit route.",
      "category": "traffic"
    }
  ]
};