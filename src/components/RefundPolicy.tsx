import LegalLayout from './LegalLayout';

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="April 11, 2026">
      <section className="mb-10">
        <h2 className="text-2xl mb-4">1. Enrollment and Fees</h2>
        <p>
          StackForge Academy provides elite technical training. Due to the limited number of seats (22 per cohort) and the intensive nature of our program, we have a structured refund policy to ensure fairness to all applicants.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">2. Cancellation Before Cohort Start</h2>
        <p>
          If you choose to cancel your enrollment before the cohort officially begins, the following conditions apply:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li><strong>More than 15 days before start:</strong> 100% refund of the tuition fee paid, minus a small administrative processing fee (₹2,000).</li>
          <li><strong>7 to 15 days before start:</strong> 50% refund of the tuition fee paid.</li>
          <li><strong>Less than 7 days before start:</strong> No refund will be issued as your seat cannot be filled on such short notice.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">3. Post-Start Policy</h2>
        <p>
          Once the cohort has commenced, we do not offer refunds. The resources, mentor time, and curriculum access are allocated based on the confirmed cohort size.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">4. Exceptional Circumstances</h2>
        <p>
          We understand that life happens. In cases of documented medical emergencies or extreme personal hardship, we may allow you to defer your enrollment to a future cohort at no additional cost, subject to seat availability and management approval.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">5. How to Request a Refund</h2>
        <p>
          To request a refund or deferral, please email our support team at <strong>admissions@stackforge.academy</strong> with your enrollment details and the reason for your request.
        </p>
      </section>
    </LegalLayout>
  );
}
