import VideoListEntry from './VideoListEntry.js';
// import exampleVideoData from './data/exampleVideoData.js';

// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );
// console.log('SHOULD HAVE VIDEO DATA', exampleVideoData);
var VideoList = (props) => (
  <div className="video-list">
    {/* {console.log(props)} */}
    {props.videos.map(video =>
      <VideoListEntry video={video} key={video.id.videoId} onTitleClick={props.onTitleClick} />
    )}
  </div>
);

// ReactDOM.render(<VideoList  />, document.getElementById('app'));

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
