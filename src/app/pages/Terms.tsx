import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
            <Scale className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terms and Conditions
            </span>
          </h1>
          <p className="text-xl text-white/70">
            Last updated: April 17, 2026
          </p>
        </motion.div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 space-y-8"
          >
            {/* Agreement */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 text-white">AGREEMENT TO OUR LEGAL TERMS</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                These Legal Terms are between you and Manuel Luigi Ossanna ("<strong className="text-white">we</strong>," "<strong className="text-white">us</strong>," or "<strong className="text-white">our</strong>") and govern your access to and use of the mobile application <strong className="text-white">Hue Of Year</strong> (the "<strong className="text-white">App</strong>"), as well as any other related products and services that refer or link to these Legal Terms (collectively, the "<strong className="text-white">Services</strong>").
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Hue of Year provides daily logging for mood, energy, a short win, and a next-day task. It surfaces that data in a year calendar and related views (including streaks and optional reflection summaries branded as Echo in the app). It ships with a widget extension that reads shared app group data for glanceable summaries on the home screen. Optional Pro unlocks gated features; the app also includes onboarding, settings, appearance options, and optional app lock.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Questions about these Legal Terms can be sent to <a href="mailto:ossannam@icloud.com" className="text-purple-400 hover:text-purple-300 transition-colors">ossannam@icloud.com</a>.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("<strong className="text-white">you</strong>"), and Manuel Luigi Ossanna, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong className="text-white">IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                We post updates on our website at the Privacy Policy and Terms of Service URLs linked in the app. The page shows when the document was last updated. Where practical, the new terms take effect after that date (or on the effective date stated on the page). Opening the app and using it after the effective date means you are using the app under the current terms available at those links.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
              </p>
              <p className="text-white/70 leading-relaxed">
                We recommend that you print a copy of these Legal Terms for your records.
              </p>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 text-white">TABLE OF CONTENTS</h2>
              <ol className="list-decimal pl-6 space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-purple-300 transition-colors">OUR SERVICES</a></li>
                <li><a href="#ip" className="hover:text-purple-300 transition-colors">INTELLECTUAL PROPERTY RIGHTS</a></li>
                <li><a href="#userreps" className="hover:text-purple-300 transition-colors">USER REPRESENTATIONS</a></li>
                <li><a href="#products" className="hover:text-purple-300 transition-colors">PRODUCTS</a></li>
                <li><a href="#purchases" className="hover:text-purple-300 transition-colors">PURCHASES AND PAYMENT</a></li>
                <li><a href="#subscriptions" className="hover:text-purple-300 transition-colors">SUBSCRIPTIONS</a></li>
                <li><a href="#prohibited" className="hover:text-purple-300 transition-colors">PROHIBITED ACTIVITIES</a></li>
                <li><a href="#mobile" className="hover:text-purple-300 transition-colors">MOBILE APPLICATION LICENSE</a></li>
                <li><a href="#privacy" className="hover:text-purple-300 transition-colors">PRIVACY POLICY</a></li>
                <li><a href="#termination" className="hover:text-purple-300 transition-colors">TERM AND TERMINATION</a></li>
                <li><a href="#modifications" className="hover:text-purple-300 transition-colors">MODIFICATIONS AND INTERRUPTIONS</a></li>
                <li><a href="#corrections" className="hover:text-purple-300 transition-colors">CORRECTIONS</a></li>
                <li><a href="#disclaimer" className="hover:text-purple-300 transition-colors">DISCLAIMER</a></li>
                <li><a href="#liability" className="hover:text-purple-300 transition-colors">LIMITATIONS OF LIABILITY</a></li>
                <li><a href="#indemnification" className="hover:text-purple-300 transition-colors">INDEMNIFICATION</a></li>
                <li><a href="#electronic" className="hover:text-purple-300 transition-colors">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
                <li><a href="#misc" className="hover:text-purple-300 transition-colors">MISCELLANEOUS</a></li>
                <li><a href="#contact" className="hover:text-purple-300 transition-colors">CONTACT</a></li>
              </ol>
            </div>

            {/* 1. Our Services */}
            <div id="services" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">1. OUR SERVICES</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
              </p>
              <p className="text-white/70 leading-relaxed">
                The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
            </div>

            {/* 2. Intellectual Property Rights */}
            <div id="ip" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">2. INTELLECTUAL PROPERTY RIGHTS</h2>

              <h3 className="text-xl mb-3 text-white">Our intellectual property</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.
              </p>

              <h3 className="text-xl mb-3 text-white">Your use of our Services</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Subject to your compliance with these Legal Terms, including the "<a href="#prohibited" className="text-purple-400 hover:text-purple-300 transition-colors">PROHIBITED ACTIVITIES</a>" section below, we grant you a non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                <li>access the Services; and</li>
                <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">
                solely for your personal, non-commercial use.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:ossannam@icloud.com" className="text-purple-400 hover:text-purple-300 transition-colors">ossannam@icloud.com</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
              </p>

            </div>

            {/* 3. User Representations */}
            <div id="userreps" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">3. USER REPRESENTATIONS</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
              </p>
              <p className="text-white/70 leading-relaxed">
                If you violate these Legal Terms, access to the Services may be suspended or terminated.
              </p>
            </div>

            {/* 4. Products */}
            <div id="products" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">4. PRODUCTS</h2>
              <p className="text-white/70 leading-relaxed">
                Optional paid features, subscriptions, and other in-app purchases are subject to availability through the App Store. They may be changed, discontinued, or repriced at any time.
              </p>
            </div>

            {/* 5. Purchases and Payment */}
            <div id="purchases" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">5. PURCHASES AND PAYMENT</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                All in-app purchases and subscriptions are processed through Apple's App Store.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Apple handles billing, payment methods, taxes, and the checkout flow under its own terms and policies. Prices shown in the App Store or in the app before confirmation are the prices that apply to your purchase, unless corrected for an obvious error.
              </p>
              <p className="text-white/70 leading-relaxed">
                By making a purchase, you authorize Apple to charge the payment method linked to your App Store account for the applicable amount.
              </p>
            </div>

            {/* 6. Subscriptions */}
            <div id="subscriptions" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">6. SUBSCRIPTIONS</h2>

              <h3 className="text-xl mb-3 text-white">Billing and Renewal</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Subscriptions renew automatically unless canceled through your Apple ID or App Store settings. Billing cycles may be monthly or yearly depending on the plan you select, and recurring billing is handled by Apple.
              </p>

              <h3 className="text-xl mb-3 text-white">Free Trial</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                A 7-day free trial may be offered to eligible new subscribers. Unless canceled before the trial ends, the selected subscription will begin automatically and Apple will charge the payment method linked to your App Store account.
              </p>

              <h3 className="text-xl mb-3 text-white">Cancellation</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Subscriptions can be managed and canceled through your Apple ID account in the App Store settings. Cancellation takes effect at the end of the current paid term. Questions can be sent to <a href="mailto:ossannam@icloud.com" className="text-purple-400 hover:text-purple-300 transition-colors">ossannam@icloud.com</a>.
              </p>

              <h3 className="text-xl mb-3 text-white">Fee Changes</h3>
              <p className="text-white/70 leading-relaxed">
                Subscription pricing may change from time to time. Any change will be reflected through the App Store and applied in accordance with applicable law and Apple's subscription rules.
              </p>
            </div>

            {/* 7. Prohibited Activities */}
            <div id="prohibited" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">7. PROHIBITED ACTIVITIES</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                As a user of the Services, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us in connection with your use of the Services.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Upload or transmit (or attempt to upload or transmit) viruses, Trojan horses, or other malicious material that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                <li>Engage in any automated use of the system, including using bots, scripts, data mining, robots, or similar data gathering and extraction tools without authorization.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another person or falsely suggest an affiliation with the Services.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
                <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
                <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
              </ul>
            </div>

            {/* 8. Mobile Application License */}
            <div id="mobile" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">8. MOBILE APPLICATION LICENSE</h2>

              <h3 className="text-xl mb-3 text-white">Use License</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
              </p>

              <h3 className="text-xl mb-3 text-white">Apple Devices</h3>
              <p className="text-white/70 leading-relaxed">
                The following terms apply when you use the App obtained from the Apple App Store (the "<strong className="text-white">App Distributor</strong>") to access the Services: (1) the license granted to you for the App is limited to a non-transferable license to use the application on an Apple-branded device that runs iOS and in accordance with the usage rules set forth in the App Store terms of service; (2) Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price, if any, for the App in accordance with its terms and policies, and to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App; and (4) Apple and its subsidiaries are third-party beneficiaries of these mobile application license terms and may enforce them against you as a third-party beneficiary.
              </p>
            </div>

            {/* 9. Privacy Policy */}
            <div id="privacy" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">9. PRIVACY POLICY</h2>
              <p className="text-white/70 leading-relaxed">
                Please review the{' '}
                <Link to="/hue-of-year/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</Link>. It describes privacy-related information for the Services, including limited subscription-related processing by Apple and RevenueCat where applicable. The Privacy Policy is incorporated into these Legal Terms.
              </p>
            </div>

            {/* 10. Term and Termination */}
            <div id="termination" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">10. TERM AND TERMINATION</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                These Legal Terms remain in full force and effect while you use the Services. Without limiting any other provision of these Legal Terms, access to the Services may be denied, restricted, suspended, or terminated at any time, without notice or liability, for any reason, including if you breach these Legal Terms or applicable law.
              </p>
              <p className="text-white/70 leading-relaxed">
                If access to the Services is terminated or suspended, you must stop using the Services. Appropriate legal action may also be taken where necessary.
              </p>
            </div>

            {/* 11. Modifications and Interruptions */}
            <div id="modifications" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">11. MODIFICATIONS AND INTERRUPTIONS</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
              </p>
              <p className="text-white/70 leading-relaxed">
                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
              </p>
            </div>

            {/* 12. Corrections */}
            <div id="corrections" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">12. CORRECTIONS</h2>
              <p className="text-white/70 leading-relaxed">
                There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
              </p>
            </div>

            {/* 13. Disclaimer */}
            <div id="disclaimer" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">13. DISCLAIMER</h2>
              <p className="text-white/70 leading-relaxed">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE OF THEM, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, ARE DISCLAIMED. NO WARRANTY OR REPRESENTATION IS MADE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT CONTENT MADE AVAILABLE THROUGH THE SERVICES WILL ALWAYS BE ACCURATE, COMPLETE, OR CURRENT.
              </p>
            </div>

            {/* 14. Limitations of Liability */}
            <div id="liability" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">14. LIMITATIONS OF LIABILITY</h2>
              <p className="text-white/70 leading-relaxed">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN APPLICABLE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THOSE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </div>

            {/* 15. Indemnification */}
            <div id="indemnification" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">15. INDEMNIFICATION</h2>
              <p className="text-white/70 leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including intellectual property rights; or (5) any harmful act toward another person arising from your use of the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with the defense of such claims. Reasonable efforts will be used to notify you of any such claim, action, or proceeding upon becoming aware of it.
              </p>
            </div>

            {/* 16. Electronic Communications */}
            <div id="electronic" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">16. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
              <p className="text-white/70 leading-relaxed">
                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
              </p>
            </div>

            {/* 17. Miscellaneous */}
            <div id="misc" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">17. MISCELLANEOUS</h2>
              <p className="text-white/70 leading-relaxed">
                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
              </p>
            </div>

            {/* 18. Contact */}
            <div id="contact" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">18. CONTACT</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                For questions about these Legal Terms or the Services, reach out at:
              </p>
              <div className="bg-white/5 rounded-lg p-4 text-white/70 space-y-1">
                <p><strong className="text-white">Manuel Luigi Ossanna</strong></p>
                <p>43 Rue du Caire</p>
                <p>Paris, Île-de-France 75002</p>
                <p>France</p>
                <p>Email: <a href="mailto:ossannam@icloud.com" className="text-purple-400 hover:text-purple-300 transition-colors">ossannam@icloud.com</a></p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
