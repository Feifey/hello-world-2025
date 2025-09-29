def escape_room():
    hasKey = False
    doorUnlocked = False
    hasFlashlight = False
    escaped = False
    inHallway = False

    print("You wake up in a locked room.")
    print("Find a way to escape!\n")

    while not escaped:
        if not inHallway:
            print("Room choices:")
            print("[1] Try the door")
            print("[2] Look under the rug")
            print("[3] Check the desk")
            choice = input("Choose 1, 2, or 3: ")

            if choice == "1":
                if hasKey:
                    print("You unlock the door and enter the hallway.\n")
                    inHallway = True
                else:
                    print("The door is locked. You need a key.\n")

            elif choice == "2":
                if not hasKey:
                    print("You found a key under the rug!\n")
                    hasKey = True
                else:
                    print("Nothing else under the rug.\n")

            elif choice == "3":
                print("There’s a note: 'The key is under the rug!'\n")

            else:
                print("Invalid choice. Try again.\n")

        else:  # Hallway area
            print("You are in a hallway. What do you do?")
            print("[1] Open the closet")
            print("[2] Look behind the painting")
            print("[3] Try the exit door")
            choice = input("Choose 1, 2, or 3: ")

            if choice == "1":
                if not hasFlashlight:
                    print("You open the closet and find a flashlight!\n")
                    hasFlashlight = True
                else:
                    print("The closet is empty now.\n")

            elif choice == "2":
                print("Behind the painting is a clue: 'Beware of the dark.'\n")

            elif choice == "3":
                if hasFlashlight:
                    print("You use the flashlight to find your way out...")
                    print("🎉 Congratulations, you escaped the building!\n")
                    escaped = True
                else:
                    print("It’s too dark to go further. Maybe there’s a tool?\n")

            else:
                print("Invalid choice. Try again.\n")

escape_room()
