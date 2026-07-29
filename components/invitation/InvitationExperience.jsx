"use client";

import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Slide01Cover from "./Slide01Cover";
import Slide02Blessing from "./Slide02Blessing";
import Slide03Logistics from "./Slide03Logistics";
import Slide04DressCode from "./Slide04DressCode";
import Slide05Gifts from "./Slide05Gifts";
import Slide06Rsvp from "./Slide06Rsvp";
import Slide07Closing from "./Slide07Closing";

export default function InvitationExperience() {
  return (
    <LanguageProvider>
      <Slide01Cover />
      <Slide02Blessing />
      <Slide03Logistics />
      <Slide04DressCode />
      <Slide05Gifts />
      <Slide06Rsvp />
      <Slide07Closing />
    </LanguageProvider>
  );
}
