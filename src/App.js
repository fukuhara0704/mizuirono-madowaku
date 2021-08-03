// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';
// import fetch from 'node-fetch';
// import './App.css';

// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       month: '',
//       name: '',
//       color: ''
//     }
//   }
//   componentWillMount () {
//     const URL = 'http://localhost:8080/api/sample/getBirthStone'
//     fetch(URL, {mode: 'cors'})
//     .then(res => res.json())
//     .then(json => {
//       this.setState({
//         month: json['month'],
//         name: json['name'],
//         color: json['color']
//       })
//     });
//   }

//   render() {
//     return <div className='App'>
//       month: {this.state.month} <br />
//       name: {this.state.name} <br />
//       color: {this.state.color} <br />
//     </div>
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from "./Button"; //追加(Button.js呼び出し)

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h3>React.jsはじめました。</h3> {/* 追加 */}
//           <img src={logo} className="App-logo" alt="logo" />
//           <Button name="menu1" /> {/* 追加 */}
//           <Button name="menu2" /> {/* 追加 */}
//           <Button name="menu3" /> {/* 追加 */}
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;


// import React from "react";
// import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import PageA from "./PageA";
// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/page_a" exact component={PageA} />
//         <Redirect to="/" />
//       </Switch>
//     </BrowserRouter>
//   );
// }
// export default App;


// import './App.css'

// import Header from './components/modules/Header'

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   )
// }

// export default App


// import React from 'react';
// import { makeStyles, Grid } from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//     container: {
//         border: '3px solid purple',
//         padding: '10px',
//     },
//     item: {
//         padding: '10px',
//         border: '1px solid lightblue',
//     },
// }));

// function App() {
//   const classes = useStyles();
//   return (
//       <Grid container className={classes.container}>
//           <Grid item xs={12} className={classes.item}>Home</Grid>
//           <Grid item xs={12} className={classes.item}>About</Grid>
//           <Grid item xs={12} className={classes.item}>Contact</Grid>
//       </Grid>
//   );
// }

// export default App;



// import React from 'react'; //Reactを読み込んでいる
// //画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import page1 from './page1'; //作成したpage1.jsを読み込んでいる
// import page2 from './page2'; //追加　page2を読み込んでいる

// class App extends React.Component {
//   render(){
//     return(
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={page1} />　//URLのパスが'/'のみの時にpage1を表示する
//           <Route exact path="/page2" component={page2} />　//追加　URLで/page2を指定するとpage2を表示す
//         </Switch>
//       </BrowserRouter>
//     );
//   };
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <header>
//         <h1>Cute Dog Images</h1>
//       </header>
//       <main>
//         <section>
//           <figure>
//             <img
//               src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
//               alt="cute dog"
//             />
//           </figure>
//         </section>
//       </main>
//       <footer>
//         <p>Dog images are retrieved from Dog API</p>
//         <p>
//           <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Sample from './sample';
import './App.css';
import { Grid } from '@material-ui/core';

 
function App() {
  const style = {
    width: "90%",
    margin: "auto",
    marginTop: 50
  };
  const top1_style = {
    width: "80%",
    margin:"0px 0px 70px 70px"
  };
  const top2_style = {
    width: "80%",
    margin:"0px 70px 10px 0px"
  };
  const top3_style = {
    width: "80%",
    margin:"0px 0px 0px 70px"
  };
  const content_style = {
    width: "70%",
    margin: "auto",
    marginBottom: 10
  };
  const gmp_style = {
    border:0,
    width: "90%",
    height:"450px",
    marginBottom: 50
  };
  
const container = {
    padding: '10px'
 };
  
const  item = {
        padding: '10px',
        border:'1px'
 };
  
  
  
  return (
    <div className="App">
        <h1>水色の窓枠</h1>
        <img style={top2_style}src={`${process.env.PUBLIC_URL}/img/top/top2.jpg`} alt="Logo" />
        <h2>紹介</h2>
        <div style={content_style}>
            現役女子大生3人が運営するカフェです。<br/>
            提供するのは若者ならではの視点で作る、トレンドを取り入れたメニューの数々。<br/>
            SNS映えする本格カレーや自家製スイーツはプロ顔負けです。
        </div>
        <img style={top3_style}src={`${process.env.PUBLIC_URL}/img/top/top3.jpg`} alt="Logo" />
        <h1>menu</h1>
       <Grid container style={container}>
           <Grid item xs={4} style={item}>LUNCH</Grid>
           <Grid item xs={4} style={item}>DRINK</Grid>
           <Grid item xs={4} style={item}>DESSERT</Grid>
       </Grid>
      <div style={style}>
        <Sample />
      </div>
        <h2>実店舗</h2>
        <h2>水色の窓枠</h2>
        <div style={content_style}>
            <div>
                所在地
            </div>
            <div>
                兵庫県加古郡播磨町北本荘1丁目13-36　501号室
            </div>
            <div>営業時間
            </div>
            <div>
                11：00～17：00
            </div>
        </div>
        <div style={content_style}>
            【お車でお越しのお客様】
             駐車場に限りがございますので、1テーブル1台でのご来店にご協力ください。
        </div>
      <iframe id="testiframe" name="testiframe" title="Advertisement" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.4082396537524!2d134.85952431523276!3d34.720102780429556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554d76fd75cf0e3%3A0x7c96d5cc73dd910!2z44CSNjc1LTAxNDQg5YW15bqr55yM5Yqg5Y-k6YOh5pKt56Oo55S65YyX5pys6I2Y77yR5LiB55uu77yR77yT4oiS77yT77yW!5e0!3m2!1sja!2sjp!4v1627737851002!5m2!1sja!2sjp" width="600" height="450" style={gmp_style} allowfullscreen="" loading="lazy"> </iframe>
    </div>
  );
}
 
export default App;