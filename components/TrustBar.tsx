const trustItems = [
  "NDPR Compliant",
  "Biometric Security",
  "24/7 Available",
  "Patient-Controlled Data",
  "SDG-3 Aligned",
];

export default function TrustBar() {
  return (
    <div className="bg-primary/5 border-y border-primary/10 py-3 px-4 overflow-x-auto">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-0 flex-wrap md:flex-nowrap">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center">
              <span className="text-sm font-medium text-primary px-4 py-1 whitespace-nowrap">
                {item}
              </span>
              {index < trustItems.length - 1 && (
                <span className="w-px h-4 bg-primary/20 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
