# Palavras Cruzadas

## Descrição
A aplicação **Palavras Cruzadas** é um jogo interativo desenvolvido com HTML, CSS e JavaScript. O objetivo é preencher as lacunas de uma grade de palavras cruzadas com as letras corretas, de acordo com as definições fornecidas. Cada letra deve ser digitada em um campo específico da grade, e a navegação entre os campos é feita de maneira intuitiva com o teclado.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da grade do jogo e definições das palavras.
- **CSS3**: Estilo da página, incluindo layout responsivo e aparência dos campos de entrada.
- **JavaScript**: Lógica do jogo, incluindo validação de entradas, movimentação entre campos, e funcionalidades interativas.

## Como Funciona
### Estrutura da Aplicação
- A aplicação possui duas seções principais:
  - **Grade do Jogo**: Uma tabela contendo os campos de entrada onde o jogador deve inserir as letras das palavras.
  - **Definições**: Uma lista de dicas que correspondem às palavras que precisam ser preenchidas na grade.

### Interação do Usuário
1. **Entrada de Letras**: Cada campo da grade aceita apenas uma letra, que deve ser digitada em maiúsculas. Ao digitar uma letra válida, o cursor automaticamente se move para o próximo campo da palavra.
2. **Teclas de Navegação**:
   - **Letras**: Apenas letras são aceitas como entradas.
   - **Backspace**: Remove a letra atual e, se o campo estiver vazio, move o foco para o campo anterior.
   - **Tab**: Move para o próximo campo na palavra, substituindo o comportamento padrão do 'Tab'.
3. **Validação**: O JavaScript valida as entradas em tempo real, permitindo apenas caracteres alfabéticos e forçando letras maiúsculas para consistência.

## Arquivos do Projeto
- **index.html**: Estrutura da aplicação, incluindo a grade de palavras cruzadas e as definições.
- **css/style.css**: Estilização da página, garantindo uma aparência agradável e responsiva.
- **js/script.js**: Lógica da aplicação, como movimentação automática entre campos e validação das entradas dos usuários.

## Como Executar
1. **Clone o Repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. **Abra o Arquivo HTML**:
   Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador preferido.

## Funcionalidades Futuras
- **Verificação Automática**: Adicionar uma funcionalidade que verifica automaticamente se as palavras inseridas estão corretas.
- **Pontuação**: Implementar um sistema de pontuação para tornar o jogo mais competitivo.
- **Níveis de Dificuldade**: Criar diferentes níveis de dificuldade com palavras mais complexas.

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request** com melhorias.

## Licença
Este projeto está licenciado sob a **MIT License**. Para mais detalhes, veja o arquivo `LICENSE`.