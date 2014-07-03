woolYoutube
===========

jQuery плагин для поиска и вывода видео на youtube. (<a href="http://angular.demosite.pro/youtube/">Демо</a>)

<h3>Параметры плагина:</h3>
<ul>
    <li><b>max-results</b> - сколько выводить</li>
    <li><b>start-index</b> - номер стартовой позиции</li>
    <li><b>caption</b> - искать видео, только с субтитрами</li>
    <li><b>category</b> - категория</li>
    <li><b>lr</b> - язык видео по стандарту ISO 639-1</li>
    <li><b>orderby</b> - сортировка по полям relevance, published, viewCount и rating</li>
</ul>
<h3>Как использовать?</h3>
<pre>
woolYoutube.search(string, function (videos) {
    if (videos.length) {
        console.log(videos);
    } else {
        alert("По вашему запросу не чего не было найдено!");
    }
});
</pre>
<hr />
woolYoutube
===========

jQuery plugin for search and display video from youtube.

<h3>Plugin settings:</h3>
<ul>
    <li><b>max-results</b> - how many to show</li>
    <li><b>start-index</b> - number of a launching position</li>
    <li><b>caption</b> - to look for video, only with subtitlings</li>
    <li><b>category</b> - category</li>
    <li><b>lr</b> - video language according to the standard ISO 639-1</li>
    <li><b>orderby</b> - sorting according to fields relevance, published, viewCount и rating</li>
</ul>
<h3>How to use it?</h3>
<pre>
woolYoutube.search(string, function (videos) {
    if (videos.length) {
        console.log(videos);
    }  else {
        alert("No results!");
    }
});
</pre>
