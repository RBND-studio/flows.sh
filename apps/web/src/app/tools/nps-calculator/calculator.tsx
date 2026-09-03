"use client";

import { type JSX } from "react";

import { SurveyCalculator } from "../calculator/survey-calculator";
import { npsConfig } from "./config";

export const NpsCalculator = (): JSX.Element => <SurveyCalculator config={npsConfig} />;
