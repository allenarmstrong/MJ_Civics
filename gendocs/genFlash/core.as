package {
	import flash.display.Loader;
	import flash.display.LoaderInfo;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.text.StyleSheet;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundMixer;
	import flash.external.ExternalInterface;
	public class core extends Sprite {
		var mp3:String = new String();
		private var song:SoundChannel;
		public function core():void {
			/*  this path is for testing purposes only. the path is really going to be called from the html. */
			mp3 = getFlashVars().mp3String || "../genAudio/01.mp3";
			playBtn.addEventListener(MouseEvent.CLICK, playTrack);
			playBtn.buttonMode = true;
		}
		private function getFlashVars():Object {
			return Object(LoaderInfo(this.loaderInfo).parameters);
		}
		public function playTrack(evt:Event) {
			playBtn.removeEventListener(MouseEvent.CLICK, playTrack);
			playBtn.addEventListener(MouseEvent.CLICK, stopTrack);
			playBtn.gotoAndStop(2);
			var mp3URL:URLRequest=new URLRequest(mp3);
			var sound:Sound = new Sound();
			sound.load(mp3URL);
			song = sound.play();
			song.addEventListener(Event.SOUND_COMPLETE, stopTrack);
		}
		public function stopTrack(evt:Event) {
			playBtn.removeEventListener(MouseEvent.CLICK, stopTrack);
			playBtn.addEventListener(MouseEvent.CLICK, playTrack);
			playBtn.gotoAndStop(1);
			SoundMixer.stopAll();
		}
	}
}