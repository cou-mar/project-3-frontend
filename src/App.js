import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import FavoritesPage from './pages/FavoritesPage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import UpdateEventPage from './pages/UpdateEventPage';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import CreateEventPage from './pages/CreateEventPage';
import MemoriamPage from './pages/MemoriamPage';
import { AuthContext } from './context/auth.context';
import { useContext } from 'react';

function App() {

  const { logOutUser } = useContext(AuthContext)

  let token = localStorage.getItem('authToken')

  return (
    <div className="App">
      {
      token ?  <button onClick={logOutUser} className="logoutBttn">Logout</button> : null
      }

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={
          <IsAnon>
            <SignupPage/>
          </IsAnon>
        } />
        <Route path='/login' element={
          <IsAnon>
            <LoginPage/>
          </IsAnon>
        } />
        <Route path='/profile' element={
          <IsPrivate>
            <ProfilePage/>
          </IsPrivate>
        } />
        <Route path='/my-events' element={
          <IsPrivate>
            <FavoritesPage/>
          </IsPrivate>
        } />
        <Route path='/create-event' element={
          <IsPrivate>
            <CreateEventPage />
          </IsPrivate>
        }>
        </Route>
        <Route path='/see-events' element={
          <IsPrivate>
            <EventsPage/>
          </IsPrivate>
        } />
        <Route path='/see-event/:eventId' element={
          <IsPrivate>
            <EventDetailsPage/>
          </IsPrivate>
        } />
        <Route path='/see-event/:eventId/edit' element={
          <IsPrivate>
            <UpdateEventPage />
          </IsPrivate>
        } />
        <Route path='/in-memoriam' element={
          <IsPrivate>
            <MemoriamPage />
          </IsPrivate>
        } />

      </Routes>

      {/* footer here */}

    </div>
  );
}

export default App;