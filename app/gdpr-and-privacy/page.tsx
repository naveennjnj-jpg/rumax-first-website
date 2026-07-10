import type { Metadata } from "next";
import { InnerHero, PageShell } from "@/components/pages/InnerPages";

export const metadata: Metadata = {
  title: "GDPR & Privacy | Rumax",
  description: "Rumax GDPR and privacy information."
};

export default function GdprPrivacyPage() {
  return (
    <PageShell>
      <InnerHero
      className="inner-hero--domiciliary policies"
        title="GDPR & Privacy"
        description="We are committed to protecting privacy and complying with UK GDPR and data protection legislation."
       
        showScrollCue
      />

      {/* ---------- META BAR ---------- */}
      <div className="gdpr-meta-bar">
        <span>Last Reviewed: 02/03/2023</span>
        <span className="gdpr-meta-divider">|</span>
        <span>Last Amended: 02/03/2023</span>
      </div>

      <article className="gdpr-article container">
        {/* WHO WE ARE */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>Who We Are</h2>
            <p className="lead">
              We are RUMAX LIMITED, a company incorporated in England and Wales. Our registered address is:
            </p>

            <div className="addr-block">
              <p>Cornwallis House, Unit 2, Howard Chase</p>
              <p>Basildon, Essex, SS14 3BB</p>
              <p>United Kingdom</p>
              <p>Phone: 03330115030</p>
            </div>

            <div className="meta-row">
              <span>Last Reviewed: 02/03/2023</span>
              <span>Last Amended: 02/03/2023</span>
            </div>

            <p className="body-text">
              We are committed to ensuring that your privacy is protected. We comply with the UK General Data
              Protection Regulation (&ldquo;UK GDPR&rdquo;) and all national implementing laws, regulations and
              secondary legislation as amended or updated from time to time in the UK (&ldquo;Data Protection
              Legislation&rdquo;). We are the data controller of data you pass to us pursuant to this policy.
            </p>

            <p className="body-text">
              This Privacy Policy sets out how we collect personal information from you and how the personal
              information you provide will be processed by us. By visiting our website at www.rumax.co.uk, you
              are accepting and consenting to the practices described in this Privacy Policy. If you do not
              consent, please do not submit any personal data to us.
            </p>
          </div>
        </section>

        {/* INFORMATION YOU GIVE */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>Information You Give RUMAX LIMITED</h2>
            <p className="lead">
              You may give us information about you by completing enquiry forms on the website or by requesting
              marketing information. The information you give us may include:
            </p>
            <ul className="bullets narrow">
              <li>Your name</li>
              <li>Email address</li>
              <li>Address/location</li>
              <li>Phone number</li>
            </ul>
          </div>
        </section>

        {/* INFORMATION COLLECTED */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>Information RUMAX LIMITED Collects About You</h2>
            <p className="lead">
              Each time you visit our website, we may automatically collect the following information:
            </p>
            <ul className="bullets">
              <li>
                <b>Technical information:</b> IP address, login information, browser type and version, time zone
                setting, browser plug-in types and versions, operating system and platform
              </li>
              <li>
                <b>Visit information:</b> Full URLs, clickstream data, products viewed or searched for, page
                response times, website errors, length of visits, page interaction information, and methods
                used to browse away from the page
              </li>
            </ul>
          </div>
        </section>

        {/* COOKIES */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>Cookies</h2>
            <p className="lead">
              Our website uses cookies to distinguish you from other users, which helps us provide you with a
              good experience and allows us to improve our site.
            </p>
          </div>
        </section>

        {/* HOW WE USE YOUR INFORMATION */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>How We Use Your Information</h2>
            <p className="lead">We will use this information to:</p>
            <ul className="bullets">
              <li>Fulfil our obligations under any contract with you or a service user you represent</li>
              <li>Send you newsletters and marketing information if you have consented</li>
              <li>Notify you of products and services that may interest you</li>
              <li>Monitor website usage and provide statistics for improving our services</li>
            </ul>
          </div>
        </section>

        {/* OTHER PURPOSES */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>Other Purposes We Use Your Information For</h2>
            <p className="lead">We may also use your information for the following purposes:</p>
            <ul className="bullets">
              <li>Enhancing, modifying, personalising or improving our services and communications</li>
              <li>Identifying and preventing fraud</li>
              <li>Enhancing the security of our network and information systems</li>
              <li>Understanding how people interact with our websites</li>
              <li>Administering the website and carrying out data analysis, troubleshooting and testing</li>
              <li>Determining the effectiveness of promotional campaigns and advertising</li>
            </ul>
          </div>
        </section>

        {/* HOW SAFE */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>How Safe Is Your Information?</h2>
            <div className="safe-card">
              <div className="safe-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M6 11V8a6 6 0 0 1 12 0v3" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  <rect x="4" y="11" width="16" height="10" rx="2" stroke="#fff" strokeWidth={2} />
                </svg>
              </div>
              <div className="safe-text">
                <p>
                  Protecting your security and privacy is important to us and we make every effort to secure
                  your information and maintain your confidentiality in accordance with Data Protection
                  Legislation.
                </p>
                <p>
                  The website is protected by various levels of security technology, which are designed to
                  protect your information from any unauthorised or unlawful access, processing, accidental
                  loss, destruction and damage.
                </p>
                <p>
                  Where we have given you (or where you have chosen) a password which enables you to access
                  certain parts of the website, you are responsible for keeping this password confidential. We
                  ask you not to share a password with anyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YOUR RIGHTS */}
        <section className="gdpr-section">
          <div className="gdpr-inner">
            <h2>Your Rights In Respect Of Your Data</h2>
            <div className="rights-grid">
              <div className="right-card">
                <span className="num">01</span>
                <div className="right-icon blue">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth={2} />
                    <path d="M12 8v4l3 2" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </div>
                <div className="right-body">
                  <h3>Right to Access</h3>
                  <p>
                    You have the right to access or rectify the information we hold about you. We will process
                    your request within one month of receipt.
                  </p>
                </div>
              </div>

              <div className="right-card">
                <span className="num">02</span>
                <div className="right-icon green">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16v16H4z" stroke="#fff" strokeWidth={2} />
                    <path d="M8 10h8M8 14h5" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </div>
                <div className="right-body">
                  <h3>Right to Object</h3>
                  <p>
                    You have the right to withdraw your consent to the processing of your personal data at any
                    time.
                  </p>
                </div>
              </div>

              <div className="right-card">
                <span className="num">03</span>
                <div className="right-icon orange">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3v12m0 0-4-4m4 4 4-4"
                      stroke="#fff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </div>
                <div className="right-body">
                  <h3>Right to Data Portability</h3>
                  <p>
                    You can request that your information be transmitted directly to another data controller.
                  </p>
                </div>
              </div>

              <div className="right-card">
                <span className="num">04</span>
                <div className="right-icon purple">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6 6 18" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </div>
                <div className="right-body">
                  <h3>Right to Erasure</h3>
                  <p>
                    You can request that your information is deleted or restrict/object to the processing of
                    your information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARKETING PREFERENCES */}
        <section className="gdpr-section ">
          <div className="gdpr-inner">
            <h2>Marketing Preferences</h2>
            <p className="body-text">
              If you wish to have your information removed from our database or if you do not want us to
              contact you for marketing purposes, please click the &ldquo;Unsubscribe&rdquo; option in any
              email we send to you or contact us directly.
            </p>
            <p className="body-text">
              We will not share your marketing preferences with any third party without your consent.
            </p>
          </div>
        </section>
        <section class="gdpr-section">
        <div class="wrap section-inner">
          <h2>Third Party Sites</h2>
          <div class="text-block">
            <p class="body-text">Our website may contain links to third party websites, including websites via which you are able to purchase products and services. They are provided for your convenience only and we do not check, endorse, approve or agree with such third-party websites nor the products and/or services offered and sold on them.</p>
            <p class="body-text">We have no responsibility for the content, product and/or services of the linked websites. Please ensure that you review all terms and conditions of website use and the Privacy Policy of any such third-party websites before use and before you submit any personal data to those websites.</p>
          </div>
        </div>
      </section>
      <section class="gdpr-section gdpr-section-last">
        <div class="wrap section-inner">
          <h2>Complaints &amp; Supervisory Authority</h2>
          <div class="body-text">
            <p class="body-text">If you have any complaints about our use of your personal data, please contact us. You also have the right to complain to the relevant supervisory authority in your jurisdiction.</p>
            <p class="body-text">In the UK, the supervisory authority is the Information Commissioner's Office (ICO).</p>
          </div>
          <a class="ico-link" href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
            Visit ICO Website
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 3H15V10.5" stroke="#1B2280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M15 3L7.5 10.5" stroke="#1B2280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12.75 9.75V13.5C12.75 14.3284 12.0784 15 11.25 15H4.5C3.67157 15 3 14.3284 3 13.5V6.75C3 5.92157 3.67157 5.25 4.5 5.25H8.25" stroke="#1B2280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </section>
      </article>

      
    </PageShell>
  );
}