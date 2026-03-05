var e=`## Overview\r
\r
An ongoing computer vision project to detect frisbees in real-time\r
video using a custom-trained YOLOv11 model — motivated by the lack\r
of existing sport analytics tooling for Ultimate Frisbee.\r
\r
## Motivation\r
\r
As a national-level Ultimate Frisbee player and captain, I noticed\r
there was virtually no data analytics tooling available for the sport\r
compared to mainstream sports like football or basketball. This project\r
is a first step toward building automated game analysis tools.\r
\r
## The Model\r
\r
Built on YOLOv11 — the latest iteration of the YOLO (You Only Look\r
Once) real-time object detection architecture. YOLOv11 was chosen for\r
its balance of speed and accuracy, making it suitable for real-time\r
video analysis.\r
\r
## Dataset\r
\r
The hardest part of this project has been data collection. Frisbees\r
are notoriously difficult to detect because they:\r
\r
- Are thin and flat — hard to see edge-on\r
- Move very fast and blur in video\r
- Look similar to other circular objects\r
- Appear against complex backgrounds like sky and grass\r
\r
I am continuously refining the dataset with images captured across\r
varying lighting conditions, angles, distances, and backgrounds.\r
\r
## Current Status\r
\r
The model currently achieves reliable detection in controlled conditions.\r
Ongoing work focuses on improving detection accuracy at high speeds\r
and in challenging outdoor lighting.\r
\r
## Next Steps\r
\r
- Expand dataset with more edge cases\r
- Integrate player tracking alongside disc detection\r
- Build a full game analysis pipeline for match footage`;export{e as default};