var adHelper = (function(global) {
  'use strict';

  function updateAdData(adData) {
    let adPodInfo = adData.adPodInfo;
    $("#adData-system").html(`${adData.adSystem}`);
    $("#adData-id").html(`${adData.adId}`);
    $("#adData-duration").html(`${adData.duration}s`);
    $("#adData-skippable").html(`${adData.skippable}`);
    $("#adData-title").html(`${adData.title}`);
    $("#adData-number").html(`${adPodInfo.totalAds}`);
    $("#adData-contentType").html(`${adData.contentType}`);
    $("#adData-ct").html(`${adData.clickThroughUrl}`);
  }

  function resetValues() {
    currentPlayTime = (0).toFixed(2); 

    let html = "";
    $("#adData-system").empty();
    $("#adData-id").empty();
    $("#adData-duration").empty();
    $("#adData-skippable").empty();
    $("#adData-title").empty();
    $("#adData-number").empty();
    $("#adData-contentType").empty();

    $("#adData-ct").empty();
    $("#console-msg").empty();
  }

  function initScreen() {
    var existingPlayer = $("#vast-video")[0];
    if (existingPlayer != undefined) {
      console.log("Destroying existing player");
      videojs(existingPlayer).dispose();
    }
    
    resetValues();

    var video = $('<video/>', {
      id: 'vast-video',
      width: "640",
      height: "360",
      muted: true,
      // autoplay: true,
      // controls: true,
      class: "video-js vjs-default-skin"
    });

    video.appendTo($("#vast-video-wrapper"));

    var playerOptions = {
      sources: [{
        src: INIT_MP4_URL,
        type: 'video/mp4'
      }]
    }

    var player = videojs('vast-video', playerOptions);

    return player;
  }


  return {
    updateAdData: updateAdData,
    initScreen: initScreen
  }

})(this);
