import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// eslint-disable-next-line no-undef
const Resume: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading effect before redirecting
    const timer = setTimeout(() => {
      router.push('/media/resume.pdf')
    }, 1000) // 2-second delay

    return () => clearTimeout(timer) // Cleanup the timer on unmount
  }, [router])

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      {loading && <p>Loading your resume, please wait...</p>}
    </div>
  )
}

export default Resume
