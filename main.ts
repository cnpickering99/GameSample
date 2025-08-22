namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}

const barOpeners = [
    // General conversation starters
    "Hey, what are you drinking?",
    "This place has a good vibe, right?",
    "Have you been here before?",
    "What's your go-to drink?",
    "Did you try the food here yet?",
    "Looks like it's pretty packed tonight.",
    "Are you from around here?",
    "Do you come out here often?",
    "What kind of music do you usually vibe with?",
    "Did you catch the game earlier?",

    // Light/flirty pick-up lines
    "Mind if I join you for a drink?",
    "I couldn't help but notice your smile from across the room.",
    "You look like you'd know the best drink on the menu — what should I order?",
    "Are you a whiskey or tequila person?",
    "I feel like I should introduce myself before I buy you a drink.",
    "This might sound bold, but I had to come say hi.",
    "I was hoping you'd be here to make my night more interesting.",
    "So, are you here celebrating something or just unwinding?",
    "You seem like you'd have some good bar stories — got one?",
    "I promise I'm more fun after one drink, want to test it?"
];

// Coffee shop tilemap
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101020404040404040404040404040404050102040405050505040505050505050501020404050404050405040505040505010204040505050504050505050505050102040404040404040404040404040504010204040505050404040505050505040102040405040504040404040505050401020404050505050404040404050503040102040404040404040404040404040404010101010101010101010101010101010104000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 1 5 5 5 5 1 1 1 5 5 5 5 1 1 2
    2 1 5 1 5 1 1 1 1 5 1 5 1 1 1 2
    2 1 5 5 5 5 1 1 1 5 5 5 5 1 1 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 1 5 5 5 5 1 1 1 5 5 5 5 1 1 2
    2 1 5 1 5 1 1 1 1 5 1 5 1 1 1 2
    2 1 5 5 5 5 1 1 1 5 5 5 5 1 1 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.dungeon.greenOuterNorth2,sprites.builtin.brick,myTiles.tile1], TileScale.Sixteen))
let player = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f f 2 2 f f f . . . 
    . . f f f 2 2 2 2 f f f . . 
    . f f f 2 2 2 2 2 2 f f f . 
    . f f 2 2 2 f f 2 2 2 f f . 
    f f 2 2 f f f f f f 2 2 f f 
    f f 2 f f f f f f f f 2 f f 
    f f 2 f f f f f f f f 2 f f 
    . f f 2 f f f f f f 2 f f . 
    . f f f 2 2 f f 2 2 f f f . 
    . . f f f 2 2 2 2 f f f . . 
    . . . f f f 2 2 f f f . . . 
    . . . . . f f f f . . . . . 
`, SpriteKind.Player)

controller.moveSprite(player, 33, 33)
scene.cameraFollowSprite(player)

function createBrunetteGirl(x: number, y: number) {
    let girl = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f f 8 8 f f f . . . 
        . . f f f 8 8 8 8 f f f . . 
        . f f f 8 8 8 8 8 8 f f f . 
        . f f 8 8 8 f f 8 8 8 f f . 
        f f 8 8 f f f f f f 8 8 f f 
        f f 8 f f f f f f f f 8 f f 
        f f 8 f f f f f f f f 8 f f 
        . f f 8 f f f f f f 8 f f . 
        . f f f 8 8 f f 8 8 f f f . 
        . . f f f 8 8 8 8 f f f . . 
        . . . f f f 8 8 f f f . . . 
        . . . . . f f f f . . . . . 
    `, SpriteKind.Enemy)
    girl.setPosition(x, y)
    girl.setVelocity(randint(-30, 30), randint(-30, 30))
    girl.setBounceOnWall(true)

    
    return girl
}
let girls: Sprite[] = []
for (let i = 0; i < 33; i++) {
    girls.push(createBrunetteGirl(randint(40, 200), randint(40, 200)))
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    const randomOpener = barOpeners[Math.floor(Math.random() * barOpeners.length)];
    otherSprite.sayText(randomOpener, 3500, true, 1, 3)
    pause(3500)
})