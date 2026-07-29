import Slide01Cover from "@/components/invitation/Slide01Cover";
import Slide02Blessing from "@/components/invitation/Slide02Blessing";
import Slide03Logistics from "@/components/invitation/Slide03Logistics";
import Slide04DressCode from "@/components/invitation/Slide04DressCode";
import Slide05Gifts from "@/components/invitation/Slide05Gifts";
import Slide06Rsvp from "@/components/invitation/Slide06Rsvp";
import Slide07Closing from "@/components/invitation/Slide07Closing";

export default function InvitationPage() {
  return (
    <main>
      <Slide01Cover />
      <Slide02Blessing />
      <Slide03Logistics />
      <Slide04DressCode />
      <Slide05Gifts />
      <Slide06Rsvp />
      <Slide07Closing />
    </main>
  );
}
