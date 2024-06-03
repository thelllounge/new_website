from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


# Writing Stuff
@app.route("/prompt_generator")
def prompt_generator():
    return render_template('prompt_generator.html')


@app.route("/sprint_timer")
def sprint_timer():
    return render_template('sprint_timer.html')


@app.route("/title_generator")
def title_generator():
    return render_template('title_generator.html')


@app.route("/wb_breaker")
def wb_breaker():
    return render_template('wb_breaker.html')


# Random Coding Stuff
@app.route("/snake_game")
def snake_game():
    return render_template('snake_game.html')


@app.route("/language_typing")
def language_typing():
    return render_template('language_typing.html')


@app.route("/language_mtg")
def language_mtg():
    return render_template('language_mtg.html')


if __name__ == "__main__":
    app.run(debug=True)
