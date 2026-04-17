import LegalLayout from './LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 11, 2026">
      <section className="mb-10">
        <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the StackForge Academy website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">2. Eligibility</h2>
        <p>
          Our program is designed for individuals who are at least 18 years of age. By enrolling, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">3. Intellectual Property</h2>
        <p>
          All curriculum materials, code snippets, videos, and documentation provided during the course are the intellectual property of StackForge Academy. You are granted a limited, non-exclusive license to use these materials for your personal learning. Redistribution or commercial use of these materials is strictly prohibited.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">4. Code of Conduct</h2>
        <p>
          We maintain a high-performance, respectful learning environment. Any form of harassment, cheating, or disruptive behavior will result in immediate termination from the program without a refund.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">5. Limitation of Liability</h2>
        <p>
          StackForge Academy provides training and placement assistance. While we have a high success rate, we do not guarantee specific employment outcomes or salary levels. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-4">6. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Bangalore.
        </p>
      </section>
    </LegalLayout>
  );
}
