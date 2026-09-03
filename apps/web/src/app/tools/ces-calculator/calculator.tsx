"use client";

import { type JSX } from "react";

import { SurveyCalculator } from "../calculator/survey-calculator";
import { cesConfig } from "./config";

export const CesCalculator = (): JSX.Element => <SurveyCalculator config={cesConfig} />;
