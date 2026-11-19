import { useEffect, useState } from 'react'

export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-IN', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })

    const update = () => setTime(formatter.format(new Date()))
    update()

    const interval = window.setInterval(update, 30_000)
    return () => window.clearInterval(interval)
  }, [timeZone])

  return time
}
