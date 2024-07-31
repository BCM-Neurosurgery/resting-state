import preamble from "./preamble";
import { cameraStart, cameraEnd } from "../trials/camera"
import { lang, config } from "../config/main";
import { showMessage } from "@brown-ccv/behavioral-task-trials";
import { initialInstructions, instructions } from '../trials/instructions'
import eyesTask from  '../trials/eyesTask'
import fixation from '../trials/fixation'

let primaryTimeline = [
  preamble,
  initialInstructions(),
  instructions(lang.instructions.fixate),
  fixation(120000),
  instructions(lang.instructions.close_eyes),
  eyesTask('close', 120000, 119000),
  instructions(lang.instructions.tap_ins),
  eyesTask('tap_ins', 11000, 10000),
  instructions(lang.instructions.tap_lead),
  eyesTask('tap_lead', 11000, 10000),
  instructions(lang.instructions.stretch_neck_left),
  eyesTask('stretch_neck_left', 11000, 10000),
  instructions(lang.instructions.stretch_neck_right),
  eyesTask('stretch_neck_right', 11000, 10000),
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
