import React from 'react';
import './css/style.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function History() {
  const navigator = useNavigate();
  return (
    <div className="housing-housing-body">
      <div className="housing-message"><b>&#65290;Use Light Mode for best quality</b> &#40;Light Mode can be toggled in the upper right hand corner&#41;</div>
      <header id="main-header">
        <div className="housing-upper-container">
          <h1>Housing Affordability & Accessibility</h1>
        </div>
      </header>

      <nav id="navbar">
        <div className="housing-upper-container">
          <ul>
            <li><NavLink to=".." end className={({ isActive }) => (isActive ? 'active-link' : '')}>Issue</NavLink></li>
            <li><NavLink to="../history" className={({ isActive }) => (isActive ? 'active-link' : '')}>History</NavLink></li>
            <li><NavLink to="../stakeholders" className={({ isActive }) => (isActive ? 'active-link' : '')}>Stakeholders</NavLink></li>
            <li><NavLink to="../grassroots" className={({ isActive }) => (isActive ? 'active-link' : '')}>Grassroots</NavLink></li>
            <li><NavLink to="../systems-map" className={({ isActive }) => (isActive ? 'active-link' : '')}>Systems Map</NavLink></li>
            <li><NavLink to="../summary" className={({ isActive }) => (isActive ? 'active-link' : '')}>Summary</NavLink></li>
            <li><NavLink to="../works-cited" className={({ isActive }) => (isActive ? 'active-link' : '')}>Works Cited</NavLink></li>
          </ul>
        </div>
      </nav>

      <section id="showcase">
        <div className="housing-container">
          <h1>History of the Issue</h1>
        </div>
      </section>

      <div className="housing-container">
        <section className="housing-main-full">
          <h1>Why Should We Care?</h1>
          <p>A UN (United Nations) expert in October of 2023 stated, “The world is grappling with a situation where more and more people are unable to afford their housing costs. Millions lack the financial means to access safe, secure, and habitable housing” (UN Expert Urges Action to End Global Affordable Housing Crisis, n.d.). A staggering 1.6 billion people around the world lack adequate housing and basic services, with projects that could rise to 3 billion by 2030. (UN expert, n.d.). The effects of a lack of housing create a ripple effect which puts many other factors at risk, such as physical and mental health and well-being. “When a person&#39;s rights to security of tenure, livelihoods and access to energy, safe water and sanitation are weakened, it ultimately violates the right to a life in dignity” (UN Expert, n.d.).</p>
          <h1>Global Context</h1>
          <p>The global crisis of housing affordability and availability has been influenced and affected by many factors historically, with the biggest impacts following the global financial crisis which burst forth in 2007-2009. The global financial crisis is one of the most significant economic shocks in the post-war period– with particular impact in the United States, the United Kingdom and Eurpe– but the fallout has had an impact globally. Ironically, this crisis was triggered by defaulting mortgages taken out to find housing bubbles that subsequently popped, not only in the USA, but in other nations including Ireland, Spain and Greece (Edey, 2009). Through this sequence of events, two aspects were specifically noteworthy. The first being the abrupt nature of the deterioration in global activity. There was a downward revision to the world outlook by more than 5 percentage points in global growth in just a few months, which is highly unprecedented and was the weakest year for the global economy in the post-war period (Edey, 2009). The deterioration of the global market was also very synchronized which was also very unprecedented. Post-global financial crisis, there were three great megatrends of (re)urbanization of capital and people, the provision of cheap credit and the rise of intra-society inequality (Wetzstein, 2017). These were paired with a great decline in housing and equity wealth and rising unemployment, creating a global issue around housing availability and affordability (Edey, 2009). Overall, the global housing crisis geography extends far beyond the core capitalist countries affected by the 2008 financial crash: housing systems everywhere increasingly are prone to volatility, placing the sustained reproduction of economic and social life under threat (Fields & Hodkinson, 2018).</p>
          <h1>Historical Policies & Initiatives</h1>
          <p>Globally, the UN-Habitat Global Housing Strategy is at work and aims to manage a paradigm shift as a collaborative global movement towards adequate housing for all and improving access to housing in general. Within this, there is a primary focus on assisting member States in working towards the the right to adequate and affordable housing (Global Housing Strategy: Making Housing Affordable for All | UN-Habitat, n.d.). Through this strategy, over 50 housing profiles and policies have been published and advisory services have been provided to over 100 national and local governments (Global Housing Strategy: Making Housing Affordable for All | UN-Habitat, n.d.).</p>
          <p>The Global Housing Foundation (GHF) has also been at work for more than two decades and has made numerous contributions to housing development in a multitude of areas, including direct involvement in international affairs, development projects, research and engineering, and consulting (Initiatives | Global Housing Foundation, n.d.).</p>
          <h1>What Has Worked And Not Worked</h1>
          <ul>
            <li><u>Successful:</u></li>
            <ul>
              <li>Through the UN-Habitat Global Housing Strategy over 50 housing profiles and policies have been published and advisory services have been provided to over 100 national and local governments (Global Housing Strategy: Making Housing Affordable for All | UN-Habitat, n.d.).</li>
              <li>Through the Global Housing Foundation there have been multiple successful programs launched that have helped tremendously such as the Development Partner Program, which leverages private real estate communities to build affordable housing in slums across the world. The Pay-It-Forward Program, which involves private sector individuals to fund initial costs of homes as construction financing. Once homes are built, the GHF-UN pre-approved local banks to provide individual home financing, whilst the advances are returned to GHF for the purposing of paying it forward and funding the next home (Initiatives | Global Housing Foundation, n.d.).</li>
            </ul>
            <li><u>Unsuccessful:</u></li>
            <ul>
              <li>Disadvantaged, or inadequate public housing is simply not working. A study found that disadvantaged housing was a major risk factor for mortality that should be accounted for by health policies and surveillance systems (Ribeiro & Barros, 2020).</li>
              <li>Rent control policies have aimed to cap the rent increases, but tenants&#39; wages are not keeping pace with the inflation rate, specifically following the pandemic (Voigtländer & Whitehead, 2023). Rent controls also have a negative impact on stock renovations, as the demand for rental housing is being held below market rent levels so high that there is no need for additional investment (Voigtländer & Whitehead, 2023).</li>
            </ul>
          </ul>
          <h1>Current Status</h1>
          <h2>USA</h2>
          <p>Affordable housing has been on a decades-long decline in the United States, with a national shortage as of 2023 of 7.3 million affordable and available homes for extremely low-income renters - those with incomes at or below the federal poverty line, or 30% of their area median income, whichever being greater (NLIHC Releases The Gap 2023, 2023). Likewise, The National Low Income Housing Coalition states that on a national level, “there is a shortage of 7 million affordable homes for our nation&#39;s 10.8 million plus extremely low-income families&#34; (nrich.org, 2024). Further, 70% of those who are low income in the United States pay more than half of their income on rent (nrich.org, 2024). Almost half of the national population, or 49% of Americans said affordable housing was a problem where they live in 2021 (Schaeffer, 2022). Specifically, when looking specifically at the Twin Cities Metro, there was a 7.4% increase in household growth from 2010 to 2017, yet only a 5.4% growth in housing units in the region during that period (New Report Shows Population and Household Growth in the Twin Cities Metro Outpaces Available Housing, 2018). This creates a substantial gap in needed housing, which when taking affordability into account, creates an even larger gap and can drive those with lack of resources to become homeless.</p>
          <h2>Finland</h2>
          <p>Finland has a long history of providing very affordable public housing, being one of the first countries in the world to do so (Shinn & Khadduri, 2020). Through implementing their “Name on the Door” initiative, they adopted the Housing First Principle, where a person does not have to first change their life around in order to earn the basic right to housing; instead, housing is the prerequisite that allows other problems to be solved (Shinn & Khadduri, 2020). Finland believes a dwelling is not a reward that a homeless person receives once their life is back on track and is instead a foundation on which the rest of life is put back together (Shinn & Khadduri, 2020). As of 2019, Finland more than halved homelessness as observed in annual point-in-time counts from more than 18,000 people in 1987 to less than 5,000 in 2019 (Shinn & Khadduri, 2020).</p>
          <h2>India</h2>
          <p>There is great demand for housing in all of India, specifically urban India. It has been found that income elasticities of housing demand are high and elastic across time, with the pricing regressions confirming this high elasticity being driven by the demand for improved water and sanitation amenities which are attached to consumption of housing (Karmali & Weng, 2022). Rental markets in urban India and megacities are becoming more efficient due to legacy rent control regulation (world bank), but investments to increase housing supply through better service infrastructure for water, sanitation and connectivity are greatly needed (Karmali & Weng, 2022). In the financial year of 2023, the balance of property prices by annual income resulted in an affordability of 3.3 for housing in India, and the recent period has witnessed the best affordability in the last two decades, though there is still a long way to go (India, n.d.).</p>
          <h1>Historical Contributions to Current Status</h1>
          <p id="para-bullet">There are a multitude of historical events that have occurred on a global scale leading to an issue of housing affordability and accessibility globally:</p>
          <ul>
            <li>Following World War II, there was the national independence movement where newly independent and developing countries had a strong desire to move and change their fates (Zhang & Ball, 2016).</li>
            <li>There has been recognition by both developed and developing nations regarding the interdependence and globalization of the world economy (Zhang & Ball, 2016).</li>
            <li>Agencies of the UN and NGOs have advocated for social and economic justice and equity between and among nations, between the rich and poor (Zhang & Ball, 2016). The center of government policy has been progress and the well-being of people and nations (Zhang & Ball, 2016).</li>
            <li>Developing countries have trained large pools of experts and developed awareness of housing issues and marginalized status in the developed world (Zhang & Ball, 2016). Globalization has been key, exemplifying mutual interdependence of nations in the world&#39;s economy (Zhang & Ball, 2016).</li>
          </ul>
        </section>
      </div>

      <footer id="main-footer">
        <h5>Created by:</h5>
        <p>Rohan Rokkam, Lily Weiss, Lindsey Wimmer, Rachel Lynn Rosenthal, Taylor Fix</p>
      </footer>
    </div>
  );
}