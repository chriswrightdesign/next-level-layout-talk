(function(){
    'use strict';
    var d = document,
        $ = function(selector){ return d.querySelector(selector)};

    var list = $('.js-list'),
        buttonAdd = $('.js-add');

        //some adventure time quotes
    var responses = [
        "Sucking at something is the first step to being sorta good at something",
        "When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light",
        "I know who I am and I'll know what I want if and when it comes along",
        "People make mistakes. It's a part of growing up, and you never really stop growing",
        "The answer was too simple and I was too smart to see it",
        ];


        function getTimeStamp() {
            var now = new Date();
            var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
            var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
            var suffix = ( time[0] < 12 ) ? "AM" : "PM";
            time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
            time[0] = time[0] || 12;
            for ( var i = 1; i < 3; i++ ) {
                if ( time[i] < 10 ) {
                    time[i] = "0" + time[i];
                }
            }
            return date.join("/") + " " + time.join(":") + " " + suffix;
        }

        function generateResponse(){
            return responses[Math.floor(Math.random() * responses.length)];
        }

        function renderListItem(){
            var message = generateResponse();
            var time = getTimeStamp();
            var li = document.createElement('li');
            li.className = 'reversal-list__item insert';
            li.innerHTML = '<div class="comment"><div class="comment__avatar"><img class="avatar" src="img/image-placeholder.png" alt="placeholder image" /></div><div class="comment__message"><time class="comment__timestamp" datetime="2016-03-03">' + time + '</time><p class="comment__paragraph">' + message + '</p></div></div>';
            list.appendChild(li);
        }

        function handleClick(e){
            renderListItem();
        }

        buttonAdd.addEventListener('click', handleClick, false);


})();