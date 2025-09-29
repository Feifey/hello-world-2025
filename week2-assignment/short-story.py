# Ask for user input
name = input("What is your name? ")

# Boolean (string comparison to simulate confirm)
on_time_input = input("Did you wake up on time? (yes/no): ")
on_time = on_time_input.lower() == "yes"   # True if 'yes', False if 'no'

# Other variables
breakfast = input("What do you eat for breakfast? ")
activity = input("What do you want to do after class? (game, nap, study) ")

# Start story
story = "Good morning " + name + "! "

# Use boolean to change the day
if on_time:
    story += "You woke up early and had plenty of time to get ready. "
else:
    story += "Oh no! You overslept and had to run to class without getting ready. "

# Continue story
story += "For breakfast, you had " + breakfast + ". "
story += "After class, you decided to " + activity + ". "

# End of day
story += "It was an interesting day for you, " + name + "!"

print(story)
