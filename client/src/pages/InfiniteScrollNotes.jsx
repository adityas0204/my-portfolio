import { useState, useEffect } from "react"
import Markdown from "react-markdown"
import InfiniteScroll from "react-infinite-scroll-component"

const InfiniteScrollFullstackNotes = () => {
  const [index, setIndex] = useState([])
  const [page, setPage] = useState(0)
  const [data, setData] = useState("")

  useEffect(() => {
    const fetchIndex = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/adityas0204/fullstack-open/main/tools/index.txt"
      )
      const text = await response.text()
      const urls = text.split("\n").map((indice) => 
        "https://raw.githubusercontent.com/adityas0204/fullstack-open/main" + indice
      )
      setIndex(urls)
    }
    fetchIndex()
  }, [])

  const fetchMoreData = async () => {
    if (page > index.length) return

    const response = await fetch(index[page])
    const md = await response.text()
    setData((prev) => prev + "\n\n" + md)
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    if (index.length > 0 && page === 0) {
      fetchMoreData()
    }
  }, [index])

  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={page < index.length}
        loader={<h4>Loading more notes...</h4>}
        endMessage={<p>All notes loaded.</p>}
      >
        <Markdown>{data}</Markdown>
      </InfiniteScroll>
    </div>
  )
}

export default InfiniteScrollFullstackNotes
