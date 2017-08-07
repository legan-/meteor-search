Template.search.onRendered( function () {
  var host      = Meteor.absoluteUrl()
    , link      = host + '/words.json'
    , words     = []
    , minLength = 1;

  var $search   = $('.search-field')
    , $table    = $('table tbody')
    , $status   = $('.status .lead')
    , $showBtn  = $('#show-all-words')
    , $btnContainer = $('.btn-container');

  $.getJSON(link, function (data) {
    if (data) {
      words = data;
    }
  });

  var ending = function (n) {
    var ending = {
          one: '',
          many: 's'
        }
      , e = '';

    if (n > 1) {
      e = 'many';
    } else {
      e = 'one';
    }
    return ending[e];
  };

  var setStatus = function (id, value) {
    var text = 'Status not found';
    switch (id) {
      case 0:
        text = 'Start typing a word';
        break;
      case 1:
        text = '"' + value + '" not found';
        break;
      case 2:
        text = '' + value + ' word' + ending(value) + ' found';
        break;
      case 4:
        text = 'Searching for words...';
        break;
      case 5:
        text = 'You typed: "' + value + '"';
    }
    return $status.text(text);
  };

  var drawTable = function (data) {
    var l = data.length;

    if (l) {
      var sorted = _.sortBy(data, 'name');

      setStatus(2, l);

      _.each(sorted, function(w) {
        var word = '';
        word = w;
        return $table.append(
          "<tr><td><div class=\"big\">" + word.name + "</div></td></tr>"
        );
      });
    } else {
      return setStatus(1, $search.val().trim());
    }
  };

  var search = function (val) {
    var matches = [];

    matches = _.filter(words, function (word) {
      return word.name.toLowerCase().includes(val);
    });

    return drawTable(matches);
  };

  var getValue = function (s) {
    var value = s.val().trim().toLowerCase();

    $table.children().remove();

    if (value.length) {
      setStatus(5, value);
      if (value.length >= minLength) {
        return search(value);
      }
    } else {
      return setStatus(0);
    }
  };

  $search.bind('keyup change', function (e) {
    var $this = $(this);

    $showBtn.show();

    if (e.type === 'keyup') {
      getValue($this);
      if (e.keyCode === 13) {
        return $this.blur();
      }
    }
  });

  setStatus(0);
  $search.focus();

  $showBtn.click(function () {
    var check = function () {
      return setTimeout((function () {
        if (words.length) {
          return drawTable(words);
        } else {
          return check();
        }
      }), 500);
    };

    setStatus(4);
    $showBtn.hide();

    check();

    return false;
  });
});