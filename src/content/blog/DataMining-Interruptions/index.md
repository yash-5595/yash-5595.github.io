---
title: "Data Mining Algorithms for Traffic Interruption Detection"
tags: ["ML", "Data Science", "yash"]
description: "Interruption Detection"
author: "Yashaswi Karnati"
date: "2018-09-24"
link: "https://ieeexplore.ieee.org/document/9144876"
Published : "2020 Vehicle Technology and Intelligent Transportation System (VEHITS), 2020"


Abstract : Detection of traffic interruptions (caused by vehicular breakdowns, road accidents etc.) is a critical aspect of managing traffic on urban road networks. This work outlines a semi-supervised strategy to automatically detect traffic interruptions occurring on arteries in urban road networks using high resolution data from widely deployed fixed point sensors (inductive loop detectors). The techniques highlighted in this paper are tested on data collected from detectors installed on more than 300 signalized intersections

---



Our goal in this paper is to use loop detector data for detecting traffic interruptions. Loop detector data are now widely available to traffic management personnel. Additionally with new ATSPM based systems, such data is available at high frequency (10 Hz) and with low latency. In our work, we utilize 6 months of data for 300 intersections (each with an average of 10 detectors) to demonstrate the usefulness of our method. This dataset is roughly 700 GB in size.  We believe that it is the first study that uses fine grain (10Hz) ATSPM data for a large geographical region and over a long duration of time.

We seek to design algorithms to detect traffic interruptions in a relatively unsupervised fashion. We define traffic interruption as a significant, contextual and non recurring change observed in a combination of the following parameters: the amount of deviation of traffic volumes from predicted volumes and the duration for which the actual traffic volume deviated from the predicted volume.

The major contributions of our work:

* Labeling data is a  major challenge for big data applications since interruption ground truth is generally not available. We provide a rigorous definition and mechanism for automatically labeling events of interest (EOI), i.e. large traffic reductions for long periods) from historical data. </p>

*   We develop a time-series based analysis system for detecting if an event of interest has occurred. This uses traffic information from recent time periods as well as historical data (from similar time periods on previous days or weeks) to predict if an event of interest---defined as a long traffic interruption---has occurred. Whether or not an EOI has occurred depends on a key parameter---the duration of time after reduction in traffic at a single detector. This has an impact on the overall accuracy (in terms of false positives and false negatives). In particular, we find that waiting 60 to 90 seconds after a significant reduction in traffic is reasonable to determine EOIs with high accuracy and low latency. </p>

* We perform a spatio-temporal analysis of all EOIs to determine if there are hotspots (i.e. intersections with large number of consistent EOIs) and spatial relationships (two EOIs occurring at neighboring intersections within a small time frame). This analysis shows that most of the EOIs are limited to around 10 (out of 300) intersections and roughly 5\% of all EOIs are spatially correlated.  </p>