/**
 * Checks if the distillery is currently open.
 * Hours: Monday-Friday 9:30 AM - 4:30 PM
 * Closed: Saturday and Sunday
 */
export function isDistilleryOpen(): boolean {
  const now = new Date()
  const day = now.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentTime = hours * 60 + minutes // Convert to minutes for easier comparison

  // Closed on weekends
  if (day === 0 || day === 6) {
    return false
  }

  // Monday-Friday: 9:30 AM (570 minutes) to 4:30 PM (990 minutes)
  const openTime = 9 * 60 + 30 // 9:30 AM
  const closeTime = 16 * 60 + 30 // 4:30 PM

  return currentTime >= openTime && currentTime < closeTime
}
