from mps_youtube.commands import play
from mps_youtube import g, screen, c, streams, history, content, paths, config, util

class Play:

    def __init__(self, number = None):
        self.number = number

    def play(self):
        play.play("", self.number, "")




