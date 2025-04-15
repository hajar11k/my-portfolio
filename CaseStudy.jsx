import React from 'react';

export default function CaseStudy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-left text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Instagram Growth Strategy Case Study</h1>
      <p className="text-lg text-gray-600 mb-10">
        A 30-day Instagram growth campaign that boosted engagement and reach for a fashion brand using a full-funnel strategy.
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📌 Project Overview</h2>
        <p>The client, a fashion startup, wanted to increase brand visibility and build an organic Instagram presence to support online sales. The goal was to improve follower count, engagement, and link clicks.</p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📈 Key Results</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ 220% increase in followers (from 1.1k to 3.5k)</li>
          <li>✅ 4x boost in post engagement</li>
          <li>✅ 18% increase in bio link clicks</li>
          <li>✅ Reach expanded to 30k+ accounts</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧠 Strategy Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Content calendar with brand-consistent visuals</li>
          <li>Hashtag research and optimization</li>
          <li>Engagement via comments and story polls</li>
          <li>Influencer collaboration with 2 micro-influencers</li>
          <li>Targeted Instagram Ads (reach + traffic objectives)</li>
        </ol>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Tools Used</h2>
        <p>Meta Ads Manager, Canva, Google Analytics, Buffer, ChatGPT (for caption ideas!)</p>
      </div>

      <div className="mt-12 text-center">
        <a href="/resume.pdf" download className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Download My Resume
        </a>
      </div>
    </section>
  );
}