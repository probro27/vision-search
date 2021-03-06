import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import { useHistory, Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Search from "./search";
import { useRouter } from "next/router";

export default function Home() {
  // const history = useHistory();
  const [query, setQuery] = useState();
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    console.log("lol");
    console.log(e.target.value);
    console.log("query");
    // history.push("/search");
    // Search(e.target.value, query, setQuery)

    router.push({
      pathname: "/search",
      query: {
        search: query,
      },
    });
    // useHistory.push('/search');
  }
  function onChange(e) {
    console.log("yes");
    console.log(e.target.value);
    setQuery(e.target.value);
  }
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-h-screen">
      <Head>
        <title>Vision Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-5xl font-lg font-mono leading-tight text-blue-400">
          Vision: The Search Engine
        </h1>
      </div>
      <form className="my-20 w-2/5 border-blue-900 flex flex-col justify-center items-center">
        <input
          className="border-4 border-blue-500 w-full px-7 py-3 shadow-sm focus:bg-gray-100 focus:border-blue-900 rounded-full mb-10"
          type="text"
          placeholder="Vision Search"
          onChange={(e) => onChange(e)}
        ></input>
        <button
          className="bg-blue-300 w-1/3 px-4 py-3 text-xl text-gray-700 rounded-md hover:bg-blue-500 duration-500 hover:text-white"
          type="submit"
          value="Submit"
          onClick={(e) => onSubmit(e)}
        >
          Search Now!
        </button>
      </form>
    </div>
  );
}
