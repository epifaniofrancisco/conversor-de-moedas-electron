import socket


def isConnect():
    try:
        socket.create_connection(("www.google.com", 80))
        return True
    except OSError:
        pass
    return False
