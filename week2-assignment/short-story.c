#include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    char breakfast[50];
    char activity[50];
    char answer[10];
    int on_time = 0;  // boolean (0 = false, 1 = true)

    char story[500] = ""; // buffer for the story

    // Input
    printf("What is your name? ");
    scanf("%s", name);

    printf("Did you wake up on time? (yes/no): ");
    scanf("%s", answer);
    if (strcmp(answer, "yes") == 0) {
        on_time = 1;
    }

    printf("What do you eat for breakfast? ");
    scanf("%s", breakfast);

    printf("What do you want to do after class? (game, nap, study): ");
    scanf("%s", activity);

    // Build story
    strcat(story, "Good morning ");
    strcat(story, name);
    strcat(story, "! ");

    if (on_time) {
        strcat(story, "You woke up early and had plenty of time to get ready. ");
    } else {
        strcat(story, "Oh no! You overslept and had to run to class without getting ready. ");
    }

    strcat(story, "For breakfast, you had ");
    strcat(story, breakfast);
    strcat(story, ". After class, you decided to ");
    strcat(story, activity);
    strcat(story, ". ");

    strcat(story, "It was an interesting day for you, ");
    strcat(story, name);
    strcat(story, "!");

    // Print story
    printf("%s\n", story);

    return 0;
}
