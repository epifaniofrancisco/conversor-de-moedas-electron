import os, sys

currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)



def convertAll_USD(valor, USD):
    # USD: valor de conversão de 1 dólar para a moeda desejada
    return round(valor * (1 / USD), 4)


def convertUSD_all(valor, USD):
    return round(valor * USD, 4)

