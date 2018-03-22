Template.search.onRendered(() => {
  let host      = Meteor.absoluteUrl()
    , link      = host + '/words.json'
    , words     = []
    , minLength = 1;

  let $search   = $('.search-field')
    , $table    = $('table tbody')
    , $status   = $('.status .lead')
    , $showBtn  = $('#show-all-words')
    , $btnContainer = $('.btn-container');

  fetch(link)
  .then(response => response.json())
  .then(json => words = json);

  const ending = n => n > 1 ? 's' : '';

  const setStatus = (id, value) => {
    var text = 'Status not found';
    switch (id) {
      case 0:
        text = 'Start typing a word';
        break;
      case 1:
        text = `"${value}" not found`;
        break;
      case 2:
        text = `${value} word${ending(value)} found`;
        break;
      case 4:
        text = 'Searching for words...';
        break;
      case 5:
        text = `You typed: "${value}"`;
    }
    return $status.text(text);
  };

  const drawTable = data => {

    if (data.length) {
      const sorted = _.sortBy(data, 'name');

      setStatus(2, data.length);

      return _.each(sorted, word => $table.append(`<tr><td><div class=\"big\">${word.name}</div></td></tr>`));

    } else {
      return setStatus(1, $search.val().trim());
    }
  };

  const search = val => {
    const matches = _.filter(words, word => word.name.toLowerCase().includes(val));

    return drawTable(matches);
  };

  const getValue = string => {
    const value = string.trim().toLowerCase();

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

  $search.bind('keyup change', e => {
    const $this = $(this);

    $showBtn.show();

    if (e.type === 'keyup') {
      getValue(e.target.value);
      if (e.keyCode === 13) {
        return $this.blur();
      }
    }
  });

  setStatus(0);
  $search.focus();

  $showBtn.click(() => {
    const check = () => setTimeout((() => words.length ? drawTable(words) : check()), 500);

    setStatus(4);
    $showBtn.hide();

    check();

    return false;
  });
});