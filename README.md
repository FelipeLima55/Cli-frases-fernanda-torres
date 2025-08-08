# 🎭 CLI Frases Fernanda Torres

Projeto do Programa Desenvolve, uma ferramenta simples de linha de comando que traz inspiração através das frases icônicas da atriz brasileira Fernanda Torres.

## ✨ Sobre o Projeto

Este CLI conecta-se a uma API dedicada para buscar e exibir frases marcantes de Fernanda Torres.

## 🚀 Funcionalidades

- **Frase inspiradora**: Busca uma frase aleatória da Fernanda Torres via API
- **Interface simples**: Comando único e direto
- **Tratamento de erro**: Mensagem amigável em caso de falha na conexão
- **Visual atraente**: Emoji temático para identificar as frases

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/FelipeLima55/Cli-frases-fernanda-torres.git

# Entre no diretório
cd Cli-frases-fernanda-torres

# Execute o CLI
node index.js
```

## 🎯 Como Usar

### Executar o CLI
```bash
# Executar e receber uma frase
node index.js
```

### Exemplo de Saída
```bash
$ node index.js
🎭 "A vida é uma grande improvisação. O roteiro a gente vai escrevendo no caminho."
```

## 🌐 API Utilizada

O projeto consome uma API hospedada em Cloudflare Workers:
- **URL**: `https://fernanda-torres.isabelleoliveiradesign.workers.dev/`
- **Método**: GET
- **Resposta**: JSON com campo `quote` contendo a frase

### Estrutura da Resposta
```json
{
  "quote": "Frase inspiradora da Fernanda Torres"
}
```

## 🛠️ Estrutura do Projeto

```
cli-frases-fernanda-torres/
├── index.js          # Arquivo principal do CLI
├── package.json      # Dependências e metadados
└── README.md        # Documentação
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

Este projeto foi desenvolvido em **pair programming** por:

### **Felipe da Silva Lima** 👨‍💻
- Desenvolvimento do CLI principal
- Integração com a API

### **Renata Brito** 👩‍💻  
- Colaboração no desenvolvimento
- Testes e validação da funcionalidade

### **Isabelle de Oliveira Moura** 🌐
- Desenvolvimento e hospedagem da API
- Curadoria das frases da Fernanda Torres

**Feito com ❤️ e colaboração** 🇧🇷
