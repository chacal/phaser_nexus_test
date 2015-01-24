# Test for Chrome Mobile & Phaser 2.2.2
This repository is a simple test project to reproduce Chrome Mobile crash with Phaser 2.2.2.

Steps to reproduce Chrome crash on my Nexus 7 (2013, Android 4.4.4):

1. Open http://chacal.github.io/phaser_nexus_test/ in Chrome Mobile
2. Continuously tap the screen to restart the game
3. Chrome crashes after ~20 taps

Problem is fixed by changing the rendering mode from Phaser.AUTO to Phaser.CANVAS.
