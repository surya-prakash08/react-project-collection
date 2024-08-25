import logo from './logo.svg';
import './App.css';
import Accordian from './Components/accordian';
import RandomColor from './Components/random-color';
import StarRating from './Components/star-rating';
import ImageSlider from './Components/image-slider';
import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/tree-view';
import menus from './Components/tree-view/data';
import QRCodeGenerator from './Components/qr-code-generator';
import LightDarkMode from './Components/light-dark-mode';
import ScrollIndicator from './Components/scroll-indicator';
import TabTest from './Components/custom-tabs/tab-test';
import ModalTest from './Components/custom-modal-popup/modal-test';
import GithubProfileFinder from './Components/github-profile-finder';
import SearchAutoComplete from './Components/search-auto-complete-with-api';
import TicTacToe from './Components/tic-tac-toe';
import FeatureFlagGlobalState from './Components/feature-flag/context';
import FeatureFlags from './Components/feature-flag';
import UseFetchHookTest from './Components/use-fetch/test';
import UseOnClickOutsideTest from './Components/use-outside-click/test';
import UseWindowResizeTest from './Components/use-window-resize/test';
import ScrollToTopAndBottom from './Components/scroll-to-top-and-bottom';
import ScrollToSection from './Components/scroll-to-top-and-bottom/scroll-to-section';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}

      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'}page={'1'} limit={'10'}/> */}

      {/* <LoadMoreData/> */}

      {/* <TreeView menus={menus}/> */}

      {/* <QRCodeGenerator/> */}

      {/* <LightDarkMode/> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* <TabTest/> */}

      {/* <ModalTest/> */}

      {/* <GithubProfileFinder/> */}

      {/* <SearchAutoComplete/> */}

      {/* <TicTacToe/> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}


      {/* <UseFetchHookTest/> */}

      {/* <UseOnClickOutsideTest/> */}

      {/* <UseWindowResizeTest/> */}

      {/* <ScrollToTopAndBottom/> */}

      <ScrollToSection/>

    </div>
  );
}

export default App;
