import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="privacy-policy min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </button>
        </div>
        
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Zymbia Interactive Technologies Private Limited ("Zymbia", "we", "us", or "our") takes the security of your personal information very seriously. We understand and respect your right to privacy and value the trust you place in us. This Privacy Policy describes Zymbia's privacy practices in relation to how we collect, use, store, disclose and protect your personal information, as well as your choices regarding use, access and correction of your personal information.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">1. SCOPE OF THIS PRIVACY POLICY</h2>
              <p>
              This Privacy Policy applies to information we may collect from users, visitors, and/or customers of devices, websites and apps (“Products”, “Services”), including GaragePro apps (Android & iOS), GaragePro website (https://garagepro.in/, https://garagepro.shop), CaRPM (https://carpm.in/), apps offered by Zymbia on Play Store (https://play.google.com/store/apps/developer?id=CaRPM) and App Store, including but without limitation to any other mobile application services offered from time to time by Zymbia Interactive Technologies Private Limited (“Zymbia”, “We”, “Our”, “Us”). Any reference to “Users”, “you” or “your” in this Privacy Policy refers to both Visitors and Customers, as the case may be. If you do not agree to these Terms and Conditions, please do not use our services.
<br/><br/>
Zymbia may change all or part of this Privacy Policy from time to time. An up-to-date version of our Privacy Policy will be posted on www.garagepro.in . Your continued use of any of our apps, devices, software, websites or other services after the date of any such revision or replacement constitutes your consent to our collection, use and disclosure of your personal information in accordance with the revised or replaced Privacy Policy. </p>
            </div>
            

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">2.OUR COLLECTION AND USE OF INFORMATION</h2>
              <p> This Privacy Policy distinguishes between “personal information” and “non-personal information”. Personal information is information that can be used to identify an individual person. Non-personal information means data in a form that does not, on its own, permit direct association with any specific individual. The types of information we collect and for which purposes are set out below.</p>
              <p>Personal Information – When you contact us, order or download one of our apps, products, or register or use our services, we collect personal information. This personal information may include your name, shipping address, email address, phone number, payment information, contact preferences, credit card information, and, if you provide it to us, your age and gender. It also includes vehicle information such as VIN, license plate etc. </p>
              <p>We may collect information about the device you use to access our website or mobile app, including the device's unique identifier, IP address, operating system, browser type, and mobile network information.</p>
              <p>We use personal information to help us create, develop, operate, deliver, and improve our products, services, content and advertising, and for loss prevention and anti-fraud purposes. Some of the specific types of purposes for which we may use your personal information are as follows:</p>
              <ul className=" list-inside space-y-2 font-normal">
  <li><span className="font-bold">a.</span> When expressing an interest in obtaining additional information about our products and services, or downloading our apps or software updates, or purchasing a product or contacting us, Zymbia may collect and use personal information, such as your contact information (including but not limited to email id, phone number) and billing information, to assist us in performing the requested services (i.e. to ship you our product, to respond to your requests, to inform you about our products and to process payments).</li>
  
  <li><span className="font-bold">b.</span> We may use your personal information, including date of birth, to assist with verifying your identity when you contact us.</li>
  
  <li><span className="font-bold">c.</span>From time to time, we may use your personal information to inform you of our products, offers and updates, to send you notices about products and services that you have purchased, to advise you of changes to our terms, conditions, and policies, and to advise you of enhancements to our products. Because this information is important to your interaction with Zymbia, you may not opt out of receiving these communications.</li>
  
  <li><span className="font-bold">d.</span> We may contact you to survey you with respect to your use and views on our products or to send you promotional material, including but not limited to emails, smses & push notifications. If you do not wish to receive such communications, you may opt out anytime by emailing fix@carpm.in.</li>
</ul>
<p>Vehicle Information – When you use our devices and apps, we may collect and retain information from the vehicle's onboard computer such as its vehicle identification number (VIN), diagnostic trouble codes, and other vehicle system data including records of the vehicle’s behavior right before the problem started. All of this information helps us to determine what might be wrong with your vehicle – so that we can help get you on the road again faster.</p>
<p>When vehicle information is linked to an identifiable User or a specific VIN, we consider this information as your personal information subject to the protections set forth in this Privacy Policy. When vehicle information is anonymized and aggregated so that it cannot be linked to an identifiable User or specific VIN, we treat this information as non-personal information (see below under “Anonymized and Aggregated Data”).</p>
<p>Online Navigational Information– Our websites, emails and advertisements may use "cookies" and other similar technologies to collect online navigational information, such as information about your web browser, your Internet Protocol (IP) address, your Internet Service Provider, your operating system, referring and exit web sites and applications, date/time stamps, clickstream data and the actions you take on our websites. Cookies and similar technologies may also be placed by third-party analytic services, such as Google analytics, or third-party marketing services.</p>
<p>In some of our email or other electronic communications, we may use a "click-through URL" linked to content on our website. When the email reader clicks one of these URLs, they pass through a separate web server before arriving at the destination page on our website. We track this click-through data to help us determine interest in particular topics and measure the effectiveness of our customer communications. If you prefer not to be tracked in this way, you should not click text or graphic links in our electronic communication.</p>
<p>Online Navigational Information is aggregated and used to help us understand and analyze trends, to understand and analyze the effectiveness of our marketing, to administer the website and apps, to learn about user behavior on the site, to gather demographic information about our User base as a whole, and to improve our products and services to better help you.</p>
<p>Aggregated data with respect to online navigational information is considered non-personal information for the purposes of this Privacy Policy. If we do combine non-personal information with personal information, the combined information will be treated as personal information for as long as it remains combined. To the extent that IP addresses or similar identifiers are considered personal information, we also treat these identifiers as personal information for the purposes of this Privacy Policy.</p>

            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">3. DISCLOSURE OF PERSONAL INFORMATION TO OTHERS</h2>
              <p>Business Partners and Solution Providers - With your express consent (and only with your express consent), we may provide your personal information to trusted business partners and solution providers that work with us to provide you with additional or enhanced products and services.</p>
              <p>Third Party Offers - We may present you with offers from trusted third parties to provide an offer or solution to you that may enhance your ownership or driving experience. </p>
              <p>Service Providers - We may contract with third party service providers to assist us in performing business-related functions such as information processing, fulfilling customer orders, delivering products to you, managing and enhancing customer data, providing customer service, assessing your interest in our products and services, and conducting customer research or satisfaction surveys. </p>
              <p>Legal Process – It may be necessary by law, litigation or other legal process for us to disclose your personal information. We may also disclose information about you if we determine that disclosure is reasonably necessary to enforce our terms and conditions or protect our operations or users.</p>
              <p>Business Transitions – If we are involved in a reorganization, merger, or the actual or prospective sale of our business or company (or a unit or division) we may disclose personal information to the relevant third party as part of the transaction.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">4. ANONYMIZED AND AGGREGATED DATA</h2>
              <p>We may anonymize and aggregate the data we collect across many users, including vehicle information, and may provide this anonymized, aggregated data to third parties. Such data will not identify you or be able to identify you personally and, specifically, this anonymized and aggregated information will never include your specific vehicle identification number (VIN).</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">5. PROTECTION OF PERSONAL INFORMATION</h2>
              <p>We take the security of your personal information very seriously. We use technical, administrative, and physical controls to maintain the security of your data. While we use industry-recognized security protocols to protect personal information, we cannot guarantee the safety of personal information from hacking or theft. If you have a security-related concern, please contact us at fix@carpm.in</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">6. PROTECTION OF PERSONAL INFORMATION</h2>
              <p>We will retain your personal information for the period consistent with the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">7. ACCESS TO YOUR PERSONAL INFORMATION</h2>
              <p>We will provide you with access to your personal information that we retain for any purpose including requesting that we correct the data if it is inaccurate or delete the data if we are not required to retain it by law or for legitimate business purposes. We may decline to process requests that are frivolous, that jeopardize the privacy of others, are impractical, or for which access is not otherwise required by local law. Access, correction, or deletion requests can be made through fix@carpm.in.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">8. THIRD PARTY SITES AND SERVICES</h2>
              <p>Our websites, products, applications, and services may contain links to third-party websites, products, and services. Our products and services may also use or offer products or services from third parties, such as vehicle repair reports. The information collected by third parties, including location data or contact details, is governed by their privacy policies. Zymbia is not responsible for these third-party websites, products or services and encourages you to review the privacy policies of such third party web sites, products and services to understand their information practices.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">9. CONTACT US</h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <p className="mt-2">
                Zymbia Interactive Technologies Private Limited<br />
                Email: fix@carpm.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
