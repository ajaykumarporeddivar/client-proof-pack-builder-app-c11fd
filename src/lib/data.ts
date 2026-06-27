export const campaigns = [
  {
    id: 1,
    name: 'Summer Sale',
    startDate: '2022-06-01',
    endDate: '2022-06-30',
    budget: 10000,
    spend: 8000,
    roi: 1.2,
  },
  {
    id: 2,
    name: 'Holiday Promotion',
    startDate: '2022-12-01',
    endDate: '2022-12-31',
    budget: 15000,
    spend: 12000,
    roi: 1.5,
  },
  {
    id: 3,
    name: 'Spring Launch',
    startDate: '2023-03-01',
    endDate: '2023-03-31',
    budget: 8000,
    spend: 6000,
    roi: 1.8,
  },
  {
    id: 4,
    name: 'Back to School',
    startDate: '2023-08-01',
    endDate: '2023-08-31',
    budget: 12000,
    spend: 9000,
    roi: 1.2,
  },
  {
    id: 5,
    name: 'Winter Sale',
    startDate: '2023-01-01',
    endDate: '2023-01-31',
    budget: 10000,
    spend: 8000,
    roi: 1.5,
  },
  {
    id: 6,
    name: 'Fall Festival',
    startDate: '2023-09-01',
    endDate: '2023-09-30',
    budget: 15000,
    spend: 12000,
    roi: 1.8,
  },
  {
    id: 7,
    name: 'New Year Promotion',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    budget: 12000,
    spend: 9000,
    roi: 1.2,
  },
  {
    id: 8,
    name: 'Summer Vacation',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    budget: 10000,
    spend: 8000,
    roi: 1.5,
  },
  {
    id: 9,
    name: 'Holiday Season',
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    budget: 15000,
    spend: 12000,
    roi: 1.8,
  },
  {
    id: 10,
    name: 'Spring Fling',
    startDate: '2025-03-01',
    endDate: '2025-03-31',
    budget: 8000,
    spend: 6000,
    roi: 1.2,
  },
];

export const clients = [
  {
    id: 1,
    name: 'Client A',
    campaigns: [campaigns[0], campaigns[2], campaigns[4]],
  },
  {
    id: 2,
    name: 'Client B',
    campaigns: [campaigns[1], campaigns[3], campaigns[5]],
  },
  {
    id: 3,
    name: 'Client C',
    campaigns: [campaigns[6], campaigns[7], campaigns[8]],
  },
  {
    id: 4,
    name: 'Client D',
    campaigns: [campaigns[0], campaigns[4], campaigns[9]],
  },
  {
    id: 5,
    name: 'Client E',
    campaigns: [campaigns[2], campaigns[5], campaigns[9]],
  },
];

export const proofPacks = [
  {
    id: 1,
    clientId: 1,
    campaigns: [campaigns[0], campaigns[2], campaigns[4]],
    roiSummary: 'Summary of ROI for Client A',
    campaignEvidence: 'Evidence for Client A',
    renewalRiskNotes: 'Notes for Client A',
  },
  {
    id: 2,
    clientId: 2,
    campaigns: [campaigns[1], campaigns[3], campaigns[5]],
    roiSummary: 'Summary of ROI for Client B',
    campaignEvidence: 'Evidence for Client B',
    renewalRiskNotes: 'Notes for Client B',
  },
  {
    id: 3,
    clientId: 3,
    campaigns: [campaigns[6], campaigns[7], campaigns[8]],
    roiSummary: 'Summary of ROI for Client C',
    campaignEvidence: 'Evidence for Client C',
    renewalRiskNotes: 'Notes for Client C',
  },
  {
    id: 4,
    clientId: 4,
    campaigns: [campaigns[0], campaigns[4], campaigns[9]],
    roiSummary: 'Summary of ROI for Client D',
    campaignEvidence: 'Evidence for Client D',
    renewalRiskNotes: 'Notes for Client D',
  },
  {
    id: 5,
    clientId: 5,
    campaigns: [campaigns[2], campaigns[5], campaigns[9]],
    roiSummary: 'Summary of ROI for Client E',
    campaignEvidence: 'Evidence for Client E',
    renewalRiskNotes: 'Notes for Client E',
  },
];

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
