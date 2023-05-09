import React from 'react'
import axios from "axios"


export default function Home() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_SERVER_URL}) //use axiosInstance instead of axios to make post calls to server

  return (
    <div>Sup My World.</div>
  )
}
