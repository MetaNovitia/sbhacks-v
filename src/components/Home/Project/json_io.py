from flask import Flask, render_template, request, redirect, Response
import random, json
app = Flask(__name__)

@app.route("/output")
def output():
	return "Hello World!"

if __name__ == "__main__":
	app.run()


@app.route('/receiver', methods = ['POST'])
def worker():
	# read json + reply
	data = request.get_json()
	result = ''

	for item in data:
		# loop over every row
		result += str(item['make']) + '\n'

	return result