import { useState } from 'react';
import {
  FaQuestionCircle,
  FaUserPlus,
  FaFilter,
  FaRedo,
  FaBell,
  FaDatabase,
  FaEnvelopeOpenText,
  FaBug,
} from 'react-icons/fa';

export default function FAQ() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div className="bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1
          className="text-center text-4xl font-bold tracking-tight"
          style={{ color: '#0b7a75' }}
        >
          Frequently Asked Questions
        </h1>
        <br />

        <section className="mb-8 rounded-lg bg-gray-100 p-6 shadow-md">
          <div
            onClick={() => toggleSection(1)}
            className="flex cursor-pointer items-center"
          >
            <FaQuestionCircle
              className="mr-4 text-2xl"
              style={{ color: '#0b7a75' }}
            />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              What is this web app for?
            </h1>
          </div>
          {openSection === 1 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This web app helps you find on-campus housing that meets your
              specific needs. You can set custom filters based on your
              preferences, and we’ll send you the most relevant housing options
              directly to your inbox in a newsletter.
            </p>
          )}
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div
            onClick={() => toggleSection(2)}
            className="flex cursor-pointer items-center"
          >
            <FaUserPlus
              className="mr-4 text-2xl"
              style={{ color: '#0b7a75' }}
            />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              How do I create an account?
            </h1>
          </div>
          {openSection === 2 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To create an account, click on the Sign Up button on the homepage.
              Fill in your basic information, set your preferences, and you will
              be ready to start receiving personalized housing options.
            </p>
          )}
        </section>

        <section className="mb-8 rounded-lg bg-gray-100 p-6 shadow-md">
          <div
            onClick={() => toggleSection(3)}
            className="flex cursor-pointer items-center"
          >
            <FaFilter className="mr-4 text-2xl" style={{ color: '#0b7a75' }} />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              What kind of filters can I set?
            </h1>
          </div>
          {openSection === 3 && (
            <ul className="mt-6 text-lg leading-8 text-gray-600">
              <li>- Max Price</li>
              <li>- Move-In Date</li>
              <li>- Gender Preference</li>
              <li>- Number of Bedrooms and Bathrooms</li>
              <li>- Parking</li>
              <li>And more...</li>
            </ul>
          )}
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div
            onClick={() => toggleSection(4)}
            className="flex cursor-pointer items-center"
          >
            <FaRedo className="mr-4 text-2xl" style={{ color: '#0b7a75' }} />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              Can I update my filters after setting them?
            </h1>
          </div>
          {openSection === 4 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Yes, you can update your filters anytime by logging into your
              account and adjusting your preferences. Your newsletter will then
              reflect your updated criteria.
            </p>
          )}
        </section>

        <section className="mb-8 rounded-lg bg-gray-100 p-6 shadow-md">
          <div
            onClick={() => toggleSection(5)}
            className="flex cursor-pointer items-center"
          >
            <FaBell className="mr-4 text-2xl" style={{ color: '#0b7a75' }} />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              What if there are no housing options that match my filters?
            </h1>
          </div>
          {openSection === 5 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If no options match your filters, you’ll receive a notification in
              your newsletter letting you know. We’ll continue to search and
              update you as soon as a match becomes available.
            </p>
          )}
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div
            onClick={() => toggleSection(6)}
            className="flex cursor-pointer items-center"
          >
            <FaDatabase
              className="mr-4 text-2xl"
              style={{ color: '#0b7a75' }}
            />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              How is the housing information sourced?
            </h1>
          </div>
          {openSection === 6 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our app scrapes data from various official campus housing websites
              and databases to bring you the most up-to-date and comprehensive
              listings available.
            </p>
          )}
        </section>

        <section className="mb-8 rounded-lg bg-gray-100 p-6 shadow-md">
          <div
            onClick={() => toggleSection(7)}
            className="flex cursor-pointer items-center"
          >
            <FaEnvelopeOpenText
              className="mr-4 text-2xl"
              style={{ color: '#0b7a75' }}
            />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              How do I unsubscribe from the newsletter?
            </h1>
          </div>
          {openSection === 7 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If you no longer wish to receive housing updates, you can
              unsubscribe at any time by clicking the Unsubscribe link at the
              bottom of any newsletter or by managing your preferences in your
              account settings.
            </p>
          )}
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div
            onClick={() => toggleSection(8)}
            className="flex cursor-pointer items-center"
          >
            <FaBug className="mr-4 text-2xl" style={{ color: '#0b7a75' }} />
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#0b7a75' }}
            >
              Can I suggest a feature or report a bug?
            </h1>
          </div>
          {openSection === 8 && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Absolutely! We’re always looking to improve. You can suggest
              features or report bugs by contacting our support team at
              <a
                href="mailto:klazarevdev@gmail.com"
                className="ml-1 underline"
                style={{ color: '#0b7a75' }}
              >
                klazarevdev@gmail.com
              </a>
              .
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
