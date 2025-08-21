export function StatsSection() {
  return (
    <section
      className="py-16 border-y border-neutral-800/50 backdrop-blur-lg"
      style={{
        opacity: 0,
        animation: "0.8s ease-out 1.2s 1 normal forwards running fadeSlideUp",
        transition: "outline 0.1s ease-in-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "99.7%", label: "Accuracy Rate" },
            { value: "2.3s", label: "Avg Response Time" },
            { value: "150M+", label: "Conversations Processed" },
            { value: "24/7", label: "Uptime Guarantee" },
          ].map((item) => (
            <div className="text-center" key={item.label}>
              <div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400">
                {item.value}
              </div>
              <div className="text-sm text-neutral-400 font-geist font-normal">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
