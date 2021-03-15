import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import {fetchPosts} from './actions/fetchPosts'

//components

import Home from './components/home/home';
import NavBar from './components/navbar/nav';
import Footer from './components/footer/footer';
import Ads from './components/ads/ads';
import ContactUs from './components/contact/contact';
import AboutUs from './components/about/aboutUs';
import Partners from './components/partners/partners';
import Board from './components/board/board';
import Archives from './components/archives/archives';
// import category components
import CapitalConnections from './components/categories/capitalConnections';
import DigitalDomains from './components/categories/digitalDomains';
import PointCounterPoint from './components/categories/pointCounterPoint';
import ShoutOut from './components/categories/shoutOutAndPutDowns'
import Beltway from './components/categories/beltwayAndBeyong'
import LawyerLand from './components/categories/lawyerLand'
import Nightmare from './components/categories/nightmare'
import BuyItOrBuildIt from './components/categories/buyItOrBuildIt'
import WalletShare from './components/categories/walletShare'
import FamilyFeuds from './components/categories/familyFeuds'
import ProductStrategies from './components/categories/productStrategies'
import LettersFromLarry from './components/categories/lettersFromLarry'
import NoteworthyNotes from './components/categories/noteworthyNotes'
import NewsMakersRoundUp from './components/categories/newsmakersRoundup'
import TransactionsAndTransitions from './components/categories/transactionsAndTransitions'



class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    this.props.dispatchFetchPosts()
  }

  handleSignIn = (user) => {
    debugger
    this.setState({
      user: user
    })
  }

  render(){
    console.log("app", this.props)
    return (
      <div className="App">
        <NavBar handleSignIn={this.handleSignIn} />
        <Switch >
          <Route exact path ="/" render={()=> <Home posts={this.props.posts} />}/>
          <Route exact path ="/about" render={()=> <AboutUs />}/>
          <Route exact path ="/our-partners" render={()=> <Partners />}/>
          <Route exact path ="/our-board" render={()=> <Board />}/>
          <Route exact path ="/contact-us" render={()=> <ContactUs />}/>
          <Route exact path ="/archives" render={()=> <Archives posts={this.props.posts}/>}/>
          {/* category pages */}
          <Route exact path ="/capital-connections" render={()=> <CapitalConnections />}/>
          <Route exact path ="/digital-domains" render={()=> <DigitalDomains />}/>
          <Route exact path ="/point-counterpoint" render={()=> <PointCounterPoint />}/>
          <Route exact path ="/shout-out-and-put-downs" render={()=> <ShoutOut />}/>
          <Route exact path ="/beltway-and-beyond" render={()=> <Beltway />}/>
          <Route exact path ="/lawyer-land" render={()=> <LawyerLand />}/>
          <Route exact path ="/nightmare-on-compliance-st" render={()=> <Nightmare />}/>
          <Route exact path ="/buy-it-or-build-it" render={()=> <BuyItOrBuildIt />}/>
          <Route exact path ="/wallet-share" render={()=> <WalletShare />}/>
          <Route exact path ="/family-feuds" render={()=> <FamilyFeuds />}/>
          <Route exact path ="/product-strategies" render={()=> <ProductStrategies />}/>
          <Route exact path ="/letters-from-larry" render={()=> <LettersFromLarry />}/>
          <Route exact path ="/noteworthy-notes" render={()=> <NoteworthyNotes />}/>
          <Route exact path ="/newsmakers-roundup" render={()=> <NewsMakersRoundUp />}/>
          <Route exact path ="/transactions-and-transitions" render={()=> <TransactionsAndTransitions />}/>

        </Switch>
        <Ads />
        <Footer />
      </div>
    );
  }
}

function mSTP(state){
  return {
    posts: state.posts,
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchPosts: (posts) => dispatch(fetchPosts(posts)),
  }
}

export default connect(mSTP, mDTP)(App);