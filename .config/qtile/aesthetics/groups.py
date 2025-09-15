class GroupAesthetics:

    def __init__(self):
        self.defaults = {
            "x": 0.2,
            "y": 0.1,
            "width": 0.6,
            "height": 0.8,
            "opacity": 1,
        }
        self.specials = {
            "Browser": {
                "x": 0.00,
                "y": 0.0341,
                "width": 0.98,
                "height": 0.934,
            },
        }


    def layout(self, name):
        if name in self.specials:
            return {**self.defaults, **self.specials[name]}
        return self.defaults
