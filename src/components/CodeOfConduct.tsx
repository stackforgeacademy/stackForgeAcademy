import LegalLayout from './LegalLayout';

export default function CodeOfConduct() {
  return (
    <LegalLayout title="Student Code of Conduct & Academic Integrity Policy" lastUpdated="April 21, 2026">
      <section className="mb-10">
        <h2 className="text-2xl mb-4">1. Purpose</h2>
        <p>
          The purpose of this policy is to ensure that Stack Forge Academy maintains a professional, respectful, and intellectually honest learning environment.
          Students are expected to uphold the highest standards of integrity while participating in the program.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">2. Academic Integrity</h2>
        <p>Students must complete assignments and assessments using their own work and understanding. Students must not:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>submit copied solutions</li>
          <li>plagiarize code from online sources without understanding</li>
          <li>submit another student's work</li>
          <li>use automated tools to generate solutions without comprehension</li>
        </ul>
        <p className="mt-4">
          Learning assistance from documentation or references is acceptable, but submitting work without genuine understanding violates the spirit of the program.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">3. Use of AI Tools</h2>
        <p>
          Students may use modern development tools, including AI-based coding assistants, for learning purposes.
          However, students must:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>understand the code they submit</li>
          <li>be able to explain their solutions</li>
          <li>demonstrate genuine comprehension during reviews</li>
        </ul>
        <p className="mt-4">If a student cannot explain their submitted work, the assignment may be considered incomplete.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">4. Collaboration Guidelines</h2>
        <p>Collaboration is encouraged for learning purposes, but students must not:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>share complete solutions to graded assignments</li>
          <li>submit identical code as another student</li>
          <li>allow others to complete assignments on their behalf</li>
        </ul>
        <p className="mt-4">Assignments are intended to measure individual learning progress.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">5. Respectful Community Behavior</h2>
        <p>Stack Forge Academy aims to maintain a positive and respectful environment. Students must not engage in:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>harassment</li>
          <li>bullying</li>
          <li>discrimination</li>
          <li>abusive language</li>
          <li>disruptive behavior</li>
        </ul>
        <p className="mt-4">Students should maintain professionalism in all communication channels.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">6. Consequences of Violations</h2>
        <p>Violations of the Code of Conduct or Academic Integrity Policy may result in:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>warning from instructors</li>
          <li>assignment rejection</li>
          <li>suspension from certain program activities</li>
          <li>removal from the program without refund</li>
        </ul>
        <p className="mt-4">The severity of the action will depend on the nature of the violation.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">7. Commitment to Learning</h2>
        <p>Students who join Stack Forge Academy are expected to:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>maintain consistent effort</li>
          <li>actively participate in the program</li>
          <li>demonstrate curiosity and discipline</li>
        </ul>
        <p className="mt-4">The program is designed for serious learners committed to improving their engineering skills.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">8. Policy Acceptance</h2>
        <p>
          By enrolling in Stack Forge Academy, students agree to follow this Code of Conduct and Academic Integrity Policy throughout the duration of the program.
        </p>
      </section>
    </LegalLayout>
  );
}
