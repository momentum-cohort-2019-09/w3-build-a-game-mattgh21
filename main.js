//square.clearRect(160, 160, 60, 60)

class Game {
    constructor(canvasID) {
        const canvas = document.getElementById(canvasID)
        this.square = canvas.getContext('2d')
        this.size = { x: canvas.width, y: canvas.height }

        // this.fillBackground()

        this.player_position = {
            x: 160,
            y: 160
        }

        this.player_size = {
            width: 60,
            height: 60
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


}


class Player {
    constructor(position, size) {
        this.position = position
        this.size = size
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

new_position = {
    x: 250,
    y: 250
}

game.move_player(new_position)

game.update()