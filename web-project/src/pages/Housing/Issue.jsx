import React from 'react';
import './css/style.css';
import { NavLink, useNavigate } from 'react-router-dom'

export default function Issue() {
  const navigator = useNavigate();
  
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
            <li><NavLink to="." end className={({ isActive }) => (isActive ? 'active-link' : '')}>Issue</NavLink></li>
            <li><NavLink to="./history" className={({ isActive }) => (isActive ? 'active-link' : '')}>History</NavLink></li>
            <li><NavLink to="./stakeholders" className={({ isActive }) => (isActive ? 'active-link' : '')}>Stakeholders</NavLink></li>
            <li><NavLink to="./grassroots" className={({ isActive }) => (isActive ? 'active-link' : '')}>Grassroots</NavLink></li>
            <li><NavLink to="./systems-map" className={({ isActive }) => (isActive ? 'active-link' : '')}>Systems Map</NavLink></li>
            <li><NavLink to="./summary" className={({ isActive }) => (isActive ? 'active-link' : '')}>Summary</NavLink></li>
            <li><NavLink to="./works-cited" className={({ isActive }) => (isActive ? 'active-link' : '')}>Works Cited</NavLink></li>
          </ul>
        </div>
      </nav>

      <section id="showcase">
        <div className="housing-container">
          <h1>Definition of the Issue</h1>
        </div>
      </section>

      <div className="housing-container">
        <section className="housing-main-full">
          <h1>Definition of the Issue</h1>
          <p>The right to adequate housing has been described as an inalienable and fundamental human right by the United Nations. Yet, it has become an issue on a global scale, with the already large housing gap only growing more each day (King, 2017). The affordability of housing is defined by the Organization for Economic Cooperation and Development as follows: “The median of the ratio of housing cost over income gives an indication of the financial pressure that households face due to housing costs”  (Hudecek et al., 2019). Simply put, the affordable housing rate is typically defined as the proportion of households that spend thirty percent or less of their income on housing costs (<i>Measuring Housing Affordability</i>, 2018). However, this cannot be “simply put” and takes no account of arguably the two most important elements of true housing affordability: whether the quality of housing is acceptable and whether the household, once they have paid their housing costs, can still afford the other necessities of life (Whitehead et al., 2021). To begin diving into this crisis, it must be considered that housing is locationally specific due to the need for land, which is immovable and often costly, being set within defined jurisdictions. As a result, the housing market is defined by local demand, regulations, and fiscal frameworks, but those local demands and supply are in turn impacted by broader national and international markets and policies, which have increased over time (King, 2017).</p>
          <p>Globally, as of 2023, a staggering 1.6 billion people around the world lack adequate housing and basic services, with projects that could rise to 3 billion by 2030 (<i>UN expert</i>, n.d).  Specifically, about one-third of urban populations in the global South live in informal settlements, where they tend to lack access to basic services such as electricity, running water, or sanitation (King, 2017). Likewise, affordable housing has been on a decades-long decline in the United States, with a national shortage as of 2023 of 7.3 million affordable and available homes for extremely low-income renters - those with incomes at or below the federal poverty line, or 30% of their area median income, whichever being greater (<i>NLIHC Releases The Gap 2023</i>, 2023). To compound the impact of this decline, the systemic nature of this issue is often not considered in the solution-making process in a Western context. Thus, this project comes into play where we will explore the affordability and accessibility of housing, as this issue is ever so prevalent not only nationally, but globally. Housing precarity, a lack of permanent housing, is a global issue, with more and more people sharing this experience. When breaking down the multidimensional concept of housing precarity it comes down to housing affordability, tenure security, housing satisfaction, neighborhood quality, and community cohesion, with the residents most vulnerable to housing precarity being households with children, minorities, and renters (Debrunner et al., 2024).</p>
          <p>One major cause of the decreasing access to housing is the Intergenerational Housing Wealth Gap, or “the difference in the mean primary home net worth of Boomers and Gen X's” (Ong ViforJ et al., 2023). The Intergenerational Housing Wealth Gap has made finding financially affordable housing nearly impossible for younger generations, with the gap increasing in Australia from 161% in 1997-1998 to 234% in 2017-2018 (Ong ViforJ et al., 2023). Housing affordability, a dimension of housing precarity, is becoming increasingly inaccessible for today's citizens, with rent rising 50-130% in major cities (Berlin, Chicago, Los Angeles, London, New York, and Paris) from 2000-2024, and the 2024 rental vacancy rates in those major cities being below 10%, with some being less than 2% (Debrunner et al., 2024).</p>
          <p>A qualitative survey conducted by the authors of “Housing Precarity in Six European and North American Cities” identified the struggles of the most vulnerable residents when it comes to housing precarity. The survey study identified that single-parent households, minorities, and renters were all more likely to experience housing affordability issues than households with no children, non-minorities, or homeowners. Households with children and minorities showed a negative correlation with tenure security. Younger people (&lt;40) were more likely to be affected by housing affordability issues, tenure security concerns, and housing dissatisfaction (Ong ViforJ et al., 2023).</p>
          <p>Due to the lack of affordable housing, the people of Sydney, Australia, have quickly been shifting to shared housing lifestyles where residents share housing with at least one other resident to alleviate housing expenses. The main reason for this shift in living arrangements is Generation Rent, a term used for young adults (&lt;40) who are unable to buy housing and have to pay a high percentage of their income on rent due to inflation and lack of housing. When comparing the 2011 and 2019 censuses, Sydney's number of shared households increased by 18%, while the number of lone households only grew by a mere 2.2% (Maalsen, 2019). Unfortunately, to the people of Sydney and the world, shared housing is normally depicted as a symbol of inferiority and financial instability, while lone housing is a symbol of success and financial stability. This has resulted in the baby boomer generation accusing “the millennial generation of fecklessness while millennials point to the macro-structural disadvantages they have faced, which they feel baby boomers have had a hand in creating” (Holleran, 2021).</p>
          <h1>History of the Issue</h1>
          <p>The term affordable housing comes from many issues throughout history; these include social, economic, and political movements, with the earliest times dating back to the 19th and 20th centuries caused by urbanization and industrialization. (National Low Income Housing Coalition, 2015). Affordable housing is typically defined as “housing for which an occupant pays no more than 30% of his or her income for gross housing expenses such as rent and utilities” (Kalugina, 2016). The amount of housing needed through the years has ultimately been driven by population growth. In 1950, the worldwide population was about 2,500,000. Now, in 2024, the worldwide population is just over 8,000,000 (World Population 950-2024, n.d.) and it's not stopping there. It is projected to rise and peak at 10,400,000 in 2090 (World Population 950-2024, n.d.). There is more of a need for housing now and in the near future than ever before. The recent surge in the cost of housing is not necessarily driven by the cost of construction or other similar factors; in fact, it is actually driven by land being seen as scarce and also a lack of price suppressors like we've had throughout history (Knoll, K. et al, 2014). Housing prices in the past, specifically in the 19th and early 20th century, had been somewhat stable in many countries due to one main factor: transportation revolutions post-World War II. As transportation like railroads became more available, more land was able to be used for residential and local housing. This acted as a suppressor for housing and land costs, despite growth of income and in population (Knoll, K. et al, 2014). In the later 20th century, expansion slowed and so prices began to catch up. We are seeing the implications of that on current-day housing prices.</p>
          <p>Focusing more specifically on America, affordable housing started during the Great Depression when soldiers came home from war. Congress worked during the Great Depression to stabilize the housing market, specifically by constructing jobs and providing housing for people deemed living in slum conditions. The National Housing Act of 1934 and the U.S. Housing Act of 1934 was created by the Federal Housing Administration, also known as FHA, whose primary purpose is to help people with single-family housing loans and protect and promote access to affordable housing homeownership. (Kalugina, 2016) FHA does this by protecting Leander to make it easier for individuals and families with low credit scores to apply for loans, mortgages, and smaller down payments. It also offers housing counseling programs to help during home-buying.</p>
          <p>As the years went by, the United States passed the United States Public Housing Authority (USPHA) in 1937, providing safe housing for low-income families, the elderly, and people with disabilities through subsidized housing. While this happened, the Public Housing Authority also worked on public housing availability. In 1949, it continued to update the Housing Act with the USPHA program. In 1956 and 1961, the government began to have private investment in affordable housing to increase developers' participation, and over the years, the developers became the leading suppliers of affordable housing. In the 1960s, the civil rights movement began because of discrimination and segregation, which led to the creation of the Fair Housing Act of 1968 (Kalugina, 2016).</p>
          <p>Affordable housing has evolved with the help of government, nonprofit, and private organizations to help families and individuals who struggle with housing due to low income. Affordable housing is complex and varies by country and region, making it difficult to know exactly where it started. Still, many countries with early examples of affordable housing are the United Kingdom, where the Housing of the Working Class Act 1890 was passed to help provide government support to low-income workers and improve the worker's living conditions as well as countries like the Netherlands and Germany who had programs to for public housing and cooperative housing and social housing. Through this research, you will see how affordable housing has changed over time and has been implemented in different counties based on the country's housing needs. (Kalugina, 2016) Through this research, you will see how affordable housing has changed over time and has been implemented in different counties based on the country's housing needs.</p>
          <p>Housing insecurity is a systemic inequality, and factors like discrimination, unstable job markets, and lack of social support play a huge part in its perpetuation (Maxwell et al., 2019). There have been a variety of policies created globally to combat this issue. The success of these policies, though, specifically in the Western world, sit on whether or not the systems in place inhibiting affordable housing are considered. Do they get to the root of the issue of housing insecurity or is it merely a band-aid to the greater problem of high rental rates, unsafe living conditions, and discriminatory housing systems? The United Kingdom created a housing assistance program in 2008 that offered LHAs, or local housing allowances, to low-income households throughout the country (Fetzer et al., 2022). Just three years later, they cut back on the allowances, directly impacting low-income households throughout 2011. The true damage from the cut was complete by 2012, and was exacerbated due to the increase in the cost of housing throughout the country. This cut led to much higher levels of financial stress, eviction rates, property crimes, insecure and temporary housing arrangements, and homelessness (Fetzer et al., 2022). The funding was cut in an attempt to save fiscal costs, which it did, but the UK ended up spending many indirect costs towards mediating these impacts, thus becoming a band-aid to the greater issue the LHAs once targeted directly.</p>
          <p>The discrimination of minority populations throughout history in the U.S. continues to play a huge role in the lack of equal success in housing security today. Redlining, or “the practice of denying people access to credit because of where they live, even if they are personally qualified for loans" was outlawed in the U.S. with the Fair Housing Act in 1968, but the effects of it live on (Rose, 2023). Home equity is one of the greatest wealth sources in America, which is passed down through generations. Because these opportunities have historically been withheld from communities of color through redlining and other forms of racism, Black American wealth makes up only 5% of white wealth. This injustice is still perpetuated because of federal housing policy (Versey et al., 2022). This divide is worsening today due to harmful experiences throughout the pandemic. As we near a post-COVID-19 world, Black individuals, specifically those who also identify as women, are at a higher risk for systemic discrimination and, therefore, have faced even greater challenges in housing. They experience landlord stress, deception, and harassment at greater levels than other identities “due to several loopholes – for instance, local states and cities could overturn eviction rules [and so] groups most at risk for housing insecurity were most affected” (Versey et al., 2022).  Women of color also have low levels of support in the housing process in general, both formal (like housing rental and purchase education) and informal (like friends and family who have experience with the housing market). This lack of resources leads to more significant disparity with no remedy.</p>
          <p>Additionally, the displacement of Native American communities in history has had detrimental impacts now on their access to affordable housing. The U.S. created the Indian Removal Act in 1830, which “allowed the federal government to forcibly relocate Native Americans in the southeast to make room for white settlement” (Maxwell et al., 2019). This struggle continued with the Dawes Act of 1887, which gave the federal government permission to take two-thirds of indigenous land and redistribute it to white Americans. This redistribution and more recent termination of recognition for thousands of tribal nations from 1945 to 1968 pushed Native American communities to relocate to urban areas, which has resulted in great economic hardship and housing insecurity for this population. “In 2017, more than 1 in 5 American Indian and Alaska Native (AI/AN) people—22 percent—lived in poverty, compared with just 8 percent of white Americans” (Maxwell et al., 2019). This discrimination is prevalent in the history of the U.S. and chain of government-led and continues to lead to systemic and underlying racism in many systems, but especially the housing system. The identities analyzed here are just some of many that are greatly affected.</p>
          <p>Due to the wide scope of affordable housing, there are numerous aspects that currently require innovative solutions to sustain lasting change. The impact of systemic and historical influences, as outlined above, must be thoroughly considered in order to gauge a holistic understanding of why affordable housing poses such a complex issue globally. Some aspects of affordable housing that require innovative solutions that specifically take accessibility and the effect it has on communities into account, including those experiencing homelessness, are outlined below.</p>
          <h1>Economic Factors and Disparities</h1>
          <p>When considering how economic factors play into the issue of affordability housing, cause and effect must both be considered. Lack of affordable housing can be both caused and driven economically which creates numerous challenges for those who are lower income, of lower socioeconomic status, and those experiencing homelessness. The National Low Income Housing Coalition states that on a national level, “there is a shortage of 7 million affordable homes for our nation's 10.8 million plus extremely low-income families" (nrich.org, 2024). Further, 70% of those who are low income in the United States pay more than half of their income on rent (nrich.org, 2024). When looking at it from an economic causation standpoint, affordable housing is one of the driving factors of wealth inequality in the country. Data from the U.S. Census that considers both homeowners and renters found that by 2012, the level of housing affordability was as high as it was in the 1930s, with “the most expensive 20% of owner-occupied homes accounting for more than half of the total U.S. housing value” (Florida, 2018). Moreover, almost half of the national population, or 49% of Americans said affordable housing was a problem where they live in 2021 (Schaeffer, 2022). This significant gap of disparities is a large aspect of the affordable housing problem and is deeply rooted both historically and systemically in society.</p>
          <h1>Population Growth/Urbanization</h1>
          <p>As the global population increases, there is an increasing demand for affordable housing. This poses a complex issue needing an adaptive and dynamic approach which will vary depending on the needs of specific populations and communities. When looking specifically at the Twin Cities Metro, there was a 7.4% increase in household growth from 2010 to 2017, yet only a 5.4% growth in housing units in the region during that period (metrocouncil.org, 2018). This creates a substantial gap in needed housing, which when taking affordability into account, creates an even larger gap and can drive those with lack of resources to become homeless.</p>
          <h1>Access to Funding/Income</h1>
          <p>A large factor that plays into accessing affordable housing is a simultaneous lack of access to lower-wage jobs supplying individuals/families with income and funding from the government. When taking the COVID-19 pandemic into consideration, the economy is still undergoing recovery because of the high number of layoffs and lack of jobs available including to those who are low-income. Although the unemployment rate has significantly decreased since the beginning of the pandemic in 2020, there are still remaining barriers that prevent those seeking affordable housing to obtain the necessary income levels and funding. The current federal minimum wage is $7.25, and the average wage needed to rent a typical 2 bedroom apartment in the United States is $20.30 an hour (localhousingsolutions.org, 2024) .Income from lower-wage jobs does not support the prices of current low-income housing. A study from the U.S. Census outlined that the price of renting has significantly risen between 2019 and 2021 in comparison to income earned, and those with the lowest annual incomes experienced the largest percentage point increases for renting costs (Mateyka, 2023). When looking at a lack of funding from the government, currently only one in four eligible households with a housing burden receive government housing assistance of any kind (localhousingsolutions.org, 2024). The complex lack of access to higher paying jobs and assistance from the government paired with the continued rise in housing prices demands an adaptive approach for solutions.</p>
          <p>As stated previously, the right to adequate housing has been described as an inalienable and fundamental human right by the United Nations, yet by 2025, 1.6 of the 8.1 billion people will be without adequate housing. This statistic alone calls for change, and through this project, we hope to make one small step to lowering that number for future generations.</p>
        </section>
      </div>

      <footer id="main-footer">
        <h5>Created by:</h5>
        <p>Rohan Rokkam, Lily Weiss, Lindsey Wimmer, Rachel Lynn Rosenthal, Taylor Fix</p>
      </footer>
    </div>
  );
}