"use client";

import { type JSX } from "react";

import { SurveyCalculator } from "../calculator/survey-calculator";
import { pmfConfig } from "./config";

export const PmfCalculator = (): JSX.Element => <SurveyCalculator config={pmfConfig} />;
