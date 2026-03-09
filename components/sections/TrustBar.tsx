const pillars = [
  { icon: '⚡', stat: '15 Min', label: 'Many Repairs Done In' },
  { icon: '🛡️', stat: 'Lifetime', label: 'Warranty on Every Repair' },
  { icon: '⭐', stat: '500+', label: '5-Star Google Reviews' },
  { icon: '📍', stat: 'Walk In', label: 'No Appointment Needed' },
];

export default function TrustBar() {
  return (
    <div className="bg-brand">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-400">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center py-5 px-4 text-center">
              <span className="text-2xl mb-1">{p.icon}</span>
              <span className="text-white font-bold text-lg" style={{fontFamily:'var(--font-barlow)'}}>{p.stat}</span>
              <span className="text-red-100 text-xs">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
