import LegalLayout from './LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 22, 2026">
      <section className="mb-10">
        <h2 className="text-2xl mb-4">1. Introduction</h2>
        <p>
          These Terms of Service govern the use of the programs, website, and services offered by Stack Forge Academy.
          By enrolling in the Stack Forge Academy program, accessing course materials, or using any services provided
          by Stack Forge Academy, you agree to comply with these Terms of Service.
        </p>
        <p className="mt-4">
          If you do not agree with these terms, you should not enroll in the program or access the services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">2. Program Nature</h2>
        <p>
          Stack Forge Academy offers a selective engineering training program designed to help students build strong
          programming fundamentals, problem-solving skills, and real-world software engineering experience.
        </p>
        <p className="mt-4">
          Enrollment in the program does not guarantee employment, job placement, or internship opportunities.
          Students are responsible for their own learning progress, job applications, and career outcomes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">3. Eligibility</h2>
        <p>To enroll in the program, students must:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>provide accurate and truthful information during the application process</li>
          <li>be at least 18 years of age or have parental consent</li>
          <li>comply with all program policies and guidelines</li>
        </ul>
        <p className="mt-4">
          Stack Forge Academy reserves the right to deny admission or remove a student if the information provided
          during the application process is found to be false or misleading.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">4. Program Participation</h2>
        <p>Students are expected to actively participate in the program, including:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>attending sessions when possible</li>
          <li>completing assignments</li>
          <li>participating in discussions</li>
          <li>respecting instructors and peers</li>
        </ul>
        <p className="mt-4">
          Failure to maintain reasonable participation may result in restricted access to certain program benefits.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">5. Intellectual Property</h2>
        <p>
          All course materials, including but not limited to curriculum, videos, assignments, presentations, internal
          documentation, and project templates, are the intellectual property of Stack Forge Academy.
        </p>
        <p className="mt-4">Students may use these materials for personal learning purposes only. Students may not:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>copy, distribute, or reproduce course materials</li>
          <li>sell or publish any course materials</li>
          <li>share materials with non-enrolled individuals</li>
        </ul>
        <p className="mt-4">
          Unauthorized distribution of course materials may result in immediate removal from the program without refund.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">6. Use of Learning Platforms</h2>
        <p>
          Students will be granted access to learning platforms, repositories, and community channels. Students must
          not:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>share login credentials</li>
          <li>allow non-enrolled individuals to access materials</li>
          <li>misuse internal communication platforms</li>
        </ul>
        <p className="mt-4">
          Stack Forge Academy reserves the right to suspend access if misuse is detected.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">7. Code of Conduct</h2>
        <p>
          Students must maintain respectful and professional behavior toward instructors, mentors, fellow students, and
          community members. Harassment, discrimination, abusive language, or disruptive behavior will not be
          tolerated.
        </p>
        <p className="mt-4">
          Violation of these standards may result in removal from the program without refund.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">8. Refund Policy</h2>
        <p>
          All refund requests are governed by the official Stack Forge Academy Refund Policy. Students are responsible
          for reviewing the refund policy before enrolling.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">9. Program Modifications</h2>
        <p>Stack Forge Academy reserves the right to:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>update the curriculum</li>
          <li>modify the schedule</li>
          <li>adjust program content</li>
        </ul>
        <p className="mt-4">
          Such changes are made when necessary to improve the learning experience and do not constitute grounds for a
          refund.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">10. Limitation of Liability</h2>
        <p>Stack Forge Academy is not liable for:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>job placement outcomes</li>
          <li>employment decisions made by third-party companies</li>
          <li>personal or financial decisions made by students</li>
        </ul>
        <p className="mt-4">
          The program is designed as a learning experience, and individual outcomes may vary.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">11. Termination of Enrollment</h2>
        <p>Stack Forge Academy reserves the right to terminate a student's enrollment if they:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>violate program policies</li>
          <li>engage in academic dishonesty</li>
          <li>distribute course materials without permission</li>
          <li>behave in a manner that harms the learning environment</li>
        </ul>
        <p className="mt-4">Termination under these conditions will occur without refund.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">12. Acceptance of Terms</h2>
        <p>
          By enrolling in the program, students confirm that they have read, understood, and agreed to these Terms of
          Service.
        </p>
      </section>
    </LegalLayout>
  );
}
