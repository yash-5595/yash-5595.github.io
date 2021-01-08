---
title: "Machine Learning Algorithms for Traffic Interruption Detection"
tags: ["ML", "Data Science", "yash"]
description: "Interruption Detection"
author: "Yashaswi Karnati"
date: "2019-09-24"
link: "https://ieeexplore.ieee.org/document/9144876"
Published : "2020 Fifth International Conference on Fog and Mobile Edge Computing (FMEC)"


Abstract : Detection of traffic interruptions  is a critical aspect of managing traffic on urban road networks. This work outlines a semi-supervised strategy to automatically detect traffic interruptions occurring on arteries using high resolution data from widely deployed inductive loop detectors. The techniques highlighted in this paper are tested on data collected from detectors installed on more than 300 signalized intersections over a 6 month period. Our results show that we can detect interruptions with high precision and recall.

---

Our goal in this paper is to use large scale loop detector data for detecting traffic interruptions. With the advent of new systems, loop detector data is available at high frequency (10 Hz) and with low latency. Hence, the utilization of this data for determining traffic interruptions can have wide applicability and can be used in conjunction with other systems based on human reporting or with probe-based systems.

In our earlier, we have used a simple decision-based algorithm for detecting interruptions. In this paper, we extend our work along two dimensions:

* We extend the definition of interruptions from detector level to  approach level. </p>
* We develop a machine learning framework and algorithms instead of using a simple decision-based approach. This approach is more accurate. </p>


The focus of this work is in the detection and prediction of traffic interruptions in the absence of  labeled data. We present a systematic approach to define events of interest at the detector and approach level. We develop a framework that uses machine learning algorithms based on historical and current data. Our algorithms have high precision and recall for them to be useful in practical scenarios. Additionally, our algorithms provide tradeoffs between lag of decision and accuracy to allow an application engineer to make appropriate choices.