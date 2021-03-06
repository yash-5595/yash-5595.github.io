---
title: "A Scalable Data Analytics and Visualization System for City-wide Traffic Data-sets"
tags: ["Smart Wearables", "Data Science", "yash"]
description: "Interruption Detection"
author: "Yashaswi Karnati"
date: "2019-09-24"
link: "https://ieeexplore.ieee.org/document/9144876"
Published : "In IEEE Intelligent Transportation Systems Conference (ITSC), 2020, accepted"


Abstract : The advent of new traffic data collection tools such as high-resolution signalized intersection controller logs opens up a new space of possibilities for traffic management. In this work, we describe the high resolution datasets, apply appropriate machine learning methods to obtain relevant information from the said datasets and develop visualization tools to provide traffic engineers with suitable interfaces, thereby enabling new insights into traffic signal performance management. The eventual goal of this study is to enable automated analysis and help create  operational performance measures for signalized intersections while aiding traffic administrators in their quest to design 21st century signal policies.

---

We describe a system that leverages machine learning methodologies for data collected from a large number of intersections to derive key spatio-temporal traffic patterns in a city and then interactively allows a traffic engineer to focus on key challenges or improvements that can be carried out to alleviate them. Additionally, our system provides an analysis of traffic interruptions by observing changes in traffic at detectors, approaches, and intersections.

* Ranking:  Several  measures of effectiveness (MOEs) are used in the discipline. Our systems allow the user to rank or select intersections based on split failures and ratios of arrivals on red vs. green. Additionally, using a combination of these two metrics, we subdivide the intersections into several categories. </p>

* Clustering: Intersections with similar behavior or performance are grouped together using machine learning techniques. This approach is particularly useful when dealing with a large number of intersections and is carried out along both space and time. The system discovers and highlights signals on a corridor that preform similarly. </p>

* Change detection: We have developed a change detection algorithm that can detect statistically significant changes at an intersection level as compared to previous, similar time periods. This approach can be used to determine unexpected behavior or change in traffic patterns. </p>

* Incident detection: Using time series analysis, we derive extended time periods of significant traffic reduction for a detector or for an approach. A spatio-temporal presentation of this information is useful to derive key areas of traffic interruptions. </p>

We have implemented this system, which can be executed in parallel on a multicore machine and can handle data from thousands of intersections. The system can process six months of data for 300+ intersections (roughly 1 Terabyte) in less than 6 hours using a 50-core processor. A visualization module allows the user to select spatial and temporal regions of interest in an interactive fashion. 