$(document).ready(function() {
    var plinks = [
       	{
            name: 'COW',
            plink: 'http://steamcommunity.com/profiles/76561197974688386'
        },
{
            name: 'VAYNE',
            plink: 'http://steamcommunity.com/id/emails'
        },
		{
            name: 'SEEK',
            plink: 'http://steamcommunity.com/id/trafficker'
       },       
	   {
            name: 'COLTON',
            plink: 'http://steamcommunity.com/id/autostrafer'
        },
		{
            name: 'OAK',
            plink: 'http://vww.tumblr.com'
        },
        {
            name: 'DENNIS',
            plink: 'http://steamcommunity.com/profiles/76561198135473168'
        },
        {
            name: 'N0ZZ',
            plink: 'http://steamcommunity.com/id/N0ZZ'
        },
		
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' // ')
        }
    }
    $('#marquee').marquee({
        duration: 11000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 1
    console.log('After: ' + player.volume);
	}
	
	});