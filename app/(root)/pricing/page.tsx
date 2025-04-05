import { PricingBasic } from '@/components/pricing/MainPricing'
import React from 'react'

const Pricing = () => {
  return (
    <section className="py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Responsive header */}
      <div className="text-center mb-12 md:mb-20">
        <div className="inline-block mb-3 md:mb-4">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
            Pricing Plans
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 md:mb-6 px-2">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 px-2">
          Choose the perfect plan that fits your needs. No hidden fees, no surprises.
        </p>
        
        {/* Responsive feature highlights */}
        <div className="flex flex-col sm:flex-row justify-center gap-y-3 gap-x-8 mt-6 md:mt-8">
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
      
      {/* Responsive pricing toggle */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md inline-flex">
          <button className="px-4 sm:px-6 py-2 rounded-md bg-blue-600 text-white text-sm font-medium">
            Monthly
          </button>
          <button className="px-4 sm:px-6 py-2 rounded-md text-gray-700 dark:text-gray-300 text-sm font-medium">
            Annual <span className="text-xs text-green-500 font-bold hidden sm:inline">Save 20%</span>
          </button>
        </div>
      </div>
      
      {/* Pricing component with responsive container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Decorative elements - hidden on small screens */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 hidden md:block"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30 hidden md:block"></div>
        
        {/* Pricing component */}
        <div className="relative z-10">
          <PricingBasic />
        </div>
      </div>
      
      {/* Responsive custom solution section */}
      <div className="mt-16 md:mt-24 text-center px-2 sm:px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          {/* Decorative corner accent - hidden on small screens */}
          <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 hidden sm:block">
            <svg viewBox="0 0 100 100" className="text-blue-50 dark:text-blue-900/20" fill="currentColor">
              <path d="M0 0 L100 0 L100 100 Z"></path>
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Need a custom solution?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              Contact our sales team for enterprise pricing and custom solutions tailored to your specific requirements. We'll help you build the perfect plan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
                Contact Sales
              </button>
              <button className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-sm sm:text-base">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive trust indicators */}
      <div className="mt-16 md:mt-20">
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Trusted by companies worldwide</p>
        <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8 opacity-70 px-2">
          {/* Responsive logos - smaller on mobile */}
          <div className="text-gray-400 dark:text-gray-500 font-semibold text-xs sm:text-sm md:text-base">COMPANY</div>
          <div className="text-gray-400 dark:text-gray-500 font-semibold text-xs sm:text-sm md:text-base">ENTERPRISE</div>
          <div className="text-gray-400 dark:text-gray-500 font-semibold text-xs sm:text-sm md:text-base">STARTUP</div>
          <div className="text-gray-400 dark:text-gray-500 font-semibold text-xs sm:text-sm md:text-base">CORPORATION</div>
          <div className="text-gray-400 dark:text-gray-500 font-semibold text-xs sm:text-sm md:text-base">BUSINESS</div>
        </div>
      </div>
      
      {/* Responsive FAQ teaser */}
      <div className="mt-16 md:mt-24 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Have questions? Check our <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Frequently Asked Questions</a>
        </p>
      </div>
    </div>
  </section>
  
  
  )
}

export default Pricing