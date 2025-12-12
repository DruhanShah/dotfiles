from decman import Module


class LaTeX(Module):
    def __init__(self):
        super().__init__(name="latex", enabled=True, version="1")

    def aur_packages(self) -> list[str]:
        return [
            "zotero-bin"
        ]

    def pacman_packages(self) -> list[str]:
        return [
            "biber",
            "texlive-basic",
            "texlive-bibtexextra",
            "texlive-binextra",
            "texlive-context",
            "texlive-fontsextra",
            "texlive-fontsrecommended",
            "texlive-fontutils",
            "texlive-formatsextra",
            "texlive-games",
            "texlive-humanities",
            "texlive-latex",
            "texlive-latexextra",
            "texlive-latexrecommended",
            "texlive-luatex",
            "texlive-mathscience",
            "texlive-metapost",
            "texlive-music",
            "texlive-pictures",
            "texlive-plaingeneric",
            "texlive-pstricks",
            "texlive-publishers",
            "texlive-xetex",
        ]
