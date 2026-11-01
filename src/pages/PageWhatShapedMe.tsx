import React, { useState } from 'react';
import { ChapterWhoAmI } from '../components/ChapterWhoAmI';
import { CVModal } from '../components/CVModal';

export const PageWhatShapedMe: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
      <ChapterWhoAmI onOpenCV={() => setIsCVModalOpen(true)} />
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </>
  );
};
