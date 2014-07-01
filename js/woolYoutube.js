/******************************************************
 * Copyright 2013 by Abaddon <abaddongit@gmail.com>
 * @author Abaddon <abaddongit@gmail.com>
 * @version 0.0.1
 * ***************************************************/

var woolYoutube = (function () {
    var d = document,
        w = window,
        $D = $(d),
        $W = $(w),
        config = {},
        videos = [],
        baseUrl = 'http://gdata.youtube.com/feeds/api/videos?alt=json',//адрес для запроса
        wool = function () {
        },
        proto = wool.prototype,
    //распаршивает ответ и возвращает объект
        parseResult = function (entries) {
            var result = {},
                id = entries.id.$t.split('/'),
                ln = id.length;

            result = {
                'id': id[ln - 1],
                'title': entries.title.$t,
                'thumbs': entries.media$group.media$thumbnail,
                'video': 'http://www.youtube.com/watch?v=' + id[ln - 1],
                'duration': entries.media$group.yt$duration.seconds
            };

            return result;
        };
    /*
     * Ф-я инициализации плагина
     */
    proto.init = function (options) {
        //дефоотовые настройки
        config = {
            'max-results': 5,//кол-во результатов
            'start-index': 0,//Стартовый индекс
            'caption': null,//видео только с сабами
            'category': null,//категория
            'lr': null,//коды языков по стандарту ISO 639-1
            'orderby': null//relevance, published, viewCount и rating
        };

        $.extend(config, options);
    };
    /*
     * делает запрос для получения видео
     * @param {String} строка запроса
     */
    proto.search = function (q, callback) {
        var string = '', url = '';
        videos = [];
        if (!q || q === undefined) {
            throw ('Запрос пуст!');
        } else {
            string = decodeURI(q);
            //строим строку запроса
            url = baseUrl + this._buildingUrl(string);

            //делаем запрос
            this._ajax({'url': url}, function (data) {
                if (data.feed) {
                    var feed = data.feed,
                        entries = feed.entry,
                        ln = entries.length;

                    //разбиваем объект
                    while (ln--) {
                        var loc = entries[ln];
                        videos.push(parseResult(loc));
                    }
                } else {
                    videos.push(parseResult(feed.entry));
                }
                callback(videos);
            });
        }
    };

    /*
     * Строит строку запроса
     */
    proto._buildingUrl = function (string) {
        var str = '&q=' + string;
        for (var i in config) {
            if (config[i]) {
                str += '&' + i + '=' + config[i];
            }
        }
        ;

        //str = str.substr(0, str.length - 1);

        return str;
    };

    /*
     * Конструирует запрос
     * @param {Object} настройки для запроса
     * @param {Function} ф-я после запроса
     */

    proto._ajax = function (options, callback) {
        if (options === undefined) {
            throw ('Не заданны опции для запроса!');
        } else {
            $.ajax({
                type: options.type || 'get',
                dataType: 'json',
                processData: true,
                url: options.url,
                data: options.data,
                cache: false,
                beforeSend: function () {

                },
                success: function (data) {
                    callback(data);
                }
            });
        }
    };

    return new wool();
}(jQuery));