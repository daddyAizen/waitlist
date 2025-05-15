<!-- eslint-disable vue/no-multiple-template-root -->
<template>

   <!-- CTA -->
<!-- Hero -->
<div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <!-- Announcement Banner -->
    <div class="flex justify-center">
      <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600" href="waitlist">
       Join
        <span class="flex items-center gap-x-1">
          <span class="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">Waitlist</span>
          <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      </a>
    </div>
    <!-- End Announcement Banner -->

    <!-- Title -->
    <div class="mt-5 max-w-xl text-center mx-auto">
      <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
        Get the Full Trendwave Experience
      </h1>
    </div>
    <!-- End Title -->

    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600 dark:text-neutral-400">Your Event. Our Platform. Everyone’s Buzzing.</p>
    </div>

  </div>
  <!-- Buttons -->
    <div @click="goToPage" class="text-center" >
      <a class="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6" href="#">
        Get started
      </a>
    </div>
    <!-- End Buttons -->
</div>
 
<!-- End Hero -->
  <!-- end of CTA -->


<!-- Features -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="w-full h-72 sm:h-96 lg:h-[32rem]">
    <img class="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image">
  </div>

  <!-- Grid -->
  <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div class="lg:col-span-1">
      <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
        Why we are TrendWave?
      </h2>
      <p class="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
Because events deserve more than just a venue—they deserve momentum. TrendWave gives creators, brands, and organizers the tools to launch, promote, and elevate their events all in one place. It’s fast, stylish, and built for the digital age—where every event can be the next big trend.      </p>
    </div>
    <!-- End Col -->

    <div class="lg:col-span-2">
      <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <svg class="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              🌊 Seamless Event Hosting
            </h3>
            <p class="mt-1 text-gray-600 dark:text-neutral-400">
TrendWave makes hosting events effortless and exciting. Whether you're planning a concert, webinar, party, or launch, our platform lets you create, customize, and publish your event in just a few clicks. With a clean interface and intuitive setup, anyone—from individuals to brands—can go live without the usual tech hurdles.            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <svg class="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              🧑‍🤝‍🧑 Audience Engagement Made Easy
            </h3>
            <p class="mt-1 text-gray-600 dark:text-neutral-400">
With TrendWave, your audience is part of the experience. Use interactive features like live chat, polls, and personalized invitations to keep attendees engaged before, during, and after your event. Build a following, collect feedback, and turn one-time guests into loyal fans.

            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <svg class="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              🔒 Secure & Scalable
            </h3>
            <p class="mt-1 text-gray-600 dark:text-neutral-400">
Whether you're hosting for 10 people or 10,000, TrendWave ensures smooth performance and tight security. Our platform is built on modern infrastructure, giving you peace of mind that your event and your guests' data are always safe.            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex gap-x-5">
          <svg class="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <div class="grow">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
             📢 Built-In Hype Tools
            </h3>
            <p class="mt-1 text-gray-600 dark:text-neutral-400">
TrendWave isn’t just about hosting events—it’s about making them trend. We equip you with built-in promotion tools, including social media sharing, customizable invite links, and real-time RSVP tracking. Stay ahead of the curve and ensure your event gets the attention it deserves.            </p>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Features -->

<!-- Masonry Cards -->
<div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-12 gap-6">
    <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1670028514318-0ac718c0590d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Masonry Cards Image">
        </div>
        
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1591348369448-97f47485089d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Masonry Cards Image">
        </div>
        
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div class="col-span-12 md:col-span-4">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1643759543584-fb6f448d42d4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Masonry Cards Image">
        </div>
        
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div class="col-span-12 sm:col-span-6 md:col-span-4">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1731475760849-459c36ed6bca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Masonry Cards Image">
        </div>
        
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->

    <div class="col-span-12 sm:col-span-6 md:col-span-4">
      <!-- Card -->
      <a class="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1635350963882-aa424ca750bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Masonry Cards Image">
        </div>
        
      </a>
      <!-- End Card -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Masonry Cards -->

<!-- Testimonials -->
<div class="overflow-hidden bg-gray-800 dark:bg-neutral-950">
  <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
        Developed by passion and individuals across the Nation
      </h2>
    </div>
    <!-- End Title -->


    <!-- Grid -->
    <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
     <!-- Card -->
    <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800" @click="goToPage">
      <div class="inline-flex justify-center items-center">
        
        <span class="text-xs font-semibold uppercase text-gray-600 dark:text-neutral-400">Trend<span class="text-blue-500">Wave</span></span>
      </div>

      <div class="text-center">
        <h3 class="text-3xl sm:text-4xl lg:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
          <span class="size-2 inline-block bg-green-500 rounded-full me-2"></span>
          Join Waitlist
        </h3>
      </div>

      <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-neutral-800">
        <dt class="pe-3">
          <span class="text-green-600">
            <svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
            <span class="inline-block text-sm">
              1.7%
            </span>
          </span>
          <span class="block text-sm text-gray-500 dark:text-neutral-500">clients</span>
        </dt>
        <dd class="text-start ps-3">
          <span class="text-sm font-semibold text-gray-800 dark:text-neutral-200">last</span>
          <span class="block text-sm text-gray-800 dark:text-neutral-200">2 months</span>
        </dd>
      </dl>
    </div>
    <!-- End Card -->

      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white"></h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500"></p>
        <p class="mt-1 text-gray-400"></p>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-white">Happy customers</h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
        <p class="mt-1 text-gray-400">this year alone</p>
      </div>
      <!-- End Stats -->
    </div>
    <!-- End Grid -->

    <!-- SVG Element -->
    <div class="absolute bottom-0 end-0 transform lg:translate-x-32" aria-hidden="true">
      <svg class="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-orange-500"/>
        <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-cyan-500"/>
        <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" class="fill-white"/>
      </svg>
    </div>
    <!-- End SVG Element -->
  </div>
</div>
<!-- End Testimonials -->

</template>

<script setup>


const goToPage = () => {
  navigateTo('/waitlist') 
}
</script>
