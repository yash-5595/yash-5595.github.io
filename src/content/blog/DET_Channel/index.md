---
title: "Multiple Instance Learning Approach for Mining Detector Channel to Phase Mappings for Signalized Intersections"
tags: ["ML", "Data Science", "yash"]
description: "Detector Channel Mapping"
author: "Yashaswi Karnati"
date: "2019-09-24"
link: "https://www.insticc.org/node/TechnicalProgram/vehits/2020/presentationDetails/93554"
Published : "2020 Vehicle Technology and Intelligent Transportation System (VEHITS), 2020"


Abstract : Without knowing the location of specific detectors on an intersection and the phases they are mapped to, a number of measures of effectiveness (of signal performance) cannot be evaluated. These mappings may not be available or up to date for many practical reasons. In this paper, we develop an inference engine to map detectors to phases and distinguish between the stop bar and advance detector.

---

Our goal in this paper is to find the best mapping of detectors to phases and to classify detectors as stop bar detectors or advance detectors based  on events in the high resolution controller logs. These events include a change in the signaling state (e.g., green, yellow, or red for vehicles, and walk, flashing do not walk, and do not walk for pedestrians) and a change in the detector state (based on whether the detection area is occupied or not).

Our algorithms are based on the following observations:
* During normal traffic conditions, the traffic passing a detector when the corresponding phase is green will be higher than the other detectors. </p> 
* During very low traffic conditions, the sequence of timestamps of vehicle arrivals and departures can be used to separate advance detectors from stop bar detectors. </p> 

Our goal is to develop automated data-driven machine learning methods that derive these mappings using several months of loop detector data. This required us to develop the following novel approaches:
* Automatically decompose data streams into cycles, and cluster these cycles based on similar phase timing patterns. This is necessary because combining data across multiple, distinct types of patterns can lead to lower discrimination between green versus red behavior. For this purpose, we developed frequent pattern mining based on n-grams and then applied clustering algorithms to derive clusters of similar cycles. For medium volume cycles, we developed algorithms that drive features that correlate the behavior of traffic at a given detector with the phase activity corresponding to  the signal timing. Effectively,  these features use green versus red departure information to derive the potential feasible phases for each detector.  </p> 


* Using the features described in the previous step, we develop two algorithms. The first one uses frequent set mining within a given cycle cluster to derive a consistent mapping for that cluster and then combine detector mappings derived for each cluster of similar cycles to arrive at the overall mapping and the detector type. The second one used a neural network approach to  assign a detector to a particular phase with a classification setting. </p> 

* For really low volume cycles (e.g., during night-time), when only one vehicle is potentially present, the time of arrival and departure along with signal timing data can be used to derive ordering of detectors. Using this information, we  develop  approaches for differentiating whether a detector is a stop bar or advance detector. </p>

