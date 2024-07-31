import preamble from "./preamble";
import { cameraStart, cameraEnd } from "../trials/camera"
import { lang, config } from "../config/main";
import { showMessage } from "@brown-ccv/behavioral-task-trials";
import { instructions } from '../trials/instructions'
import movingDot from '../trials/movingDot'
import eyesTask from  '../trials/eyesTask'
import fixation from '../trials/fixation'

let primaryTimeline = [
  preamble,
  instructions(lang.instructions.fixate),
  fixation(120000),
  instructions(lang.instructions.close_eyes),
  eyesTask('close'),
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
