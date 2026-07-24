import CountdownSection from '../components/luxury/CountdownSection';
import FooterSection from '../components/luxury/FooterSection';
import InvitationEnvelope from '../components/InvitationEnvelope';
import LocationSection from '../components/luxury/LocationSection';
import QRInvitation from '../components/QRInvitation';
import Story from '../components/Story';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#090806] text-[#3e2610]">
      <InvitationEnvelope />
      <Story />
      <CountdownSection />
      <LocationSection />
      <QRInvitation />
      <FooterSection />
    </main>
  );
}
