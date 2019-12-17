var adEventHandler = (function(global) {
  'use strict';
  
  function updateConsoleHtml(msg) {
    $("#console-msg").append(`<br>Duration: ${global.currentPlayTime}, AdEvent: ${msg}`);
    $("#console-msg").animate({ scrollTop: $(document).height() }, "slow");
  }

  function onAdEvent(event) {
    let updateMsg;

    switch (event.type) {
      case google.ima.AdEvent.Type.LOADED:
        updateMsg = "ima.AdEvent.Type.LOADED";
        var adData = event.getAdData();
        adHelper.updateAdData(adData);
        break;
      case google.ima.AdEvent.Type.STARTED:
        updateMsg = "ima.AdEvent.Type.STARTED";
        break;
      case google.ima.AdEvent.Type.FIRST_QUARTILE:
        updateMsg = "ima.AdEvent.Type.FIRST_QUARTILE";
        break;
      case google.ima.AdEvent.Type.MIDPOINT:
        updateMsg = "ima.AdEvent.Type.MIDPOINT";
        break;
      case google.ima.AdEvent.Type.THIRD_QUARTILE:
        updateMsg = "ima.AdEvent.Type.THIRD_QUARTILE";
        break;
      case google.ima.AdEvent.Type.COMPLETE:
        updateMsg = "ima.AdEvent.Type.COMPLETE";
        break;
      case google.ima.AdEvent.Type.CLICK:
        updateMsg = "ima.AdEvent.Type.CLICK";
        break;
      case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
        updateMsg = "ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED";
        break;
      case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
        updateMsg = "ima.AdEvent.Type.CONTENT_RESUME_REQUESTED";
        break;
      case google.ima.AdEvent.Type.IMPRESSION:
        updateMsg = "ima.AdEvent.Type.IMPRESSION";
        break;
      case google.ima.AdEvent.Type.AD_METADATA:
        updateMsg = "ima.AdEvent.Type.AD_METADATA";
        break;
      case google.ima.AdEvent.Type.PAUSED:
        updateMsg = "ima.AdEvent.Type.PAUSED";
        break;
      case google.ima.AdEvent.Type.RESUMED:
        updateMsg = "ima.AdEvent.Type.RESUMED";
        break;
      case google.ima.AdEvent.Type.SKIPPED:
        updateMsg = "ima.AdEvent.Type.SKIPPED";
        break;
      case google.ima.AdEvent.Type.VOLUME_CHANGED:
        updateMsg = "ima.AdEvent.Type.VOLUME_CHANGED";
        break;
      case google.ima.AdEvent.Type.VOLUME_MUTED:
        updateMsg = "ima.AdEvent.Type.VOLUME_MUTED";
        break;
    }

    updateConsoleHtml(updateMsg);
  }


  function onAdError(event) {
    var error = event.getError();
    $("#console-msg").append(`<br>${error.toString()}`);
  }


  return {
    onAdEvent: onAdEvent,
    onAdError: onAdError,
    updateConsoleHtml: updateConsoleHtml
  }

})(this);
