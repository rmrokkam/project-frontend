import React from 'react';
import './css/style.css';
import { NavLink, useNavigate } from 'react-router-dom'

export default function WorksCited() {
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
          <h1>Works Cited</h1>
        </div>
      </section>

      <div className="housing-container">
        <section className="housing-works-cited">
            <p><i>4 Reasons Why Housing is Unaffordable</i>. localhousingsolutions.org. (2022, February 1) <a href="https://localhousingsolutions.org/housing-101-the-basics/4-reasons-why-housing-is-unaffordable/">https://localhousingsolutions.org/housing&#45;101&#45;the&#45;basics/4&#45;reasons&#45;why&#45;housing&#45;is&#45;unaffordable/</a></p>
            <p>Bitely, J. (2020, December 21). <i>Housing Instability, Homelessness, and Health.</i> Blue Cross Blue Shield of Michigan. <a href="https://www.mibluesperspectives.com/stories/social-determinants-of-health/housing-instability-homelessness-and-health">https://www.mibluesperspectives.com/stories/social&#45;determinants&#45;of&#45;health/housing&#45;instability&#45;homelessness&#45;and&#45;health</a></p>
            <p>Bolour, S. J. (2021, February 8). <i>Affordable Housing&#39;s Conflict of Interest.</i> LinkedIn. <a href="https://www.linkedin.com/pulse/affordable-housings-conflict-ofinterest-shawn-j-bolour/">https://www.linkedin.com/pulse/affordable&#45;housings&#45;conflict&#45;ofinterest&#45;shawn&#45;j&#45;bolour/</a></p>
            <p>Bonlender, B. (2017). Stakeholder Discussion of Long&#45;Term Funding Strategies for Homeless Housing Programs. <i>Department of Commerce,</i> 1&#45;14. <a href="https://www.commerce.wa.gov/wp-content/uploads/2017/04/Commerce-Funding-Homeless-Housing-2017.pdf">https://www.commerce.wa.gov/wp&#45;content/uploads/2017/04/Commerce&#45;Funding&#45;Homeless&#45;Housing&#45;2017.pdf</a></p>
            <p>Debrunner, G., Hofer, K., Wicki, M., Kauer, F., & Kaufmann, D. (2024). Housing Precarity in Six European and North American Cities: Threatened by the Loss of a Safe, Stable, and Affordable Home. <i>Journal of the American Planning Association,</i> 1&#45;17. <a href="https://doi-org.ezp2.lib.umn.edu/10.1080/01944363.2023.2291148">https://doi&#45;org.ezp2.lib.umn.edu/10.1080/01944363.2023.2291148</a></p>
            <p>Edey, M. (2009). The Global Financial Crisis and Its Effects. <i>Economic Papers: A Journal of Applied Economics and Policy,</i> 28(3), 186&#45;195. <a href="https://doi.org/10.1111/j.1759-3441.2009.00032.x">https://doi.org/10.1111/j.1759&#45;3441.2009.00032.x</a></p>
            <p>Eikelenboom, M., & Long, T. B. (2022, September 22). <i>Breaking the cycle of marginalization: How to involve local communities in multi&#45;stakeholder initiatives? &#45; journal of business ethics.</i> SpringerLink. <a href="https://link.springer.com/article/10.1007/s10551-022-05252-5">https://link.springer.com/article/10.1007/s10551&#45;022&#45;05252&#45;5</a></p>
            <p>Fetzer, T., Sen, S., & Souza, P. C. L. (2022, May 27). Housing Insecurity and Homelessness: Evidence from the United Kingdom. <i>Journal of the European Economic Association,</i> 21(2), 526&#45;559. <a href="https://doi.org/10.1093/jeea/jvac055">https://doi.org/10.1093/jeea/jvac055</a></p>
            <p>Federal Employee Annual Salary . (n.d.&#45;a). <a href="https://www.ziprecruiter.com/Salaries/Federal-Employee-Salary">https://www.ziprecruiter.com/Salaries/Federal&#45;Employee&#45;Salary</a></p>
            <p>Fields, D. J., & Hodkinson, S. N. (2018). Housing Policy in Crisis: An International Perspective. Housing Policy Debate, 28(1), 1&#45;5. <a href="https://doi.org/10.1080/10511482.2018.1395988.">https://doi.org/10.1080/10511482.2018.1395988.</a></p>
            <p><i>Finland: Average Monthly salary by sector 2022.</i> Statista. (2023, June 1). <a href="https://www.statista.com/statistics/529917/finland-average-monthly-earnings-by-sector/">https://www.statista.com/statistics/529917/finland&#45;average&#45;monthly&#45;earnings&#45;by&#45;sector/</a></p>
            <p>Florida, R. <i>Economic Inequality Largely Boils Down to Housing Inequality.</i> Bloomberg.com. (2018, April 13). <a href="https://www.bloomberg.com/news/articles/2018-04-13/economic-inequality-largely-boils-down-to-housing-inequality">https://www.bloomberg.com/news/articles/2018&#45;04&#45;13/economic&#45;inequality&#45;largely&#45;boils&#45;down&#45;to&#45;housing&#45;inequality</a></p>
            <p>Gill, F. (2018, July 9). <i>The Severe Health Consequences of Housing Instability.</i> People&#39;s Policy Project. <a href="https://www.peoplespolicyproject.org/2018/07/09/the-severe-health-consequences-of-housing-instability/">https://www.peoplespolicyproject.org/2018/07/09/the&#45;severe&#45;health&#45;consequences&#45;of&#45;housing&#45;instability/</a></p>
            <p><i>Global Housing Strategy: Making housing affordable for all | UN&#45;Habitat.</i> Retrieved March 2, 2024, from <a href="https://unhabitat.org/programme/global-housing-strategy-making-housing-affordable-for-all"></a></p>
            <p>Glösel, K. (2022, November 15). Finland Ends Homelessness And Provides Shelter For All In Need. The Mandarin. <a href="https://www.themandarin.com.au/205500-finland-ends-homelessness-and-provides-shelter-for-all-in-need/"></a></p>
            <p>Greater Minnesota Housing Fund. (n.d.). <a href="https://gmhf.com/">https://gmhf.com/</a></p>
            <p>Guerrero, L., & Solf, B. (2024, March 20). <i>Global affordable housing shortages can harm migrant reception and integration.</i> migrationpolicy.org. <a href="https://www.migrationpolicy.org/article/housing-crisis-immigrants-integration">https://www.migrationpolicy.org/article/housing&#45;crisis&#45;immigrants&#45;integration</a></p>
            <p>Gupta, J. K. (2022, February 10). <i>Affordable housing for all in India &#45; issues and options.</i> LinkedIn. <a href="https://www.linkedin.com/pulse/affordable-housing-all-india-issues-options-jit-kumar-gupta-1f/">https://www.linkedin.com/pulse/affordable&#45;housing&#45;all&#45;india&#45;issues&#45;options&#45;jit&#45;kumar&#45;gupta&#45;1f/</a></p>
            <p>Gopalan, K., & Venkataraman, M. (2015, May 19). <i>Affordable housing: Policy and practice in India.</i> IIMB Management Review. <a href="https://www.sciencedirect.com/science/article/pii/S0970389615000336">https://www.sciencedirect.com/science/article/pii/S0970389615000336</a></p>
            <p>Heikkilä, J. (2022, November 18). <i>Finnish system for affordable social housing supports social mixing and brings down homelessness.</i> MuniFin. <a href="https://www.munifin.fi/whats-new/finnish-system-for-affordable-social-housing-supports-social-mixing-and-brings-down-homelessness/#:~:text=In%20Finland%2C%20affordable%20social%20housing,other%20financial%20institution%20like%20MuniFin."></a></p>
            <p>​​Holleran, M. (2021). Millennial &#34;YIMBYs&#34; and boomer &#34;NIMBYs&#34;: Generational views on housing affordability in the United States. <i>Sociological Review,</i> 69(4), 846&#45;861. <a href="https://doi-org.ezp2.lib.umn.edu/10.1177/0038026120916121"></a></p>
            <p><i>Homelessness and racial disparities.</i> National Alliance to End Homelessness. (2023, December 18). <a href="https://endhomelessness.org/homelessness-in-america/what-causes-homelessness/inequality/">https://endhomelessness.org/homelessness&#45;in&#45;america/what&#45;causes&#45;homelessness/inequality/</a></p>
            <p><i>Housing.</i> UN. (n.d.). <a href="https://unhabitat.org/topic/housing">https://unhabitat.org/topic/housing</a></p>
            <p>Housing as a Human Right. (n.d.). <a href="https://nlihc.org/sites/default/files/AG-2018/Ch01-S06_Housing-Human-Right_2018.pdf">https://nlihc.org/sites/default/files/AG&#45;2018/Ch01&#45;S06_Housing&#45;Human&#45;Right_2018.pdf</a></p>
            <p>Hudecek, T., Hlavacek, P., Hainc, J., & Cervinka, M. (2019). Statistics and Governance. Current Issues of Affordable Housing: The Case of Prague. <i>IOP Conference Series: Earth and Environmental Science, 290</i>(1), 012166. <a href="https://doi.org/10.1088/1755-1315/290/1/012166">https://doi.org/10.1088/1755&#45;1315/290/1/012166</a></p>
            <p>Indian Housing Federation. (n.d.). <a href="https://www.ihf.in/">https://www.ihf.in/</a></p>
            <p><i>India: Real estate affordability price by income 2023.</i> (n.d.). Statista. Retrieved March 3, 2024, from <a href="https://www.statista.com/statistics/1211503/india-real-estate-affordability-price-by-income/">https://www.statista.com/statistics/1211503/india&#45;real&#45;estate&#45;affordability&#45;price&#45;by&#45;income/</a></p>
            <p><i>Initiatives | Global Housing Foundation.</i> (n.d.). Statista. (n.d.). Retrieved March 3, 2024, from <a href="https://globalhousing.org/initiatives/">https://globalhousing.org/initiatives/</a></p>
            <p>Kalugina, A. (2016). Affordable housing policies: An overview.</p>
            <p>Karmali, N. M., & Weng, X. (2022). <i>Housing Demand and Affordability in India: Implications for Housing Policy.</i> The World Bank. <a href="https://doi.org/10.1596/1813-9450-10031">https://doi.org/10.1596/1813&#45;9450&#45;10031</a></p>
            <p>King, R., Orloff, M., Virsilas, T., & Pande, T. (2017). <i>Confronting the Urban Housing Crisis in the Global South: Adequate, Secure, and Affordable Housing.</i></p>
            <p>Knoll, K., Schularick, M., & Steger, T. (2014, October). <i>No Price Like Home: Global House Prices, 1870&#45;2012.</i> <a href="https://doi.org/10.24149/gwp208">https://doi.org/10.24149/gwp208</a></p>
            <p>Kumar, S. S. (2022, January 16). A Sanctuary For The Elderly And Neglected. The New Indian Express. <a href="https://www.newindianexpress.com/good-news/2022/Jan/16/a-sanctuary-for-the-elderly-and-neglected-2407347.jsx">https://www.newindianexpress.com/good&#45;news/2022/Jan/16/a&#45;sanctuary&#45;for&#45;the&#45;elderly&#45;and&#45;neglected&#45;2407347.jsx</a></p>
            <p>Malik, S. (2020, July 8). <i>Resources & Stakeholders: Rethinking Collaboration for Affordable Housing Provision.</i> Housing Studies Association. <a href="https://www.housing-studies-association.org/articles/200-resources-stakeholders-rethinking-collaboration-for-affordable-housing-provision">https://www.housing&#45;studies&#45;association.org/articles/200&#45;resources&#45;stakeholders&#45;rethinking&#45;collaboration&#45;for&#45;affordable&#45;housing&#45;provision</a></p>
            <p>Mateyka , P. J., & Yoo, J. <i>Share of income needed to pay rent increased the most for low&#45;income households from 2019 to 2021.</i> census.gov (2023, February 28). <a href="https://www.census.gov/library/stories/2023/03/low-income-renters-spent-larger-share-of-income-on-rent.jsx">https://www.census.gov/library/stories/2023/03/low&#45;income&#45;renters&#45;spent&#45;larger&#45;share&#45;of&#45;income&#45;on&#45;rent.jsx</a></p>
            <p>Maxwell, C., Castro, A., & Solomon, D. (2019, August 7). <i>Systemic inequality: Displacement, exclusion, and segregation.</i> Center for American Progress. <a href="https://www.americanprogress.org/article/systemic-inequality-displacement-exclusion-segregation/">https://www.americanprogress.org/article/systemic&#45;inequality&#45;displacement&#45;exclusion&#45;segregation/</a></p>
            <p><i>Measuring Housing Affordability: Assessing the 30 Percent of Income Standard | Joint Center for Housing Studies.</i> (2018, September 25). <a href="https://www.jchs.harvard.edu/research-areas/working-papers/measuring-housing-affordability-assessing-30-percent-income-standard">https://www.jchs.harvard.edu/research&#45;areas/working&#45;papers/measuring&#45;housing&#45;affordability&#45;assessing&#45;30&#45;percent&#45;income&#45;standard</a></p>
            <p>McRae, K. (2022, October 25). <i>The Global Housing Crisis: A Crisis Unlike Any Other.</i> Urbanet. <a href="https://www.urbanet.info/the-global-housing-crisis/">https://www.urbanet.info/the&#45;global&#45;housing&#45;crisis/</a></p>
            <p>National, C. (2023, August 21). <i>The Future of Affordable Housing in India.</i> LinkedIn. <a href="https://www.linkedin.com/pulse/future-affordable-housing-india-credai/">https://www.linkedin.com/pulse/future&#45;affordable&#45;housing&#45;india&#45;credai/</a></p>
            <p>National Low Income Housing Coalition. (n.d.). <i>The Problem.</i> <a href="https://nlihc.org/explore-issues/why-we-care/problem">https://nlihc.org/explore&#45;issues/why&#45;we&#45;care/problem</a></p>
            <p><i>New report shows population and household growth in the Twin Cities metro outpaces available housing.</i> (n.d.). Metropolitan Council. Retrieved March 3, 2024, from <a href="https://metrocouncil.org/">https://metrocouncil.org/</a></p>
            <p><i>NLIHC Releases The Gap 2023: A Shortage of Affordable Homes | National Low Income Housing Coalition.</i> (2023, November 7). <a href="https://nlihc.org/news/nlihc-releases-gap-2023-shortage-affordable-homes">https://nlihc.org/news/nlihc&#45;releases&#45;gap&#45;2023&#45;shortage&#45;affordable&#45;homes</a></p>
            <p>OHCHR and the right to adequate housing | Ohchr. (n.d.). <a href="https://www.ohchr.org/en/housing">https://www.ohchr.org/en/housing</a></p>
            <p>Ong ViforJ, R., & Phelps, C. (2023). The Growing Intergenerational Housing Wealth Divide: Drivers And Interactions In Australia. <i>Housing, Theory & Society,</i> 40(2), 238&#45;257. <a href="https://doi-org.ezp2.lib.umn.edu/10.1080/14036096.2022.2161622">https://doi&#45;org.ezp2.lib.umn.edu/10.1080/14036096.2022.2161622</a></p>
            <p>Ribeiro, A. I., & Barros, H. (2020). Affordable, Social, and Substandard Housing and Mortality: The EPIPorto Cohort Study, 1999&#45;2019. <i>American Journal of Public Health, 110</i>(7), 1060&#45;1067. <a href="https://doi.org/10.2105/AJPH.2020.305661">https://doi.org/10.2105/AJPH.2020.305661</a></p>
            <p>Rose, J. (2023, June 2). <i>Redlining.</i> Federal Reserve History. <a href="https://www.federalreservehistory.org/essays/redlining"></a></p>
            <p>Salary.com. (2024, March 29). <i>Unlock the power of pay.</i> https://www.salary.com/</p>
            <p>Schwartz, G. (2023, March 9). <i>Guest opinion: The housing stakeholders.</i> PostIndependent.com. <a href="https://www.postindependent.com/opinion/guest-opinion-the-housing-stakeholders/">https://www.postindependent.com/opinion/guest&#45;opinion&#45;the&#45;housing&#45;stakeholders/</a></p>
            <p>Sharanalayam. (n.d.). <a href="https://www.sharanalayam.org/">https://www.sharanalayam.org/</a></p>
            <p>Shepelavy, R. P. (2023, August 29). <i>Ideas We Should Steal: Grassroots Housing Reparations.</i> The Philadelphia Citizen. <a href="https://thephiladelphiacitizen.org/ideas-we-should-steal-grassroots-housing-reparations/">https://thephiladelphiacitizen.org/ideas&#45;we&#45;should&#45;steal&#45;grassroots&#45;housing&#45;reparations/</a></p>
            <p>Shinn, M., & Khadduri, J. (2020). How Finland Ended Homelessness. <i>Cityscape, 22</i>(2), 75&#45;80.</p>
            <p>Stanley, J., Harris, R., Cormack, D. et al. <i>The impact of racism on the future health of adults: protocol for a prospective cohort study.</i> BMC Public Health 19, 346 (2019). <a href="https://doi.org/10.1186/s12889-019-6664-x">https://doi.org/10.1186/s12889&#45;019&#45;6664&#45;x</a></p>
            <p>Taking Ownership PDX. TAKING OWNERSHIP PDX. (n.d.). <a href="https://takingownershippdx.com/">https://takingownershippdx.com/</a></p>
            <p>The global urban housing affordability crisis—Steffen Wetzstein, 2017. (n.d.). Retrieved February 12, 2024, from <a href="https://journals.sagepub.com/doi/full/10.1177/0042098017711649?casa_token=vjo6R7yi7nMAAAAA%3ATAaJ_BiSYxuhSmhoXxPJq4eyedVC9bPfC0x8eatZOjrXGq4K_AmtdLpgOPeNGaPz6RLaQ6f0ihafDQ">https://journals.sagepub.com/doi/full/10.1177/0042098017711649?casa_token=vjo6R7yi7nMAAAAA%3ATAaJ_BiSYxuhSmhoXxPJq4eyedVC9bPfC0x8eatZOjrXGq4K_AmtdLpgOPeNGaPz6RLaQ6f0ihafDQ</a></p>
            <p><i>UN expert urges action to end global affordable housing crisis.</i> (n.d.). OHCHR. Retrieved March 2, 2024, from <a href="https://www.ohchr.org/en/press-releases/2023/10/un-expert-urges-action-end-global-affordable-housing-crisis">https://www.ohchr.org/en/press&#45;releases/2023/10/un&#45;expert&#45;urges&#45;action&#45;end&#45;global&#45;affordable&#45;housing&#45;crisis</a></p>
            <p>Versey, H. S., & Russell, C. N. (2022, October 3). The impact of COVID‐19 and housing insecurity on lower‐income Black women. <i>Journal of Social Issues, 79</i>(2), 773&#45;793. <a href="https://doi.org/10.1111/josi.12555">https://doi.org/10.1111/josi.12555</a></p>
            <p>Voigtländer, M., & Whitehead, C. (2023). Rent controls—A timeless and controversial intervention. <i>International Journal of Housing Policy, 23</i>(4), 661&#45;670. <a href="https://doi.org/10.1080/19491247.2023.2272383">https://doi.org/10.1080/19491247.2023.2272383</a></p>
            <p><i>What we do.</i> Indian Housing Federation. (n.d.). <a href="https://www.ihf.in/what-we-do">https://www.ihf.in/what&#45;we&#45;do</a></p>
            <p>Whitehead, C. M. E., & Goering, J. (2021). Local affordable housing dynamics in two global cities: Patterns and possible lessons? International Journal of Urban Sciences, 25(sup1), 241&#45;265. <a href="https://doi.org/10.1080/12265934.2020.1828147">https://doi.org/10.1080/12265934.2020.1828147</a></p>
            <p>Wetzstein, S. (2017). The global urban housing affordability crisis. <i>Urban Studies, 54</i> (14), 3159&#45;3177. <a href="https://doi.org/10.1080/12265934.2020.1828147">https://doi.org/10.1080/12265934.2020.1828147</a></p>
            <p><i>World population 1950&#45;2024.</i> MacroTrends. (n.d.). <a href="https://www.macrotrends.net/global-metrics/countries/WLD/world/population">https://www.macrotrends.net/global&#45;metrics/countries/WLD/world/population</a></p>
            <p>Y&#45;Säätiö. (n.d.). <a href="https://ysaatio.fi/en/">https://ysaatio.fi/en/</a></p>
            <p>Zhang, X. Q., & Ball, M. (2016). Housing the planet: Evolution of global housing policies. <i>Habitat International, 54,</i> 161&#45;165. <a href="https://doi.org/10.1016/j.habitatint.2015.11.028">https://doi.org/10.1016/j.habitatint.2015.11.028</a></p>

        </section>
      </div>

      <footer id="main-footer">
        <h5>Created by:</h5>
        <p>Rohan Rokkam, Lily Weiss, Lindsey Wimmer, Rachel Lynn Rosenthal, Taylor Fix</p>
      </footer>
    </div>
  );
}