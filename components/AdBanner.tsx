"use client";

import Script from "next/script";

const ZONE_IDS = {
  RECTANGLE: process.env.NEXT_PUBLIC_ADSTERRA_RECTANGLE_ZONE_ID ?? "",
  NATIVE: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_ZONE_ID ?? "",
};

type AdSize = "rectangle" | "native";

const SIZE_CONFIG: Record<AdSize, { width: number; height: number; zoneKey: keyof typeof ZONE_IDS }> = {
  rectangle: { width: 300, height: 250, zoneKey: "RECTANGLE" },
  native:    { width: 300, height: 250, zoneKey: "NATIVE" },
};

export default function AdBanner({ size = "rectangle" }: { size?: AdSize }) {
  const config = SIZE_CONFIG[size];
  const zoneId = ZONE_IDS[config.zoneKey];
  const isConfigured = zoneId.length > 0;

  return (
    <div className="flex justify-center">
      <div
        className="overflow-hidden bg-white border border-border rounded-md"
        style={{ width: config.width, minHeight: config.height }}
      >
        {isConfigured ? (
          <>
            <Script
              id={`adsterra-banner-${size}-${zoneId}`}
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  atOptions = {
                    'key': '${zoneId}',
                    'format': 'iframe',
                    'height': ${config.height},
                    'width': ${config.width},
                    'params': {}
                  };
                `,
              }}
            />
            <Script
              src={`//www.highperformanceformat.com/${zoneId}/invoke.js`}
              strategy="afterInteractive"
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[inherit] text-ink-muted/40 text-[11px] text-center p-4">
            <div>
              <p>広告枠（{size}）</p>
              <p className="mt-0.5">
                <code className="text-vermillion/40 text-[10px]">.env → NEXT_PUBLIC_ADSTERRA_{config.zoneKey}_ZONE_ID</code>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
