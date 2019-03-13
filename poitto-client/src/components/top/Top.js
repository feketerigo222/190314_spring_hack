import React, { Component } from 'react';
import logo from '../../images/logo_2.svg';

export default class Top extends Component {
  render() {
    return (
      <div className="Top">
        <header>
          <img src={logo} alt=""></img>
          <ul>
            <li className="login">ログイン</li>
            <li className="submit">会員登録</li>
          </ul>
        </header>
        <main>
          <img src={logo} alt=""></img>
          <h2>アイデアを、ポイっとストック</h2>
          <h3>Poittoで、今すぐアイデアを保存しよう</h3>
          <div className="startPoitto">Poittoを始める</div>
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


