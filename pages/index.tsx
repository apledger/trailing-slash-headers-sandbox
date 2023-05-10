import { useEffect } from "react"

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  useEffect(() => {
    fetch("/api/hello")
  }, [])

  return (
    <p>
      Look in the network tab for the <code>x-hello</code> response header for
      the request to <code>/api/hello</code>. It is present locally, but not
      when deployed to Vercel.
    </p>
  )
}
