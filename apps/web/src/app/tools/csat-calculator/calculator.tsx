"use client";

import { type JSX } from "react";

import { SurveyCalculator } from "../calculator/survey-calculator";
import { csatConfig } from "./config";

export const CsatCalculator = (): JSX.Element => <SurveyCalculator config={csatConfig} />;
