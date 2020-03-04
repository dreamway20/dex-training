import React from "react";
import "./styleNews.css";
import {Link, NavLink} from "react-router-dom";

let id = 1;

const news = [
    {
        id: id++,
        name: 'Новости могут быть совершенно разнообразными и удивительными',
        preview: <img src="/News card.png" alt="" width="234px" height="120px"/>
    },
    {
        id: id++,
        name: 'Это вторая тестовая новость',
        preview: <img src="/News card.png" alt="" width="234px" height="120px"/>
    },
    {
        id: id++,
        name: 'Это третья тестовая новость',
        preview: <img src="/News card.png" alt="" width="234px" height="120px"/>
    },
    {
        id: id++,
        name: 'Это четвертая тестовая новость',
        preview: <img src="/News card.png" alt="" width="234px" height="120px"/>
    },
]

function NewsItem(props) {
    const novost = props.novost
    let active = (window.location.pathname === '/news/' + novost.id) ? 'active' : ''
    
    return (
        <li>
            <div className="menu-news"><Link to={'/news/' + novost.id}>{novost.preview}</Link>
                <NavLink to={'/news/' + novost.id} className={"news " + active} activeClassName=''>{novost.name}</NavLink>
            </div>
        </li>)
}

function NewsList(props) {
  const news = props.news;
  const items = news.map((novost) => {
      return <NewsItem key={`${novost.id}`} novost={novost}/>;
  });
  return (<ul className="menu-news">{items}</ul>);
}

export function News() {
  return (
      <section className="newsbar">
          <div className="menu-section">
              <nav className="menu">
              <NewsList news={news}/>
              </nav>
          </div>
      </section>
  );
}

export function OneNews(props) {
  let newsId = parseInt(props.match.params.newsId);
  
  const item = news.map((novost) => {
      if (newsId === novost.id)
          return (<h1 key={novost.id}>{novost.name}</h1>);
  });

  return item
}