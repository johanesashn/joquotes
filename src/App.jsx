import React, { useState, useEffect, useLayoutEffect } from "react"
import axios from "axios"
import { nanoid } from "nanoid";
import Quote from "./Quote";
import Navbar from "./Navbar";
import Search from "./Search";
import Jumbotron from "./Jumbotron";
import Regenerate from "./Regenerate";
import Footer from "./Footer";

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [category, setCategory] = useState("")

  const fetchQuotes = async (category) => {
    const limit = 8

      try {
          const response = await axios.get(
            `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=${limit}`,
            {
              headers: {
                'X-Api-Key': 'wuzpuayoi73m3Ov4N5vplQ==cfCaM4SSx2lTH8ay',
              },
            }
          )

          setQuotes(response.data)
        } catch (error) {
          console.error("Error: ", error.response.data)
        }
  };

  useEffect(() => {
    fetchQuotes(category)
  }, [category])

  return (
    <>
      {console.log("category: " + category)}
      <Navbar/>
      <Jumbotron/>
      <Search 
        updateCategory = {setCategory}
      />
      <div className="container">
        {
          category
          ?
          quotes.map((quoteObj) => (
            <Quote 
              key = {nanoid()}
              quote = {quoteObj.quote}
              author = {quoteObj.author}
              category = {quoteObj.category}
            />
          ))
          :
          <h2 className="sub-title">I'm Waiting For You To Select The Category</h2>
        }
      </div>
      {
        category 
          ? 
            <Regenerate
              category = {category}
              getQuotes = {fetchQuotes}
            />
          : 
            ""
      }
      <Footer/>
    </>
  )
}