import React from 'react';
import './css/style.css';
import { NavLink, useNavigate } from 'react-router-dom'
import systems_map from './images/systems_map.jpeg'

export default function SystemsMap() {
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
          <h1>Systems Map</h1>
        </div>
      </section>

      <div className="housing-container">
        <section className="housing-main-block">
          <a href="https://kumu.io/rokka003/housing-security-systems-map#housing-security-systems-map/untitled-view-copy" target="_blank" rel="noreferrer noopener">
            <img src={systems_map} alt="Housing Security Systems Map" width="100%" />
          </a>
          <a href="https://kumu.io/rokka003/housing-security-systems-map#housing-security-systems-map/untitled-view-copy" target="_blank" rel="noreferrer noopener">
            Interactive Systems Map
          </a>
          <h1>Reinforcing Loops</h1>
          <ul>
            <li>Reinforcing feedback loops in the system is when one behavior reinforces another behavior. The feedback loop, when changed in one direction, propels change in the same direction and is reinforced. The feedback loops help with growth but can cause issues if left unchecked, which can cause reinforcement issues. The feedback loops are reinforced with our systems map for affordable housing: organizations and governments are nodes within our systems map. The government and organizations impact one another because some areas protect customers specifically while others protect policies.</li>
            <ul>
              <li>An opportunity for intervention with affordable housing within governments and organizations is creating policies to protect affordable housing developments for governments with financial support to protect tenants and prospective tenants. By focusing on these areas with the government and organizations, we can address the housing crisis and help improve access and availability to affordable housing. That way, all individuals and families have access to safe housing options.</li>
            </ul>
            <li>Other reinforcing feedback systems that came up multiple times were race, education, and redlining. Redline and race affect where individuals and families live, which then, in turn, affects where individuals receive education during their formative years. Education then opens up doors financially, allowing for higher education opportunities and then eventually access to affordable housing if the individual and family lived at a lower income level.</li>
            <ul>
              <li>An opportunity for intervention with affordable housing with race, education, and redlining is by addressing systemic inequalities that lead to housing inequalities. Addressing these inequalities is through anti-redlining legislation, affordable housing initiatives, and providing education and outreach programs to youth and young adults. In addition to community development and fair housing enforcement, by addressing all these issues and creating change, we can allow all individuals and families access to housing options, specifically affordable housing for low-income individuals and families.</li>
            </ul>
            <li>Sustainable Development Goals (SDG)</li>
            <ul>
              <li>The United Nations' sustainable development goals, SDGs, are connected to affordable housing through goals. Goal one is no poverty; goal three is good health and well-being; goal eight is decent work and economic growth; goal ten is reduced inequalities; goal eleven is sustainable cities and communities; and goal seventeen is partnerships for the goals.</li>
              <ul>
                <li><u>Goal One:</u> Focus on poverty, which is vital in reducing and elevating poverty by providing shelter and security to low-income individuals and families.</li>
                <li><u>Goal Three:</u> Focus is on good health and well-being, which focuses on adequate housing to improve individuals' and families' health and reduce possible environmental hazards and stressors that can happen when people are living in poverty and unsafe living conditions.</li>
                <li><u>Goal Eight:</u> Focus on decent work and economic growth, which is essential in affordable housing. This is because affordable housing contributes to the economy by providing stable housing for workers, allowing people to work and provide for themselves and their families, and providing access to education, which helps with decent work opportunities.</li>
                <li><u>Goal Ten:</u> Focus on reducing inequalities. Affordable housing helps to reduce those inequalities, usually affecting marginalized groups, by providing and allowing affordable housing to those marginalized groups. This reduces disparities in education and living conditions as well.</li>
                <li><u>Goal Eleven:</u> Focus on sustainable cities and housing. Having sustainable housing and cities with affordable housing creates safe, inclusive, resilient communities. Supporting affordable housing allows for development, specifically in urban areas, for all residents to have housing.</li>
                <li><u>Goal Partenerships For The Goals:</u> The role that partnerships play in the goals is a focus on collaboration. Collaboration and partnerships between the government, private sector, and NGOs allow resources to be implemented through policies and programs.</li>
              </ul>
            </ul>
          </ul>
        </section>

        <aside className="housing-sidebar">
          <h1>Description</h1>
          <p>The map above shows the interconnected systems within the realm of affordable housing. The primary nodes of the system map include organizations, the housing market, landlords, the economy, the housing environment, government, finances, education, housing status, and historical factors.</p>
          <ul>
            <li><u>Organization:</u> Organizations affect the housing market by shaping the dynamics of the housing market through Airbnb, Housing construction companies, NGOs (Non-government organizations), real estate agencies, Co-ops, non-profits, YIMBY (Yes, in my backyard), NIBMY (Not in my backyard) and connects back to the primary node of government.</li>
            <li><u>Housing Market:</u> The housing market impacts the availability of affordable housing, specifically for low-income families and individuals. Ways that we have identified the housing market affecting affordable housing are policies, homelessness, housing supply, geographical features, job market, eviction, interest rates, race, rental market dynamics, cost of living, housing shortage, historical influences, housing security, government funding, and systematic influences.</li>
            <li><u>Landlords:</u> Landlords can affect affordable housing in several positive and adverse ways. Landlords specifically affect affordable housing through housing conditions, policies, real estate agencies, evictions, access to opportunity, renter demographics, bank loans, race, renters, taxes, cost of living, rent control measures, and effects of the pandemic.</li>
            <li><u>Economy:</u> The economy affects affordable housing through homelessness, policies, financial hardship, employment opportunities, wage inequality, security, layoffs, household size government funding, job market, interest rates, mental health, income stagnation, bank loans, economic factors, effects of the pandemic, taxes, rental market dynamics, household debt, cost of living, household demands, rent control measures, housing shortage, gentrification pressures, income stability, and generational wealth.</li>
            <li><u>Housing Environment:</u> Housing is another element that can significantly impact affordable housing in several ways. These ways include the neighborhood, access to transportation, housing shortage, temporary housing, access to technology, effects of the pandemic, systematic influences, housing demand, cost of living, redlining, housing debt, neighborhood culture, renters, education level, tenets housing background, race, renters demographics, geographical factors, access to opportunity, employment opportunity, access to education, safety, security, housing condition, homelessness, YIMBY (Yes, in my backyard).</li>
            <li><u>Government:</u> The government can influence affordable housing through various factors. The factors that the government influences are access to transportation, rent control measures, redlining, taxes, effects of the pandemic, rising housing costs, employment opportunities, government funding, zoning laws, and housing insurance, and the government factors circle back to the node of organizations.</li>
            <li><u>Finances:</u> Finances play a critical role in determining the availability and affordability of housing. Finances play a role in housing debt, redlining, cost of living, taxes, renters, economic factors, race, bank loans, income stagnation, mental health, job market, housing demand, systemic influences, access to technology, effects of the pandemic, temporary housing, evictions, real estate agencies, financial hardship, layoffs, rising housing costs, gentrification pressures, emergency situations, access to transportation, and income stability.</li>
            <li><u>Education:</u> Education plays a role through race, geographical factors, income stagnation, tenants’ housing background, education level, job market, employment opportunities, access to education, effects of the pandemic, systemic influences, income stability, and generational wealth.</li>
            <li><u>Housing Status:</u> The housing status of a family or individual is a factor that significantly influences access to affordable housing. Housing status is affected by hotels/ motels, homeownership, temporary housing, YIMBY (yes, in my backyard), co-ops, homelessness, and Airbnb.</li>
            <li><u>Historical:</u> Affordable housing is affected by historical factors. Historical factors that affect affordable housing are race, neighborhood culture, redlining, job market, systemic influences, gentrification pressures, historical influences, safety, and policies.</li>
          </ul>           
        </aside>
      </div>

      <footer id="main-footer">
        <h5>Created by:</h5>
        <p>Rohan Rokkam, Lily Weiss, Lindsey Wimmer, Rachel Lynn Rosenthal, Taylor Fix</p>
      </footer>
    </div>
  );
}