import Event from './components/Event';
import Registration from './components/Registration';
import Login from './components/Login';
import AccountManagement from './components/AccountManagement';
import Layout from './components/Layout';
import { Routes,Route } from 'react-router-dom';
import FriendRequest from './components/FriendRequest';
import IncomingFriend from './components/IncomingFriend';
import WidrawalFriendRequest from './components/WidrawalFriendRequest'
import Unfriend from './components/Unfriend';
import Broadcast from './components/Broadcast';
import Autoreply from './components/Autoreply';
import SendMessageFriend from './components/SendMessageFriend';
import SendMessagesPlace from './components/SendMessagesPlace';
import Terminal from './components/Terminal';
import Analysis from './components/Analysis';
import JobCampaign from './components/JobCampaign';
import BlackList from './components/Blacklist'
import Invitations from './components/Invitations';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/' element={<AccountManagement/>}/>
      <Route path='/friendrequest' element={<FriendRequest/>}/>
      <Route path='/incomingfriend' element={<IncomingFriend/>}/>
      <Route path='/widrawal' element={<WidrawalFriendRequest/>}/>
      <Route path='/unfriend' element={<Unfriend/>}/>
      <Route path='/braodcast' element={<Broadcast/>}/>
      <Route path='/autoreply' element={<Autoreply/>}/>
      <Route path='/sendmessage-to-friends' element={<SendMessageFriend/>}/>
      <Route path='/sendmessageto-place' element={<SendMessagesPlace/>}/>
      <Route path='/invitaion' element={<Invitations/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/blacklist' element={<BlackList/>}/>
      <Route path='/jobCampaign' element={<JobCampaign/>}/>
      <Route path='/analysis' element={<Analysis/>}/>
      <Route path='/terminal' element={<Terminal/>}/>
      </Route>
    </Routes>
  );
}

export default App;
