import LegalLayout from './LegalLayout';

export default function ScholarshipPolicy() {
  return (
    <LegalLayout title="Scholarship Policy" lastUpdated="April 21, 2026">
      <section className="mb-10">
        <h2 className="text-2xl mb-4">Our Philosophy</h2>
        <p>
          At Stack Forge Academy, we believe that exceptional talent should never be limited by financial barriers.
          Our mission is to train a small group of highly motivated developers to become strong software engineers with deep technical foundations.
          To support outstanding candidates, we offer a limited number of merit-based scholarships for every cohort.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">Founder's Scholarship (100%)</h2>
        <p>
          Each cohort offers one Founder's Scholarship, awarded to an exceptional candidate who demonstrates outstanding potential as a software engineer.
          The Founder's Scholarship is awarded to one exceptional candidate in each cohort who demonstrates outstanding technical ability, problem-solving skills, and commitment to learning.
          This scholarship covers <strong>100% of the program investment</strong>.
          The scholarship is highly competitive and awarded only if a candidate demonstrates exceptional ability during the admission process.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">Merit-Based Scholarships</h2>
        <p>
          In addition to the Founder's Scholarship, Stack Forge Academy may offer a limited number of partial merit-based scholarships to strong candidates.
          Typical scholarship ranges include:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>50% scholarship</li>
          <li>30% scholarship</li>
          <li>20% scholarship</li>
        </ul>
        <p className="mt-4">These scholarships are awarded to candidates who demonstrate strong technical potential but may not receive the Founder's Scholarship.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">Scholarship Evaluation Criteria</h2>
        <p>
          Scholarships are awarded based on a holistic evaluation of each candidate during the admission process.
          The evaluation considers:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Performance in the admission test</li>
          <li>Problem-solving ability</li>
          <li>Technical interview performance</li>
          <li>Commitment to learning and career growth</li>
        </ul>
        <p className="mt-4">Scholarship decisions are made by the Stack Forge Academy admissions team.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">Eligibility</h2>
        <p>To be considered for a scholarship, applicants must:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Complete the full application process</li>
          <li>Successfully pass the admission test</li>
          <li>Participate in the technical interview</li>
        </ul>
        <p className="mt-4">Only candidates who complete all stages of the admission process will be considered.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">Important Notes</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Scholarships are merit-based, not need-based.</li>
          <li>Only a limited number of scholarships are awarded per cohort.</li>
          <li>Scholarship decisions are final and cannot be appealed.</li>
          <li>Scholarships cannot be combined with other discounts or offers.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">Our Commitment</h2>
        <p>
          Stack Forge Academy aims to build a cohort of serious, highly motivated developers who are committed to becoming exceptional engineers.
          Through the Founder's Scholarship and merit-based awards, we ensure that the most talented candidates have the opportunity to join the program regardless of financial constraints.
        </p>
      </section>
    </LegalLayout>
  );
}
