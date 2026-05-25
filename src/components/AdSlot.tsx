interface AdSlotProps {
  className?: string;
  slot?: string;
}

export default function AdSlot({ className = "", slot = "top" }: AdSlotProps) {
  return (
    <div
      className={`flex items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 py-4 text-xs text-gray-400 ${className}`}
      data-ad-slot={slot}
    >
      Ad Space
    </div>
  );
}
