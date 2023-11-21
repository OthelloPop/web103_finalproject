import React, { useContext } from 'react';
import NavBar from './NavBar';
import { UserContext } from '../contexts/UserContext';
import homepageImage from '../../assets/homepageImage.jpg';

function Home() {
    const { user } = useContext(UserContext);


  return (
    <div className="hide-scrollbar w-screen h-screen">
  <NavBar />
  <div className="grid grid-cols-4 grid-rows-4 max-w-screen h-full gap-0 mt-10 mx-auto">

    <div id="welcome" className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-start items-center pl-10">
      <h1 className="text-4xl leading-tight font-bold">Welcome to StreamStash!</h1>
    </div>

    <div id="introduction" className="col-start-1 col-end-3 row-start-2 row-end-4">
      <h1 className="text-2xl ml-12 mt-2">{user ? user.name : 'Guest'},</h1>
      <br />
      <p className="ml-12 mt-2 mr-12">A warm welcome from Allison Scurry and Chelsea Heredia! We're glad you've made it. Here are some things you can do during you time in StreamStash:</p>
      <ul className="list-disc ml-16 mt-3 mr-12">
        <li>Search for a Movie by Title</li>
        <li>Learn more about a movie via a detail page</li>
        <li>Create a collection and customize it with a name/description</li>
        <li>Add movies to your collection</li>
        <li>View your collection(s)</li>
        <li>View and customize your profile page</li>
        <li>Logout 😔</li>
      </ul>
    </div>

    <div id="acknowledgements" className="col-start-1 col-end-2 row-start-4 row-end-5">
    
      <h1 className="text-xl ml-12 mt-3">Here is where we sourced our assets:</h1>
      <ul className="list-disc ml-16 mt-2 mr-12">
        <li><a target="_blank" href="https://icons8.com/icon/39786/expand-arrow">Expand Arrow</a> & all other icons from <a target="_blank" href="https://icons8.com">Icons8</a></li>
        <li>Image by <a href="https://www.freepik.com/free-photo/film-stripes-with-film-reel-dark-backdrop_4822404.htm#query=movie%20collection&position=6&from_view=keyword&track=ais&uuid=6a70660a-263c-4e5c-ba1b-d4283a3c5102">Freepik</a></li>
        <li>Posters from <a href="https://www.themoviedb.org/">TMDB</a></li>
      </ul>
    </div>

    <div id="image" className="col-start-3 col-end-5 row-start-1 row-end-5 bg-red-200">
      <img src={homepageImage} alt="Movie Theater" className="w-full h-full object-cover" />
    </div>
  </div>
</div>
  );
}

export default Home;