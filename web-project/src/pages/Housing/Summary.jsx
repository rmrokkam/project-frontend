import React from 'react';
import './css/style.css';
import { NavLink, useNavigate } from 'react-router-dom'

export default function Summary() {
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
          <h1>Summary of the Issue</h1>
        </div>
      </section>

      <div className="housing-container">
        <section className="housing-main-full">
          <h1>Summary of the Issue</h1>
          <ul>
            <li>Ultimately, access to affordable housing must not be viewed as a commodity, but instead as a basic human right (ohchr.org, n.d.). Many individuals struggle to afford safe and accessible housing, especially those that have been faced with racism that is perpetuated by the systems in which their country is tied to (Rose, 2023). The history of this issue on a global and local level is just as important as the issue itself; it must not be ignored when considering support systems and solutions.</li>
            <li>Larger stakeholders like the United Nations and each country's government & their Ministries/institutions should be in partnership with NGOs, local businesses, and a variety of communities to craft both small and large-scale tactics to aid housing insecurity.</li>
            <ul>
              <li><u>Positive example</u>: Y-Foundation in Finland, for example, utilizes governmental funds to aid their housing insecurity problem at a community level.</li>
              <li><u>Negative example</u>: In a United States context, “political decisions around housing are typically made at the federal level, with little input from regional governments”  (McRae, 2022).</li>
            </ul>
            <li>A shift in societal perception globally around housing insecurity and including marginalized communities within the planning of and implementation of systemic change initiatives will begin to build amends with the structural systems that inhibit affordable housing.</li>
          </ul>
          <h1>Importance of Action</h1>
          <ul>
            <li>Those that face struggles with housing often also face problems with their physical and mental health. “More than 80% of what goes into how healthy people are isn't driven by the medical care they receive but by social determinants such as food insecurity, poverty and structural inequities” (Bitely, 2020). </li>
            <ul>
              <li>Housing is a human right (ohchr.org, n.d.). If lack of housing continues, it will worsen the gap between housing secure and housing insecure, and so more and more people globally will have problems with their physical and mental health.</li>
            </ul>
            <li>Housing insecurity is a systemic inequality and factors like discrimination, unstable job markets, and lack of social support play a huge part in its perpetuation (Maxwell, Castro, Solomon, 2019).</li>
            <ul>
              <li>“People exposed to racism have poorer health outcomes (particularly for mental health), alongside both reduced access to health care and poorer patient experiences” (Stanley, J. et al, 2019).</li>
            </ul>
          </ul>
          <h1>Important Takeaways</h1>
          <ul>
            <li>The number of people who lack adequate housing and basic living services could rise to 3 billion by 2030 (UN expert, n.d.).</li>
            <li>“Rent burdened households — i.e. households that spend more than 30 percent of their monthly income on rent — suffer profound health consequences as a direct result of their housing status” (Gill, 2018).</li>
            <li>“The housing crisis is a symptom of a system that is intended to benefit those in power to the detriment of others” (McRae, 2022).</li>
            <li>“It is time to re-orient housing systems across the world away from financialisation and toward housing as a social good and a fundamental human right…That means prioritising the health and well-being of the most disadvantaged over profit” (McRae, 2022).</li>
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