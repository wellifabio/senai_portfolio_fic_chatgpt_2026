# senai_portfolio_fic_chatgpt_2026
Portfolio criado no curso Inteligências Artificiais Generativas aplicadas a Programação - ChatGPT contendo os linkis da produção e contato dos alunos desta turma



## Tecnologias
- VsCode
- Copilot
- HTML, CSS, JavaScript, JSON

## Passos para a criação com auxilio da IA Copilot dentro do VsCode
Criada uma pasta com os arquivos index.html, style.css e script.js vazios e um arquivo base `projetos.json` contendo o seguinte:
```json
{
    "projetos": [
        {
            "id": 1,
            "projeto": "Fake Chatbot com JavaScript, HTML e CSS",
            "link": "https://wellifabio.github.io/senai_fake_chatgpt_2026/"
        },
        {
            "id": 2,
            "projeto": "Conjectura de collatz, desafio resolvido com IA chatGPT",
            "link": "https://github.com/wellifabio/senai_collatz_chatgpt_2026"
        },
        {
            "id": 3,
            "projeto": "Carrinho de compras com Copilot",
            "link": "https://wellifabio.github.io/senai_chatgpt_carrinho_copilot_2026/"
        },
        {
            "id": 4,
            "projeto": "Jogo Pac-Man com auxilio do ChatGPT",
            "link": "https://wellifabio.github.io/senai_pacman_chatgpt_2026/"
        },
        {
            "id": 5,
            "projeto": "Agenda de pesquisa de enderecos com ViaCEP",
            "link": "https://wellifabio.github.io/senai_chatgpt_agenda_viacep_2026/"
        }
    ],
    "desafios": [
        {
            "aluno": "Carlos Eduardo",
            "link": "https://carloseduardobraz90-ship-it.github.io/Simulador-Financiamento/"
        },
        {
            "aluno": "Rafael",
            "link": "https://github.com/Finnteiro/finnai.git"
        },
        {
            "aluno": "Renan",
            "link": "https://rjyun10.github.io/DarkInvest-2026/"
        },
        {
            "aluno": "Janaina",
            "link": "https://janainawolf.github.io/calculadora-financiamento-sac-price/"
        },
        {
            "aluno": "Pedro",
            "link": "https://pedropontesmartins.github.io/FinanSIM_simulador/"
        },
        {
            "aluno": "Caio",
            "link": "https://caioluis998-coder.github.io/simulacao_financiamento/"
        },
        {
            "aluno": "Pietra",
            "link": "https://pietramarques-cmd.github.io/financiamento-Senai2026/"
        }
    ],
    "githubs": [
        {
            "aluno": "Carlos Eduardo",
            "github": "https://github.com/carloseduardobraz90-ship-it",
            "portfolio": "https://carloseduardobraz90-ship-it.github.io"
        },
        {
            "aluno": "Rafael",
            "github": "https://github.com/Finnteiro",
            "portfolio": "https://Finnteiro.github.io"
        },
        {
            "aluno": "Renan",
            "github": "https://github.com/rjyun10",
            "portfolio": "https://rjyun10.github.io"
        },
        {
            "aluno": "Janaina",
            "github": "https://github.com/janainawolf",
            "portfolio": "https://janainawolf.github.io"
        },
        {
            "aluno": "Pedro",
            "github": "https://github.com/pedropontesmartins",
            "portfolio": "https://pedropontesmartins.github.io/Portfolio/"
        },
        {
            "aluno": "Caio",
            "github": "https://github.com/caioluis998-coder",
            "portfolio": "https://caioluis998-coder.github.io/caioluis998.github.io/"
        },
        {
            "aluno": "Pietra",
            "github": "https://github.com/pietramarques-cmd",
            "portfolio": "https://pietramarques-cmd.github.io"
        },
        {
            "aluno": "Enzo",
            "github": "https://github.com/Dev-Enzo-Arruda",
            "portfolio": "https://Dev-Enzo-Arruda.github.io"
        },
        {
            "aluno": "Marina",
            "github": "https://github.com/marynaclemente-ai",
            "portfolio": "https://marynaclemente-ai.github.io/Portif-lio-da-Mari"
        }
    ]
}
```
### Prompt inicial
```
Desenvolva na estrutura index.html, style.css e script.js um portfolio do curso de "Inteligências Artificiais Generativas aplicadas a Programação - ChatGPT"

Deixe o Portfolio moderno, utilize como base de dados o arquivo "projetos.json" deste repositórios e monte sessões como projetos, desafios e githubs dos alunos
```
### Resposta inicial do Copilot

```
Vou localizar a estrutura atual e entender o formato de projetos.json antes de montar a experiência. A hipótese inicial é que o JSON já contém os dados necessários e que o trabalho principal será criar uma camada visual responsiva em torno dele; vou confirmar isso no HTML, CSS, JS e nos dados.
```
```
Os arquivos estão praticamente vazios, e o JSON traz três coleções bem definidas: projetos, desafios e githubs. Vou implementar uma página única em português com navegação por âncoras, métricas derivadas dos dados, busca/filtro de cards e estados de carregamento/erro para o JSON, mantendo tudo editável sem duplicar os dados no HTML.
```
Generating patch (221 lines) in index.html, style.css

A estrutura está praticamente vazia, e o JSON confirma três coleções claras: 5 projetos, 7 desafios e 9 perfis. Vou transformar isso em uma página única editorial e funcional, com navegação por âncoras, filtros de busca, contadores derivados dos dados e cartões gerados dinamicamente, mantendo o JSON como fonte de verdade.
```
Após correções no ambiente e testes realizados
```
Portfolio desenvolvido em:

index.html
style.css
script.js
Inclui:

Layout moderno e responsivo
Seções de projetos, desafios e comunidade
Dados carregados dinamicamente de projetos.json
Contadores automáticos
Busca por aluno
Links para projetos, GitHub e portfólios
Identidade visual com animações e tipografia personalizada
Validações realizadas:

HTML, CSS e JavaScript sem erros detectados
JSON validado com 5 projetos, 7 desafios e 9 alunos
Node e Python não estão instalados no ambiente, então não foi possível iniciar um servidor local.
```