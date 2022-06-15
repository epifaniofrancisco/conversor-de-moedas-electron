import os
import socket
import requests
import json


def isConnect():
    try:
        socket.create_connection(("www.google.com", 80))
        return True
    except OSError:
        pass
    return False


def getApi():
    response = requests.get(
        "https://v6.exchangerate-api.com/v6/28197f69941ed36e7787fc47/latest/USD")

    return response.json()


def dataApi():
    if isConnect():
        data = getApi()

        with open('data.json', 'w') as outfile:
            json.dump(data, outfile)

        # TODO Pegar os valores certos
        exchange = data["conversion_rates"]["AOA"] * 2

    elif not isConnect():
        if os.path.exists('data.json'):
            with open('data.json') as jsonFile:
                data = json.load(jsonFile)
                exchange = 0
    else:
        print("\033[31mConecte-se a internet para baixar as taxas de conversão.")


dataApi()
