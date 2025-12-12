from decman import File, Directory

USER = "druhan"
CFG = f"/home/{USER}/.config"
LCL = f"/home/{USER}/.local"

def file(filename: str, perms: int = 0o666) -> File:
    return File(
        source_file=filename,
        permissions=perms,
    )

def directory(dirname: str, perms: int = 0o777) -> Directory:
    return Directory(
        source_directory=dirname,
        permissions=perms,
    )
