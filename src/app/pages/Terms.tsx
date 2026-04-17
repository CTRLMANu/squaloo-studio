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
                We are Manuel Luigi Ossanna ("<strong className="text-white">Company</strong>," "<strong className="text-white">we</strong>," "<strong className="text-white">us</strong>," "<strong className="text-white">our</strong>"), a company registered in France at 43 Rue du Caire, Paris, Île-de-France 75002.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                We operate the mobile application <strong className="text-white">Hue Of Year</strong> (the "<strong className="text-white">App</strong>"), as well as any other related products and services that refer or link to these legal terms (the "<strong className="text-white">Legal Terms</strong>") (collectively, the "<strong className="text-white">Services</strong>").
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Hue of Year provides daily logging for mood, energy, a short win, and a next-day task. It surfaces that data in a year calendar and related views (including streaks and optional reflection summaries branded as Echo in the app). It ships with a widget extension that reads shared app group data for glanceable summaries on the home screen. Optional Pro unlocks gated features; the app also includes onboarding, settings, appearance options, and optional app lock.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                You can contact us by phone at (+39) 348 517 9950, email at <a href="mailto:ossannam@icloud.com" className="text-purple-400 hover:text-purple-300 transition-colors">ossannam@icloud.com</a>, or by mail to 43 Rue du Caire, Paris, Île-de-France 75002, France.
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
                <li><a href="#refunds" className="hover:text-purple-300 transition-colors">REFUNDS POLICY</a></li>
                <li><a href="#prohibited" className="hover:text-purple-300 transition-colors">PROHIBITED ACTIVITIES</a></li>
                <li><a href="#ugc" className="hover:text-purple-300 transition-colors">USER GENERATED CONTRIBUTIONS</a></li>
                <li><a href="#license" className="hover:text-purple-300 transition-colors">CONTRIBUTION LICENSE</a></li>
                <li><a href="#mobile" className="hover:text-purple-300 transition-colors">MOBILE APPLICATION LICENSE</a></li>
                <li><a href="#sitemanage" className="hover:text-purple-300 transition-colors">SERVICES MANAGEMENT</a></li>
                <li><a href="#privacy" className="hover:text-purple-300 transition-colors">PRIVACY POLICY</a></li>
                <li><a href="#termination" className="hover:text-purple-300 transition-colors">TERM AND TERMINATION</a></li>
                <li><a href="#modifications" className="hover:text-purple-300 transition-colors">MODIFICATIONS AND INTERRUPTIONS</a></li>
                <li><a href="#law" className="hover:text-purple-300 transition-colors">GOVERNING LAW</a></li>
                <li><a href="#disputes" className="hover:text-purple-300 transition-colors">DISPUTE RESOLUTION</a></li>
                <li><a href="#corrections" className="hover:text-purple-300 transition-colors">CORRECTIONS</a></li>
                <li><a href="#disclaimer" className="hover:text-purple-300 transition-colors">DISCLAIMER</a></li>
                <li><a href="#liability" className="hover:text-purple-300 transition-colors">LIMITATIONS OF LIABILITY</a></li>
                <li><a href="#indemnification" className="hover:text-purple-300 transition-colors">INDEMNIFICATION</a></li>
                <li><a href="#userdata" className="hover:text-purple-300 transition-colors">USER DATA</a></li>
                <li><a href="#electronic" className="hover:text-purple-300 transition-colors">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
                <li><a href="#california" className="hover:text-purple-300 transition-colors">CALIFORNIA USERS AND RESIDENTS</a></li>
                <li><a href="#misc" className="hover:text-purple-300 transition-colors">MISCELLANEOUS</a></li>
                <li><a href="#contact" className="hover:text-purple-300 transition-colors">CONTACT US</a></li>
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

              <h3 className="text-xl mb-3 text-white">Your submissions</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Please review this section and the "<a href="#prohibited" className="text-purple-400 hover:text-purple-300 transition-colors">PROHIBITED ACTIVITIES</a>" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                <strong className="text-white">Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                <strong className="text-white">You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                <li>confirm that you have read and agree with our "<a href="#prohibited" className="text-purple-400 hover:text-purple-300 transition-colors">PROHIBITED ACTIVITIES</a>" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
                <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
                <li>warrant and represent that your Submissions do not constitute confidential information.</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.
              </p>
            </div>

            {/* 3. User Representations */}
            <div id="userreps" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">3. USER REPRESENTATIONS</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
              </p>
              <p className="text-white/70 leading-relaxed">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
              </p>
            </div>

            {/* 4. Products */}
            <div id="products" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">4. PRODUCTS</h2>
              <p className="text-white/70 leading-relaxed">
                All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
              </p>
            </div>

            {/* 5. Purchases and Payment */}
            <div id="purchases" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">5. PURCHASES AND PAYMENT</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We accept the following forms of payment:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-white/70">
                <li>App Store (Apple)</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">
                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in App Store currency (varies by country).
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
              </p>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
              </p>
            </div>

            {/* 6. Subscriptions */}
            <div id="subscriptions" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">6. SUBSCRIPTIONS</h2>

              <h3 className="text-xl mb-3 text-white">Billing and Renewal</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle is monthly or yearly, depending on the plan.
              </p>

              <h3 className="text-xl mb-3 text-white">Free Trial</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                We offer a 7-day free trial to new users who register with the Services. The account will be charged according to the user's chosen subscription at the end of the free trial.
              </p>

              <h3 className="text-xl mb-3 text-white">Cancellation</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Users cancel their subscription through their Apple ID account in the App Store settings. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at <a href="mailto:ossannam@icloud.com" className="text-purple-400 hover:text-purple-300 transition-colors">ossannam@icloud.com</a>.
              </p>

              <h3 className="text-xl mb-3 text-white">Fee Changes</h3>
              <p className="text-white/70 leading-relaxed">
                We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
              </p>
            </div>

            {/* 7. Refunds Policy */}
            <div id="refunds" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">7. REFUNDS POLICY</h2>
              <p className="text-white/70 leading-relaxed">
                Please review our Return Policy posted on the Services prior to making any purchases.
              </p>
            </div>

            {/* 8. Prohibited Activities */}
            <div id="prohibited" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">8. PROHIBITED ACTIVITIES</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                As a user of the Services, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
                <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
                <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
              </ul>
            </div>

            {/* 9. User Generated Contributions */}
            <div id="ugc" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">9. USER GENERATED CONTRIBUTIONS</h2>
              <p className="text-white/70 leading-relaxed">
                The Services does not offer users to submit or post content.
              </p>
            </div>

            {/* 10. Contribution License */}
            <div id="license" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">10. CONTRIBUTION LICENSE</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
              </p>
              <p className="text-white/70 leading-relaxed">
                By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
              </p>
            </div>

            {/* 11. Mobile Application License */}
            <div id="mobile" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">11. MOBILE APPLICATION LICENSE</h2>

              <h3 className="text-xl mb-3 text-white">Use License</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
              </p>

              <h3 className="text-xl mb-3 text-white">Apple and Android Devices</h3>
              <p className="text-white/70 leading-relaxed">
                The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor's terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.
              </p>
            </div>

            {/* 12. Services Management */}
            <div id="sitemanage" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">12. SERVICES MANAGEMENT</h2>
              <p className="text-white/70 leading-relaxed">
                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
              </p>
            </div>

            {/* 13. Privacy Policy */}
            <div id="privacy" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">13. PRIVACY POLICY</h2>
              <p className="text-white/70 leading-relaxed">
                We care about data privacy and security. Please review our{' '}
                <Link to="/hue-of-year/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in France. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in France, then through your continued use of the Services, you are transferring your data to France, and you expressly consent to have your data transferred to and processed in France.
              </p>
            </div>

            {/* 14. Term and Termination */}
            <div id="termination" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">14. TERM AND TERMINATION</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </p>
              <p className="text-white/70 leading-relaxed">
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
              </p>
            </div>

            {/* 15. Modifications and Interruptions */}
            <div id="modifications" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">15. MODIFICATIONS AND INTERRUPTIONS</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
              </p>
              <p className="text-white/70 leading-relaxed">
                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
              </p>
            </div>

            {/* 16. Governing Law */}
            <div id="law" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">16. GOVERNING LAW</h2>
              <p className="text-white/70 leading-relaxed">
                These Legal Terms are governed by and interpreted following the laws of Germany, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country of residence. Manuel Luigi Ossanna and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Bavaria, which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in Germany, or in the EU country in which you reside.
              </p>
            </div>

            {/* 17. Dispute Resolution */}
            <div id="disputes" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">17. DISPUTE RESOLUTION</h2>
              <p className="text-white/70 leading-relaxed">
                The European Commission provides information on{' '}
                <a href="https://consumer-redress.ec.europa.eu/index_en" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">consumer redress</a>, including a list of dispute resolution bodies by country, which you can access. If you would like to bring this subject to our attention, please contact us.
              </p>
            </div>

            {/* 18. Corrections */}
            <div id="corrections" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">18. CORRECTIONS</h2>
              <p className="text-white/70 leading-relaxed">
                There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
              </p>
            </div>

            {/* 19. Disclaimer */}
            <div id="disclaimer" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">19. DISCLAIMER</h2>
              <p className="text-white/70 leading-relaxed">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
              </p>
            </div>

            {/* 20. Limitations of Liability */}
            <div id="liability" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">20. LIMITATIONS OF LIABILITY</h2>
              <p className="text-white/70 leading-relaxed">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
            </div>

            {/* 21. Indemnification */}
            <div id="indemnification" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">21. INDEMNIFICATION</h2>
              <p className="text-white/70 leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
              </p>
            </div>

            {/* 22. User Data */}
            <div id="userdata" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">22. USER DATA</h2>
              <p className="text-white/70 leading-relaxed">
                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
              </p>
            </div>

            {/* 23. Electronic Communications */}
            <div id="electronic" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
              <p className="text-white/70 leading-relaxed">
                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
              </p>
            </div>

            {/* 24. California Users */}
            <div id="california" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">24. CALIFORNIA USERS AND RESIDENTS</h2>
              <p className="text-white/70 leading-relaxed">
                If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
              </p>
            </div>

            {/* 25. Miscellaneous */}
            <div id="misc" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">25. MISCELLANEOUS</h2>
              <p className="text-white/70 leading-relaxed">
                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
              </p>
            </div>

            {/* 26. Contact Us */}
            <div id="contact" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl mb-4 text-white">26. CONTACT US</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4 text-white/70 space-y-1">
                <p><strong className="text-white">Manuel Luigi Ossanna</strong></p>
                <p>43 Rue du Caire</p>
                <p>Paris, Île-de-France 75002</p>
                <p>France</p>
                <p className="pt-2">Phone: (+39) 348 517 9950</p>
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
