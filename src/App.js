import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import {fetchPosts} from './actions/fetchPosts'
import {fetchCategories} from './actions/fetchCategories'
import {fetchFeatures} from './actions/fetchFeatures'
import {fetchPointcps} from './actions/fetchPointcps'
import { getUser } from './actions/userAuth/getUser';

//components

import Home from './components/home/home';
import NavBar from './components/navbar/nav';
import Search from './components/navbar/search';
import Footer from './components/footer/footer';
import Ads from './components/ads/ads';
import ContactUs from './components/contact/contact';
import AboutUs from './components/about/aboutUs';
import Partners from './components/partners/partners';
import Board from './components/board/board';
import Archives from './components/archives/archives';
import PostInput from './components/admin/postInput'

import IndividualPost from './components/articles/individualPosts';

// import category components
import CapitalConnections from './components/categories/capitalConnections';
import DigitalDomains from './components/categories/digitalDomains';
import PointCounterPoint from './components/categories/pointCounterPoint';
import ShoutOut from './components/categories/shoutOutAndPutDowns';
import Beltway from './components/categories/beltwayAndBeyond';
import Nightmare from './components/categories/nightmare';
import BuyItOrBuildIt from './components/categories/buyItOrBuildIt';
import WalletShare from './components/categories/walletShare';
import LettersFromLarry from './components/categories/lettersFromLarry';
import NewsMakersRoundUp from './components/categories/newsmakersRoundup';
import TransactionsAndTransitions from './components/categories/transactionsAndTransitions';
import DramatisPersonae from './components/categories/dramatisPersonae';
import OnTheRise from './components/categories/onTheRise';
import BizarreIndustryBazaar from './components/categories/bizarreIndustryBazaar';
import InvestmentSolutionsandGatekeepers from './components/categories/investmentSolutions';
import CastAndCrew from './components/categories/castAndCrew';
import CyberCryptTales from './components/categories/cyberCryptTales';
import PeopleMoves from './components/categories/peopleMoves';


class App extends React.Component{

  componentDidMount(){
    this.props.dispatchFetchPosts()
    this.props.dispatchFetchCategories()
    this.props.dispatchFetchFeatures()
    this.props.dispatchFetchPointcps()
    
    const token = localStorage.getItem("token")
    if (token) {
      this.props.dispatchGetUser(token)
    }
    // this.userLogin()
  }

  // userLogin = () => {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     // this.props.dispatchGetUser(token)
  //   }
  // }

  render(){
    
    return (
      <div className="App">
        <NavBar posts={this.props.posts} categories={this.props.categories} user={this.props.user}/>
        <Switch >
          <Route exact path ="/" render={()=> <Home posts={this.props.posts} categories={this.props.categories} search={this.props.search} features={this.props.features} user={this.props.user} pcps={this.props.pcps}/>}/>
          <Route exact path ="/search" render={()=> <Search posts={this.props.posts} categories={this.props.categories} search={this.props.search}/> } />
          <Route exact path ="/about" render={()=> <AboutUs />}/>
          <Route exact path ="/our-partners" render={()=> <Partners />}/>
          <Route exact path ="/our-board" render={()=> <Board />}/>
          <Route exact path ="/contact-us" render={()=> <ContactUs />}/>
          <Route exact path ="/archives" render={()=> <Archives posts={this.props.posts}/>}/>
          <Route exact path ="/submit" render={()=> <PostInput posts={this.props.posts} categories={this.props.categories} />}/>

          <Route exact path="/posts/:id" component={IndividualPost} />
          

          {/* category pages */}

          <Route exact path ="/Dramatis-Personae" render={()=> <DramatisPersonae />}/>
          <Route exact path ="/Wallet-Share" render={()=> <WalletShare />}/>
          <Route exact path ="/Letters-From-Larry" render={()=> <LettersFromLarry />}/>
          <Route exact path ="/The-Digital-Domain" render={()=> <DigitalDomains />}/>
          <Route exact path ="/Capital-Connections" render={()=> <CapitalConnections posts={this.props.categories} categories={this.props.categories}/>}/>
          <Route exact path ="/Point-Counterpoint" render={()=> <PointCounterPoint />}/>
          {/* <Route exact path="/capital-connections/:id" component={CapitalConnectectionPost} /> */}
          
          <Route exact path ="/On-The-Rise" render={()=> <OnTheRise />}/>
          <Route exact path ="/NewsMakers-Roundup" render={()=> <NewsMakersRoundUp />}/>
          <Route exact path ="/Bizarre-Industry-Bazaar" render={()=> <BizarreIndustryBazaar />}/>
          <Route exact path ="/Investment-Solutions-and-Gatekeepers" render={()=> <InvestmentSolutionsandGatekeepers />}/>

          <Route exact path ="/buy-it-or-build-it" render={()=> <BuyItOrBuildIt />}/>
          <Route exact path ="/nightmare-on-compliance-st" render={()=> <Nightmare />}/>
          <Route exact path ="/beltway-and-beyond" render={()=> <Beltway />}/>

          <Route exact path ="/Cast-And-Crew" render={()=> <CastAndCrew />}/>
          <Route exact path ="//Transactions-And-Transitions" render={()=> <TransactionsAndTransitions />}/>
          <Route exact path ="/CyberCrypt-Tales" render={()=> <CyberCryptTales />}/>
          <Route exact path ="/People-Moves" render={()=> <PeopleMoves />}/>
          
          <Route exact path ="/Shout-Outs-And-Put-Downs" render={()=> <ShoutOut />}/>
          
          
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
    categories: state.categories,
    search: state.search,
    features: state.features,
    user: state.user,
    pcps: state.pcps
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchPosts: (posts) => dispatch(fetchPosts(posts)),
    dispatchFetchCategories: (categories) => dispatch(fetchCategories(categories)),
    dispatchFetchFeatures: (features) => dispatch(fetchFeatures(features)),
    dispatchFetchPointcps: (pcps) => dispatch(fetchPointcps(pcps)),
    dispatchGetUser: (user) => dispatch(getUser(user))
  }
}

export default connect(mSTP, mDTP)(App);