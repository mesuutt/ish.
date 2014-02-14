var initExtension = function($) {
    $('head').empty();
    $('body').empty();

    var currentUrl = document.location.href;

    $('body').append(' \
        <header class="sg-header" role="banner"> \
            <div class="nav url-change"> \
                <div> \
                    <label for="url" id="url-toggle" class="url-toggle">URL</label> \
                    <input id="url" type="url" name="url" placeholder="Enter any URL" /> \
                    <button id="url-submit">Go</button> \
                </div> \
            </div> \
            <div class="sg-controls" id="sg-controls"> \
                <div class="sg-control-content"> \
                    <ul class="sg-control"> \
                        <li class="sg-exit"> \
                            <a href="#">Exit</a> \
                        </li> \
                        <li class="sg-size"> \
                            <div class="sg-current-size"> \
                                <form id="sg-form"> \
                                    Size <input type="text" class="sg-input sg-size-px" value="320">px / \
                                    <input type="text" class="sg-input sg-size-em" value="20">em \
                                </form><!--end #sg-form--> \
                            </div><!--end #sg-current-size--> \
                            <ul class="sg-acc-panel sg-size-options"> \
                                <li class="sg-quarter"><a href="#" id="sg-size-s">S</a></li> \
                                <li class="sg-quarter"><a href="#" id="sg-size-m">M</a></li> \
                                <li class="sg-quarter"><a href="#" id="sg-size-l">L</a></li> \
                                <li class="sg-half"><a href="#" id="sg-size-full">Full</a></li> \
                                <li class="sg-half"><a href="#" id="sg-size-random">Random</a></li> \
                                <li class="sg-half"><a href="#" class="mode-link" id="sg-size-disco">Disco</a></li> \
                                <li class="sg-half"><a href="#" class="mode-link" id="sg-size-hay">Hay!</a></li> \
                            </ul> \
                        </li> \
                    </ul> \
                </div> \
            </div> \
        </header> \
        <div id="sg-vp-wrap"> \
            <div id="sg-cover"></div> \
            <div id="sg-gen-container"> \
                <iframe id="sg-viewport" src="'+ currentUrl +'"></iframe> \
                <div id="sg-rightpull-container"> \
                    <div id="sg-rightpull"></div> \
                </div> \
            </div> \
        </div> \
    ');

    $('body').find('#url').val(currentUrl);

    // Initing ish.
    initIsh(window);
};

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    // Listining click to browser action event.
    if (msg.action == 'run') {
        initExtension(jQuery);
    }
});
