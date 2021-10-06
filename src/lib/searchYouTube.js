import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    youtubeApiKey: YOUTUBE_API_KEY,
    q: query
  })
    .done((items) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

// $.ajax({
//   url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
//   type: 'GET',
//   data: {
//     q: query},
//   dataType: 'json',
//   success: function(data) {
//     callback(data);
//   },
//   error: function (error) {
//     console.error('chatterbox: Failed to fetch messages', error);
//   }
// });


export default searchYouTube;
