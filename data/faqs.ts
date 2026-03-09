import type { FAQ } from '@/types';

export const homepageFaqs: FAQ[] = [
  { question: 'Do I need to book an appointment?', answer: 'No appointment needed. Just walk in during business hours and we\'ll take care of you on the spot. Call ahead if you want to confirm we have your parts in stock.' },
  { question: 'How long does a screen repair take?', answer: 'Most iPhone and Samsung screen repairs take 15–30 minutes. MacBook screens take longer — typically 45–90 minutes. We\'ll give you an exact time when you bring your device in.' },
  { question: 'Do you offer a warranty on repairs?', answer: 'Yes. Every repair comes with a lifetime warranty on parts and labour. If the same fault returns, we fix it free — no questions asked.' },
  { question: 'What devices do you repair?', answer: 'We repair iPhones, Samsung Galaxy phones, Google Pixel phones, iPads and MacBooks. If your device isn\'t listed, call us and we\'ll let you know.' },
  { question: 'Are your replacement parts genuine?', answer: 'We use high-quality genuine-spec or OEM-equivalent parts. We\'ll always explain which tier of part is being used and why before starting any work.' },
  { question: 'How much will my repair cost?', answer: 'Prices vary by device and repair type. Call us or visit for a free no-obligation quote — we\'ll give you a clear price before starting any work.' },
];

export function generateModelFaqs(modelName: string, brandName: string): FAQ[] {
  return [
    { question: `Do I need an appointment to repair my ${modelName}?`, answer: `No appointment needed. Just walk into our Melbourne store with your ${modelName} and we\'ll assess it on the spot and give you a quote within minutes.` },
    { question: `How long does a ${modelName} repair take?`, answer: `It depends on the repair type. Screen replacements typically take 15–30 minutes. Battery replacements take 15–20 minutes. More complex repairs like water damage or motherboard work can take 1–5 hours. We\'ll give you an accurate time estimate when you bring it in.` },
    { question: `Is there a warranty on ${modelName} repairs?`, answer: `Yes — lifetime warranty on all parts and labour. If the same issue returns after our repair, we fix it free of charge.` },
    { question: `Do you use genuine parts for the ${modelName}?`, answer: `We use genuine-spec or OEM-equivalent parts for all ${modelName} repairs. We\'ll explain the parts options available and recommend the best one for your needs.` },
    { question: `Can you repair a ${modelName} with water damage?`, answer: `Yes. Bring it in as soon as possible — do not charge it. We offer a free water damage assessment and will give you an honest assessment of what can be recovered.` },
    { question: `How much does it cost to repair a ${modelName}?`, answer: `Prices vary by repair type. Call us or walk in for a free, no-obligation quote. We\'ll give you a clear price before any work begins.` },
  ];
}

export function generateRepairFaqs(repairName: string, modelName: string): FAQ[] {
  return [
    { question: `How long does a ${repairName} take for the ${modelName}?`, answer: `Most ${repairName.toLowerCase()} jobs for the ${modelName} are completed within the quoted time frame. Bring your device in and we\'ll give you an exact time estimate on the spot.` },
    { question: `Do I need an appointment for a ${modelName} ${repairName.toLowerCase()}?`, answer: `No appointment needed. Walk in to our Melbourne store anytime during business hours. We also accept walk-ins without prior notice.` },
    { question: `Is there a warranty on the ${repairName.toLowerCase()} for the ${modelName}?`, answer: `Yes — lifetime warranty on all parts and labour. If the same fault returns after our repair, we fix it free.` },
    { question: `What parts do you use for the ${modelName} ${repairName.toLowerCase()}?`, answer: `We use genuine-spec or OEM-equivalent parts. We\'ll explain the options available and their quality tiers before starting any work.` },
    { question: `Will my data be safe during the repair?`, answer: `Yes. We do not wipe or reset your device during a standard repair. We recommend backing up your data before any repair as a general precaution.` },
    { question: `How much does a ${modelName} ${repairName.toLowerCase()} cost?`, answer: `Call us or walk in for a free no-obligation quote. We give you a clear price before starting any work — no surprises.` },
  ];
}

export function generateLocationFaqs(deviceLabel: string, suburbName: string): FAQ[] {
  return [
    { question: `Where is the nearest ${deviceLabel} repair shop to ${suburbName}?`, answer: `iTech Repairs is located in Braybrook — just a short drive from ${suburbName}. We\'re easy to reach from the inner west and offer fast same-day repairs.` },
    { question: `Do you offer same-day ${deviceLabel} repairs near ${suburbName}?`, answer: `Yes. Most repairs are completed same day, and many are done in 15–30 minutes while you wait. Come in anytime — no appointment needed.` },
    { question: `How long will my repair take?`, answer: `Screen and battery repairs typically take 15–30 minutes. More complex repairs take longer. We\'ll give you an exact time estimate when you bring your device in.` },
    { question: `Is there a warranty on repairs?`, answer: `Yes — lifetime warranty on all parts and labour on every repair we complete.` },
    { question: `Do I need to book in advance?`, answer: `No booking needed. Walk in anytime during business hours. You can also call ahead to confirm we have your parts in stock.` },
    { question: `How far is Braybrook from ${suburbName}?`, answer: `Braybrook is located in Melbourne\'s inner west. Most ${suburbName} customers are within a 5–15 minute drive. Call us for directions or use Google Maps.` },
  ];
}
