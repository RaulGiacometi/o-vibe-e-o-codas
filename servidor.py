import http.server
import socketserver
import json
import urllib.parse
import os

PORT = 5500

# Carrega o arquivo usuarios.json
def carregar_usuarios():
    caminho_json = os.path.join(os.path.dirname(__file__), 'usuarios.json')
    if os.path.exists(caminho_json):
        with open(caminho_json, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"alunos": [], "professores": [], "coordenadores": []}

class ManipuladorRequisicoes(http.server.SimpleHTTPRequestHandler):

    # Processa os envios de formulários (método POST)
    def do_POST(self):
        if self.path == '/login':
            # Lê o tamanho dos dados enviados no formulário
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            dados_form = urllib.parse.parse_qs(post_data)

            # Extrai os campos do formulário
            perfil = dados_form.get('perfil', ['aluno'])[0]
            identificador = dados_form.get('identifier', [''])[0]
            senha = dados_form.get('password', [''])[0]

            base_dados = carregar_usuarios()
            autenticado = False

            # Validação no JSON
            if perfil == 'aluno':
                for a in base_dados.get('alunos', []):
                    if a['ra'] == identificador and a['senha'] == senha:
                        autenticado = True
                        break
            elif perfil == 'professor':
                for p in base_dados.get('professores', []):
                    if p['matricula'] == identificador and p['senha'] == senha:
                        autenticado = True
                        break
            elif perfil == 'coordenador':
                for c in base_dados.get('coordenadores', []):
                    if c['identificador'] == identificador and c['senha'] == senha:
                        autenticado = True
                        break

            # Define o redirecionamento com base na resposta
            self.send_response(303)
            if autenticado:
                self.send_header('Location', f'/{perfil}.html')
            else:
                self.send_header('Location', '/index.html?erro=1')
            self.end_headers()

# Inicia o servidor Python sem dependências externas
with socketserver.TCPServer(("", PORT), ManipuladorRequisicoes) as httpd:
    print(f"Servidor rodando em: http://localhost:{PORT}")
    print("Pressione Ctrl+C para encerrar o servidor.")
    httpd.serve_forever()