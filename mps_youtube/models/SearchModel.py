from ..commands import search


class Search:

    def __init__(self, term = None, result = None):
        self.term = term
        self.result = result

    def get_result(self):

        self.result = search.search(self.term)