class Game {
    constructor(canvasID) {
        const canvas = document.getElementById(canvasID)
        this.square = canvas.getContext('2d')
        this.size = { x: canvas.width, y: canvas.height }

        this.keyboarder = new Keyboarder()

        // this.fillBackground()

        this.player_position = { x: 225, y: 225 }



        this.player_size = {
            width: 50,
            height: 50
        }

        this.goldenSnitch_position = {
            x: 160,
            y: 160
        }

        this.goldenSnitch_size = {
            width: 30,
            height: 30
        }

        this.player = new Player(this.player_position, this.player_size)

        this.goldenSnitch = new GoldenSnitch(this.goldenSnitch_position, this.goldenSnitch_size)

        // this.player.draw(this.square)

    }

    update() {
        this.fillBackground()
        this.player.draw(this.square)
        this.goldenSnitch.draw(this.square)
    }

    fillBackground() {
        this.square.fillStyle = 'purple';
        this.square.fillRect(150, 150, 200, 200)
    }

    move_player(new_position) {
        this.player.position = new_position
        this.player.draw(this.square)
    }

    move_snitch(new_position) {
        this.goldenSnitch.position = new_position
        this.goldenSnitch.draw(this.square)
    }


    run() {
        const tick = () => {
            console.log('hi')
            this.update()
            this.player.update(this)


            requestAnimationFrame(tick)

        }
        tick()
    }



}


class Player {
    constructor(position, size) {
        this.position = position
        this.size = size


    }

    update(game) {
        if (game.keyboarder.isDown(Keyboarder.KEYS.LEFT)) {
            if (this.position.x === Player.LOCATIONS.MIDDLE_RIGHT.x) {
                this.position.x = Player.LOCATIONS.TOP_MIDDLE.x
            } else {
                this.position.x = Player.LOCATIONS.MIDDLE_LEFT.x
            }


        }
        if (game.keyboarder.isDown(Keyboarder.KEYS.RIGHT)) {
            if (this.position.x === Player.LOCATIONS.MIDDLE_LEFT.x) {
                this.position.x = Player.LOCATIONS.TOP_MIDDLE.x
            } else {
                this.position.x = Player.LOCATIONS.MIDDLE_RIGHT.x

            }

        }
        if (game.keyboarder.isDown(Keyboarder.KEYS.UP)) {
            if (this.position.y === Player.LOCATIONS.BOTTOM_MIDDLE.y) {
                this.position.y = Player.LOCATIONS.MIDDLE_LEFT.y
            } else {
                this.position.y = Player.LOCATIONS.TOP_MIDDLE.y
            }


        }
        if (game.keyboarder.isDown(Keyboarder.KEYS.DOWN)) {
            if (this.position.y === Player.LOCATIONS.TOP_MIDDLE.y) {
                this.position.y = Player.LOCATIONS.MIDDLE_LEFT.y
            } else {
                this.position.y = Player.LOCATIONS.BOTTOM_MIDDLE.y
            }
        }

        if (game.keyboarder.isDown(Keyboarder.KEYS.S)) {
            console.log(Player.LOCATIONS.MIDDLE_MIDDLE.x)
            this.position = Player.LOCATIONS.MIDDLE_MIDDLE
        }


        this.draw(game.square)
    }

    draw(screen) {
        // screen.clearRect(0, 0, this.size.width, this.size.height)
        screen.fillStyle = "white";
        screen.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        )
    }

    move(new_position, screen) {
        this.position.x = new_position.x
        this.position.y = new_position.y
        this.draw(screen)

    }

    // if (game.keyboarder.isDown(Keyboarder.KEYS.LEFT))

}

Player.LOCATIONS = {
    MIDDLE_MIDDLE: { x: 225, y: 225 },
    TOP_MIDDLE: { x: 225, y: 160 },
    BOTTOM_MIDDLE: { x: 225, y: 285 },
    MIDDLE_LEFT: { x: 160, y: 225 },
    MIDDLE_RIGHT: { x: 285, y: 225 }



}

class GoldenSnitch {
    constructor(position, size) {
        this.position = position
        this.size = size
    }
    draw(screen) {
        // screen.clearRect(0, 0, this.size.width, this.size.height)
        screen.fillStyle = "gold";
        screen.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        )
    }

    //     move(new_snicthPosition, screen) {
    //         this.position.x = new_snitchPosition.x
    //         this.position.y = new_snitchPosition.y
    //         this.draw(screen)

    // }
}




function colliding(b1, b2) {
    return !(
        b1 === b2 ||
        b1.center.x + b1.size.x / 2 < b2.center.x - b2.size.x / 2 ||
        b1.center.y + b1.size.y / 2 < b2.center.y - b2.size.y / 2 ||
        b1.center.x + b1.size.x / 2 > b2.center.x + b2.size.x / 2 ||
        b1.center.y - b1.size.y / 2 > b2.center.y + b2.size.y / 2
    )
}





// box.draw(square)

// new_position = {
//     x: 180,
//     y: 180
// }

// square.fillStyle = 'purple';
// square.fillRect(150, 150, 200, 200)
// box.move(new_position, square)


let game = new Game('canvas')

game.run()