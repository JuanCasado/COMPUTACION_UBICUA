
from enum import Enum
from pydub import AudioSegment
from pydub.playback import play

class Songs(Enum):
	ALARM = 'alarm.mp3'
	EXPLOSION = 'explosion.mp3'

def playSong (song):
	play(AudioSegment.from_file('./sounds'+song, format='mp3'))
	
