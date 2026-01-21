import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function GeminiAPIReport() {
  const [activeTab, setActiveTab] = useState('overview');

  const sentimentData = [
    { name: 'Positive', value: 24, color: '#10b981' },
    { name: 'Neutral', value: 42, color: '#6b7280' },
    { name: 'Negative', value: 34, color: '#ef4444' }
  ];

  const issuesData = [
    { issue: 'Auth & Key Issues', frequency: 12, date: '2026-01-16' },
    { issue: 'Rate Limit/429', frequency: 9, date: '2026-01-12' },
    { issue: 'CLI Latency', frequency: 7, date: '2026-01-15' },
    { issue: 'Recitation Error', frequency: 6, date: '2025-12-16' },
    { issue: 'Session Resumption', frequency: 5, date: '2026-01-17' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg shadow-xl">
          <p className="text-slate-100 font-medium">{payload[0].payload.name || payload[0].payload.issue}</p>
          <p className="text-emerald-400 text-sm">{payload[0].value}{payload[0].payload.name ? '%' : ' reports'}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <span className="text-emerald-400 text-xs font-medium tracking-wide uppercase">Technical Analysis</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-100 mb-3 tracking-tight">
            Gemini API Ecosystem
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A comprehensive analysis of 600+ developer interactions, filtered to Gemini-specific data points
          </p>
          <div className="flex gap-4 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Analysis Period: Dec 2025 - Jan 2026
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Sample Size: ~90 Gemini-specific entries
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-2 border-b border-slate-800">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'sentiment', label: 'Sentiment Analysis' },
            { id: 'issues', label: 'Issue Tracker' },
            { id: 'insights', label: 'Strategic Insights' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'border-emerald-500 text-emerald-400'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">15%</div>
                <div className="text-slate-300 font-medium mb-1">Gemini-Specific Data</div>
                <div className="text-sm text-slate-500">Filtered from 600 total entries</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">42%</div>
                <div className="text-slate-300 font-medium mb-1">Neutral Sentiment</div>
                <div className="text-sm text-slate-500">Documentation & how-to queries</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">34%</div>
                <div className="text-slate-300 font-medium mb-1">Negative Feedback</div>
                <div className="text-sm text-slate-500">API key & latency issues</div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Executive Summary</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The Gemini API demonstrates strong technical capabilities in multimodal processing, particularly with the Nano Banana Pro model and Google Maps integration. However, the developer experience is significantly hampered by onboarding friction.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <h3 className="font-semibold text-emerald-400 mb-2">Strengths</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• Superior text rendering in images</li>
                      <li>• 50% cost savings with Batch API</li>
                      <li>• Google Maps grounding capabilities</li>
                      <li>• Rapid prototyping with Vibe Code</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-400 mb-2">Critical Issues</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li>• Complex authentication flow</li>
                      <li>• Silent rate limiting on new accounts</li>
                      <li>• 7.36s CLI cold start latency</li>
                      <li>• Overzealous recitation filtering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sentiment' && (
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Developer Sentiment Distribution</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sentimentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} (${value}%)`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sentimentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="space-y-4">
                  {sentimentData.map((item) => (
                    <div key={item.name} className="border-l-2 pl-4" style={{ borderColor: item.color }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-100">{item.name}</span>
                        <span className="text-2xl font-bold" style={{ color: item.color }}>{item.value}%</span>
                      </div>
                      <div className="text-sm text-slate-400">
                        {item.name === 'Positive' && 'Praise for Nano Banana Pro, Batch API savings, Maps integration'}
                        {item.name === 'Neutral' && 'Documentation shares, implementation questions, partnership news'}
                        {item.name === 'Negative' && 'API key frustrations, 404/429 errors, CLI latency complaints'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Key Sentiment Drivers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                  <div className="text-emerald-400 font-semibold mb-3">Positive Drivers</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Nano Banana Pro text rendering quality</li>
                    <li>• 50% Batch API cost reduction</li>
                    <li>• Google Maps grounding feature</li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-500/5 border border-slate-500/20 rounded-lg">
                  <div className="text-slate-300 font-semibold mb-3">Neutral Activity</div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• StackOverflow implementation questions</li>
                    <li>• Documentation sharing</li>
                    <li>• Apple/Google partnership discussions</li>
                  </ul>
                </div>
                <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <div className="text-red-400 font-semibold mb-3">Negative Drivers</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• API key setup complexity</li>
                    <li>• Unexpected 404/429 errors</li>
                    <li>• High CLI latency (7.36s)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'issues' && (
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Recurring Issue Frequency</h2>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={issuesData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis dataKey="issue" type="category" width={150} stroke="#94a3b8" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="frequency" fill="#10b981" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Auth & Key "Exercise in Frustration"',
                  frequency: 12,
                  date: '2026-01-16',
                  severity: 'critical',
                  description: 'Developers struggle with 401 errors and the complex split between AI Studio keys and Vertex AI project configurations.'
                },
                {
                  title: 'Silent Rate Limit/429 Purge',
                  frequency: 9,
                  date: '2026-01-12',
                  severity: 'high',
                  description: 'New accounts report being hit by "limit: 0" errors or 429s even after linking billing, described as a "free tier fiasco."'
                },
                {
                  title: 'CLI Latency (7.36s Cold Start)',
                  frequency: 7,
                  date: '2026-01-15',
                  severity: 'high',
                  description: "Users are comparing Gemini CLI's 7+ second startup time unfavorably against Claude (1.4s) and Copilot (1.0s)."
                },
                {
                  title: '"Recitation" Answer Withholding',
                  frequency: 6,
                  date: '2025-12-16',
                  severity: 'medium',
                  description: "The File Search API frequently triggers a safety 'recitation' error, cutting off or completely withholding answers from the user's own data."
                },
                {
                  title: 'Live API Session Resumption Failures',
                  frequency: 5,
                  date: '2026-01-17',
                  severity: 'medium',
                  description: 'Developers report SessionResumptionUpdate returning None for new handles, making long-running voice agents unreliable.'
                }
              ].map((issue, idx) => (
                <div key={idx} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-100">{issue.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          issue.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                          issue.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {issue.severity}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{issue.description}</p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-emerald-400">{issue.frequency}</div>
                      <div className="text-xs text-slate-500">reports</div>
                      <div className="text-xs text-slate-600 mt-1">{issue.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-3">Critical Blocker: Onboarding "Hidden" Failures</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    While the API's reasoning and multimodal capabilities (like Nano Banana Pro) are seen as superior, developers are being "bounced" at the front door. The data shows that even when a developer is willing to pay, they encounter 404 "Model Not Found" or 429 "Resource Exhausted" (with limit: 0) errors that are poorly explained in the documentation.
                  </p>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <div className="text-sm font-semibold text-red-400 mb-2">Developer Perception:</div>
                    <div className="text-slate-400 italic">"Many developers perceive this as the API being 'broken' rather than a quota/billing synchronization issue, leading them to abandon the platform."</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Hidden Gems (Loved but Under-utilized)</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-semibold text-emerald-400 mb-2">Nano Banana Pro Text Rendering</h3>
                  <p className="text-sm text-slate-400">
                    Gemini 3 Pro Image significantly better at rendering mathematical formulas and infographics than competitors. Multiple "Show HN" posts highlight this capability.
                  </p>
                </div>
                <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <div className="text-3xl mb-3">🗺️</div>
                  <h3 className="font-semibold text-blue-400 mb-2">Google Maps Grounding</h3>
                  <p className="text-sm text-slate-400">
                    Developers of travel and real-time data apps cite the Maps API integration as the primary reason they chose Gemini over OpenAI.
                  </p>
                </div>
                <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold text-purple-400 mb-2">Vibe Code in AI Studio</h3>
                  <p className="text-sm text-slate-400">
                    High engagement with the "Vibe Code" feature for rapid, free prototyping. Developers appreciate the quick iteration cycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-6">Recommended Improvements</h2>
              <div className="space-y-4">
                {[
                  {
                    priority: 'P0',
                    title: 'Address "Limit: 0" Billing Bug',
                    description: 'Fix the silent rate limiting issue that blocks new paying customers. This is causing immediate abandonment.',
                    impact: 'High - Directly affects conversion'
                  },
                  {
                    priority: 'P1',
                    title: 'Standardize CLI Speed',
                    description: 'Optimize the Gemini CLI binary. A 7-second startup time is a major barrier for developers accustomed to near-instantaneous terminal tools.',
                    impact: 'Medium - Affects daily workflow'
                  },
                  {
                    priority: 'P1',
                    title: 'Unified Key Management',
                    description: 'Simplify the "Getting an API Key" flow. Developers are frustrated by the distinction between google-genai and google-generativeai SDK requirements.',
                    impact: 'High - Reduces onboarding friction'
                  },
                  {
                    priority: 'P2',
                    title: 'RAG-Specific Safety Tuning',
                    description: 'Tune the "Recitation" filter for the File Search API. When users upload their own documents, the model is being overly cautious.',
                    impact: 'Medium - Improves RAG use cases'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-emerald-500/30 transition-colors">
                    <div className={`px-3 py-1 h-fit rounded font-mono text-xs font-bold ${
                      item.priority === 'P0' ? 'bg-red-500/20 text-red-400' :
                      item.priority === 'P1' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {item.priority}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-100 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 mb-2">{item.description}</p>
                      <div className="text-xs text-emerald-400">Impact: {item.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-4">Final Verdict</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                The Gemini API is <span className="text-emerald-400 font-semibold">technically winning</span> on niche multimodal utility (text in images, maps grounding, and price/performance), but is <span className="text-red-400 font-semibold">losing on Developer Experience (DX)</span> due to account/auth hurdles and terminal tool latency.
              </p>
              <div className="mt-6 p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
                <div className="text-sm font-semibold text-emerald-400 mb-1">Highest Priority Action:</div>
                <div className="text-slate-300">Addressing the "Limit: 0" billing bug should be the immediate focus to prevent developer abandonment.</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-slate-500 text-sm">
            <p>Analysis based on 600+ developer interactions • Filtered to ~90 Gemini-specific data points</p>
            <p className="mt-2">Methodology: Line-by-line audit excluding competitor mentions and general industry news</p>
          </div>
        </div>
      </div>
    </div>
  );
}