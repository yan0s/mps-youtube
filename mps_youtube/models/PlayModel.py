from mps_youtube.commands import play


class Play:

    def __init__(self, number = None):
        self.number = number

    def play(self):
        play.play("", self.number, "")




