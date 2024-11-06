
# Purpose
- Create a game with depth and 2D graphics where a skier goes down a slope, jumping over and dodging obstacles. This is meant to be a soothing yet exciting experience. The objective is to reach the highest score possible, attained by completing tricks and staying alive for longer. The high score is displayed on the home screen, giving an incentive to succeed. Playing the game earns in-game currency for the player that can be used to purchase cosmetics.  

# Functionality

## Core features
- The user uses the `A` & `D` or left and right arrow keys to move the skier left/right.
- Points continually go up as the skier moves downhill - 1 point per second.
- When in the air after going off a jump, the skier can use the `W` & `S` keys or the up & down arrows to flip.
    - 10 points per flip.
- The game is over when the skier hits an obstacle or does not land on their skis.
- The score of each game equates to the in-game currency received. For each point, the user recieves one piece of in-game currency

- A shop to use currency received in-game to buy new gear - including headwear, jackets, pants, and skis.
    - These are cosmetic only.
    - 3 different colors of all gear.

## User flow/mechanics

### Start screen
- Displays the skier in the background with a central icon directing the user to press space to play.
    - The shop icon is in one corner.
    - A graphic in another corner that displays the local high score.

### Gameplay
- There are occasional rocks and trees on the slope that end the game when hit - use left/right keys to dodge the obstacles.
    - Skier crash animation is shown when obstacles are hit. The skier loses his skies and falls to a seated position.

- There are also occasional jumps – when the skier goes over the jump they can do tricks, giving extra points.
    - When a jump or jumps are landed, there is a popup on the screen that shows how many points are rewarded.

### Progression
- The skier slowly moves faster as the game progresses.
- At a certain speed where the game becomes very difficult, the skier reaches a speed cap.
- There can be a max of three features across the screen- obstacle or jump. The skier uses ad or the left/right keys to change position.
- Obstacles appear at a constant rate throughout the game.
- The air time of a jump increases as the skier reaches higher speeds.

### Game over screen
- Displays game over and a crashed skier animation.
- Then returns to the home screen and shows the most recent score.

## Interactive elements

### Buttons
- Pause and start buttons available throughout the gameplay.
- Shop and start buttons available on the start screen.
- Within the shop, there are buttons to purchase the items.

### Heads up display
- Displays the score in-game.

# Aesthetics

## Model of the skier with different gear on
- ![Skier Gear 1](https://github.com/Cdog135/skiGame/blob/main/images/Image%202.jpg)
- ![Skier Gear 2](![images/Image%20(2).jpg](https://github.com/Cdog135/skiGame/blob/main/images/Image%203.jpg))


## The background
- ![Background](https://github.com/Cdog135/skiGame/blob/main/images/Image%20(1).jpg)

## The jumps and obstacles
- ![Jump 1](https://github.com/Cdog135/skiGame/blob/main/images/Image%20(2).jpg)
- ![Jump 2](https://github.com/Cdog135/skiGame/blob/main/images/Image%202%20(1).jpg)

### Color scheme
- Palette - Mostly blue/greenish-tinted shades of white as shown above, especially in the image of the background.
- The skier can wear gear that is blue, red, or black to pop out against the white background.
- As the skier progresses, weather changes from sunny to cloudy to stormy and repeats.

### Typography
- Soft font to maintain the relaxed nature of the game.
- One such font is the “wintry” font - can be found with a Google search.
- The text should be readable against the white background - probably in a darker shade of blue or green to keep up with the palette.

## Layout

### Start screen
- Shop button in the top left corner.
- The shop contains 4 rows of items, with each row being one type of gear (headwear, jacket, pants, skis).
- The high score in the top right corner.
- This score is preserved whenever the user re-enters the website
- Skier positioned in the middle with the same background as in-game - to seamlessly transition to the game.
- An icon in the center directs users to press space to play.

### Game
- Pause/start button in the top left corner.
- Score in the top right corner.
- When flips are completed - upon landing there is an on-screen pop-up that announces the score received from those flips.