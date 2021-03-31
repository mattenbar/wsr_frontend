import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//actions
import {fetchPosts} from './actions/fetchPosts'
import {fetchCategories} from './actions/fetchCategories'
import {fetchFeatures} from './actions/fetchFeatures'
import {fetchPointcps} from './actions/pointcp/fetchPointcps';
import { getUser } from './actions/userAuth/getUser';
import { getSearch } from './actions/searchAction';
import { fetchAds} from './actions/fetchAds'
import { fetchShowads } from './actions/fetchShowAds'

//components

import Home from './components/home/home';
import NavBar from './components/navbar/nav';
import Search2 from './components/navbar/search2';
import Footer from './components/footer/footer';
import Ads from './components/ads/ads';
import ContactUs from './components/contact/contact';
import AboutUs from './components/about/aboutUs';
import Partners from './components/partners/partners';
import Board from './components/board/board';
import Archives from './components/archives/archives';
import Admin from './components/admin/admin'

import PointCounterPoint from './components/pointcp/pointCounterPoint';
import PointCounterPointArticle from './components/pointcp/pointCounterPointArticle';

import IndividualPost from './components/articles/individualPosts';

// import category components
import CapitalConnections from './components/categories/capitalConnections';
import CapitalConnectionArticle from './components/articles/capitalConnectionArticle';
import DigitalDomains from './components/categories/digitalDomains';
import DigitalDomainArticle from './components/articles/digitalDomainArticle';
import ShoutOut from './components/categories/shoutOutAndPutDowns';
import ShoutOutArticle from './components/articles/shoutOutArticle';
import Beltway from './components/categories/beltwayAndBeyond';
import BeltwayBeyondArticle from './components/articles/beltwayBeyondArticle';
import Nightmare from './components/categories/nightmare';
import NightmareComplianceArticle from './components/articles/nightmareComplianceArticle';
import BuyItOrBuildIt from './components/categories/buyItOrBuildIt';
import BuyItbuildItArticle from './components/articles/buyItbuildItArticle';
import WalletShare from './components/categories/walletShare';
import WalletShareArticle from './components/articles/walletShareArticle';
import LettersFromLarry from './components/categories/lettersFromLarry';
import LettersFromLarryArticle from './components/articles/lettersFromLarryArticle';
import NewsMakersRoundUp from './components/categories/newsmakersRoundup';
import NewsmakersRoundupArticle from './components/articles/newsmakersRoundupArticle';
import TransactionsAndTransitions from './components/categories/transactionsAndTransitions';
import TransactionsTransitionsArticle from './components/articles/transactionsTransitionsArticle';
import DramatisPersonae from './components/categories/dramatisPersonae';
import DramatisPersonaeArticle from './components/articles/dramatisPersonaeArticle';
import OnTheRise from './components/categories/onTheRise';
import OnTheRiseArticle from './components/articles/onTheRiseArticle';
import BizarreIndustryBazaar from './components/categories/bizarreIndustryBazaar';
import BizarreBazaarArticle from './components/articles/bizarreBazaarArticle';
import InvestmentSolutionsandGatekeepers from './components/categories/investmentSolutions';
import InvestmentSolutionsArticle from './components/articles/investmentSolutionsArticle';
import CastAndCrew from './components/categories/castAndCrew';
import CastCrewArticle from './components/articles/castCrewArticle';
import CyberCryptTales from './components/categories/cyberCryptTales';
import CyberCryptArticle from './components/articles/cyberCryptArticle';
import PeopleMoves from './components/categories/peopleMoves';
import PeopleMovesArticle from './components/articles/peopleMovesArticle';


class App extends React.Component{

  componentDidMount(){
    this.props.dispatchFetchPosts()
    this.props.dispatchFetchCategories()
    this.props.dispatchFetchFeatures()
    this.props.dispatchFetchPointcps()
    this.props.dispatchGetSearch()
    this.props.dispatchFetchAds()
    this.props.dispatchFetchShowads()
    
    const token = localStorage.getItem("token")
    if (token) {
      this.props.dispatchGetUser(token)
    }
    
  }

  render(){
    return (
      <div className="App">
        <NavBar user={this.props.user} search={this.props.search}/>
        <Switch >
          <Route exact path="/" render={()=> <Home posts={this.props.posts} categories={this.props.categories} search={this.props.search} features={this.props.features} user={this.props.user} pcps={this.props.pcps}/>}/>
          <Route exact path="/search" render={()=> <Search2 search={this.props.search}/> } />
          <Route exact path="/about" render={()=> <AboutUs />}/>
          <Route exact path="/our-partners" render={()=> <Partners />}/>
          <Route exact path="/our-board" render={()=> <Board />}/>
          <Route exact path="/contact-us" render={()=> <ContactUs />}/>
          <Route exact path="/archives" render={()=> <Archives posts={this.props.posts}/>}/>
          <Route exact path="/admin" render={()=> <Admin posts={this.props.posts} categories={this.props.categories} features={this.props.features} ads={this.props.ads} />}/>

          <Route exact path="/Todays-Top-Features/:id" component={IndividualPost} /> 
          <Route exact path="/This-Issue/:id" component={IndividualPost} />
          <Route exact path="/Last-Issue/:id" component={IndividualPost} />


          {/* category pages */}


          <Route exact path="/Dramatis-Personae" render={()=> <DramatisPersonae />}/>
          <Route exact path="/Dramatis-Personae/:id" component={DramatisPersonaeArticle} />
          <Route exact path="/Wallet-Share" render={()=> <WalletShare />}/>
          <Route exact path="/Wallet-Share/:id" component={WalletShareArticle} />
          <Route exact path="/Letters-From-Larry" render={()=> <LettersFromLarry />}/>
          <Route exact path="/Letters-From-Larry/:id" component={LettersFromLarryArticle} />
          <Route exact path="/The-Digital-Domain" render={()=> <DigitalDomains />}/>
          <Route exact path="/The-Digital-Domain/:id" component={DigitalDomainArticle} />
          <Route exact path="/Capital-Connections" render={()=> <CapitalConnections posts={this.props.categories} categories={this.props.categories}/>}/>
          <Route exact path="/Capital-Connections/:id" component={CapitalConnectionArticle} />
          <Route exact path="/Point-Counterpoint" render={()=> <PointCounterPoint />}/>
          <Route exact path="/Point-Counterpoint/:id" component={PointCounterPointArticle} />

          
          
          <Route exact path="/On-The-Rise" render={()=> <OnTheRise />}/>
          <Route exact path="/On-The-Rise/:id" component={OnTheRiseArticle} />
          <Route exact path="/NewsMakers-Roundup" render={()=> <NewsMakersRoundUp />}/>
          <Route exact path="/NewsMakers-Roundup/:id" component={NewsmakersRoundupArticle} />
          <Route exact path="/Bizarre-Industry-Bazaar" render={()=> <BizarreIndustryBazaar />}/>
          <Route exact path="/Bizarre-Industry-Bazaar/:id" component={BizarreBazaarArticle} />
          <Route exact path="/Investment-Solutions-and-Gatekeepers" render={()=> <InvestmentSolutionsandGatekeepers />}/>
          <Route exact path="/Investment-Solutions-and-Gatekeepers/:id" component={InvestmentSolutionsArticle} />

          <Route exact path="/Buy-It-Or-Build-It" render={()=> <BuyItOrBuildIt />}/>
          <Route exact path="/Buy-It-Or-Build-It/:id" component={BuyItbuildItArticle} />
          <Route exact path="/Nightmare-On-Compliance-St" render={()=> <Nightmare />}/>
          <Route exact path="/Nightmare-On-Compliance-St/:id" component={NightmareComplianceArticle} />
          <Route exact path="/Beltway-And-Beyond" render={()=> <Beltway />}/>
          <Route exact path="/Beltway-And-Beyond/:id" component={BeltwayBeyondArticle} />

          <Route exact path="/Cast-And-Crew" render={()=> <CastAndCrew />}/>
          <Route exact path="/Cast-And-Crew/:id" component={CastCrewArticle} />
          <Route exact path="/Transactions-And-Transitions" render={()=> <TransactionsAndTransitions />}/>
          <Route exact path="/Transactions-And-Transitions/:id" component={TransactionsTransitionsArticle} />
          <Route exact path="/CyberCrypt-Tales" render={()=> <CyberCryptTales />}/>
          <Route exact path="/CyberCrypt-Tales/:id" component={CyberCryptArticle} />
          <Route exact path="/People-Moves" render={()=> <PeopleMoves />}/>
          <Route exact path="/People-Moves/:id" component={PeopleMovesArticle} />
          
          <Route exact path="/Shout-Outs-And-Put-Downs" render={()=> <ShoutOut />}/>
          <Route exact path="/Shout-Outs-And-Put-Downs/:id" component={ShoutOutArticle} />
          
          
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
    search: state.search.search,
    features: state.features,
    user: state.user,
    pcps: state.pcps,
    ads: state.ads,
    showads: state.showads
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchPosts: (posts) => dispatch(fetchPosts(posts)),
    dispatchFetchCategories: (categories) => dispatch(fetchCategories(categories)),
    dispatchFetchFeatures: (features) => dispatch(fetchFeatures(features)),
    dispatchFetchPointcps: (pcps) => dispatch(fetchPointcps(pcps)),
    dispatchFetchAds: (ads) => dispatch(fetchAds(ads)),
    dispatchFetchShowads: (showads) => dispatch(fetchShowads(showads)),
    dispatchGetUser: (user) => dispatch(getUser(user)),
    dispatchGetSearch: (search) => dispatch(getSearch(search))
  }
}

export default withRouter(connect(mSTP, mDTP)(App));
