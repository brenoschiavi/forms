from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/processar_teste', methods=['POST'])
def processar_teste():
    nome = request.form['nome']
    email = request.form['email']
    telefone = request.form['telefone']
    return render_template('quiz.html', nome=nome, email=email, telefone=telefone)

if __name__ == '__main__':
    app.run(debug=True)
