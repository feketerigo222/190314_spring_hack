import React, { Component } from 'react';
import logo from '../../images/logo_2.svg';

export default class Top extends Component {
  render() {
    return (
      <div className="Top">
        <header>
          <img src={logo} alt=""/>
          <ul>
            <li className="login">ログイン</li>
            <li className="submit">会員登録</li>
          </ul>
        </header>
        <main>
          <img src={logo} className="logoImage" alt=""/>
          <h2>アイデアを、ポイっとストック</h2>
          <h3>Poittoで、今すぐアイデアを保存しよう</h3>
          <p className="startPoitto">Poittoを始める</p>
        </main>
        <footer>
          <ul>
            <li className="aboutPoitto">Poittoについて</li>
            <li className="contact">お問い合わせ</li>
          </ul>
        </footer>
      </div>
    );
  }
}


