import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const initialState = {
    entre: [
      {
        id: 1,
        number: 2000,
        description: "vente",
      },
      {
        id: 2,
        number: -3000,
        description: "PC",
      },
    ],
  }

  const [entries, setEntries] = useState(initialState)

  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>

      <h1>Journal</h1>
      <h2>
        <Link href="/posts/add">
          <a>Add</a>
        </Link>
      </h2>

      <table className="table table-hover">
        <thead>
          <tr className="table-active">
            <th scope="col">INCOMING</th>
            <th scope="col">OUTCOMING</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(entries).map(([itemId, { number, description }]) => {
            let positiveNumber = 0
            let negativeNumber = 0

            if (number > 0) {
              positiveNumber = positiveNumber + number + ", " + description
            } else {
              negativeNumber = negativeNumber + number + ", " + description
            }

            return (
              <tr key={itemId}>
                <td className="text-success">{positiveNumber}</td>
                <td className="text-danger">{negativeNumber}</td>
              </tr>
            )
          })}
        </tbody>
        <thead>
          <tr>
            <th scope="col">TOTAL</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+ 100</td>
            <td>- 100</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col">RESULT</th>
            <th scope="col">0</th>
          </tr>
        </thead>
      </table>
    </>
  )
}
