import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5" id="videolist">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyPlaying: exampleVideoData[0],
      videoListEntries: exampleVideoData
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(event) {
    var title = event.currentTarget.textContent;
    for (var video of exampleVideoData) {
      if (video.snippet.title === title) {
        this.setState({
          currentlyPlaying: video
        });
      }
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer
              video={this.state.currentlyPlaying}
            />
          </div>
          <div className="col-md-5" id="videolist">
            <VideoList
              videos={exampleVideoData}
              onTitleClick={this.onTitleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
