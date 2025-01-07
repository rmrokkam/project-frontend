import React, { useState } from 'react';
import './css/style.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Grassroots() {
  const navigator = useNavigate();
  
  const [activeButtonUSA, setActiveButtonUSA] = useState('');

  const handleButtonClickUSA = (button) => {
    setActiveButtonUSA((prev) => (prev === button ? '' : button));
  };

  const [activeButtonFinland, setActiveButtonFinland] = useState('');

  const handleButtonClickFinland = (button) => {
    setActiveButtonFinland((prev) => (prev === button ? '' : button));
  };

  const [activeButtonIndia, setActiveButtonIndia] = useState('');

  const handleButtonClickIndia = (button) => {
    setActiveButtonIndia((prev) => (prev === button ? '' : button));
  };
  
  return (
    <div>
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
          <h1>Grassroots</h1>
        </div>
      </section>

      {/* DON'T CHANGE ABOVE CONTENT */}
      {/* CUSTOMIZE BELOW CONTENT */}
      <div className="housing-container">
        <section className="housing-main-dropdown">
        <input id="check-usa" type="checkbox" name="menu" />
            <label for="check-usa">
                <h1
                    id="button-usa"
                    className={activeButtonUSA === 'usa' ? 'active-button' : ''}
                    onClick={() => handleButtonClickUSA('usa')}
                >
                USA
                </h1>
            </label>
            <ul id="submenu-usa">
                <h1>Taking Ownership PDX</h1>
                    <h2>Background Info</h2>
                        <p>Taking Ownership PDX, a grassroots organization based in Portland, Oregon, is dedicated to empowering the Black community by preserving generational wealth through innovative initiatives. Randal Wyatt, founder of Taking Ownership PDX, noted the injustice of the Black community in America where “both Native Americans and Asian Americans, in the wake of World War II internment, have received some compensation from the federal government — “not enough, by any means, but at least something,” [Wyatt] says — but not African Americans, despite years of debate about the issue” (Shepelavy, 2023). By refurbishing houses and revitalizing Black-owned small businesses, Taking Ownership PDX ensures that individuals can maintain their homes and livelihoods without being forced to sell due to financial constraints (Shepelavy, 2023). This proactive approach not only addresses historical injustices but also fosters economic stability and growth within the community. With a focus on sustainability and empowerment, Taking Ownership is making a tangible impact on the lives of Black Americans in Portland.</p>
                    <h2>Resources Leveraged</h2>
                        <p>Taking Ownership PDX leverages local community support, donations, and volunteer work from skilled professionals, including contractors and builders, to provide reparative housing services (Taking Ownership PDX).</p>
                    <h2>Feasibility</h2>
                        <p>The feasibility of Taking Ownership PDX&#39;s approach is high at the local level, providing a model for community-driven reparative action. Its scalability to broader regions would require substantial support and recognition, which is not easily feasible.</p>
                    <h2>Solution: Technical or Adaptive?</h2>
                        <p>Taking Ownership PDX employs an adaptive solution by addressing social and economic disparities through direct community action and support. It goes beyond technical fixes, fostering societal recognition and action towards reparative justice for historical injustices.</p>
                
                <h1>Greater Minnesota Housing Fund (GMHF)</h1>
                    <h2>Background Info</h2>
                        <p>&#34;Greater Minnesota Housing Fund (GMHF) supports the creation of strong communities and affordable homes through strategic investments and effective partnerships. GMHF is dedicated to social and racial justice and committed to advancing solutions that support equity for communities of color throughout Minnesota&#34; (Greater Minnesota Housing Fund). The fund works in cities, towns, rural areas, tribal nations, and underserved parts of Minnesota. It does this through implementing creative ideas like energy-efficient standards, green housing, and the NOAH program, which provides naturally occurring affordable housing, to use.</p>
                    <h2>Resources Leveraged</h2>
                        <p>Greater Minnesota Housing Fund leverages a range of resources for its operations, including partnerships with local organizations, community outreach, a team of 20+ staff, and a Board of Directors that represents every region of Minnesota with different background experiences related to affordable housing with community advocates, architects, and housing finance experts, to name a few.</p>
                    <h2>Feasibility</h2>
                        <p>The GMHF&#39;s adaptive solutions, which address both short-term housing needs and long-term objectives for social and racial equity, are quite practical in the Minnesota setting. To increase the exposure and impact of the organization&#39;s work, more marketing and outreach have been noted as areas that require further development.</p>
                    <h2>Solution: Technical or Adaptive?</h2>
                        <p>GMHF&#39;s approach is primarily adaptive, using research and program development activities to find new and innovative ways to increase affordable housing production. Through initiatives like the &#34;Emerging Developers of Color Program,&#34; the organization seeks to cater to the distinct cultural and demographic needs of the community it serves while promoting the growth of affordable housing in innovative ways.</p>
            </ul>

            <input id="check-finland" type="checkbox" name="menu" />
            <label for="check-finland">
                <h1
                    id="button-finland"
                    className={activeButtonFinland === 'finland' ? 'active-button' : ''}
                    onClick={() => handleButtonClickFinland('finland')}
                >
                Finland
                </h1>
            </label>
            <ul id="submenu-finland">
                <h1>Y-Säätiö (Y-Foundation)</h1>
                    <h2>Background Info</h2>
                        <p>“In 1985, there were nearly 20,000 people without a home in Finland. More than 95% of them were single-person households.” (Y-Säätiö). However, the Y-Foundation has been a beacon of hope through its innovative approach to providing housing for the homeless. By purchasing flats and offering them to homeless individuals as tenants at no initial cost except signing a tenancy agreement, the foundation is changing lives (Glösel, 2022). Embracing the &#34;housing first&#34; philosophy, the Y-Foundation prioritizes providing housing without preconditions before offering additional support services such as job assistance through social workers. Thanks to this holistic approach, numerous tenants have achieved stability and have become long-term residents within this supportive system, paying rent and holding down a job. (Glösel, 2022).</p>
                    <h2>Resources Leveraged</h2>
                        <p>The Y-Foundation&#39;s approach is both technical and adaptive, implementing the &#39;Housing First&#39; model as a practical solution to homelessness while also advocating for policy changes and societal attitudes towards homelessness and housing rights.</p>
                    <h2>Feasibility</h2>
                        <p>The Y-Foundation&#39;s model has proven highly effective and feasible in Finland, with potential applicability in other countries willing to adopt the &#39;Housing First&#39; principle and commit to housing as a right. At the same time, Finland&#39;s nation is smaller than many others– it is less populated than New York City in the United States– and has more housing area to work with, so its model may not be perfect for all countries.</p>
                    <h2>Solution: Technical or Adaptive?</h2>
                        <p>The Y-Foundation&#39;s approach is both technical and adaptive, implementing the &#39;Housing First&#39; model as a practical solution to homelessness while also advocating for policy changes and societal attitudes towards homelessness and housing rights.</p>
            </ul>

            <input id="check-india" type="checkbox" name="menu" />
            <label for="check-india">
                <h1
                    id="button-india"
                    className={activeButtonIndia === 'india' ? 'active-button' : ''}
                    onClick={() => handleButtonClickIndia('india')}
                >
                India
                </h1>
            </label>
            <ul id="submenu-india">
                <h1>Sharanalayam</h1>
                    <h2>Background Info</h2>
                        <p>Sharanalayam, founded by Vanitha Rengaraj, stands as a beacon of hope for marginalized communities in India. With a noble mission to provide shelter and support to the homeless, HIV-affected children, abandoned babies, senior citizens, and individuals with mental and physical challenges, Sharanalayam operates across five distinct locations in India tailored to cater to the unique needs of each demographic. Through initiatives like Dhaya (children 5 to 18 years), Jothi (women and children facing mental/physical challenges), Sweehar (newborns to 5 year olds), Saathvik (children with Autism), and Priyam (abandoned senior citizens), Sharanalayam offers not just basic essentials like food, clothing, and medical care but also a pathway towards empowerment and independence.</p>
                        <p>The impact of Sharanalayam&#39;s work is evident in the success stories of its beneficiaries who have gone on to pursue careers as engineers and nurses. Notably, Sharanalayam “started an old-age home with a minimum payment. The surplus funds from it is used to take care of the mentally-challenged. [They] are the only adoption agency in Coimbatore that takes in children only through the Child Welfare Committee” (Kumar, 2022).</p>
                    <h2>Resources Leveraged</h2>
                        <p>The Y-Foundation&#39;s approach is both technical and adaptive, implementing the &#39;Housing First&#39; model as a practical solution to homelessness while also advocating for policy changes and societal attitudes towards homelessness and housing rights.</p>
                    <h2>Feasibility</h2>
                        <p>The Y-Foundation&#39;s model has proven highly effective and feasible in Finland, with potential applicability in other countries willing to adopt the &#39;Housing First&#39; principle and commit to housing as a right. At the same time, Finland&#39;s nation is smaller than many others– it is less populated than New York City in the United States– and has more housing area to work with, so its model may not be perfect for all countries.</p>
                    <h2>Solution: Technical or Adaptive?</h2>
                        <p>The Y-Foundation&#39;s approach is both technical and adaptive, implementing the &#39;Housing First&#39; model as a practical solution to homelessness while also advocating for policy changes and societal attitudes towards homelessness and housing rights.</p>
                
                <h1>Indian Housing Federation (IHF)</h1>
                    <h2>Background Info</h2>
                        <p>The Indian Housing Federation (IHF), based in Karnataka, India, targets the reduction of housing inequalities for the nation&#39;s socially and economically disadvantaged communities. The organization&#39;s vision is to &#34;reduce the inequalities faced by socially and economically weaker sections of society in India in accessing housing and basic services (including sanitation and drinking water supply)&#34; (Indian Housing Federation). This entails encouraging cooperation between many stakeholders and promoting accountability and openness in the housing industry. In order to address the prevalent issue of housing insecurity, the IHF is working in several Indian states, including UP, Haryana, Bihar, Assam, Odisha, and Tamil Nadu, employing adaptive strategies to educate the government, engage communities, and conduct research to address the issue of housing insecurity in India (Indian Housing Federation).</p>
                    <h2>Resources Leveraged</h2>
                        <p>Indian Housing Federation leverages research, stakeholder partnerships, and fundraising to develop accessible and safe housing solutions. The use of local materials, such as bamboo in Assam, exemplifies their commitment to culturally and environmentally sustainable practices as well.</p>
                    <h2>Feasibility</h2>
                        <p>The approach is feasible within its target communities, aiming for broad yet culturally attentive solutions to housing insecurity. Its knowledge-based foundation and potential for expanding partnerships enhance its adaptability and impact.</p>
                    <h2>Solution: Technical or Adaptive?</h2>
                        <p>IHF has adaptive strategies in tackling housing insecurity in India. They are a non-profit focused on educating the government on actions to take as well as building community with all of the surrounding areas. They have also done research as to what challenges are universal in housing insecurity and fundraise/partner with stakeholders to build accessible & safe housing for individuals. They originally started as a knowledge hub and have been broadening their scope to act on more change (Indian Housing Federation).</p>
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