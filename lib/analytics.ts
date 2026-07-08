export function trackEvent(
    event: string,
    params: Record<string, unknown> = {}
  ) {
    if (typeof window === "undefined") return
  
    ;(window.dataLayer ||= []).push({
      event,
      ...params,
    } as object)
  }