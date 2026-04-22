import LegalLayout from './LegalLayout';

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="April 21, 2026">
      <section className="mb-10">
        <h2 className="text-2xl mb-4">1. Program Investment</h2>
        <p>
          The program investment for Stack Forge Academy may vary depending on scholarships or merit-based reductions offered during the admission process.
          The standard program investment is ₹1,20,000, and depending on scholarships or special cohort offers, students may pay a reduced amount (for example ₹85,000 or other approved amounts).
          For the purposes of this refund policy, the term "Program Fee" refers to the actual amount paid by the student, regardless of any scholarship or discount applied.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">2. 7-Day Refund Window</h2>
        <p>
          Stack Forge Academy provides a limited refund window of seven (7) calendar days from the official program start date.
          Students who choose to withdraw within this period may request a refund subject to the following conditions:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>A refund request must be submitted in writing via email to the official Stack Forge Academy support email (<strong>refund@stackforgeacademy.in</strong>).</li>
          <li>Refund requests must be received within seven (7) calendar days from the program start date.</li>
          <li>Only one refund request per student will be considered.</li>
        </ul>
        <p className="mt-4">
          If approved, <strong>95% of the Program Fee paid</strong> will be refunded.
          The remaining 5% of the Program Fee will be retained as a non-refundable charge, which covers:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>administrative processing</li>
          <li>onboarding costs</li>
          <li>access to course materials</li>
          <li>participation in the initial classes</li>
        </ul>
        <p className="mt-4">This amount is considered the cost of the initial program access and the first seven days of instruction.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">3. No Refund After 7 Days</h2>
        <p>
          After the expiration of the seven (7) calendar day refund window, the Program Fee becomes strictly non-refundable.
          No refunds will be granted under any circumstances after this period, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>change of personal circumstances</li>
          <li>lack of time or commitment</li>
          <li>dissatisfaction with the program</li>
          <li>relocation</li>
          <li>employment changes</li>
          <li>academic difficulty</li>
          <li>technical issues on the student's side</li>
          <li>inability to attend sessions</li>
          <li>withdrawal from the program</li>
        </ul>
        <p className="mt-4">
          By enrolling in Stack Forge Academy, students acknowledge and agree that the program requires long-term commitment, and refunds cannot be issued once the refund window has expired.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">4. Assignment Participation Requirement</h2>
        <p>
          Stack Forge Academy is a rigorous engineering program that requires consistent participation.
          If a student fails to submit two (2) consecutive assignments, the student may be considered inactive or disengaged from the program.
          Under such circumstances:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>the student may lose access to certain program benefits</li>
          <li>no refund will be issued</li>
          <li>the Program Fee remains fully non-refundable</li>
        </ul>
        <p className="mt-4">Failure to complete assignments does not constitute valid grounds for a refund request.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">5. Access to Course Materials</h2>
        <p>Once a student is granted access to:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>learning materials</li>
          <li>internal repositories</li>
          <li>community platforms</li>
          <li>assignments or recorded content</li>
        </ul>
        <p className="mt-4">
          such access is considered part of the delivered service.
          Access to these resources does not create eligibility for a refund beyond the initial 7-day refund window.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">6. Scholarships and Discounts</h2>
        <p>
          Scholarships, merit-based reductions, or special pricing offers do not affect the refund terms.
          Refunds, if applicable within the 7-day window, will be calculated based on the actual amount paid by the student, not the full standard program price.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">7. Refund Processing</h2>
        <p>
          Approved refunds will be processed within 15–25 business days from the date of the confirmation mail stating the refund confirmation.
          Refunds will be issued through the original payment method used during enrollment whenever possible.
          Stack Forge Academy is not responsible for delays caused by payment processors, banks, or third-party payment gateways.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">8. Policy Acceptance</h2>
        <p>By enrolling in the Stack Forge Academy program and completing the payment process, the student acknowledges that they have:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>read</li>
          <li>understood</li>
          <li>and agreed to this refund policy in full</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
