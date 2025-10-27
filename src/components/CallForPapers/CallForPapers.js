import React, { useState } from 'react';
import './CallForPapers.css';

const topicDetails = [
  {
    title: "Track 1: Global and Comparative Cybersecurity Law",
    details: [
      "Evolution of international cybersecurity conventions and frameworks",
      "Harmonization of cyber laws across jurisdictions",
      "Challenges in cross-border cybercrime prosecution",
      "International cooperation and digital diplomacy in cyberspace",
      "Comparative analysis of cybersecurity laws (EU, US, India, ASEAN, etc.)",
      "The role of the United Nations and regional bodies in cyber governance"
    ]
  },
  {
    title: "Track 2: Cybercrime, Jurisdiction, and Enforcement",
    details: [
      "Jurisdictional complexities in transnational cybercrimes",
      "Extradition and mutual legal assistance treaties (MLATs)",
      "Cyber forensics and digital evidence in prosecution",
      "Role of Interpol, Europol, and CERT bodies in enforcement",
      "Procedural and evidentiary challenges in cyber litigation",
      "Case studies of international cybercrime enforcement"
    ]
  },
  {
    title: "Track 3: Data Protection, Privacy, and Digital Sovereignty",
    details: [
      "Comparative analysis of global data protection regimes (GDPR, DPDPA, etc.)",
      "Consent and individual autonomy in digital environments",
      "Cross-border data transfer and localization debates",
      "Government surveillance and right to privacy",
      "Digital sovereignty and national cybersecurity strategies",
      "Role of data protection authorities and regulatory oversight"
    ]
  },
  {
    title: "Track 4: Freedom of Expression, Content Moderation, and Cyber Governance",
    details: [
      "Online speech regulation and intermediary liability",
      "Balancing free speech with misinformation control",
      "Regulation of hate speech, defamation, and harmful content online",
      "Transparency in content moderation and algorithmic decision-making",
      "Platform responsibility and safe harbor principles",
      "Case laws shaping digital speech rights"
    ]
  },
  {
    title: "Track 5: Artificial Intelligence, Deepfakes, and Emerging Technologies",
    details: [
      "Legal accountability for AI-generated decisions",
      "Regulation of deepfake technologies and synthetic media",
      "Intellectual property and authorship in AI-generated works",
      "Liability frameworks for autonomous systems",
      "Ethical AI design and responsible innovation",
      "AI in cybersecurity – threat detection and governance"
    ]
  },
  {
    title: "Track 6: Blockchain, Cryptocurrency, and Digital Asset Regulation",
    details: [
      "Legal frameworks for blockchain governance",
      "Cryptocurrency regulation and compliance",
      "Smart contracts and enforceability challenges",
      "Decentralized finance (DeFi) and legal accountability",
      "Anti-money laundering (AML) and KYC compliance in crypto",
      "Blockchain in cybersecurity – trust, transparency, and resilience"
    ]
  },
  {
    title: "Track 7: Corporate Responsibility and Cybersecurity Compliance",
    details: [
      "Corporate obligations under data protection and cybersecurity laws",
      "Cyber risk management and compliance frameworks",
      "Corporate liability for data breaches and cyber negligence",
      "Privacy-by-design and ethical data governance",
      "Cyber insurance and risk mitigation models",
      "Role of corporate governance in ensuring cybersecurity accountability"
    ]
  },
  {
    title: "Track 8: Digital Forensics and Evidentiary Challenges",
    details: [
      "Forensic tools and chain-of-custody protocols",
      "Authentication and admissibility of digital evidence",
      "Electronic discovery (e-discovery) and procedural laws",
      "Comparative standards for cyber forensics across jurisdictions",
      "Role of expert testimony in cybercrime trials",
      "Emerging forensic techniques in AI-driven investigations"
    ]
  },
  {
    title: "Track 9: Public–Private Partnerships and Collaborative Cyber Governance",
    details: [
      "Models of public–private collaboration in cybersecurity",
      "Cyber threat intelligence sharing mechanisms",
      "Joint initiatives for critical infrastructure protection",
      "Legal frameworks for PPPs in digital risk management",
      "Multi-stakeholder governance in global cybersecurity",
      "Industry-government collaboration in cyber capacity building"
    ]
  },
  {
    title: "Track 10: Capacity Building, Policy Innovation, and Global Resilience",
    details: [
      "National cybersecurity strategies and institutional frameworks",
      "Legal education and training for digital resilience",
      "Role of academia in cyber law and governance research",
      "Cross-border capacity-building and international coordination",
      "Policy innovation for emerging cyber risks",
      "Designing resilient governance ecosystems for the future"
    ]
  }
];


const CallForPapers = () => {
  // State to track which topic is currently open/selected (index)
  const [openTopicIndex, setOpenTopicIndex] = useState(null);

  // Function to handle the click on a topic item
  const handleTopicClick = (index) => {
    // If the clicked topic is already open, close it. Otherwise, open the new topic.
    setOpenTopicIndex(openTopicIndex === index ? null : index);
  };

  const guidelines = [
    {
      title: "Formatting and Submission Guidelines",
      content: [
        " Abstracts should not exceed 200 words and must be submitted in MS Word format.",
        "Upon acceptance of the abstract, the full paper will be required.",
        "The full paper should be between 2,500 to 3,000 words, including references, tables, and figures.",
        "Papers must be typed in Times New Roman, 10-point font, with 1.0 line spacing.",
        "The total length should not exceed six pages, inclusive of all figures, graphs, and references.",
        "APA citation style must be followed.",
        "Each paper may have a maximum of three authors.",
        "The submission email should include the track number and title in the subject line.",
        "The paper should clearly mention the names and affiliations of all authors.",
        // "E-mail for Submission: [to be updated – example: conference@csjmif.ac.in]",
        "Mode of Conference: Hybrid (Online and On-Campus Presentations)"

      ]
    },
    {
      title: "Publication Opportunity",
      content: [
        "Selected and presented papers will be considered for publication in a peer-reviewed international journal or indexed conference proceedings. Discussions with reputed international publishers and indexing agencies are currently underway to ensure high visibility and academic impact of the selected works.",
        "Final publication details will be announced upon confirmation of the publication partner.",

        "Each accepted submission will receive a certificate of presentation/participation. In case of multiple authors, additional certificates can be provided on request for a nominal administrative fee.",
      ]
    }

  ];
  // const guidelines = [
  //   {
  //     title: "Abstract Submission",
  //     content: "Submit an abstract of 300-500 words outlining your research."
  //   },
  //   {
  //     title: "Full Paper",
  //     content: "Full papers should be 6000-8000 words including references."
  //   },
  //   {
  //     title: "Format",
  //     content: "Use Times New Roman, 12pt, 1.5 line spacing. Follow APA citation style."
  //   },
  //   {
  //     title: "Language",
  //     content: "Papers must be submitted in English."
  //   }
  // ];

  return (
    <section className="call-for-papers section" id="call-for-papers">
      <div className="container">
        <h2 className="section-title">Call for Papers & Submission GuideLines</h2>

        <div className="cfp-content">
          <p>The International Conference on Cybersecurity Law and Governance: Building Global Resilience invites scholars, researchers, policymakers, industry experts, and practitioners to submit their original and unpublished research contributions. Submissions are expected to align with the conference themes and contribute meaningfully to advancing discourse in cybersecurity, law, and governance.

          </p>
          <div className="topics-section">

            <h3 className="section-subtitle">Conference Topics</h3>

            {/* Accordion structure remains, but styling is changed */}
            <div className="topics-accordion">
              {topicDetails.map((topic, index) => (
                <div className="accordion-item" key={index}>

                  {/* Topic Header - Clickable Area */}
                  <div
                    className={`accordion-header ${openTopicIndex === index ? 'active' : ''}`}
                    onClick={() => handleTopicClick(index)}
                  >
                    {topic.title}
                    <span className="toggle-icon">
                      {openTopicIndex === index ? '−' : '›'}
                    </span>
                  </div>

                  {/* Topic Details - Conditionally Rendered */}
                  {openTopicIndex === index && (
                    <div className="accordion-content">
                      <ul>
                        {topic.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>
                            <span className="checkbox-icon">✓</span> {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="guidelines-section">
            {/* <h3 className="section-subtitle">Submission Guidelines</h3> */}
            {/* <div className="guidelines-grid">
              {guidelines.map((guideline, index) => (
                <div className="guideline-card" key={index}>
                  <h4>{guideline.title}</h4>
                  <p>{guideline.content}</p>
                </div>
              ))}
            </div> */}

            <div className="submission-info">
              <h4>Submission Guide lines</h4>
              <p text-align="left!important">

                Participants are initially required to submit an
                abstract of their proposed paper. Each abstract
                should clearly outline the research objectives,
                methodology, key findings (if applicable), and
                relevance to the conference theme.
                Following peer review and acceptance of the abstract,
                authors will be invited to submit their full-length
                paper for presentation and potential publication.
              </p>
              <h4>Responsibilities of Authors</h4>
              <p text-align="left!important">
                Authors must ensure that their submissions are original,
                unpublished, and not under consideration elsewhere.
                All data, findings, and references must be accurately represented.
                Plagiarism, fabrication, or falsification of results is strictly prohibited
                and will result in immediate rejection.</p>
              <p text-align="left!important">Proper acknowledgment of sources and contributions is mandatory, and all potential conflicts of interest must be disclosed. Simultaneous submission to multiple platforms is considered unethical and will not be permitted.

              </p>
              <h4>Plagiarism Prevention</h4>
              <p text-align="left!important">

                To maintain the highest academic integrity,
                all submissions will undergo plagiarism screening
                using standard detection tools. Manuscripts reflecting
                a similarity index above 10% will be reviewed further,
                and authors may be requested to justify or revise overlapping
                content. Confirmed instances of plagiarism will lead to rejection
                and may attract institutional reporting.
              </p>
              <h4>Responsibilities of the Editorial Board</h4>
              <p text-align="left!important">

                The Editorial Board upholds ethical and transparent
                review processes. Decisions on submissions will be based
                solely on the scholarly merit, originality, and relevance
                of the work to the conference’s scope. All reviews will be
                conducted confidentially and without bias.</p>
              <p text-align="left!important">The Board also reserves the right to take corrective action in cases of malpractice, including rejection, retraction, or communication with the concerned author’s institution.
              </p>
              {/* <h3 className="section-subtitle">Submission Guidelines</h3> */}
              <div className="guidelines-grid">
                {guidelines.map((guideline, index) => (
                  <div className="guideline-card" key={index} >
                    <h4>{guideline.title}</h4>
                    <ul>
                      {guideline.content.map((content, contentIndex) => (
                        <li key={contentIndex}>
                          <span className="checkbox-icon"></span> {content}
                        </li>
                      ))}
                    </ul>
                    {/* <p>{guideline.content}</p> */}
                  </div>
                ))}
              </div>

              {/* <ul>
  <li>Sub-theme of the paper,</li>
 <li>Title of the Paper</li>
 <li>Name of the author(s)</li>
 <li>E-mail address of author(s)</li>
 <li>Postal Address and Contact Number</li>
 <li>Co-authorship is allowed.</li>
 </ul> */}
              {/* <p>Note:</p> */}
              {/* <ul>
  <li>All Abstract submissions are required to be mailed to
2025seminar@gmail.com before the last date of Abstract
Submission.</li>
<li>Subject Line of the Mail should be [Abstract Submission for
International Conference on Law, Technology and Society:</li>
<li>Emerging Issues and Interdisciplinary Perspectives].
Document Name must be in the following format: [Author
Name, Title of the Paper].
</li>
  </ul>            */}
            </div>

            {/* submit button  */}
            {/* <div className="submission-info">
              <h4>How to Submit</h4>
              <p>Please submit your papers through our online submission system or email to: conference@csjmu.ac.in</p>
              <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICRAECCT2025%2FSubmission%2FIndex" className="submit-button">Submit Paper</a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;


