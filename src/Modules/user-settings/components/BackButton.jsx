import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Arrow } from '@radix-ui/react-select';

const BackButton = ({ to = '/dashboard' }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const handleBack = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleBack}
      className="w-14 h-14 flex cursor-pointer items-center justify-center rounded-full transition-all duration-200 "
    >
      <ArrowLeft 
        className={`text-main text-3xl ${isRTL ? 'rotate-180' : ''}`} 
        size={44}
      />
    </button>
  );
};

export default BackButton;
