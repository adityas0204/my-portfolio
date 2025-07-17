import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

const FullstackNotes = () => {
  const noteStyle = {
    margin: 24,
    fontFamily: 'Segoe UI',
  }

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/adityas0204/fullstack-open/main/combined.md")
        const md = await response.text()
        setData(md)
      } catch {
        return <div>404: Unable to find page</div>
      }
    }

    fetchdata()
  }, [])

  return (
    <div style={noteStyle}> 
      <Markdown>{data}</Markdown>
    </div>
  )
}

export default FullstackNotes