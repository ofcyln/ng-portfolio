/*
	For Edit This File Please Read Documentation
*/

var myPlaylist = [
	
	{
		mp3:'music/01-EasTeaCan-WakeUpSunshine.mp3',
		title:'Wake Up Sunshine',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:29',
		cover:'music/easteacan-squared.jpg'
	},
	{
		mp3:'music/02-EasTeaCan-WorldsGoneMad.mp3',
		title:'World\'s Gone Mad',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:29',
		cover:'music/easteacan-squared.jpg'
	},
	{
		mp3:'music/03-EasTeaCan-Fold.mp3',
		title:'Fold',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:29',
		cover:'music/easteacan-squared.jpg'
	},
	{
		mp3:'music/04-EasTeaCan-WalkAllOverYou.mp3',
		title:'Walk All Over You',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:28',
		cover:'music/easteacan-squared.jpg'
	},
	{
		mp3:'music/05-EasTeaCan-UnderneathTheSurface.mp3',
		title:'Underneath The Surface',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:29',
		cover:'music/easteacan-squared.jpg'
	},
	{
		mp3:'music/06-EasTeaCan-YouGottaChoose.mp3',
		title:'You Gotta Choose',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:27',
		cover:'music/easteacan-squared.jpg'
	},
	{
		mp3:'music/07-EasTeaCan-TheseDays.mp3',
		title:'These Days',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:48',
		cover:'music/easteacan-squared.jpg'
	},
	{
		mp3:'music/08-EasTeaCan-FaceTheSky.mp3',
		title:'Face The Sky',
		artist:'EasTeaCan',
		rating:5,
		buy:'https://itunes.apple.com/us/album/easteacan/id1039882918?app=music&ign-mpt=uo%3D4',
		price:'1.29',
		duration:'0:29',
		cover:'music/easteacan-squared.jpg'
	},
];
jQuery(document).ready(function ($) {
	$('.music-player-list').ttwMusicPlayer(myPlaylist, {
		currencySymbol:'$',
		buyText:'BUY',
		tracksToShow:3,
		autoplay:false,
		ratingCallback:function(index, playlistItem, rating){
			//some logic to process the rating, perhaps through an ajax call
		},
		jPlayer:{
			swfPath: "http://www.jplayer.org/2.7.0/js/",
			supplied: "mp3",
			volume:  0.8,
			wmode:"window",
			solution: "html,flash",
			errorAlerts: true,
			warningAlerts: true
		}
	});
});