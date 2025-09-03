# Campus Foot-Traffic Intelligence Dashboard

**Elevator Pitch (BLUF):**  
An **AI-powered campus analytics platform** that transforms raw video into actionable insights on student movement patterns. Built as a proof-of-concept for [Arizona State University], this dashboard provides facility managers, marketers, and administrators with clear visibility into traffic hotspots, peak usage times, and safety risks — insights traditional campus planning tools miss.

---

## 1. Project Overview
- **Goal:** Provide a data-driven way to measure and visualize campus foot-traffic.  
- **Unique Edge:** Unlike existing solutions that rely on surveys or card-swipe data, this system leverages **computer vision + clustering analytics** for more accurate, real-time insights.  
- **Stakeholders:** [ASU’s facilities/ Marketing team / Generic universities].  
- **Artifacts:** See [Supplemental Report PDF](https://github.com/abdxxll/Campus-Foot-TrafficIntelligence/blob/master/docs/ASU%20Campus%20Analytics%20Platform%20using%20Computer%20Vision.pdf) for the full technical + business context.

---

## 2. The Problem
Universities face recurring challenges:
- **Facility optimization:** Under- or over-utilized spaces waste resources.  
- **Safety & compliance:** Emergency exits and hallways can become choke points.  
- **Student experience:** Long lines, crowded events, and poor signage hurt satisfaction.  

---

## 3. The Method & Technology
- **Tech Stack:**  
  - Frontend: React, TypeScript, Vite, Tailwind  
  - Data Science: Python (NumPy, Pandas, scikit-learn)  
  - Computer Vision: YOLOvX/YOLOv12 for object detection + OpenCV for preprocessing  
  - Clustering: DBSCAN & HDBSCAN for spatial segmentation and density analysis  

- **Pipeline:**  
  1. Video ingestion (CCTV/security feeds or test clips)  
  2. Frame sampling + object detection → person bounding boxes  
  3. Tracking & count aggregation over time  
  4. Clustering analysis for heatmaps & hotspot identification  
  5. Interactive visualization in the dashboard  

- **Data Sources:** [Synthetic demo data included here; real feeds excluded for privacy].  

---

## 4. The Impact
**End Users:**  
- Facility managers → optimize cleaning, staffing, and maintenance schedules  
- Campus planners → guide construction and space allocation  
- Security teams → monitor bottlenecks or unsafe densities  
- Marketing teams → measure event turnout and campaign effectiveness  

**Expected Benefits:**  
- Reduce operational costs (e.g., staffing by off-peak scheduling)  
- Improve student satisfaction (shorter lines, smoother events)  
- Enhance safety compliance (monitor crowd thresholds in real time)  
- Provide data-backed ROI for campus events and campaigns  

**KPIs:**  
- Foot-traffic variance across time/day/week  
- Zone-level density distribution  
- Queue length and wait-time proxies  

---

## 5. Project Status & Future Roadmap
- **Current Status:** Proof-of-concept dashboard with synthetic sample data.  
- **Roadmap:**  
  - [ ] Deploy prototype on ASU test feeds  
  - [ ] Add real-time streaming analysis  
  - [ ] Expand to mobile-first view for event managers  
  - [ ] Partner with additional campuses for broader validation  
- **Stakeholders:** [Marketing and Events, Facilities and Operations, Campus Vendors].  

---

## 6. Technical & Ethical Details
- **Pipeline Diagram:** [Click here](https://github.com/abdxxll/Campus-Foot-TrafficIntelligence/blob/master/docs/architecture.png)
- **Privacy:** No PII stored; bounding boxes only. Synthetic data used in repo. Future versions will implement anonymization pipelines.  
- **Real-Time vs Batch:** Current prototype runs on batches (clips); real-time analysis planned via WebSocket stream.  
- **Scalability:** Designed to extend to multiple camera inputs with parallel processing.  

---

## 🎥 Demo & Screenshots
- **1-min walkthrough video:** [YouTube link]  

---

## 🚀 Run Locally
```bash
# install
npm install

# dev mode
npm run dev

# build & preview
npm run build
npm run preview
