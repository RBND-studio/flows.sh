import { Flex } from "@flows/styled-system/jsx";
import { bulletCss, headingCss, paragraphCss, Section, ulCss } from "components/ui";
import { type Metadata } from "next";
import type { ReactElement } from "react";
import { Text } from "ui";

import { type Subprocessor, SubprocessorsTable } from "./table";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "Exploring Flows’s legal documents? Let us know if we can help. Get in touch at hello@flows.sh",
};

const Page = (): ReactElement => {
  return (
    <Section maxWidth="580px!" py="space40" md={{ py: "space80" }}>
      <Flex mb="space40" flexDirection="column" gap="space12" maxW="800px">
        <Text align="center" as="h1" variant="title4xl">
          Data Processing Agreement
        </Text>
      </Flex>
      <Text className={paragraphCss} variant="bodyM">
        This Data Processing Agreement (“DPA“) forms part of the RBND Terms of Service and/or the
        Master Service Agreement (“Agreement“) between RBND studio s.r.o. (“RBND“) and Customer
        identified in the Agreement (referred to as the “Parties“ or individually as the “Party“),
        and sets forth the Parties obligations with respect to the Processing of Personal Data
        (definitions below).
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        By executing the Agreement, Customer enters into this DPA on behalf of itself and, to the
        extent required under applicable Data Protection Laws (defined below), in the name and on
        behalf of its Affiliates (defined below), if any.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        1. Definitions
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        All capitalized terms not otherwise defined herein shall have the meaning set forth in the
        Agreement or the Data Protection Law, as applicable. In the event of a conflict between the
        terms of the Agreement and this DPA, the DPA will prevail.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.1. “Data Protection Law“ means all applicable laws, regulations, and other legally binding
        requirements in any jurisdiction relating to privacy, data protection, data security, breach
        notification, or the Processing of Personal Data, including, to the extent applicable, the
        General Data Protection Regulation, Regulation (EU) 2016/679 (“GDPR“), the United Kingdom
        Data Protection Act of 2018 (“UK Privacy Act“), the California Consumer Privacy Act, Cal.
        Civ. Code § 1798.100 et seq. and associated amendments and regulations thereto (“CCPA“). For
        the avoidance of any doubt, if RBND’s Processing activities involving Personal Data are not
        within the scope of a given Data Protection Law, such law is not applicable for purposes of
        this DPA.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.2. “EU SCCs“ means the Standard Contractual Clauses issued pursuant to Commission
        Implementing Decision (EU) 2021/914 of 4 June 2021 on standard contractual clauses for the
        transfer of personal data to third countries pursuant to Regulation (EU) 2016/679 of the
        European Parliament and of the Council (available as of the DPA effective date at{" "}
        <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj" target="_blank" rel="noopener">
          https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj
        </a>{" "}
        or any subsequent link published by the competent EU authorities).
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.3. “Personal Data“ includes “personal data,“ “personal information,“ “personally
        identifiable information,“ and similar terms, and such terms will have the same meaning as
        defined by applicable Data Protection Laws, that are Processed by RBND on behalf of Customer
        in the course of providing RBND Platform and other Services under the Agreement.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.4. “UK Addendum“ means the International Data Transfer Addendum to the EU Commission
        Standard Contractual Clauses, as published by the UK Information Commissioner’s Office and
        in force as of 21 March 2022.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        2. Roles and Details of Processing
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        2.1. Customer as a Controller
      </Text>

      <Text className={paragraphCss} variant="bodyM">
        2.1.1. Under this DPA, Customer acts as a Controller or Processor (as applicable) of
        Personal Data and RBND will act as a (Sub)Processor or Service Provider (as defined in and
        as applicable under the Data Protection Laws) and will Process Personal Data in connection
        with the RBND Platform and other Services solely to fulfill RBND obligations to Customer
        under the Agreement, including this DPA; on Customer’s behalf, pursuant to Customer’s
        documented instructions; and in compliance with applicable Data Protection Laws (“Permitted
        Purpose“).
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.1.2. The scope, nature, purposes, and duration of the Processing, the types of Personal
        Data Processed, and the Data Subjects concerned are set forth in this DPA, including without
        limitation Schedule C to this DPA.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.1.3. It is Customer’s responsibility to ensure that Customer’s instructions comply with
        Data Protection Laws. RBND is not responsible for determining what laws or regulations apply
        to Customer’s business, or for determining whether RBND Platform or other Services meet the
        requirements of such laws. Customer will ensure that Processing Personal Data in accordance
        with its instructions will not cause RBND to violate any law or regulation, including Data
        Protection Laws.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.1.4. Unless Parties mutually agree otherwise in writing, Customer shall not provide RBND
        any Personal Data for Processing that is subject to strict privacy regimes outside of the
        scope of this DPA, including but not limited to Family Educational Rights and Privacy Act,
        20 U.S.C. § 1232g (FERPA), relating to criminal convictions and offenses or Personal Data
        collected or otherwise Processed by Customer subject to or in connection with FBI Criminal
        Justice Information Services or the related Security Policy; constituting protected health
        information subject to the Health Insurance Portability and Accountability Act of 1996
        (HIPAA) or data subject to Payment Card Industry Data Security Standard (PCI-DSS).
      </Text>
      <Text as="h3" className={headingCss} variant="titleL">
        2.2. RBND as an Independent Controller
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.2.1 RBND Processes some Personal Data as an independent Controller. RBND conducts such
        Processing outside of the scope of this DPA, however, in compliance with Data Protection
        Laws, and in a manner consistent with the purposes outlined in the RBND Privacy Policy.
        Those exhaustive purposes are restated here for transparency and convenience:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.2.1. user accounts provisioning, management and removal, customer support; account,
        billing, and customer relationship management and related customer correspondence;
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.2.2. complying with and resolving legal obligations, including responding to Data Subject
        requests for Personal Data Processed by RBND as Controller (for example, website data), tax
        requirements, agreements, and disputes;
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.2.3. abuse detection, prevention, and protection, and scanning to detect violations of
        RBND Terms and Conditions
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        2.2.4. creating aggregated statistical data for internal reporting, financial reporting,
        revenue planning, capacity planning, and forecast modeling (including product strategy).
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        3. Confidentiality of Processing
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        3.1. RBND shall ensure that any person it authorizes to Process the Personal Data (including
        RBND affiliates and their staff, agents, and subcontractors) (an “Authorized Person“) shall
        be subject to a strict duty of confidentiality (whether a contractual duty or a statutory
        duty), and shall not permit any person to Process the Personal Data who is not under such a
        duty of confidentiality.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        3.2. RBND shall ensure that only Authorized Persons will Process the Personal Data, and that
        such Processing shall be limited to the extent necessary to achieve the Permitted Purpose.
        RBND accepts responsibility for any breach of this DPA caused by the act, error or omission
        of an Authorized Person.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        4. Security Measures
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        4.1. RBND has adopted a variety of administrative, technical, physical, and organizational
        measures designed to protect the RBND Platform against accidental or unlawful destruction,
        loss, alteration, disclosure or access (collectively the “Security Measures“).
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        4.2. RBND will maintain its Security Measures to provide a level of protection that is
        appropriate to the risks concerning confidentiality, integrity, availability, and resilience
        of our systems and the RBND Platform while also taking into account the state of the art,
        implementation costs, the nature, scope, and purposes of Processing, as well as the
        probability of occurrence and the severity of the risk to the rights and freedoms of Data
        Subjects. RBND Security Measures are described in Schedule D.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        5. Security Incidents
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        5.1. RBND will notify Customer without undue delay (and in any event within 72 hours) of any
        known breach of security leading to the accidental or unlawful destruction, loss,
        alteration, unauthorized disclosure of, or access to, Personal Data Processed by RBND on
        Customer’s behalf (a “Security Incident“). For clarity, the term Security Incident always
        excludes (a) unsuccessful attempts to penetrate computer networks or servers maintained by
        or for RBND; and (b) immaterial incidents that occur on a routine basis, such as security
        scans, brute-force attempts or “denial of service“ attacks.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        5.2. RBND will also provide reasonable assistance to Customer in its compliance with
        Customer’s Security Incident-related obligations, including without limitation by:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        5.2.1. taking steps to mitigate the effects of the Security Incident and reduce the risk to
        Data Subjects whose Personal Data was involved (such steps to be determined by RBND in its
        sole discretion)
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        5.2.2. providing Customer with the following information, to the extent known:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (i) the nature of the Security Incident, including, where possible, how the Security
        Incident occurred, the categories and approximate number of Data Subjects concerned, and the
        categories and approximate number of Personal Data records concerned
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (ii) the likely consequences of the Security Incident
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (iii) the measures we have taken or propose to take to address the Security Incident,
        including where appropriate measures to mitigate its possible adverse effects. Where, and in
        so far as, it is not possible to provide all information at the same time, the initial
        notification will contain the information then available and further information will, as it
        becomes available, subsequently be provided without undue delay.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        5.3. RBND’s notification of or response to a Security Incident under this Section is not an
        acknowledgement of any fault or liability.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        5.4. Customer is solely responsible for complying with its obligations under any incident
        notification laws. Customer must notify RBND promptly about any possible misuse of its user
        accounts or authentication credentials, or any Security Incident related to RBND Platform or
        other Services provided by RBND under the Agreement.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        6. Subprocessors
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        6.1. Customer authorizes RBND to engage third parties to Process Personal Data
        (“Subprocessors“) listed in Schedule E (“RBND Subprocessor(s)“), provided that RBND provides
        at least ten (10) days’ prior written notice of the addition of any Subprocessor (including
        the categories of Personal Data Processed, details of the Processing it performs or will
        perform, and the location of such Processing) by means of a notice on the RBND Subprocessors
        website.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        6.2. RBND encourages Customer to periodically review the RBND Subprocessors website for the
        latest information on RBND Subprocessors, and especially before Customer provides RBND with
        any Personal Data. RBND will provide a written notification to Customer of any new
        Subprocessor appointment (10) days before the new Subprocessor is authorized to Process
        Personal Data. Customer has the opportunity to object to such changes within ten (10) days
        after written notification. Suppose Customer objects to RBND’s appointment of a new
        Subprocessor on reasonable grounds relating to the protection of its Personal Data. In that
        case, the Parties will promptly confer and discuss alternative arrangements to enable RBND
        to continue Processing of Personal Data.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        6.3. In all cases, RBND shall impose in writing the same data protection obligations on any
        Subprocessor it appoints as those provided for by this DPA and RBND shall remain liable for
        any breach of this DPA that is caused by an act, error or omission of its Subprocessor to
        the extent it is liable for its own acts and omissions under the Agreement.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        7. International Data Transfers
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        7.1. Customer appoints RBND to transfer Personal Data to the United States or any other
        country in which RBND or its Subprocessors operate as specified hereunder, and to store and
        Process Personal Data for Permitted Purpose, subject to the safeguards below and described
        elsewhere in this DPA.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        7.2. Where RBND engages in an onward transfer of Personal Data, RBND shall ensure that,
        where legally required, a lawful data transfer mechanism is in place prior to transferring
        Personal Data from one country to another.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        7.3. To the extent legally required, the EU SCCs form part of this DPA and will be deemed
        completed as set forth in Schedule A. In the event of a conflict between the terms of the EU
        SCCs and this DPA, the EU SCCs will prevail.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        7.4. If, as a Controller, the Customer is situated in the United Kingdom (UK), the EU SCCs
        shall apply together with the UK Addendum to the SCCs, as specified in Schedule A, in
        relation to the transfer of Personal Data from the United Kingdom and shall be incorporated
        in this DPA.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        8. Auditing Compliance
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        8.1. Upon Customer’s written request, and no more than once per twelve (12) calendar months,
        RBND will provide Customer with its most recent security review reports and/or applicable
        certifications for the RBND Platform and provide reasonable assistance and information to
        Customer to understand the information in such reports.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        8.2. If Customer has a reasonable objection that the information provided is not sufficient
        to demonstrate RBND compliance with this DPA, Customer may conduct an audit, or select a
        mutually-agreed upon third-party to conduct an audit, of RBND practices related to
        Processing Personal Data in compliance with this DPA, at Customer’s sole expense (an
        “Audit“). General compliance Audits shall occur not more than once every twelve (12)
        calendar months.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        8.3. To the extent you use a third-party representative to conduct the Audit, Customer will
        ensure that such third-party representative is bound by obligations of confidentiality no
        less protective than those contained in this DPA and the Agreement. Customer will provide
        RBND with at least thirty (30) days prior written notice of its intention to conduct an
        Audit. Before any Audit, the Parties will mutually agree upon the scope, timing, and
        duration of the Audit, as well as the RBND reimbursement rate for which Customer will be
        responsible. All reimbursement rates will be reasonable, taking into account the resources
        expended by or on behalf of RBND.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        8.4. Customer and its third-party representatives will conduct Audits:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (i) acting reasonably, in good faith, and in a proportional manner, taking into account the
        nature and complexity of the RBND Platform; and
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (ii) in a manner that will result in minimal disruption to RBND’s business operations and
        during RBND’s regular business hours.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Neither Customer nor its third-party representatives will be entitled to receive data or
        information of other RBND customers or any other RBND Confidential Information that is not
        directly relevant for the authorized purposes of the Audit in accordance with this
        provision.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        8.5. Customer will promptly provide RBND with the Audit results upon completion of the
        Audit. All Audit related materials will be considered “Confidential Information“ subject to
        the confidentiality provisions of the Agreement.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        9. Personal Data Retention; Return and Destruction
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        9.1. RBND will retain Personal Data in accordance with its standard data retention policies
        and procedures. Customer shall ensure to retrieve all Personal Data before termination or
        expiration of the Agreement. If Customer deletes its user account or following the
        termination of Agreement, RBND will have no obligation to maintain or provide Customer with
        copies of its Personal Data.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        9.2. Except to the extent required otherwise by Data Protection Laws, RBND will, at
        Customer’s choice and upon its written request, return to Customer or securely destroy all
        Personal Data upon such request or at termination or expiration of the Agreement. RBND will
        provide Customer with a certificate of destruction only upon Customer’s written request. In
        case of local laws applicable to RBND that prohibit the return or deletion of Personal Data,
        RBND warrants that it will continue to ensure compliance with this DPA and will only Process
        the Personal Data to the extent and for as long as required under such local laws.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        10. Data Subject Requests
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        10.1. If RBND receives any requests from Data Subjects seeking to exercise any rights
        afforded to them under Data Protection Laws regarding their Personal Data, and to the extent
        legally permitted, will promptly notify Customer or refer the Data Subjects to Customer for
        handling. Such requests related to Personal Data may include: access, rectification,
        restriction of Processing, erasure (“right to be forgotten“), data portability, objection to
        the Processing, or to not be subject to automated individual decision making (each, a “Data
        Subject Request“).
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        10.2. RBND will not respond to such Data Subject Requests itself, and Customer authorizes
        RBND to redirect the Data Subject Request as necessary to Customer for handling. If Customer
        is unable to directly respond to a Data Subject Request made by a Data Subject itself, RBND
        will, upon your request, provide commercially reasonable efforts to assist Customer in
        responding to the Data Subject Request, to the extent RBND is legally permitted to do so and
        the response to such Data Subject Request is required under Data Protection Laws.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        10.3. To the extent legally permitted, Customer will be responsible for any costs arising
        from RBND’s provision of this additional support to assist Customer with a Data Subject
        Request.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        11. Data Protection Impact Assessment
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        11.1. RBND will provide reasonable assistance to and cooperation with the other party for
        their performance of a data protection impact assessment or privacy impact assessment of
        Processing or proposed Processing activities, when required by applicable Data Protection
        Laws.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        12. General Cooperation to Remediate
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        12.1. If RBND believes or becomes aware that (i) its Processing of the Personal Data is
        likely to result in a high risk to the data protection rights and freedoms of Data Subjects;
        (ii) it can no longer meet its obligations under this DPA or applicable Data Protection
        Laws; or (iii) in its opinion an instruction from Customer infringes applicable Data
        Protection Laws; it shall promptly inform Customer of the same and await Customer’s further
        instructions. RBND shall, taking into account the nature of Processing and the information
        available to RBND, provide Customer with all such reasonable and timely assistance as
        Customer may require in order to conduct a data protection impact assessment, and, if
        necessary, to consult with its relevant data protection authority.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        12.2. Each Party shall promptly notify the other Party of any proceedings, in particular
        administrative or court proceedings, relating to Personal Data Processing hereunder, and of
        any administrative decision or judgment concerning the Processing of that Personal Data, as
        well as of any inspections pertaining to Personal Data Processing.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        12.3. In the event that Data Protection Law, or a data protection authority or regulator,
        provides that the transfer or Processing of Personal Data under this DPA is no longer lawful
        or otherwise permitted, then the Parties shall agree to remediate the Processing (by
        amendment to this DPA or otherwise) in order to meet the necessary standards or
        requirements.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        13. Representations and Warranties; Liability
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        13.1. Customer represents and warrants that it is authorized to enter into this DPA, issue
        instructions, and make and receive any communications or notifications in relation to this
        DPA on behalf of Customer Affiliates. Customer further represents and guarantees that it has
        acquired all necessary consents from the Data Subjects for the Processing of their Personal
        Data or is subject to any other lawful basis under the applicable Data Protection Laws.
        Customer is fully responsible for compliance of the instructions, requests and
        recommendations issued to RBND with the Permitted Purpose of the Processing and any
        applicable Data Protection Laws.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        13.2. Each Party represents, warrants, and covenants that it understands and will comply
        with the restrictions and obligations set forth in this DPA. Each Party further represents,
        warrants, and covenants that it will comply with all Data Protection Laws applicable to such
        Party in its role as Data Controller, Business, Data Processor, Service Provider, or
        Subprocessor (as applicable under Data Protection Laws).
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        13.3. Customer agrees to indemnify and hold RBND harmless against all claims, actions,
        third-party claims, losses, damages and expenses incurred by RBND in its capacity as
        Processor of the Personal Data of the Customer arising from (i) any Security Incident in
        terms of this Agreement if such Security Incident was caused by the Customer or (ii) any
        negligent act or omission by Customer in the exercise of the rights granted to it under the
        Privacy Protection Law and arising directly or indirectly out of or in connection with a
        breach of this DPA.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        13.4. Except for Customer’s indemnification obligations hereunder, each Party’s liability
        arising out of or related to this DPA is subject to the liability limitation provisions of
        the Agreement, and any reference in such section to the liability of a Party means the
        aggregate liability of that Party under the Agreement and this DPA together.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        14. Final Provisions
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        14.1. This DPA is effective from the date of its execution or from the Effective Date of the
        Agreement, which incorporates the DPA. The obligations placed upon RBND under this DPA shall
        survive so long as RBND and/or its Subprocessors Process Personal Data as described herein
        and/or under the terms of the Agreement.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        14.2. RBND may update this DPA from time to time as laws, regulations, and industry
        standards evolve, or as RBND makes changes to its business or the RBND Platform.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        14.3. If RBND makes changes that materially change the Parties’ rights or obligations under
        this DPA, RBND will provide additional notice in accordance with applicable legal
        requirements, such as via our website or through the RBND Platform. By continuing to access
        and use the RBND Platform and other Services after the “last updated“ date of the revised
        DPA, Customer agrees to be bound by the revised DPA.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        14.4. If any provision hereof is deemed to be invalid or unenforceable for any reason, all
        other provisions shall remain in force and the Parties shall be obliged to replace such
        invalid (unenforceable) provisions at the request of either Party with a provision which is
        valid and the economic effect of which is as close as possible to the economic effect of the
        replaced provision.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Schedules: Schedule A: EU SCCs & UK Addendum Schedule B: CCPA Additional Terms Schedule C:
        Details of Processing Schedule D: Security Measures Schedule E: List of RBND Subprocessors
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Schedule A: EU SCCs and UK Addendum
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Article 46 of the GDPR requires that a Processor that transfers data outside of the EEA to a
        non-adequate country must utilize a safeguard.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Therefore, where:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (a) Customer is not established in the EU and Personal Data Processing by Customer is not
        subject to GDPR (pursuant to Article 3(2) thereof)
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (b) GDPR applies to international data transfer from EEA to countries outside the EEA (where
        RBND is involved in Processing data within the EEA on behalf of Customer)
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (c) an international transfer of Personal Data cannot take place on the basis of an adequacy
        decision pursuant to Art 45 (3) GDPR;
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Parties will comply with the obligations in the EU SCCs, which shall form an integral part
        of this Addendum. Any undefined capitalized terms used in this Schedule A have the meanings
        assigned to such terms in the EU SCCs.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        For the purposes of EU Standard Contractual Clauses:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.1. Module Four of the EU SCCs will apply.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.2. The docking option under Clause 7 (Optional - Docking Clause) will not apply.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.3. Clause 17 (Governing law) shall be completed as follows: “These Clauses shall be
        governed by the law of a country allowing for third-party beneficiary rights. The Parties
        agree that this shall be the law of the Czech Republic.“
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        1.4. Clause 18 (Choice of forum and jurisdiction), shall be completed as follows: “Any
        dispute arising from these Clauses shall be resolved by the courts of the Czech Republic.“
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Annex I(A): List of Parties
      </Text>

      <Text as="h4" className={headingCss} variant="titleM">
        Data exporter:
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>Name: RBND studio s.r.o.</li>
        <li className={bulletCss}>Address: č.p. 182, 29476 Hlavenec</li>
        <li className={bulletCss}>
          Contact person’s name, position and contact details: RBND Privacy Team, hello@flows.sh
        </li>
        <li className={bulletCss}>
          Activities relevant to the data transferred under these Clauses: Processing necessary to
          provide the RBND Platform and other Services by RBND to Customer and for any disclosures
          of Personal Data in accordance with the Agreement.
        </li>
        <li className={bulletCss}>Role: Processor or Subprocessor, as applicable</li>
      </ul>

      <Text as="h4" className={headingCss} variant="titleM">
        Data importer:
      </Text>
      <ul className={ulCss}>
        <li className={bulletCss}>Name: Customer’s name identified in the Agreement</li>
        <li className={bulletCss}>Address: Customer’s address as provided in the Agreement</li>
        <li className={bulletCss}>
          Contact person’s name, position and contact details: As provided in Customer’s user
          account at RBND Platform
        </li>
        <li className={bulletCss}>
          Activities relevant to the data transferred under these Clauses: Processing necessary to
          provide the RBND Platform and other Services by RBND to Customer and for any disclosures
          of Personal Data in accordance with the Agreement.
        </li>
        <li className={bulletCss}>Role: Controller or Processor, as applicable</li>
      </ul>

      <Text as="h3" className={headingCss} variant="titleL">
        Annex I(B): Description of Processing & Transfer
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        As provided in Schedule C to this DPA.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        UK Addendum
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        In relation to Personal Data that is protected by the UK GDPR, the UK Addendum will apply,
        completed as follows:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (a) The Module 4 of the EU SCCs shall also apply to transfers of such Personal Data, subject
        to sub-section (b) below
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (b) Tables 1 to 3 of the UK Addendum shall be deemed completed with relevant information
        from the EU SCCs,completed as set out in Schedule A of this DPA, and the option “neither
        party“ shall be deemed checked in Table 4
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (c) The start date of the UK Addendum (as set out in Table 1) shall be the date of this DPA.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Schedule B: CCPA Additional Terms
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        If and to the extent RBND is Processing Personal Data within the scope of the CCPA on
        Customer’s behalf and in accordance with Customer’s documented instructions, RBND will not:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (a) sell the Personal Data as the term “selling“ is defined in the CCPA
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (b) share, rent, release, disclose, disseminate, make available, transfer, or otherwise
        communicate orally, in writing, or by electronic or other means, the Personal Data to a
        third party for cross-context behavioral advertising, whether or not for monetary or other
        valuable consideration, including transactions for cross-context behavioral advertising in
        which no money is exchanged
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (c) retain, use, or disclose the Personal Data for any purpose other than for the business
        purposes specified in this DPA and the Agreement, or as otherwise permitted by the CCPA
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (d) retain, use, or disclose the Personal Data outside of the direct business relationship
        with Customer
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (e) combine the Personal Data with personal information that it receives from or on behalf
        of a third party or collects from California residents, except that RBND may combine
        Personal Data to perform any business purpose as permitted by the CCPA or any regulations
        adopted or issued under the CCPA.
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Parties acknowledge and agree that the exchange of Personal Data between them does not
        constitute a “sale“ of Personal Data under the CCPA and does not form part of any monetary
        or other valuable consideration exchanged between them with respect to the Agreement or this
        DPA.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Schedule C: Details of Processing
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Categories of Data Subjects
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Data Subjects may be any individuals about which Customer collects and instructs RBND to
        Process Personal Data, including its prospects, customers, vendors, employees, contact
        persons, website users, etc.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Categories of Personal Data
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Categories of Personal Data collected are solely at Customer’s own discretion, resulting
        from Customer’s use of RBND Platform and other Services, and may include name, title,
        contact details, ID data, professional or personal life data, connection data, localization
        data, etc.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Sensitive Data Transferred
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Customer agrees not to transfer sensitive data without informing RBND. Transfer of sensitive
        data, if applicable and agreed upon in the Agreement, is done subject to additional
        safeguards that fully take into account the nature of such data and risks involved.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Frequency of the Transfer
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        Continuous during the term of the DPA.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Nature of Processing
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The nature of processing is storage and retrieval of Personal Data relating to the provision
        of RBND Platform and other Services by RBND to Customer.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        Purpose of Processing
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        As specified in Section 2.1.1. of the DPA above.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        The period for which the personal data will be retained, or, if that is not possible, the
        criteria used to determine that period
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        As described in Section 9 of the DPA.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        For transfers to (sub-) Processors, also specify subject matter, nature and duration of the
        processing
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Personal Data are transferred to further Subprocessors for the purposes of provision of
        infrastructure and/or software as a service in relation to the Permitted Purpose, for as
        long as needed in order to deliver the functionality.
      </Text>

      <Text as="h3" className={headingCss} variant="titleL">
        The period for which the personal data will be retained, or, if that is not possible, the
        criteria used to determine that period
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        The Personal Data are transferred to further Subprocessors for the purposes of provision of
        infrastructure and/or software as a service in relation to the Permitted Purpose, for as
        long as needed in order to deliver the functionality.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Schedule D: Security Measures
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        RBND shall implement appropriate technical and organizational measures in accordance with
        Data Protection Laws to ensure a level of security appropriate to the risk, which may
        include as appropriate:
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (a) the encryption of personal data
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (b) the ability to ensure the ongoing confidentiality, integrity, availability and
        resilience of Processing systems and services
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (c) the ability to restore the availability and access to personal data in a timely manner
        in the event of a physical or technical incident
      </Text>
      <Text className={paragraphCss} variant="bodyM">
        (d) a process for regularly testing, accessing and evaluating the effectiveness of technical
        and organizational measures for ensuring the security of the Processing.
      </Text>

      <Text as="h2" className={headingCss} variant="titleXl">
        Schedule E: List of RBND Subprocessors
      </Text>

      <SubprocessorsTable subprocessors={subprocessors} />

      <Text className={paragraphCss} variant="bodyM">
        Last updated: December 13, 2024
      </Text>
    </Section>
  );
};

const subprocessors: Subprocessor[] = [
  {
    name: "DigitalOcean, LLC",
    purpose: "Infrastructure",
    location: "US",
  },
  {
    name: "Lemon Squeezy, LLC",
    purpose: "Payment and subscription processing",
    location: "US",
  },
  {
    name: "Cloudflare, Inc.",
    purpose: "Cloud services",
    location: "Global",
  },
  {
    name: "Astrodon Corporation (Also known as Loops)",
    purpose: "Marketing and transactional emails",
    location: "US",
  },
  {
    name: "Slack Technologies, LLC",
    purpose: "Community",
    location: "US",
  },
  {
    name: "Better Stack, Inc.",
    purpose: "Log management and Service Monitoring",
    location: "EU",
  },
];

export default Page;
