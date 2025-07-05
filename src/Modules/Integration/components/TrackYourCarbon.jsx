import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';
import i18n from '../../../../public/locales.js';

const TrackYourCarbon = () => {
  const { t } = useTranslation();
  const lang = i18n.language || 'en';
  const isRTL = lang === 'ar';
  const dir = t('integration.direction') || (isRTL ? 'rtl' : 'ltr');

  return (
    <section
      className="p-8 md:p-14 lg:p-28 flex flex-col items-center max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto my-6"
      dir={dir}
      style={{ direction: dir }}
    >
      <h3 className="font-medium text-black text-center text-3xl max-w-xl my-12">
        {t('integration.trackYourCarbon.title')}
      </h3>
      <Button className='bg-main text-center text-black hover:bg-primary cursor-pointer px-16 py-5 hover:text-white translation-color '>
        {t('integration.trackYourCarbon.cta')}
      </Button>
    </section>
  )
}

export default TrackYourCarbon
