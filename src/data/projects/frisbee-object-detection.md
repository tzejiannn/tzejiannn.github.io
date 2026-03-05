## Overview

An ongoing computer vision project to detect frisbees in real-time
video using a custom-trained YOLOv11 model — motivated by the lack
of existing sport analytics tooling for Ultimate Frisbee.

## Motivation

As a national-level Ultimate Frisbee player and captain, I noticed
there was virtually no data analytics tooling available for the sport
compared to mainstream sports like football or basketball. This project
is a first step toward building automated game analysis tools.

## The Model

Built on YOLOv11 — the latest iteration of the YOLO (You Only Look
Once) real-time object detection architecture. YOLOv11 was chosen for
its balance of speed and accuracy, making it suitable for real-time
video analysis.

## Dataset

The hardest part of this project has been data collection. Frisbees
are notoriously difficult to detect because they:

- Are thin and flat — hard to see edge-on
- Move very fast and blur in video
- Look similar to other circular objects
- Appear against complex backgrounds like sky and grass

I am continuously refining the dataset with images captured across
varying lighting conditions, angles, distances, and backgrounds.

## Current Status

The model currently achieves reliable detection in controlled conditions.
Ongoing work focuses on improving detection accuracy at high speeds
and in challenging outdoor lighting.

## Next Steps

- Expand dataset with more edge cases
- Integrate player tracking alongside disc detection
- Build a full game analysis pipeline for match footage