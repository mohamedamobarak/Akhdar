import React from 'react';
import { useTranslation } from 'react-i18next';

const CalcHome = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-[#f5fbf7] min-h-[400px] flex items-center">
            <div className="hero-layer"></div>
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-[#003B2D] text-2xl sm:text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-4">
                    {t('calcHome.title')}
                </h1>

                <p className="font-[500] max-w-2xl mx-auto mb-10 text-sm sm:text-base">
                    {t('calcHome.description1')}
                </p>

                <p className="font-[500] max-w-2xl mx-auto mb-10 text-sm sm:text-base">
                    {t('calcHome.description2')}
                </p>
            </div>
        </section>
    );
};

export default CalcHome;
