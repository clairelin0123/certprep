import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for CertPrep — CMA exam practice questions website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Home</Link> &gt; Privacy Policy
      </div>

      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: May 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          <p className="mt-2">
            CertPrep (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website cert-prep-quiz.com.
            This page informs you of our policies regarding the collection, use,
            and disclosure of information when you use our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Information We Collect</h2>
          <p className="mt-2">
            We do not require account registration to use our service. We collect
            minimal information:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong>Local Storage Data:</strong> Your saved mistakes and quiz
              progress are stored locally in your browser using localStorage.
              This data never leaves your device.
            </li>
            <li>
              <strong>Log Data:</strong> Like most websites, our servers
              automatically collect information such as your IP address, browser
              type, pages visited, and the time of your visit.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Cookies and Advertising</h2>
          <p className="mt-2">
            We use Google AdSense to display advertisements. Google may use
            cookies and web beacons to serve ads based on your prior visits to
            our website or other websites. You can opt out of personalized
            advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Ads Settings
            </a>.
          </p>
          <p className="mt-2">
            For more information about how Google uses your data, visit{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              How Google uses data when you use our partners&apos; sites
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Affiliate Links</h2>
          <p className="mt-2">
            Our resources page contains affiliate links to third-party products
            and services. If you click on an affiliate link and make a purchase,
            we may earn a commission at no additional cost to you. This does not
            influence our recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Third-Party Services</h2>
          <p className="mt-2">We use the following third-party services:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Google AdSense (advertising)</li>
            <li>Vercel (hosting)</li>
            <li>Cloudflare (DNS and security)</li>
          </ul>
          <p className="mt-2">
            Each of these services has their own privacy policy governing the
            data they collect.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Data Retention</h2>
          <p className="mt-2">
            We do not store any personal data on our servers. All quiz progress
            and saved mistakes are stored locally in your browser and can be
            cleared at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Children&apos;s Privacy</h2>
          <p className="mt-2">
            Our service is not directed at anyone under the age of 13. We do not
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Changes to This Policy</h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <p className="mt-2">
            If you have questions about this privacy policy, please contact us
            through our GitHub repository.
          </p>
        </section>
      </div>
    </div>
  );
}
