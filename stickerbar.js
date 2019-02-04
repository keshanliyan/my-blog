<script type='text/javascript'>
//<![CDATA[
$(document).ready(function () {
var url_blog = 'https://www.thewonderspot.com',
    numpostx  = 20; 
$.ajax({
    url: '' + url_blog + '/feeds/posts/default?alt=json-in-script&max-results=' + numpostx + '',
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
        var posturl, posttitle, skeleton = '',
            entry = data.feed.entry;
        if (entry !== undefined) {
            skeleton = "<ul>";
        for (var i = 0; i < entry.length; i++) {
                for (var j=0; j < entry[i].link.length; j++)
                {
                     if (entry[i].link[j].rel == "alternate")
                        {
                            posturl = entry[i].link[j].href;
                            break;
                         }
                }                posttitle = entry[i].title.$t;
            skeleton += '<li><a href="' + posturl + '" target="_blank">' + posttitle + '</a></li>';
        }
            skeleton += '</ul>';
            $('#recentpostbreaking').html(skeleton);
            // kode untuk efek pada breaking news
            function tick(){
            $('#recentpostbreaking li:first').slideUp( function () { $(this).appendTo($('#recentpostbreaking ul')).slideDown(); });
            }
        setInterval(function(){ tick () }, 3000);
        } else {
            $('#recentpostbreaking').html('<span>No result!</span>');
        }
    },
    error: function() {
            $('#recentpostbreaking').html('<strong>Error Loading Feed!</strong>');
       }
});
});
//]]>
</script>
