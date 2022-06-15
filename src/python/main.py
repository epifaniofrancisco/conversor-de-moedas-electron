while True:
    opcao = str(input("Deseja converter? [S/N]: ")).lower()

    if opcao in "s":
        break
    else:
        print("\033[31mDigite apenas S ou N\033[m")
