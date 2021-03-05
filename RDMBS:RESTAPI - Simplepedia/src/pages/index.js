import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import styles from '../styles/Home.module.css';

import IndexBar from '../components/IndexBar';
import Article from '../components/Article';
import ButtonBar from '../components/ButtonBar';
import Editor from '../components/Editor';

export default function Home() {
  // defines states
  const [collection, setCollection] = useState([]);
  const [currentArticle, select] = useState();
  const [view, setView] = useState("art");
  
  // fetch data from basin api
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}api/articles`);
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      setCollection(data);
    };
    getData();
  }, []);
  
    
  // creates Blank component so nothing is rendered if article isn't selected
  const Blank = function Blank() {
    return <></>;
  }

  // defines ArtRegion component based on article state
  const ArtRegion = currentArticle ? Article : Blank;

  // defines handleClick
  const handleClick = function handleClick(str) {
    if (str === "add") {
      setView("add");
    } else if(str === "edit") {
      setView("edit");
    } else if(str === "delete") {
      const delArt = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}api/articles/${currentArticle.id}`, {
          method: 'DELETE'
        });

        if(!response.ok) {
          throw new Error(response.statusText);
        }

        const newColl = collection.filter((e) => {
          return e !== currentArticle;
        });
        setCollection(newColl);
        select();
      };
      delArt();
      setView("art");
    }
  };

  // defines complete
  // handles view changing and adding new articles
  const complete = function complete(art) {
    if(art === undefined) {
      setView('art');
    } else {
      if(view === 'edit') {
        const editArt = async () => {
          const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}api/articles/${art.id}`, {
            method: 'PUT',
            body: JSON.stringify(art),
            headers: new Headers({ 'Content-type': 'application/json'}),
          });

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const newColl = collection.map((article) => {
            if(article.id === art.id) {
              return art;
            }
            return article;
          });
          setCollection(newColl);
          select(art);
        };
        editArt();
      } else {
        const addArt = async () => {
          const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}api/articles`, {
            method: 'POST',
            body: JSON.stringify(art),
            headers: new Headers({ 'Content-type': 'application/json'}),
          });

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const newArt = await response.json();

          const newColl = [...collection, newArt];
          setCollection(newColl);
          select(newArt);
        };
        addArt();
      }
      setView('art');
    }
  };

  // determines what to display
  let content;
  if (view === 'add') { 
    content = (<Editor complete={complete} />);
  } else if(view === 'edit' && currentArticle) {
    const article = currentArticle;
    content = (<Editor complete={complete} article={article} />);
  } else {
    content = (
      <main>
        <IndexBar collection={collection} select={select} currentArticle={currentArticle} />
        <ArtRegion article={currentArticle} />
        <ButtonBar handleClick={handleClick} allowEdit={currentArticle ? true : false}/>
      </main>
    );
  }
  
  // returns structured DOM
  return (
    <div className={styles.container}>
      <Head>
        <title>Simplepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Simplepedia</h1>
        {content}  
      </main>
      
      <footer>CS 312 Assignment 2</footer>
    </div>
  );
}