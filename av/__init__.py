from decman import Module


class AudioServer(Module):
    def __init__(self):
        super().__init__(name="pipewire", enabled=True, version="1")

    def pacman_packages(self) -> list[str]:
        return [
            "libpulse",
            "pipewire",
            "pipewire-alsa",
            "pipewire-jack",
            "pipewire-pulse",
            "wireplumber",
        ]


class AVDrivers(Module):
    def __init__(self):
        super().__init__(name="avdrivers", enabled=True, version="1")

    def pacman_packages(self) -> list[str]:
        return [
            "intel-media-driver",
            "intel-media-sdk",
            "intel-ucode",
            "libva-intel-driver",
            "mesa-utils",
            "v4l2loopback-dkms",
            "v4l2loopback-utils",
            "vpl-gpu-rt",
            "sof-firmware",
            "gst-plugin-pipewire",
        ]
