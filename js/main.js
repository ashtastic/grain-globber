var $ul = $('ul');

$ul.addClass('grains');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $h2.html(grain.name);
  $img.attr('src', 'images/' + grain.img);

  $li.append($img, $h2);
  $h2.append($p);
  $ul.append($li);

});
