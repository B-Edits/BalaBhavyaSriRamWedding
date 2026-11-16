'use client';

import { useState } from 'react';
import Opening from '@/components/Opening';
import Welcome from '@/components/Welcome';
import Couple from '@/components/Couple';
import Family from '@/components/Family';
import Events from '@/components/Events';
import Wedding from '@/components/Wedding';
import Reception from '@/components/Reception';
import Countdown from '@/components/Countdown';
import Gallery from '@/components/Gallery';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

export default function Page() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  const handleInvitationOpen = () => {
    setInvitationOpen(true);
    setMusicEnabled(true);
  };

  return (
    <main className={`page-shell ${invitationOpen ? 'invitation-open' : ''}`}>
      <Opening
        isOpen={invitationOpen}
        onOpen={handleInvitationOpen}
        onMusicStart={() => setMusicEnabled(true)}
      />

      <div className={`site-content ${invitationOpen ? 'visible' : ''}`}>
        <Welcome />
        <Couple />
        <Family />
        <Events />
        <Wedding />
        <Reception />
        <Countdown />
        <Gallery />
        <Footer />
      </div>

      <MusicPlayer enabled={musicEnabled} />
    </main>
  );
}
