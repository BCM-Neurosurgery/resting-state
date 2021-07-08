import preamble from "./preamble";
import { countdown } from "@brown-ccv/behavioral-task-trials";
import { cameraStart, cameraEnd } from "../trials/camera"
import { lang, config } from "../config/main";
import { showMessage } from "@brown-ccv/behavioral-task-trials";
import { instructions } from '../trials/instructions'
import movingDot from '../trials/movingDot'
import eyesTask from  '../trials/eyesTask'
import fixation from '../trials/fixation'

let primaryTimeline = [
  preamble,
  movingDot('left'),
  movingDot('right'),
  movingDot('up'),
  movingDot('down'),
  instructions(lang.instructions.blink),
  eyesTask('blink'),
  instructions(lang.instructions.close_eyes),
  eyesTask('close'),
  instructions(lang.instructions.fixate),
  fixation(91000),
];

if (config.USE_CAMERA) {
  primaryTimeline.splice(1,0,cameraStart())
  primaryTimeline.push(cameraEnd(5000))
}

primaryTimeline.push(showMessage(config, {
  duration: 5000,
  message: lang.task.end,
}))


export const tl = primaryTimeline;
