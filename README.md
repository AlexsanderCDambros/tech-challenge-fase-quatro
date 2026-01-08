# Tech Challenge - Fase 4

Repositório da **Fase 4** do **Tech Challenge** da **Pós tech em Frontend Engineering** - **FIAP**.

Acesso ao vídeo de demonstração e entrega do tech challenge: [Link para o vídeo no Youtube]()

Desenvolvido por Alexsander Chagas Dambros | [LinkedIn](https://www.linkedin.com/in/alexsandercdambros/)

---

## Padrões de Projeto Utilizados

### Paradigmas

1. **Dependency Injection (DI)**
   - Utilizei o sistema robusto de injeção de dependências do Angular através do decorator `@Injectable` e da função `inject()`.
   - Implementei em todos os serviços (`UsuariosService`, `TransacoesService`, `ContextoStore`) com `providedIn: 'root'` para garantir instância única.
   - Isso reduz acoplamento entre classes e facilita testes unitários ao permitir mock de dependências.

2. **Programação Reativa**
   - Utilizei RxJS extensivamente com `Observable`, `BehaviorSubject` e operadores como `map()` e `pipe()`.
   - Implementei métodos como `getUsuario$()` no `ContextoStore` e `buscarTransacoesPorUsuario()` no `TransacoesService` que retornam observáveis.
   - Componentes como `SaldoTotalComponent` se inscrevem em observáveis usando `AsyncPipe` e `subscribe()`, criando fluxos de dados contínuos e auto-atualizáveis.

### Padrões de Projeto

3. **Singleton**
   - Forneci serviços e stores com `providedIn: 'root'`, garantindo uma única instância durante toda a aplicação.
   - Exemplo: `ContextoStore` gerencia o estado global do usuário de forma centralizada e única.
   - Economiza memória e garante consistência de dados em toda a aplicação.

4. **Facade**
   - Criei `ContextoStore` encapsulando a complexidade do `BehaviorSubject` interno, expondo apenas métodos simples: `efetuarLogin()`, `efetuarLogout()`, `getUsuario()` e `getUsuario$()`.
   - Forneci uma interface unificada para gerenciamento de autenticação e estado do usuário, abstraindo a complexidade da implementação interna.

5. **Factory**
   - Utilizei lazy loading no `app.routes.ts` com `loadChildren` e dynamic imports: `import('./inicioModule').then(m => m.InicioModule)`.
   - Carrego módulos de features sob demanda, reduzindo o tamanho do bundle inicial e melhorando performance de carregamento.
   - Exemplo: `InicioModule`, `LoginModule` e `TransacoesModule` são carregados apenas quando suas rotas são acessadas.

6. **Observer**
   - Implementei através do `BehaviorSubject` no `ContextoStore` e nos métodos dos serviços que retornam `Observable`.
   - Múltiplos componentes (`HeaderComponent`, `SaldoTotalComponent`, etc.) se inscrevem em observáveis para se manter sincronizados com mudanças de estado.
   - Isso permite que a aplicação reaja automaticamente a mudanças de dados sem acoplamento direto entre componentes.

7. **Template Method**
   - Padronizei a estrutura de componentes com decorator `@Component`, `imports`, `templateUrl`, `styleUrl`, etc.
   - Tanto componentes standalone quanto baseados em módulos implementam a mesma "receita" de estrutura e ciclo de vida.
   - Isso promove consistência, facilita manutenção e permite que novos desenvolvedores entendam a estrutura rapidamente.

8. **Adapter**
   - Integrei `Angular Material` como adaptador de componentes UI (MatCardModule, MatButtonModule, MatFormFieldModule, etc.).
   - Forneci uma interface uniforme para componentes visuais com comportamentos e estilos consistentes.
   - Exemplo: `MatButtonModule` padroniza botões em toda a aplicação com funcionalidades avançadas (ripple effects, acessibilidade, etc.).

---

## Instruções para baixar e rodar a aplicação

Para poder rodar a aplicação você precisará ter instalado em sua máquina o node, que pode ser baixado em: [Link para baixar o Node](https://nodejs.org/)

### 1. Clonagem do projeto
    
Para começar faça o download dos arquivos ou clone esse repositório em sua máquina.

Comando para clonar o repositório:
    
`git clone https://github.com/AlexsanderCDambros/tech-challenge-fase-quatro.git`


### 2. Instalação das dependências 

Depois de ter os arquivos em sua máquina, entre na pasta em que você os colocou através de um terminal (cmd, git Bash, etc), e rode o seguinte comando para instalar as dependências do projeto:

`npm install`

Esse processo deve demorar alguns minutos.


### 3. Rodar o projeto em desenvolvimento

Quando o processo de instalação terminar será necessário abrir 2 terminais na raiz do projeto, um para rodar a aplicação que simula um back end para a nossa aplicação (**json-server**) e um para rodar a aplicação.

#### 3.1. Rodar o json-server 

No terminal que você deseja rodar o json-server, digite o seguinte comando:

`npm run json-server`

#### 3.2. Rodar aplicação

No terminal que você deseja rodar a aplicação, digite os seguintes comandos:

`npm start`

### 4. Abrir a aplicação em um navegador

Para abrir a aplicação, basta ir em um navegador e abrir o endereço:

`http://127.0.0.1:4200/` ou `http://localhost:4200/`

E para verificar se o json-server está rodando, você pode acessar o endereço:

`http://127.0.0.1:3000/` ou `http://localhost:3000/`
