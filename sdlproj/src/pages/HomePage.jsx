import React from 'react'

import AppSection from '../components/AppSection/AppSection';
import FAQ from '../components/FAQ/FAQ'
import Pricing from '../components/Pricing/Pricing';

export default function HomePage() {
  return (
    <div>
        <AppSection />
        <Pricing/>
        <FAQ/>
    </div>
  )
}
