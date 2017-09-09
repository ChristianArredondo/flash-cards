This flash card application, built with node.js and the packages request, inquirer and chalk, allow users to create multiple flash cards with ease. The flashcards come in two varieties: "Basic" and "Cloze".
A screenshot of the starting menu is shown below:

![Starting Menu](https://github.com/grantrzchan/flash-cards/blob/master/.gitignore/readme_screenshots/img1.png "Starting menu")

An example of the "Basic" option is demonstrated below. The subsequent prompts allow multiple flashcards to be added in succession:

![Add Card](https://github.com/grantrzchan/flash-cards/blob/master/.gitignore/readme_screenshots/img2.png "Add another card")

When no new cards are added, all previously made flash cards are reviewed in sequence. At the end of the review sequence, a prompt appears that allow users to add more flashcards:

![Try Again](https://github.com/grantrzchan/flash-cards/blob/master/.gitignore/readme_screenshots/img3.png "Restart and add more cards")


The "Cloze" flashcard option has a functionality that is similar to the "Basic" option, except that the full text must be written in the front prompt, and the answer at the back must exists in the front prompt text.
When the prompt conditions are satisfied, the full text is displayed during review, with the answer replaced by a blank. Flipping the card reviews the answer:

![Cloze Card Demo](https://github.com/grantrzchan/flash-cards/blob/master/.gitignore/readme_screenshots/img4.png "Cloze Example")

However, if the cloze does not exist in the front prompt, an error message will be returned and the program terminates:

![Cloze Card Error](https://github.com/grantrzchan/flash-cards/blob/master/.gitignore/readme_screenshots/img4.png "Cloze Error")



